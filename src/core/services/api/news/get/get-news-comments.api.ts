import http from "@/core/services/interceptor";
import {
  newsCommentListSchema,
  newsCommentReplyListSchema,
} from "@/core/validators/api/news";

export const getNewsComments = async (newsId: string) => {
  const response = await http.get(`/News/GetNewsComments?NewsId=${newsId}`);

  const parsedResult = newsCommentListSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error("error in get-news-comments.api", parsedResult.error.errors);

    return [];
  }

  return parsedResult.data;
};

export const getNewsCommentReplies = async (
  newsId: string,
  commentId: string
) => {
  const response = await http.get(`/News/GetRepliesComments?Id=${commentId}`);

  const parsedResult = newsCommentReplyListSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error(
      "error in get-news-comment-replies.api",
      parsedResult.error.errors
    );

    return [];
  }

  return parsedResult.data;
};
