import http from "@/core/services/interceptor";
import { newsIdSchema } from "@/core/validators/api/news";

export const getNewsById = async (newsId: string | number) => {
  const response = await http.get(`/News/${newsId}`);

  const parsedResult = newsIdSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error("error in get-news-by-id.api", parsedResult.error.errors);

    return null;
  }

  return parsedResult.data;
};
