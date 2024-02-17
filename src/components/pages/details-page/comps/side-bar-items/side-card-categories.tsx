import { useState } from "react";
import Link from "next/link";

import { TbTriangleFilled } from "react-icons/tb";

import { categoriesSideCardDict } from "@/dict/pages/details.dict";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

import { SideCard } from ".";

export const CategoriesSideCard = ({
  lang,
  categories,
}: {
  lang: Locale;
  categories: {
    title: {
      [key in Locale]: string;
    };
    href: string;
  }[];
}) => {
  return (
    <SideCard
      lang={lang}
      title={categoriesSideCardDict.text}
      color={categoriesSideCardDict.color}
    >
      <ul className="flex flex-col text-xl">
        {categories.map((category, index) => (
          <li
            key={index}
            className={cn(
              "flex items-center gap-x-2 py-3 font-light text-zinc-500 transition-colors duration-500 hover:text-zinc-900",
              index === categories.length - 1 && "pb-0"
            )}
          >
            {/* <TbTriangleFilled  /> */}
            {/* <svg
              // stroke="currentColor"
              // fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-3 w-3 -rotate-90 fill-green-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 -rotate-90 fill-green-500"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z"
                stroke-width="0"
              ></path>
            </svg> */}
            <Link href={category.href}>{category.title[lang]}</Link>
          </li>
        ))}
      </ul>
    </SideCard>
  );
};
