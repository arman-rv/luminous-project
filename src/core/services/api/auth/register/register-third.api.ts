"use server";

import http from "@/core/services/interceptor";
import { thirdSignUpResponseSchema } from "@/core/validators/api/auth/register.schema";

export const register = async (gmail: string, pass: string, phone: string) => {
  const response = await http.post("/Sign/Register", {
    password: pass,
    gmail: gmail, //
    phoneNumber: phone,
  });

  const parsedResult = thirdSignUpResponseSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.log(response.data);
    console.error("error in login.api", parsedResult.error.errors);

    return null;
  }

  return parsedResult.data;
};
