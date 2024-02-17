import { z } from "zod";

export const resetPasswordInputSchema = z.object({
  email: z.string().email(),
});

export type ResetPasswordInputProps = z.infer<typeof resetPasswordInputSchema>;
