import bcrypt from "bcrypt";
import { randomBytes } from "node:crypto";

const SALT_ROUNDS = 12;

export function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, SALT_ROUNDS);
}

export function comparePassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}

export function generateToken(bytes = 48): string {
  return randomBytes(bytes).toString("hex");
}
