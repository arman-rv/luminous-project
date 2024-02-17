import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/elements/ui/client";
import { Icons } from "@/components/assets/icons";

import { headerMenuOptionsDict } from "@/dict/layouts/root.dict";

import { type Locale } from "#/i18n.config";

export const MobileNav = ({ lang }: { lang: Locale }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="h-full rounded-lg text-primary transition-all duration-500 hover:text-accent md:hidden">
          <Icons.menu />
          <span className="sr-only">Toggle Menu</span>
        </div>
      </SheetTrigger>
      <SheetContent
        side={lang === "en" ? "left" : "right"}
        className="w-[200px] border-none bg-card"
      >
        <SheetHeader>
          <SheetTitle className="text-2xl">Luminous</SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col gap-2 p-3">
          {headerMenuOptionsDict.map((item) => (
            <li key={item.id} className="font-medium">
              <Link href={`/${lang}/${item.href}`} className="">
                {item.title[lang]}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
