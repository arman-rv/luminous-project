import http from "@/core/services/interceptor";
import { courseFavoriteResponseSchema } from "@/core/validators/api";

export const addCourseFavorite = async (courseId: number | string) => {
  const response = await http.post("/Course/AddCourseFavorite", {
    courseId: courseId,
  });

  const parsedResult = courseFavoriteResponseSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.log(response);
    console.error(parsedResult.error.errors);

    return null;
  }

  return parsedResult.data;
};
