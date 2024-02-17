"use client";

import { useEffect, useState } from "react";

import { AuthNav, MainNav } from "@/components/layouts/header/desktop";
import { MobileNav } from "@/components/layouts/header/mobile-nav";

import { cn } from "@/lib/utils";

import type { Locale } from "#/i18n.config";

export const Header = ({
  lang,
  token,
}: {
  lang: Locale;
  token: string | undefined;
}) => {
  const [backgroundOpacity, setBackgroundOpacity] = useState(
    "bg-opacity-50 dark:bg-opacity-50"
  );

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      setBackgroundOpacity("bg-opacity-100  dark:bg-opacity-100");
    } else {
      setBackgroundOpacity("bg-opacity-50  dark:bg-opacity-50");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto flex w-full justify-between bg-white shadow dark:bg-black",
        backgroundOpacity
      )}
    >
      <div className="container mx-auto flex h-16 w-full items-center justify-between">
        <MainNav lang={lang} />
        <AuthNav lang={lang} token={token} />
        <MobileNav lang={lang} />
      </div>
    </header>
  );
};
