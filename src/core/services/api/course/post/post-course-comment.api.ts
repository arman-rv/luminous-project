"use server";

import http from "@/core/services/interceptor";

export const addCourseComment = async (data: FormData) => {
  const response = await http.post("/Course/AddCommentCourse", data);

  return response.data;
};

export const addCourseReplyComment = async (data: FormData) => {
  const response = await http.post("/Course/AddReplyCourseComment", data);

  return response.data;
};
