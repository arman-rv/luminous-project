import http from "@/core/services/interceptor";
import { courseRatingResponseSchema } from "@/core/validators/api";

export const setCourseRatting = async (
  courseId: string,
  rateNumber: number
) => {
  const response = await http.post("/Course/SetCourseRating", {
    params: {
      CourseId: courseId,
      RateNumber: rateNumber,
    },
  });

  const parsedResult = courseRatingResponseSchema.safeParse(response.data); //change schema

  if (!parsedResult.success) {
    console.error(parsedResult.error);

    return null;
  }

  return parsedResult.data;
};
