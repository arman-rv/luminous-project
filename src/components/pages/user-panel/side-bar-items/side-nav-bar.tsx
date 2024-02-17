"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { panelAsideOption } from "@/dict/pages/user-panel.dict";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

export const SideBarNav = ({ lang }: { lang: Locale }) => {
  const segment = useSelectedLayoutSegment();

  return (
    <ul className="w-full text-white">
      {panelAsideOption.map((item, index) => {
        return (
          <Link key={index} href={`/${lang}/dashboard/${item.href}`}>
            <li
              className={cn(
                "ms-10 flex cursor-pointer items-center gap-2 rounded-s-xl px-4 py-2 text-sm font-semibold text-white transition-all duration-500",
                segment === item.href && "bg-card text-primary",
                segment !== item.href && "hover:bg-white/30"
              )}
            >
              <item.Icon />
              <p>{item.title[lang]}</p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};
