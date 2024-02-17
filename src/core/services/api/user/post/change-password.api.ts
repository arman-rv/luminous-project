"use server";

import http from "@/core/services/interceptor";
import { loginResponseSchema } from "@/core/validators/api";
import {
  type ChangePasswordInputProps,
  type SignInInputProps,
} from "@/core/validators/forms";

export const changePassword = async (credentials: ChangePasswordInputProps) => {
  const response = await http.post("/SharePanel/ChangePassword", credentials);

  const parsedResult = loginResponseSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.log(response.data);
    console.error("error in change-password.api", parsedResult.error.errors);

    return null;
  }

  return parsedResult.data;
};
