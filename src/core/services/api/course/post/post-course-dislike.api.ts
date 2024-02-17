import http from "@/core/services/interceptor";
import { courseLikeResponseSchema } from "@/core/validators/api";

export const addCourseDislike = async (courseId: number | string) => {
  const response = await http.post(
    `/Course/AddCourseDissLike?CourseId=${courseId}`
  );

  const parsedResult = courseLikeResponseSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.log(response);
    console.error(parsedResult.error.errors);

    return null;
  }

  return parsedResult.data;
};
