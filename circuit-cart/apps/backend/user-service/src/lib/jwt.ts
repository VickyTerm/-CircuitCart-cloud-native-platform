import jwt from "jsonwebtoken";

export interface JwtPayload {
  sub: string;    // user id
  email: string;
  role: string;
}

const secret = process.env.JWT_SECRET!;
const expiresIn = (process.env.JWT_EXPIRES_IN ?? "15m") as jwt.SignOptions["expiresIn"];

export function signAccessToken(payload: JwtPayload): string {
  return jwt.sign(payload, secret, { expiresIn });
}

export function verifyAccessToken(token: string): JwtPayload {
  return jwt.verify(token, secret) as JwtPayload;
}
