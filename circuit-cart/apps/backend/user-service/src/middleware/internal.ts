import type { Request, Response, NextFunction } from "express";

export function requireInternalKey(req: Request, res: Response, next: NextFunction): void {
  const key = req.headers["x-internal-api-key"];
  if (!key || key !== process.env.INTERNAL_API_KEY) {
    res.status(403).json({ error: "Forbidden" });
    return;
  }
  next();
}
