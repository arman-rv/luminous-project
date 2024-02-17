import {
  NextResponse,
  type NextFetchEvent,
  type NextRequest,
} from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { type CustomMiddleware } from "@/middlewares";

import { i18n } from "#/i18n.config";

const getLocale = (req: NextRequest) => {
  const negotiatorHeaders: Record<string, string> = {};

  req.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: string[] = [...i18n.locales];
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
};

export const withI18NMiddleware = (middleware: CustomMiddleware) => {
  return async (req: NextRequest, event: NextFetchEvent, res: NextResponse) => {
    const { pathname } = req.nextUrl;

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // If the pathname is missing a locale,
    // redirect to the same path with the default locale.
    if (pathnameIsMissingLocale) {
      const locale = getLocale(req);

      const urlWithLocale = new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        req.url
      );

      // If the locale is the default locale,
      // rewrite the URL to the same path with the default locale.
      // this way, the locale will be available in the request object,
      // but not shown in the URL in the browser.
      if (locale === i18n.defaultLocale) {
        return NextResponse.rewrite(urlWithLocale);
      }

      return NextResponse.redirect(new URL(urlWithLocale));
    }

    return middleware(req, event, res);
  };
};
