"use client";

import { useTheme } from "next-themes";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";

import { titleDict } from "@/dict/layouts/root.dict";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

export const TempTitle = ({ lang }: { lang: Locale }) => {
  return (
    <div className="flex w-full items-center justify-center gap-2 font-black">
      <h1 className={cn(lang === "en" ? "text-sm" : "text-xl", "h-fit")}>
        {titleDict.title[lang]}
      </h1>
      {/* <div
        className="h-fit cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 hover:text-slate-400 active:scale-90"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <MdLightMode className="block dark:hidden" />
        <MdOutlineDarkMode className="hidden dark:block" />
      </div> */}
    </div>
  );
};
