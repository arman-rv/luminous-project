"use server";

import http from "@/core/services/interceptor";
import { userProfileInfoSchema } from "@/core/validators/api";

export const getUserProfileInfo = async () => {
  const response = await http.get("/SharePanel/GetProfileInfo");

  const parsedResult = userProfileInfoSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.log(
      "error in get-user-profile-info.api",
      parsedResult.error.errors
    );

    return null;
  }

  return parsedResult.data;
};
