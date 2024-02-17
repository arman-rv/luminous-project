import { z } from "zod";

export const favoriteCourseSchema = z
  .object({
    teacheName: z.string(),
    levelName: z.enum(["پیشرفته", "مقدماتی", "متوسط"]),
    courseTitle: z.string(),
    describe: z.string(),
    tumbImageAddress: z.string().nullable(),
    typeName: z.enum(["حضوری", "آنلاین-حضوری"]),
    lastUpdate: z.string(),
    courseId: z.string(),
    favoriteId: z.string(),
    teacherId: z.number(),
  })
  .strict();

export type FavoriteCourseType = z.infer<typeof favoriteCourseSchema>;

export const favoriteCoursesListSchema = z.array(favoriteCourseSchema);

export type FavoriteCoursesListType = z.infer<typeof favoriteCoursesListSchema>;

export const allUserFavoriteCoursesSchema = z
  .object({
    favoriteCourseDto: favoriteCourseSchema,
    totalCount: z.number(),
  })
  .strict();
