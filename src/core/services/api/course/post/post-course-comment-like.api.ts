"use server";

import http from "@/core/services/interceptor";
import { courseCommentLikeResponseSchema } from "@/core/validators/api/course/post/post-course-comment-like-result.schema";

export const addCourseCommentLike = async (courseId: number | string) => {
  const response = await http.post(
    `/Course/AddCourseCommentLike?CourseCommandId=${courseId}`
  );

  const parsedResult = courseCommentLikeResponseSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.log(response);
    console.error(parsedResult.error.errors);

    return null;
  }

  return parsedResult.data;
};
