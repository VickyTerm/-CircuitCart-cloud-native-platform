import { z } from "zod";

export const updateProfileSchema = z.object({
  first_name: z.string().min(1).max(100).optional(),
  last_name: z.string().min(1).max(100).optional(),
  phone: z.string().regex(/^\+?[0-9]{7,15}$/).nullable().optional(),
  avatar_url: z.string().url().nullable().optional(),
});

export const changePasswordSchema = z.object({
  current_password: z.string().min(1),
  new_password: z.string().min(8, "Password must be at least 8 characters"),
});

export const addressSchema = z.object({
  label: z.string().max(50).optional(),
  first_name: z.string().min(1).max(100),
  last_name: z.string().min(1).max(100),
  phone: z.string().regex(/^\+?[0-9]{7,15}$/),
  line1: z.string().min(1).max(255),
  line2: z.string().max(255).optional(),
  city: z.string().min(1).max(100),
  state: z.string().min(1).max(100),
  postal_code: z.string().min(3).max(20),
  country: z.string().length(2).default("IN"),
  is_default: z.boolean().optional(),
});

export const updateAddressSchema = addressSchema.partial();

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
export type AddressInput = z.infer<typeof addressSchema>;
export type UpdateAddressInput = z.infer<typeof updateAddressSchema>;
