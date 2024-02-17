import { z } from "zod";

export const changePasswordInputSchema = z.object({
  oldPassword: z.string(),
  newPassword: z.string(),
});

export type ChangePasswordInputProps = z.infer<
  typeof changePasswordInputSchema
>;
