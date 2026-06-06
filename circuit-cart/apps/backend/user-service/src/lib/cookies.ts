import type { Response } from "express";

const MAX_AGE_MS = parseInt(process.env.REFRESH_TOKEN_EXPIRES_MS ?? "2592000000", 10); // 30 days

export function setRefreshCookie(res: Response, token: string): void {
  res.cookie("refresh_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: MAX_AGE_MS,
    path: "/",
  });
}

export function clearRefreshCookie(res: Response): void {
  res.clearCookie("refresh_token", { path: "/" });
}
