import { z } from "zod";

export const courseCategorySchema = z.object({
  id: z.number(),
  techName: z.string(),
  parentId: z.number().nullable(),
  describe: z.string(),
  iconAddress: z.string(),
});

export type CourseCategoryType = z.infer<typeof courseCategorySchema>;

export const courseCategoryListSchema = z.array(courseCategorySchema);

export type CourseCategoryListType = z.infer<typeof courseCategoryListSchema>;
