import { z } from "zod";

export const courseCommentSchema = z
  .object({
    id: z.string(),
    courseId: z.string(),
    parentId: z.string(),
    title: z.string(),
    describe: z.string(),
    author: z.string(),
    userId: z.number(),
    insertDate: z.string(),
    accept: z.boolean(),
    acceptReplysCount: z.number(),
    disslikeCount: z.number(),
    likeCount: z.number(),
    currentUserEmotion: z.string(),
    currentUserLikeId: z.string(),
    pictureAddress: z.string().nullable(),
  })
  .strict();

export type CourseCommentType = z.infer<typeof courseCommentSchema>;

export const courseCommentListSchema = z.array(courseCommentSchema);

export type CourseCommentListType = z.infer<typeof courseCommentListSchema>;

export const courseCommentReplyListSchema = z.array(courseCommentSchema);

export type CourseCommentReplyListType = z.infer<
  typeof courseCommentReplyListSchema
>;
