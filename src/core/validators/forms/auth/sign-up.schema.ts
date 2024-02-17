import { z } from "zod";

export const firstSignUpInputSchema = z.object({
  phone: z.string().regex(/^09\d{9}$/),
});

export type FirstSignUpInputProps = z.infer<typeof firstSignUpInputSchema>;

export const secondSignUpInputSchema = z.object({
  code: z.string().min(1),
});

export type SecondSignUpInputProps = z.infer<typeof secondSignUpInputSchema>;

export const thirdSignUpInputSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type ThirdSignUpInputProps = z.infer<typeof thirdSignUpInputSchema>;
