import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const parsedEnv = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
    BASE_API_URL: z.string().min(1),
    AUTH_SECRET: z.string().length(44),
    AUTH_URL: z
      .string()
      .min(1)
      .refine((url) => url.endsWith("/api/auth")),
  },
  client: {},
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    BASE_API_URL: process.env.BASE_API_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_URL: process.env.AUTH_URL,
  },
  emptyStringAsUndefined: true,
});
