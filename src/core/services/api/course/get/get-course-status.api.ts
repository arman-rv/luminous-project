import http from "@/core/services/interceptor";
import { courseStatusSchema } from "@/core/validators/api";
import { auth } from "@/lib/auth";

export const getCourseStatusList = async () => {
  const session = await auth();

  const response = await http.get("/Status", {
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
    },
  });

  const parsedResult = courseStatusSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error("error in get-course-status.api", parsedResult.error.errors);

    return [];
  }

  return parsedResult.data;
};
