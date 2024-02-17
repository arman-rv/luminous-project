import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { login } from "@/core/services/api";
import { signInInputSchema } from "@/core/validators/forms";

import { authConfig } from "#/auth.config";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 24 * 60 * 60,
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = signInInputSchema.safeParse(credentials);

        if (parsedCredentials.success) {
          try {
            const result = await login(parsedCredentials.data);

            if (
              !result ||
              result.success === false ||
              !result.id ||
              !result.token ||
              !result.phoneNumber
            ) {
              return null;
            }

            return {
              id: result.id.toString(),
              phoneNumber: result.phoneNumber,
              token: result.token,
            };
          } catch (e) {
            console.log(e);
          }
        }

        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: Number(user.id),
          phoneNumber: user.phoneNumber,
          token: user.token,
        };
      }

      return { ...token };
    },
    session({ session, token }) {
      return {
        ...session,
        user: {
          id: token.id,
          phoneNumber: token.phoneNumber,
          token: token.token,
        },
      };
    },
  },
});
