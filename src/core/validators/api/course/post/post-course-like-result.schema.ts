import { z } from "zod";

export const courseLikeResponseSchema = z.object({
  id: z.boolean(),
  message: z.enum([
    "قادر به ثبت دوباره پسندیدن دوره نمی باشید.",
    "دوره ای یافت نشد.",
    "عملیات با موفقیت انجام شد.",
    "واکنش شما ویرایش شد.",
  ]),
  success: z.boolean(),
  errors: z.array(z.string()).nullable(),
});

export type CourseLikeResponseType = z.infer<typeof courseLikeResponseSchema>;
