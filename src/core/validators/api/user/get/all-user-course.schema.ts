import { z } from "zod";

export const userCourseSchema = z
  .object({
    fullName: z.string(),
    termName: z.string(),
    statusName: z.string(),
    levelName: z.string(),
    courseTitle: z.string(),
    courseId: z.string(),
    describe: z.string(),
    cost: z.string(),
    lastUpdate: z.string(),
    tumbImageAddress: z.string().nullable(),
    classRoomName: z.string(),
    typeName: z.string(),
    isExpire: z.boolean(),
    isActive: z.boolean(),
    isdelete: z.boolean(),
    teacherId: z.number(),
    groupName: z.string(),
    courseGroupId: z.number(),
    studentId: z.number(),
    paymentStatus: z.string(),
  })
  .strict();

export type UserCourseType = z.infer<typeof userCourseSchema>;

export const userCourseListSchema = z.array(userCourseSchema);

export type UserCourseListType = z.infer<typeof userCourseListSchema>;

export const allUserCoursesSchema = z
  .object({
    listOfMyCourses: z.array(userCourseSchema),
    totalCount: z.number(),
  })
  .strict();

export type AllUserCoursesType = z.infer<typeof allUserCoursesSchema>;
