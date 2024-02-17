import { z } from "zod";

export const courseIdSchema = z
  .object({
    courseId: z.string(),
    endTime: z.string().refine((value) => {
      return new Date(value).getTime() > 0;
    }),
    startTime: z.string().refine((value) => {
      return new Date(value).getTime() > 0;
    }),
    teacherId: z.number(),
    teacherName: z.string(),
    insertDate: z.string().refine((value) => {
      return new Date(value).getTime() > 0;
    }),
    title: z.string(),
    imageAddress: z.string().nullable(),
    currentRate: z.number(),
    cost: z.number(),
    googleTitle: z.string().nullable(),
    googleSchema: z.string().nullable(),
    capacity: z.number(),
    uniqeUrlString: z.string(),
    currentRegistrants: z.number(),
    describe: z.string(),
    miniDescribe: z.string(),
    courseLevelName: z.string(),
    courseStatusName: z.string(),
    commentCount: z.number(),
    likeCount: z.number(),
    dissLikeCount: z.number(),
    currentUserLike: z.enum(["0", "1"]),
    currentUserDissLike: z.enum(["0", "1"]),
    courseGroupCount: z.number(),
    isCourseUser: z.enum(["0", "1"]),
    isCourseReseve: z.enum(["0", "1"]),
    courseReseveId: z.string(),
    userFavoriteId: z.string(),
    isUserFavorite: z.boolean(),
    userLikeId: z.string(),
    currentUserSetRate: z.boolean(),
    currentUserRateNumber: z.number(),
    techs: z.array(z.string()),
  })
  .strict();

export type CourseIdType = z.infer<typeof courseIdSchema>;
