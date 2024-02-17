import Link from "next/link";

import PageAnimationWrapper from "@/components/layouts/animation/page-animation-wrapper";
import { SignInForm } from "@/components/forms/sign-in-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/elements/ui";
import { LoginLady } from "@/components/assets/artworks/auth/sign-in-lady.artwork";
import { LoginMobile } from "@/components/assets/artworks/auth/sign-in-mobile.artwork";
import { Icons } from "@/components/assets/icons";

import { signInFormDict } from "@/dict/pages/auth.dict";

import { type Locale } from "#/i18n.config";

const SignInPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <PageAnimationWrapper className="flex h-full w-full items-center justify-center gap-10 xl:gap-24">
      <Card className="w-[22rem] border-none bg-white px-5 shadow-lg">
        <CardHeader className="flex items-center justify-center gap-4 py-7">
          <CardTitle className="text-2xl font-extrabold text-purple-primary">
            {signInFormDict.title[lang]}
          </CardTitle>
          <Icons.logInIcon className="h-10 w-10" />
        </CardHeader>
        <CardContent className="">
          <SignInForm lang={lang} />
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-center gap-2 py-4">
          <Link
            aria-label="reset-password"
            href={`/${lang}/reset-password`}
            className="text-xs text-blue-800 transition-colors duration-300 hover:text-blue-500"
          >
            {signInFormDict.forgot[lang]}
          </Link>
          <div className="text-xs">
            <span className="me-1 inline-block opacity-70">
              {signInFormDict.question[lang]}
            </span>
            <Link
              aria-label="Sign up"
              href={`/${lang}/sign-up`}
              className="text-blue-800 transition-colors duration-300 hover:text-blue-500"
            >
              {signInFormDict.link[lang]}
            </Link>
          </div>
        </CardFooter>
      </Card>
      <div className="relative hidden h-full w-[40vw] flex-row md:flex xl:w-[30vw]">
        <div className="absolute end-0 top-1/2 translate-y-[-60%]">
          <LoginMobile />
        </div>
        <div className="absolute start-0 top-1/2 translate-y-[-40%]">
          <LoginLady />
        </div>
      </div>
    </PageAnimationWrapper>
  );
};

export default SignInPage;
