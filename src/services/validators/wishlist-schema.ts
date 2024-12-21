import { z } from "zod";

export const wishlistSchema = z.object({
  items: z.string().min(3),
  isFulfilled: z.boolean().default(false),
});

export type TWishlist = z.infer<typeof wishlistSchema>;

export const wishlistEditSchema = z.object({
  items: z.string().min(3),
});

export type TWishlistEdit = z.infer<typeof wishlistEditSchema>;

