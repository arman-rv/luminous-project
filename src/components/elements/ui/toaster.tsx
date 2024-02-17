"use client";

import { Toaster as SonnerToaster } from "sonner";

import { type Locale } from "#/i18n.config";

export const Toaster = ({ lang }: { lang: Locale }) => {
  return (
    <SonnerToaster
      position={lang === "en" ? "top-left" : "top-right"}
      dir={lang === "en" ? "ltr" : "rtl"}
    />
  );
};
