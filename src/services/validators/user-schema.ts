import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  password: z.string().min(6).max(30),
  gender: z.enum(["MALE", "FEMALE"]),
});

export type TUserSchema = z.infer<typeof userSchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(30),
});

export type TLoginSchema = z.infer<typeof loginSchema>;

export const editUserProfileSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3),
  gender: z.enum(["MALE", "FEMALE"]),
});

export type TEditUserProfile = z.infer<typeof editUserProfileSchema>;
