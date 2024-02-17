import { z } from "zod";

export const courseStatusSchema = z.object({
  id: z.number(),
  statusName: z.string(),
  describe: z.string(),
  statusNumber: z.number(),
});

export type CourseStatusType = z.infer<typeof courseStatusSchema>;

export const courseStatusListSchema = z.array(courseStatusSchema);

export type CourseStatusListType = z.infer<typeof courseStatusListSchema>;
