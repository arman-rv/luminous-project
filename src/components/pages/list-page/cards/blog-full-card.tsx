"use client";

import Link from "next/link";

import { type NewsType } from "@/core/validators/api";

import { type Locale } from "#/i18n.config";
import Image from "#/node_modules/next/image";

export type BlogFullCardProps = {
  item: NewsType;
  lang: Locale;
};
export const BlogFullCard = ({
  item: { currentImageAddressTumb, title, miniDescribe, newsCatregoryName },
  lang,
}: BlogFullCardProps) => {
  return (
    <div className="flex h-[170px] w-full gap-3 rounded-xl bg-card px-4 py-3 shadow">
      <Link href="#" className="relative aspect-[2/1] basis-1/3 ">
        {/* <Image
          src={currentImageAddressTumb}
          alt=""
          fill
          className="rounded-xl object-cover"
        /> */}
      </Link>
      <div className=" basis-2/3">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-xl font-semibold text-text">{title}</h2>
          <p className="line-clamp-2 w-[80%] text-sm text-text ">
            {miniDescribe}
          </p>
        </div>
        <div className="mt-10 flex items-end justify-between">
          <span className="w-fit rounded-md bg-secondary px-2 py-1 text-xs text-primary">
            {" "}
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
    </div>
  );
};
