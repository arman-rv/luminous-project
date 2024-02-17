import "@/styles/globals.css";

import Image from "next/image";

import { MainNav } from "@/components/layouts/header/desktop";

import { type Locale } from "#/i18n.config";

const AuthLayout = ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) => {
  return (
    <div className="relative flex h-screen max-h-screen flex-col">
      <div className="absolute end-0 top-0 h-full w-full">
        <div className="relative -z-10 h-full w-full select-none overflow-hidden bg-gradient-to-r from-purple-primary to-purple-secondary bg-center">
          <Image
            src="/images/artworks/login/login-white-artwork.svg"
            fill
            className="z-10 hidden translate-y-[-10%] scale-125 object-cover md:block"
            alt=""
          />
        </div>
      </div>
      <header className="fixed top-0 z-50 mx-auto flex w-full dark:bg-black">
        <div className="container flex h-16 items-center">
          <MainNav
            lang={lang}
            className="text-white"
            textColorVariant="auth"
            iconColorVariant="auth"
          />
        </div>
      </header>
      <div className="z-10 flex h-full w-full items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
