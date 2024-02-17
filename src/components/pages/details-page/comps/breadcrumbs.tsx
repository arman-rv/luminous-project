import { Fragment } from "react";
import Link from "next/link";

import { PiCaretLeft } from "react-icons/pi";

import { Icons } from "@/components/assets/icons";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

type BreadcrumbsProps = {
  lang: Locale;
  segments: {
    title: string;
    href: string;
  }[];
};

export const Breadcrumbs = ({ lang, segments }: BreadcrumbsProps) => {
  return (
    <div className="shadow-light mt-5 overflow-hidden rounded-xl bg-card px-3">
      <div className="flex items-center text-base">
        <Link href={`/${lang}`} className="text-gray-700">
          <Icons.home className="me-2 ms-5 h-7 w-7" />
        </Link>
        <PiCaretLeft
          className={cn(
            "h-14 w-14 scale-[160%] text-background",
            lang === "en" && "-scale-x-100"
          )}
        />
        {segments.map((segment, index) => (
          <Fragment key={index}>
            <Link
              href={segment.href}
              className={cn(
                "me-2 ms-4 text-zinc-700",
                index === segments.length - 1 && "font-extrabold"
              )}
            >
              {segment.title}
            </Link>
            {index !== segments.length - 1 && (
              <PiCaretLeft
                className={cn(
                  "h-14 w-14 scale-[160%] text-background",
                  lang === "en" && "-scale-x-100"
                )}
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
