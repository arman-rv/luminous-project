import http from "@/core/services/interceptor";
import {
  courseCommentListSchema,
  courseCommentReplyListSchema,
} from "@/core/validators/api/course";

export const getCourseComments = async (courseId: string) => {
  const response = await http.get(`/Course/GetCourseCommnets/${courseId}`);

  const parsedResult = courseCommentListSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error(
      "error in get-course-comments.api",
      parsedResult.error.errors
    );

    return [];
  }

  return parsedResult.data;
};

export const getCourseCommentReplies = async (
  courseId: string,
  commentId: string
) => {
  const response = await http.get(
    `/Course/GetCourseReplyCommnets/${courseId}/${commentId}`
  );

  const parsedResult = courseCommentReplyListSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error(
      "error in get-course-comment-replies.api",
      parsedResult.error.errors
    );

    return [];
  }

  return parsedResult.data;
};
