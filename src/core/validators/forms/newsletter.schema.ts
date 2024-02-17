import { z } from "zod";

export const newsletterRegisterInputSchema = z.object({
  email: z.string().email(),
});

export type NewsletterRegisterInputProps = z.infer<
  typeof newsletterRegisterInputSchema
>;
