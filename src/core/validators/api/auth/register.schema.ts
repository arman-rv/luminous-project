import { z } from "zod";

export const firstSignUpResponseSchema = z
  .object({
    id: z.number(),
    message: z.string(),
    success: z.boolean(),
    errors: z.string().nullable(),
  })
  .strict();

export type FirstSignUpResponseProps = z.infer<
  typeof firstSignUpResponseSchema
>;

export const secondSignUpResponseSchema = z
  .object({
    id: z.number(),
    message: z.string(),
    success: z.boolean(),
    errors: z.string().nullable(),
  })
  .strict();

export type SecondSignUpResponseProps = z.infer<
  typeof secondSignUpResponseSchema
>;

export const thirdSignUpResponseSchema = z
  .object({
    id: z.number(),
    message: z.string().nullable(),
    success: z.boolean(),
    errors: z.string().nullable(),
  })
  .strict();

export type ThirdSignUpResponseProps = z.infer<
  typeof thirdSignUpResponseSchema
>;
