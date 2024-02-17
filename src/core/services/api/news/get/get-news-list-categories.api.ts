import http from "@/core/services/interceptor";
import { newsListCategoriesListSchema } from "@/core/validators/api/news/get/news-list-categories-schema";

export const getListNewsCategories = async () => {
  const response = await http.get("/News/GetListNewsCategory");

  const parsedResult = newsListCategoriesListSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error(
      "error in get-news-categories.api",
      parsedResult.error.errors
    );

    return null;
  }

  return parsedResult.data;
};
