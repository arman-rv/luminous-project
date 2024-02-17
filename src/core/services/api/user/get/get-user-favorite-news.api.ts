import http from "@/core/services/interceptor";
import { allUserFavoriteNewsSchema } from "@/core/validators/api";

export const getUserFavoriteNews = async () => {
  const response = await http.get("/SharePanel/GetMyFavoriteNews");

  const parsedResult = allUserFavoriteNewsSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.log(
      "error in get-user-favorite-news.api",
      parsedResult.error.errors
    );

    return null;
  }

  return parsedResult.data;
};
