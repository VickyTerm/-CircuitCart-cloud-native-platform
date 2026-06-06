import { Router, type Request, type Response } from "express";
import { db } from "../lib/db.js";
import { comparePassword, hashPassword } from "../lib/crypto.js";
import { authenticate } from "../middleware/authenticate.js";
import {
  updateProfileSchema,
  changePasswordSchema,
  addressSchema,
  updateAddressSchema,
} from "../validators/user.validators.js";

export const userRouter = Router();

// All user routes require a valid JWT
userRouter.use(authenticate);

// ─── GET /users/me ───────────────────────────────────────────────────────────
userRouter.get("/me", async (req: Request, res: Response): Promise<void> => {
  const user = await db.user.findUnique({
    where: { id: req.user!.sub },
    select: {
      id: true,
      email: true,
      phone: true,
      first_name: true,
      last_name: true,
      role: true,
      status: true,
      avatar_url: true,
      email_verified: true,
      last_login_at: true,
      created_at: true,
    },
  });

  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  res.status(200).json({ user });
});

// ─── PATCH /users/me ─────────────────────────────────────────────────────────
userRouter.patch("/me", async (req: Request, res: Response): Promise<void> => {
  const parsed = updateProfileSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Validation failed", details: parsed.error.flatten() });
    return;
  }

  const user = await db.user.update({
    where: { id: req.user!.sub },
    data: parsed.data,
    select: {
      id: true,
      email: true,
      phone: true,
      first_name: true,
      last_name: true,
      avatar_url: true,
      updated_at: true,
    },
  });

  await db.auditLog.create({
    data: {
      user_id: req.user!.sub,
      action: "PROFILE_UPDATE",
      ip: req.ip ?? null,
      user_agent: req.headers["user-agent"] ?? null,
    },
  });

  res.status(200).json({ user });
});

// ─── PATCH /users/me/password ────────────────────────────────────────────────
userRouter.patch("/me/password", async (req: Request, res: Response): Promise<void> => {
  const parsed = changePasswordSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Validation failed", details: parsed.error.flatten() });
    return;
  }

  const { current_password, new_password } = parsed.data;

  const user = await db.user.findUnique({ where: { id: req.user!.sub } });
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  const valid = await comparePassword(current_password, user.password_hash);
  if (!valid) {
    res.status(401).json({ error: "Current password is incorrect" });
    return;
  }

  const password_hash = await hashPassword(new_password);
  await db.user.update({ where: { id: user.id }, data: { password_hash } });

  // Revoke all sessions — force re-login everywhere except current
  await db.session.deleteMany({ where: { user_id: user.id } });

  await db.auditLog.create({
    data: {
      user_id: user.id,
      action: "PASSWORD_CHANGE",
      ip: req.ip ?? null,
      user_agent: req.headers["user-agent"] ?? null,
    },
  });

  res.status(200).json({ message: "Password changed successfully. Please log in again." });
});

// ─── GET /users/me/addresses ─────────────────────────────────────────────────
userRouter.get("/me/addresses", async (req: Request, res: Response): Promise<void> => {
  const addresses = await db.address.findMany({
    where: { user_id: req.user!.sub },
    orderBy: [{ is_default: "desc" }, { created_at: "asc" }],
  });

  res.status(200).json({ addresses });
});

// ─── POST /users/me/addresses ────────────────────────────────────────────────
userRouter.post("/me/addresses", async (req: Request, res: Response): Promise<void> => {
  const parsed = addressSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Validation failed", details: parsed.error.flatten() });
    return;
  }

  const userId = req.user!.sub;

  // If new address is default, unset any existing default
  if (parsed.data.is_default) {
    await db.address.updateMany({
      where: { user_id: userId, is_default: true },
      data: { is_default: false },
    });
  }

  const address = await db.address.create({
    data: { ...parsed.data, user_id: userId },
  });

  await db.auditLog.create({
    data: {
      user_id: userId,
      action: "ADDRESS_ADD",
      ip: req.ip ?? null,
      user_agent: req.headers["user-agent"] ?? null,
      metadata: { address_id: address.id },
    },
  });

  res.status(201).json({ address });
});

// ─── PATCH /users/me/addresses/:id ──────────────────────────────────────────
userRouter.patch("/me/addresses/:id", async (req: Request, res: Response): Promise<void> => {
  const parsed = updateAddressSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Validation failed", details: parsed.error.flatten() });
    return;
  }

  const userId = req.user!.sub;
  const addressId = req.params.id;

  const existing = await db.address.findFirst({ where: { id: addressId, user_id: userId } });
  if (!existing) {
    res.status(404).json({ error: "Address not found" });
    return;
  }

  if (parsed.data.is_default) {
    await db.address.updateMany({
      where: { user_id: userId, is_default: true },
      data: { is_default: false },
    });
  }

  const address = await db.address.update({
    where: { id: addressId },
    data: parsed.data,
  });

  await db.auditLog.create({
    data: {
      user_id: userId,
      action: "ADDRESS_UPDATE",
      ip: req.ip ?? null,
      user_agent: req.headers["user-agent"] ?? null,
      metadata: { address_id: address.id },
    },
  });

  res.status(200).json({ address });
});

// ─── DELETE /users/me/addresses/:id ─────────────────────────────────────────
userRouter.delete("/me/addresses/:id", async (req: Request, res: Response): Promise<void> => {
  const userId = req.user!.sub;
  const addressId = req.params.id;

  const existing = await db.address.findFirst({ where: { id: addressId, user_id: userId } });
  if (!existing) {
    res.status(404).json({ error: "Address not found" });
    return;
  }

  await db.address.delete({ where: { id: addressId } });

  await db.auditLog.create({
    data: {
      user_id: userId,
      action: "ADDRESS_DELETE",
      ip: req.ip ?? null,
      user_agent: req.headers["user-agent"] ?? null,
      metadata: { address_id: addressId },
    },
  });

  res.status(200).json({ message: "Address deleted" });
});

// ─── POST /users/me/addresses/:id/default ───────────────────────────────────
userRouter.post("/me/addresses/:id/default", async (req: Request, res: Response): Promise<void> => {
  const userId = req.user!.sub;
  const addressId = req.params.id;

  const existing = await db.address.findFirst({ where: { id: addressId, user_id: userId } });
  if (!existing) {
    res.status(404).json({ error: "Address not found" });
    return;
  }

  // Unset all, then set the target
  await db.address.updateMany({
    where: { user_id: userId, is_default: true },
    data: { is_default: false },
  });

  const address = await db.address.update({
    where: { id: addressId },
    data: { is_default: true },
  });

  res.status(200).json({ address });
});
