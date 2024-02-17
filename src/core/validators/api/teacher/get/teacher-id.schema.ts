import { z } from "zod";

export const teacherIdSchema = z
  .object({
    teacherId: z.number(),
    fullName: z.string(),
    linkdinProfileLink: z.string().nullable(),
    pictureAddress: z.string().nullable(),
    courseCounts: z.number(),
    newsCount: z.number(),
    skills: z.array(z.string()),
    histories: z.array(z.unknown()),
  })
  .strict();

export type TeacherIdType = z.infer<typeof teacherIdSchema>;
