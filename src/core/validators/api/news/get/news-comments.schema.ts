import { z } from "zod";

export const newsCommentSchema = z
  .object({
    id: z.string(),
    newsId: z.string(),
    parentId: z.string().nullable(),
    currentUserLikeId: z.string(),
    inserDate: z.string(),
    title: z.string(),
    describe: z.string(),
    likeCount: z.number(),
    dissLikeCount: z.number(),
    replyCount: z.number(),
    currentUserIsLike: z.boolean(),
    currentUserIsDissLike: z.boolean(),
    autor: z.string(),
    pictureAddress: z.string().nullable(),
  })
  .strict();

export type NewsCommentType = z.infer<typeof newsCommentSchema>;

export const newsCommentListSchema = z.array(newsCommentSchema);

export type NewsCommentListType = z.infer<typeof newsCommentListSchema>;

export const newsCommentReplyListSchema = z.array(newsCommentSchema);

export type NewsCommentReplyListType = z.infer<
  typeof newsCommentReplyListSchema
>;
