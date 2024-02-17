import { z } from "zod";

export const courseFavoriteResponseSchema = z.object({
  id: z.string().length(36),
  message: z.enum([
    "عملیات با موفقیت انجام شد.",
    "این دوره در لیست علاقه مندی های شما موجود میباشد.",
    "لطفا کد دوره را با دقت وارد نمایید.",
  ]),
  success: z.boolean(),
  errors: z.array(z.string()).nullable(),
});

export type CourseFavoriteResponseType = z.infer<
  typeof courseFavoriteResponseSchema
>;
