import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import { db } from "./lib/db.js";
import { authRouter } from "./routes/auth.routes.js";
import { userRouter } from "./routes/user.routes.js";
import { internalRouter } from "./routes/internal.routes.js";

const app = express();
const PORT = parseInt(process.env.PORT ?? "3001", 10);

// ─── Global middleware ────────────────────────────────────────────────────────
app.use(express.json());
app.use(cookieParser());

// Trust proxy — required so req.ip works correctly behind api-gateway
app.set("trust proxy", 1);

// ─── Routes ──────────────────────────────────────────────────────────────────
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/internal", internalRouter);

// ─── Health check ────────────────────────────────────────────────────────────
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", service: "user-service" });
});

// ─── 404 fallback ────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

// ─── Boot ─────────────────────────────────────────────────────────────────────
async function main() {
  await db.$connect();
  console.log("✅ user-service connected to circuit_cart_users");

  app.listen(PORT, () => {
    console.log(`🚀 user-service running on http://localhost:${PORT}`);
  });
}

main().catch((err) => {
  console.error("❌ Failed to start user-service:", err);
  process.exit(1);
});
