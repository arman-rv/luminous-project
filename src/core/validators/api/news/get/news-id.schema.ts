import { z } from "zod";

import { newsCommentSchema } from "./news-comments.schema";

const commentDtoSchema = z.array(newsCommentSchema);

const detailsNewsDtoSchema = z.object({
  id: z.string(),
  title: z.string(),
  googleTitle: z.string(),
  googleDescribe: z.string(),
  miniDescribe: z.string(),
  describe: z.string(),
  keyword: z.string(),
  shortLink: z.string().nullable(),
  currentImageAddress: z.string().nullable(),
  currentImageAddressTumb: z.string().nullable(),
  insertDate: z.string(),
  updateDate: z.string(),
  currentRate: z.number(),
  currentView: z.number(),
  currentLikeCount: z.number(),
  isSlider: z.boolean(),
  active: z.boolean(),
  userId: z.number(),
  addUserFullName: z.string(),
  newsCatregoryId: z.number(),
  newsCatregoryName: z.string(),
  commentsCount: z.number(),
  inUsersFavoriteCount: z.number(),
  currentUserIsLike: z.boolean(),
  likeId: z.string(),
  currentUserFavoriteId: z.string(),
  isCurrentUserFavorite: z.boolean(),
});

export const newsIdSchema = z.object({
  commentDtos: commentDtoSchema,
  detailsNewsDto: detailsNewsDtoSchema,
});

export type NewsIdType = z.infer<typeof newsIdSchema>;
