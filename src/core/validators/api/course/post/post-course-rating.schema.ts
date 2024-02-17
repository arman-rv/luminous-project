import { z } from "zod";

export const courseRatingResponseSchema = z.object({
  id: z.string(),
  message: z.enum([
    "عملیات با موفقیت انجام شد.",
    "شما قبلا به این دوره امتیاز داده اید",
  ]),
  success: z.boolean(),
  errors: z.array(z.string()).nullable(),
});
export type CourseRatingResponseSchemaType = z.infer<
  typeof courseRatingResponseSchema
>;
