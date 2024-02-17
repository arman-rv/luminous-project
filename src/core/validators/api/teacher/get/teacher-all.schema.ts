import { z } from "zod";

export const teacherSchema = z
  .object({
    teacherId: z.number(),
    fullName: z.string().nullable(),
    linkdinProfileLink: z.string().nullable(),
    pictureAddress: z.string().nullable(),
    courseCounts: z.number(),
    newsCount: z.number(),
  })
  .strict();

export type TeacherType = z.infer<typeof teacherSchema>;

export const teacherListSchema = z.array(teacherSchema);

export type TeacherListType = z.infer<typeof teacherListSchema>;
