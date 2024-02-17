import { z } from "zod";

const phoneNumberSchema = z.string().regex(/^09\d{9}$/);

const gmailSchema = z.string().email();

export const signInInputSchema = z.object({
  phoneOrGmail: z.union([phoneNumberSchema, gmailSchema]),
  password: z.string().min(1),
  rememberMe: z
    .union([z.boolean(), z.literal("true"), z.literal("false")])
    .transform((value) => {
      if (typeof value === "string") {
        return value === "true";
      }
      return value;
    }),
});

export type SignInInputProps = z.infer<typeof signInInputSchema>;
