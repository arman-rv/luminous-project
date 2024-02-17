import { z } from "zod";

export const newsListCategoriesSchema = z.object({
  insertDate: z.string(),
  id: z.number(),
  categoryName: z.string(),
  image: z.string().nullable(),
  iconAddress: z.string(),
  iconName: z.string(),
  googleTitle: z.string(),
  googleDescribe: z.string(),
});

export type NewsListCategoriesType = z.infer<typeof newsListCategoriesSchema>;
export const newsListCategoriesListSchema = z.array(newsListCategoriesSchema);
export type NewsListCategoriesListType = z.infer<
  typeof newsListCategoriesListSchema
>;
