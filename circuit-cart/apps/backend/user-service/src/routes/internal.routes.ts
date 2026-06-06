import { Router, type Request, type Response } from "express";
import { db } from "../lib/db.js";
import { requireInternalKey } from "../middleware/internal.js";

export const internalRouter = Router();

internalRouter.use(requireInternalKey);

// ─── GET /internal/users/:id ─────────────────────────────────────────────────
// Called by api-gateway to enrich requests with user identity
internalRouter.get("/users/:id", async (req: Request, res: Response): Promise<void> => {
  const user = await db.user.findUnique({
    where: { id: req.params.id },
    select: {
      id: true,
      email: true,
      role: true,
      status: true,
      first_name: true,
      last_name: true,
    },
  });

  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  res.status(200).json({ user });
});
