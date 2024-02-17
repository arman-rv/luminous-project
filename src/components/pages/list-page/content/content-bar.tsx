"use client";

import { useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/elements/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/elements/ui/dropdown-menu";
import { Icons } from "@/components/assets/icons";

import {
  type SortSelectOptionDictProps,
  type SortOptionDictProps,
  type SortTypeStates,
  type SwitchedListStates,
} from "@/dict/pages/list.dict";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

import { SwitchedList } from "./switched-list";

type CourseContentBarProps = {
  sortOptions: SortOptionDictProps[];
  sortDateOption: SortSelectOptionDictProps[];
  sortPriceOption: SortSelectOptionDictProps[];
  lang: Locale;
  selectedOption: { col: string; type: SortTypeStates };
  switchedList: SwitchedListStates;
};
type NewsContentBarProps = {
  sortOptions: SortOptionDictProps[];
  sortDateOption: SortSelectOptionDictProps[];
  lang: Locale;
  selectedOption: { col: string; type: SortTypeStates };
  switchedList: SwitchedListStates;
};
//courses
export const CourseContentBar = ({
  lang,
  sortOptions,
  sortDateOption,
  sortPriceOption,
  selectedOption,
  switchedList,
}: CourseContentBarProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSortClick = (value: { col: string; type: SortTypeStates }) => {
    const params = new URLSearchParams(searchParams);

    params.set("sort", value.col);
    params.set("order", value.type);
    startTransition(() => router.push(`${pathname}?${params.toString()}`));
  };

  return (
    <>
      <div className="flex items-center justify-between rounded-xl bg-card p-4  shadow">
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="cursor-pointer font-bold hover:text-primary focus:border-b-2 focus:text-primary"
              asChild
            >
              <Button aria-label="Sort products" size="lg" disabled={isPending}>
                {sortOptions[0]?.title[lang]}
              </Button>
            </DropdownMenuTrigger>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="cursor-pointer font-bold hover:text-primary focus:border-b-2 focus:text-primary"
              asChild
            >
              <Button aria-label="Sort products" size="lg" disabled={isPending}>
                {sortOptions[1]?.title[lang]}
                <Icons.downArrow className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {sortDateOption?.map((dateOption, index) => (
                <DropdownMenuItem
                  key={index}
                  className={cn(
                    " cursor-pointer bg-card hover:text-primary focus:text-primary",
                    selectedOption.col === dateOption.option.col &&
                      selectedOption.type === dateOption.option.type &&
                      "text-primary"
                  )}
                  onClick={() => handleSortClick(dateOption.option)}
                >
                  {dateOption.title[lang]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="cursor-pointer font-bold hover:text-primary focus:border-b-2 focus:text-primary"
              asChild
            >
              <Button aria-label="Sort products" size="lg" disabled={isPending}>
                {sortOptions[2]?.title[lang]}
                <Icons.downArrow className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {sortPriceOption?.map((priceOption, index) => (
                <DropdownMenuItem
                  key={index}
                  className={cn(
                    " cursor-pointer bg-card hover:text-primary focus:text-primary ",
                    selectedOption.col === priceOption.option.col &&
                      selectedOption.type === priceOption.option.type &&
                      "text-primary"
                  )}
                  onClick={() => handleSortClick(priceOption.option)}
                >
                  {priceOption.title[lang]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <SwitchedList switchedList={switchedList} />
      </div>
    </>
  );
};

//news

export const NewsContentBar = ({
  lang,
  sortOptions,
  sortDateOption,
  selectedOption,
  switchedList,
}: NewsContentBarProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSortClick = (value: { col: string; type: SortTypeStates }) => {
    const params = new URLSearchParams(searchParams);

    params.set("sort", value.col);
    params.set("order", value.type);
    startTransition(() => router.push(`${pathname}?${params.toString()}`));
  };

  const handleViewClick = (value: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("view", value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="flex items-center justify-between rounded-xl bg-card p-4  shadow">
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="cursor-pointer font-bold hover:text-primary focus:border-b-2 focus:text-primary"
              asChild
            >
              <Button aria-label="Sort products" size="lg" disabled={isPending}>
                {sortOptions[0]?.title[lang]}
              </Button>
            </DropdownMenuTrigger>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="cursor-pointer font-bold hover:text-primary focus:border-b-2 focus:text-primary"
              asChild
            >
              <Button aria-label="Sort products" size="lg" disabled={isPending}>
                {sortOptions[1]?.title[lang]}
                <Icons.downArrow className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {sortDateOption?.map((dateOption, index) => (
                <DropdownMenuItem
                  key={index}
                  className={cn(
                    " cursor-pointer bg-card hover:text-primary focus:text-primary",
                    selectedOption.col === dateOption.option.col &&
                      selectedOption.type === dateOption.option.type &&
                      "text-primary"
                  )}
                  onClick={() => handleSortClick(dateOption.option)}
                >
                  {dateOption.title[lang]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <SwitchedList switchedList={switchedList} />
      </div>
    </>
  );
};
