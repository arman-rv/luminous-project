import http from "@/core/services/interceptor";
import { allUserFavoriteCoursesSchema } from "@/core/validators/api";

export const getUserFavoriteCourses = async () => {
  const response = await http.get("/SharePanel/GetMyFavoriteCourses");

  const parsedResult = allUserFavoriteCoursesSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.log(
      "error in get-user-favorite-courses.api",
      parsedResult.error.errors
    );

    return null;
  }

  return parsedResult.data;
};
