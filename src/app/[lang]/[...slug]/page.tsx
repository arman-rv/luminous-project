import PageAnimationWrapper from "@/components/layouts/animation/page-animation-wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/elements/ui";

import { type Locale } from "#/i18n.config";

import NotFoundCard from "./not-found-card";

const NotFound = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const funFacts = [
    {
      fa: "کد ۴۰۴ یعنی صفحه یافت نشد!",
      en: "404 means page not found!",
    },
    {
      fa: "کد ۴۰۰ یعنی درخواست نامعتبر!",
      en: "400 means bad request!",
    },
    {
      fa: "کد ۴۰۱ یعنی درخواست نیاز به احراز هویت دارد!",
      en: "401 means unauthorized!",
    },
    {
      fa: "کد ۴۰۳ یعنی شما به این صفحه دسترسی ندارید!",
      en: "403 means forbidden!",
    },
    {
      fa: "کد ۵۰۰ یعنی خطای سرور!",
      en: "500 means internal server error!",
    },
    {
      fa: "کد ۵۰۳ یعنی سرور در دسترس نیست!",
      en: "503 means service unavailable!",
    },
    {
      fa: "کد ۵۰۴ یعنی درخواست شما به سرور نرسید!",
      en: "504 means gateway timeout!",
    },
    {
      fa: "کد ۵۰۵ یعنی نسخه HTTP پشتیبانی نمی شود!",
      en: "505 means HTTP version not supported!",
    },
    {
      fa: "کد ۲۰۰ یعنی درخواست موفقیت آمیز بود!",
      en: "200 means OK!",
    },
    {
      fa: "کد ۲۰۱ یعنی منبع ایجاد شد!",
      en: "201 means created!",
    },
    {
      fa: "کد ۲۰۲ یعنی درخواست پذیرفته شد!",
      en: "202 means accepted!",
    },
    {
      fa: "کد ۲۰۳ یعنی منبع بازنشانی شد!",
      en: "203 means non-authoritative information!",
    },
    {
      fa: "کد ۲۰۴ یعنی منبع بدون محتوا است!",
      en: "204 means no content!",
    },
    {
      fa: "کد ۲۰۵ یعنی محتوای بازنشانی شد!",
      en: "205 means reset content!",
    },
    {
      fa: "کد ۲۰۶ یعنی محتوای جزئی!",
      en: "206 means partial content!",
    },
    {
      fa: "کد ۳۰۰ یعنی منبع دارای چندین موقعیت است!",
      en: "300 means multiple choices!",
    },
    {
      fa: "کد ۳۰۱ یعنی منبع به مکان دیگری منتقل شد!",
      en: "301 means moved permanently!",
    },
    {
      fa: "کد ۳۰۲ یعنی منبع به مکان دیگری منتقل شد!",
      en: "302 means found!",
    },
    {
      fa: "کد ۳۰۳ یعنی منبع به مکان دیگری منتقل شد!",
      en: "303 means see other!",
    },
    {
      fa: "کد ۳۰۴ یعنی منبع یافت نشد!",
      en: "304 means not modified!",
    },
  ];
  return (
    <div className="mx-auto h-screen w-screen overflow-hidden bg-secondary">
      <PageAnimationWrapper className="flex h-full w-full flex-col items-center justify-center">
        <NotFoundCard lang={lang} />
        <Card className="flex w-fit flex-col items-center justify-center border border-none bg-purple-600 px-7 py-4 text-white">
          <CardContent className="flex flex-col items-start gap-1">
            <CardTitle className="text-xl font-light">
              {
                {
                  fa: "یک نکته‌ی جالب درمورد کدهای وضعیت:",
                  en: "A fun fact about status codes:",
                }[lang]
              }
            </CardTitle>
            <CardDescription className="text-3xl font-black">
              {
                funFacts[
                  Math.floor(Math.random() * (funFacts.length - 1 - 0 + 1)) + 0
                ][lang]
              }
            </CardDescription>
          </CardContent>
        </Card>
      </PageAnimationWrapper>
    </div>
  );
};
export default NotFound;
