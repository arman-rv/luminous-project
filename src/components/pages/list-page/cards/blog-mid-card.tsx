"use client";

import Link from "next/link";

import { type NewsType } from "@/core/validators/api";

import { type Locale } from "#/i18n.config";
import Image from "#/node_modules/next/image";

export type BlogMidCardProps = {
  item: NewsType;
  lang: Locale;
};
export const BlogMidCard = ({
  item: { currentImageAddressTumb, title, miniDescribe, newsCatregoryName },
  lang,
}: BlogMidCardProps) => {
  return (
    <div className="flex w-full flex-col gap-2 rounded-xl bg-card px-4 py-2 shadow">
      <Link href="#" className="relative aspect-video h-[200px]">
        {/* <Image
          src={currentImageAddressTumb}
          alt=""
          fill
          className="rounded-xl object-cover"
        /> */}
      </Link>
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-xl font-semibold text-text">{title}</h2>
        <p className="line-clamp-2 w-[80%] text-sm text-text ">
          {miniDescribe}
        </p>
      </div>
      <div className="mt-8 flex items-end justify-between">
        <span className=" w-fit rounded-md bg-secondary px-2 py-1 text-xs text-primary">
          {newsCatregoryName}
        </span>
        <Link
          href="#"
          className="rounded-xl border border-purple-primary p-1 text-sm text-purple-primary"
        >
          {lang === "fa" ? "ادامه مطلب" : "more"}
        </Link>
      </div>
    </div>
  );
};
