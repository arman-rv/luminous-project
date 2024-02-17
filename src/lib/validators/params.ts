import { z } from "zod";

export const searchParamsSchema = z.object({
  page: z.string().default("1"),
  per_page: z.string().default("10"),
  query: z.string().optional(),
});

export const allUserCoursesSearchParamsSchema = searchParamsSchema
  .omit({
    query: true,
  })
  .extend({
    courseTitle: z.string().optional(),
    sort: z.string().optional().default("LastUpdate.ASC"),
  });
