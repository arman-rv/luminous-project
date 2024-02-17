import { z } from "zod";

export const favoriteNewsSchema = z
  .object({
    title: z.string(),
    currentImageAddressTumb: z.string().nullable(),
    currentRate: z.number(),
    currentView: z.number(),
    newsId: z.string(),
    favoriteId: z.string(),
    currentLikeCount: z.number(),
    updateDate: z.string(),
  })
  .strict();
export type FavoriteNewsSchemaType = z.infer<typeof favoriteNewsSchema>;

export const favoriteNewsListSchema = z.array(favoriteNewsSchema);

export type FavoriteNewsListSchemaType = z.infer<typeof favoriteNewsListSchema>;

export const allUserFavoriteNewsSchema = z
  .object({
    myFavoriteNews: favoriteNewsSchema,
    totalCount: z.number(),
  })
  .strict();
