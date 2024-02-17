import { z } from "zod";

export const courseSchema = z
  .object({
    teacherName: z.string(),
    classRoomName: z.string(),
    typeName: z.string(),
    statusName: z.string(),
    levelName: z.string(),
    cost: z.string(),
    dissLikeCount: z.number(),
    likeCount: z.number(),
    commandCount: z.number(),
    userIsLiked: z.boolean(),
    userIsDissLiked: z.boolean(),
    isCourseReseve: z.boolean(),
    isUserFavorite: z.boolean(),
    courseReseveId: z.string(),
    userFavoriteId: z.string(),
    userLikeId: z.string(),
    currentUserSetRate: z.boolean(),
    currentUserRateNumber: z.number(),
    courseRate: z.number(),
    title: z.string(),
    describe: z.string(),
    tumbImageAddress: z.string().nullable(),
    lastUpdate: z.string().refine((value) => {
      return new Date(value).getTime() > 0;
    }),
    courseId: z.string(),
  })
  .strict();

export type CourseType = z.infer<typeof courseSchema>;

export const topCourseListSchema = z.array(courseSchema);

export type TopCourseListType = z.infer<typeof topCourseListSchema>;
