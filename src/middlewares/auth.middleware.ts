import {
  NextResponse,
  type NextFetchEvent,
  type NextRequest,
} from "next/server";

import { auth } from "@/lib/auth";
import { type CustomMiddleware } from "@/middlewares";

import { i18n, type Locale } from "#/i18n.config";

const protectedRoutes = [
  "/dashboard",
  "/dashboard/profile",
  "/dashboard/edit",
  "/dashboard/dashboard",
];
const authRoutes = ["/sign-in", "/sign-up", "/reset-password"];

const getRoutesLocaleCombo = (routes: string[], locales: Locale[]) => {
  let pathsWithLocale = [...routes];

  routes.forEach((route) => {
    locales.forEach(
      (locale) => (pathsWithLocale = [...pathsWithLocale, `/${locale}${route}`])
    );
  });

  return pathsWithLocale;
};

export const withAuthNMiddleware = (middleware: CustomMiddleware) => {
  return async (req: NextRequest, event: NextFetchEvent) => {
    const response = NextResponse.next();

    const session = await auth();
    const isLoggedIn = !!session?.user;

    // If the user is logged in, add the token to the request
    // so that it can be used in API routes
    // At least I think that's what this does

    // @ts-expect-error - nextauth is not defined on NextRequest
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    req.nextauth = req.nextauth || {};
    // @ts-expect-error - nextauth is not defined on NextRequest
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    req.nextauth.token = session?.user?.token;

    const pathname = req.nextUrl.pathname;

    const protectedPathsWithLocale = getRoutesLocaleCombo(protectedRoutes, [
      ...i18n.locales,
    ]);

    const authPathsWithLocale = getRoutesLocaleCombo(authRoutes, [
      ...i18n.locales,
    ]);

    if (isLoggedIn && authPathsWithLocale.includes(pathname)) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (!isLoggedIn && protectedPathsWithLocale.includes(pathname)) {
      const signInUrl = new URL(`/sign-in`, req.url);
      signInUrl.searchParams.set("callbackUrl", pathname);

      return NextResponse.redirect(signInUrl);
    }

    return middleware(req, event, response);
  };
};
