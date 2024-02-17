import http from "@/core/services/interceptor";
import { allUserReservedCoursesListSchema } from "@/core/validators/api";

export const getUserReservedCourses = async () => {
  const response = await http.get("/SharePanel/GetMyCoursesReserve");

  const parsedResult = allUserReservedCoursesListSchema.safeParse(
    response.data
  );

  if (!parsedResult.success) {
    console.log(
      "error in get-user-reserve-courses.api",
      parsedResult.error.errors
    );

    return null;
  }

  return parsedResult.data;
};
