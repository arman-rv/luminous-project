"use server";

import http from "@/core/services/interceptor";
import { firstSignUpResponseSchema } from "@/core/validators/api/auth/register.schema";
import { type FirstSignUpInputProps } from "@/core/validators/forms/auth/sign-up.schema";

export const sendVerifyMessage = async (data: FirstSignUpInputProps) => {
  const response = await http.post("/Sign/SendVerifyMessage", {
    phoneNumber: data.phone,
  });

  const parsedResult = firstSignUpResponseSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.log(response.data);
    console.error("error in login.api", parsedResult.error.errors);

    return null;
  }

  return parsedResult.data;
};
