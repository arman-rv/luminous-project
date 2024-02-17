"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { cva, type VariantProps } from "class-variance-authority";

import { Icons } from "@/components/assets/icons";

import { headerMenuOptionsDict } from "@/dict/layouts/root.dict";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

const mainNavTextVariants = cva(
  "text-lg h-full font-extrabold decoration-1 underline-offset-[12px] capitalize",
  {
    variants: {
      textColorVariant: {
        default: "text-primary",
        auth: "text-white hover:text-black",
      },
    },
    defaultVariants: {
      textColorVariant: "default",
    },
  }
);

const mainNavIconVariants = cva("", {
  variants: {
    iconColorVariant: {
      default: "fill-primary hover:fill-accent",
      auth: "fill-white hover:fill-black",
    },
  },
  defaultVariants: {
    iconColorVariant: "default",
  },
});

export interface MainNavProps
  extends VariantProps<typeof mainNavTextVariants>,
    VariantProps<typeof mainNavIconVariants> {
  lang: Locale;
  className?: string;
}

export const MainNav = ({
  lang,
  className,
  textColorVariant,
  iconColorVariant,
}: MainNavProps) => {
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <div className="flex basis-2/5 items-center">
        <Link
          aria-label="Home"
          href={`/${lang}`}
          className={cn(
            mainNavIconVariants({ iconColorVariant, className }),
            "transition-all duration-500",
            "flex items-center gap-2"
          )}
        >
          <Icons.logo className="hidden h-8 w-8 lg:block" />
          <Icons.luminousLogo className="h-24 w-24" />
        </Link>
      </div>
      <nav
        className={cn(
          "flex basis-3/5 items-center justify-center gap-7",
          className
        )}
      >
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex gap-4 lg:gap-8">
            {headerMenuOptionsDict.map((item) => (
              <li key={item.id} className="">
                <Link
                  href={`/${lang}/${item.href !== null ? item.href : ""}`}
                  className={cn(
                    mainNavTextVariants({ textColorVariant, className }),
                    segment === item.href &&
                      "h-full rounded-md bg-primary px-4 py-2 text-white",
                    segment !== item.href &&
                      "h-full transition-all duration-500 hover:rounded-md hover:bg-purple-200 hover:px-4 hover:py-2 hover:text-primary dark:hover:bg-purple-900"
                  )}
                >
                  {item.title[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
