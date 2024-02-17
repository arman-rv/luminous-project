import { z } from "zod";

export const reserveCourseSchema = z
  .object({
    reserveId: z.string(),
    courseId: z.string(),
    courseName: z.string(),
    studentId: z.number(),
    studentName: z.string(),
    reserverDate: z.string(),
    accept: z.boolean(),
  })
  .strict();

export type ReserveCourseType = z.infer<typeof reserveCourseSchema>;

export const allUserReservedCoursesListSchema = z.array(reserveCourseSchema);

export type AllUserReservedCoursesListType = z.infer<
  typeof allUserReservedCoursesListSchema
>;
