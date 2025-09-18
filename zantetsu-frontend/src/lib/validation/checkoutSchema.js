import { z } from "zod";

export const checkoutSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .toLowerCase()
    .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value), {
      message: "Invalid email address",
    }),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  postalCode: z.string().min(4, "Postal code is required"),
  payment: z.enum(["cod", "card", "upi"]),
});
