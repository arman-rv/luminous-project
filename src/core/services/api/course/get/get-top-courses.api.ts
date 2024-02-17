import http from "@/core/services/interceptor";
import { topCourseListSchema } from "@/core/validators/api";

export const getTopCoursesList = async (count: number = 5) => {
  const response = await http.get(`/Home/GetCoursesTop?Count=${count}`);
  const parsedResult = topCourseListSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error("error in get-top-courses.api", parsedResult.error.errors);

    return [];
  }

  return parsedResult.data;
};
