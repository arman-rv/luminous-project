"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useTheme } from "next-themes";
import { IoColorPalette } from "react-icons/io5";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";

import { Button } from "@/components/elements/ui";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

export const SettingButton = ({ lang }: { lang: Locale }) => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const pathname = usePathname();

  const redirectedPathname = (locale: string) => {
    if (!pathname) return "/";

    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <>
      <Button
        className="fixed bottom-10 start-10 z-50 h-12 w-12 rounded-full bg-primary p-3 transition-all duration-500 hover:bg-accent"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <IoColorPalette className="h-6 w-6 text-white" />
      </Button>
      <div>
        <div
          data-state={open ? "open" : "closed"}
          data-side={lang === "fa" ? "left" : "right"}
          className={cn(
            "fixed bottom-10 start-24 z-50 h-12 data-[state=open]:block data-[state=closed]:hidden data-[state=closed]:opacity-0",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2"
          )}
        >
          <div className="flex h-full w-full items-center justify-center gap-3 rounded-full bg-black px-3 dark:bg-white">
            <ColorButton
              name="purple"
              themeColor="bg-[#590ba8]"
              ring="ring-[#590ba8]"
            />
            <ColorButton
              name="blue"
              themeColor="bg-[#590ba8]"
              ring="ring-blue-500"
            />
            <ColorButton
              name="orange"
              themeColor="bg-[#590ba8]"
              ring="ring-orange-500"
            />
            <Button
              className="h-8 w-8 cursor-pointer rounded-full bg-white p-0 text-xl transition-all duration-500 ease-in-out active:rotate-45 dark:bg-black"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <MdLightMode className="block dark:hidden" />
              <MdOutlineDarkMode className="hidden dark:block" />
            </Button>
            <Link
              href={redirectedPathname(lang === "fa" ? "en" : "fa")}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-center text-xs font-bold text-white"
            >
              {{ fa: "EN", en: "FA" }[lang]}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const ColorButton = ({
  name,
  themeColor,
  ring,
}: {
  name: string;
  themeColor: string;
  ring: string;
}) => {
  const [currentTheme, setCurrentTheme] = useState("purple");

  return (
    <Button
      className={cn(
        "aspect-square h-6 w-6 cursor-pointer rounded-full border-[3px] border-black bg-black p-0 ring-[3px] dark:border-white dark:bg-white",
        ring,
        currentTheme === name && themeColor
      )}
    />
  );
};
