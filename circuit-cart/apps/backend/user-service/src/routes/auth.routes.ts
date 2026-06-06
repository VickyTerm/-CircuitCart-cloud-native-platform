import { Router, type Request, type Response } from "express";
import { db } from "../lib/db.js";
import { hashPassword, comparePassword, generateToken } from "../lib/crypto.js";
import { signAccessToken } from "../lib/jwt.js";
import { setRefreshCookie, clearRefreshCookie } from "../lib/cookies.js";
import { authenticate } from "../middleware/authenticate.js";
import {
  registerSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} from "../validators/auth.validators.js";

export const authRouter = Router();

// ─── POST /auth/register ────────────────────────────────────────────────────
authRouter.post("/register", async (req: Request, res: Response): Promise<void> => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Validation failed", details: parsed.error.flatten() });
    return;
  }

  const { email, password, first_name, last_name, phone } = parsed.data;

  const existing = await db.user.findUnique({ where: { email } });
  if (existing) {
    res.status(409).json({ error: "Email already in use" });
    return;
  }

  const password_hash = await hashPassword(password);

  const user = await db.user.create({
    data: { email, password_hash, first_name, last_name, phone },
    select: { id: true, email: true, first_name: true, last_name: true, role: true },
  });

  await db.auditLog.create({
    data: {
      user_id: user.id,
      action: "LOGIN",
      ip: req.ip ?? null,
      user_agent: req.headers["user-agent"] ?? null,
    },
  });

  res.status(201).json({ user });
});

// ─── POST /auth/login ────────────────────────────────────────────────────────
authRouter.post("/login", async (req: Request, res: Response): Promise<void> => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Validation failed", details: parsed.error.flatten() });
    return;
  }

  const { email, password } = parsed.data;

  const user = await db.user.findUnique({ where: { email } });
  if (!user || !(await comparePassword(password, user.password_hash))) {
    res.status(401).json({ error: "Invalid email or password" });
    return;
  }

  if (user.status !== "ACTIVE") {
    res.status(403).json({ error: `Account is ${user.status.toLowerCase()}` });
    return;
  }

  // Create refresh token session
  const rawToken = generateToken();
  const expiresAt = new Date(Date.now() + parseInt(process.env.REFRESH_TOKEN_EXPIRES_MS ?? "2592000000", 10));

  await db.session.create({
    data: {
      user_id: user.id,
      token: rawToken,
      ip: req.ip ?? null,
      user_agent: req.headers["user-agent"] ?? null,
      expires_at: expiresAt,
    },
  });

  // Update last login
  await db.user.update({
    where: { id: user.id },
    data: { last_login_at: new Date() },
  });

  await db.auditLog.create({
    data: {
      user_id: user.id,
      action: "LOGIN",
      ip: req.ip ?? null,
      user_agent: req.headers["user-agent"] ?? null,
    },
  });

  const access_token = signAccessToken({ sub: user.id, email: user.email, role: user.role });
  setRefreshCookie(res, rawToken);

  res.status(200).json({
    access_token,
    user: { id: user.id, email: user.email, role: user.role },
  });
});

// ─── POST /auth/refresh ──────────────────────────────────────────────────────
authRouter.post("/refresh", async (req: Request, res: Response): Promise<void> => {
  const rawToken = req.cookies?.refresh_token as string | undefined;
  if (!rawToken) {
    res.status(401).json({ error: "No refresh token provided" });
    return;
  }

  const session = await db.session.findUnique({
    where: { token: rawToken },
    include: { user: { select: { id: true, email: true, role: true, status: true } } },
  });

  if (!session || session.expires_at < new Date()) {
    res.status(401).json({ error: "Invalid or expired session" });
    return;
  }

  if (session.user.status !== "ACTIVE") {
    res.status(403).json({ error: `Account is ${session.user.status.toLowerCase()}` });
    return;
  }

  const access_token = signAccessToken({
    sub: session.user.id,
    email: session.user.email,
    role: session.user.role,
  });

  res.status(200).json({ access_token });
});

// ─── POST /auth/logout ───────────────────────────────────────────────────────
authRouter.post("/logout", authenticate, async (req: Request, res: Response): Promise<void> => {
  const rawToken = req.cookies?.refresh_token as string | undefined;

  if (rawToken) {
    await db.session.deleteMany({ where: { token: rawToken } });
  }

  await db.auditLog.create({
    data: {
      user_id: req.user!.sub,
      action: "LOGOUT",
      ip: req.ip ?? null,
      user_agent: req.headers["user-agent"] ?? null,
    },
  });

  clearRefreshCookie(res);
  res.status(200).json({ message: "Logged out successfully" });
});

// ─── POST /auth/forgot-password ─────────────────────────────────────────────
// DEV STUB: returns the reset token in the response body
authRouter.post("/forgot-password", async (req: Request, res: Response): Promise<void> => {
  const parsed = forgotPasswordSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Validation failed", details: parsed.error.flatten() });
    return;
  }

  const { email } = parsed.data;
  const user = await db.user.findUnique({ where: { email } });

  // Always return 200 — don't reveal whether email exists
  if (!user) {
    res.status(200).json({ message: "If that email is registered, a reset token has been issued" });
    return;
  }

  // Invalidate any existing unused tokens
  await db.passwordResetToken.updateMany({
    where: { user_id: user.id, used_at: null },
    data: { used_at: new Date() },
  });

  const rawToken = generateToken(32); // 64-char hex
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

  await db.passwordResetToken.create({
    data: { user_id: user.id, token: rawToken, expires_at: expiresAt },
  });

  // DEV STUB — in production this would be sent via notification-service
  res.status(200).json({
    message: "Reset token issued (dev stub — remove before production)",
    reset_token: rawToken,
    expires_at: expiresAt,
  });
});

// ─── POST /auth/reset-password ───────────────────────────────────────────────
authRouter.post("/reset-password", async (req: Request, res: Response): Promise<void> => {
  const parsed = resetPasswordSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Validation failed", details: parsed.error.flatten() });
    return;
  }

  const { token, password } = parsed.data;

  const record = await db.passwordResetToken.findUnique({ where: { token } });

  if (!record || record.used_at !== null || record.expires_at < new Date()) {
    res.status(400).json({ error: "Invalid or expired reset token" });
    return;
  }

  const password_hash = await hashPassword(password);

  await db.user.update({
    where: { id: record.user_id },
    data: { password_hash },
  });

  await db.passwordResetToken.update({
    where: { id: record.id },
    data: { used_at: new Date() },
  });

  // Revoke all active sessions — force re-login everywhere
  await db.session.deleteMany({ where: { user_id: record.user_id } });

  await db.auditLog.create({
    data: {
      user_id: record.user_id,
      action: "PASSWORD_CHANGE",
      ip: req.ip ?? null,
      user_agent: req.headers["user-agent"] ?? null,
    },
  });

  res.status(200).json({ message: "Password reset successfully. Please log in again." });
});
