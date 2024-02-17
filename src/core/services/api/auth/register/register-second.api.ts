"use server";

import http from "@/core/services/interceptor";
import { secondSignUpResponseSchema } from "@/core/validators/api/auth/register.schema";
import { SecondSignUpInputProps } from "@/core/validators/forms/auth/sign-up.schema";

import { FirstSignUpInputProps } from "./../../../../validators/forms/auth/sign-up.schema";

export const verifyMessage = async (code: string, phone: string) => {
  console.log(code, phone);
  const response = await http.post("/Sign/VerifyMessage", {
    phoneNumber: phone,
    verifyCode: code,
  });

  const parsedResult = secondSignUpResponseSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.log(response.data);
    console.error("error in login.api", parsedResult.error.errors);

    return null;
  }

  return parsedResult.data;
};
