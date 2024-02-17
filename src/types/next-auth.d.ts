import NextAuth from "next-auth";

declare module "@auth/core/types" {
  interface User {
    id: number;
    phoneNumber: string;
    token: string;
  }

  interface Session {
    user: {
      id: number;
      phoneNumber: string;
      token: string;
    };
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    id: number;
    phoneNumber: string;
    token: string;
  }
}
