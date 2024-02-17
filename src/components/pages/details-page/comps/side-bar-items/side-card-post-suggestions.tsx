"use client";

import { useState } from "react";
import Link from "next/link";

import { postSuggestionSideCardDict } from "@/dict/pages/details.dict";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

import { SideCard } from ".";

export const PostSuggestionSideCard = ({
  lang,
  links,
}: {
  lang: Locale;
  links: {
    title: {
      [key in Locale]: string;
    };
    href: string;
  }[];
}) => {
  const [hovered, setHovered] = useState(-1);
  return (
    <SideCard
      lang={lang}
      title={postSuggestionSideCardDict.text}
      color={postSuggestionSideCardDict.color}
    >
      <ul className="flex flex-col text-xl">
        {links.map((link, index) => (
          <li
            key={index}
            className={cn(
              "border-b border-dashed border-b-slate-500 py-4 font-light transition-colors duration-500",
              index === links.length - 1 && "border-none pb-0",
              hovered !== -1
                ? hovered === index
                  ? "text-zinc-900"
                  : "text-zinc-400"
                : "text-zinc-500"
            )}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(-1)}
          >
            <Link href={link.href}>{link.title[lang]}</Link>
          </li>
        ))}
      </ul>
    </SideCard>
  );
};
