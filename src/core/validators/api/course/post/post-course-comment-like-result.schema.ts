import { z } from "zod";

export const courseCommentLikeResponseSchema = z.object({
  id: z.boolean(),
  message: z.enum([
    "شما یکبار در مورد این نظر احساسات خود را بیان کردید.",
    "نظر یافت نشد.",
    "عملیات با موفقیت انجام شد.",
  ]),
  success: z.boolean(),
  errors: z.array(z.string()).nullable(),
});

export type CourseCommentLikeResponseType = z.infer<
  typeof courseCommentLikeResponseSchema
>;
