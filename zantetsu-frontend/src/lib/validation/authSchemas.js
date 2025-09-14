import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .toLowerCase()
    .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value), {
      message: "Invalid email address",
    }),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .toLowerCase()
    .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value), {
      message: "Invalid email address",
    }),
  password: z.string().min(6, "Password must be at least 6 characters"),
});