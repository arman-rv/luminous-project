import { z } from "zod";

export const loginResponseSchema = z
  .object({
    apiKey: z.string().min(1).nullable(),
    phoneNumber: z
      .string()
      .regex(/^09\d{9}$/)
      .nullable(),
    id: z.number(),
    token: z.string().min(1).nullable(),
    roles: z.array(z.string()).nullable(),
    message: z.string().min(1),
    success: z.boolean(),
    errors: z.unknown(),
  })
  .strict();

export type LoginResponseProps = z.infer<typeof loginResponseSchema>;
