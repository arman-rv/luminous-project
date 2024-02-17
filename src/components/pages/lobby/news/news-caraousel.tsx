"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel, {
  type EmblaCarouselType,
  type EmblaOptionsType,
} from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { Button, H4 } from "@/components/elements/ui";
import { Icons } from "@/components/assets/icons";

import { type NewsFilterPagesType } from "@/core/validators/api";
import { cn, formatDate } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

export const NewsCarousel = ({
  lang,
  data,
  className,
}: {
  lang: Locale;
  data: NewsFilterPagesType;
  className?: string;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay()]
  );

  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const scrollTo = React.useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div
      dir="ltr"
      aria-label="Carousel"
      className={cn("flex w-full flex-col gap-2", className)}
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div
          className="flex touch-pan-y"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {data.news.map((item, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_25%] pl-4"
              dir={lang === "fa" ? "rtl" : "ltr"}
            >
              <div className="flex h-full translate-x-1/2 flex-col rounded-2xl bg-card p-1">
                <div className="relative flex h-40 items-center justify-center rounded-2xl border border-gray-200 bg-gray-200">
                  <Icons.placeholder className="absolute h-8 w-8 text-slate-600" />
                </div>
                <div className="mt-4 flex grow flex-col gap-y-8 px-5 py-3">
                  <H4 className="mb-2.5 line-clamp-2 max-h-20 text-xl font-semibold">
                    {item.title}
                  </H4>
                  <p className="line-clamp-4 h-20 text-sm font-light">
                    {item.miniDescribe}
                  </p>
                </div>
                <div className="mt-auto space-y-4 px-5">
                  <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex cursor-pointer items-center gap-x-1 transition-colors hover:text-primary">
                      <Icons.user className="h-4 w-4" />
                      <p>{item.addUserFullName}</p>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <Icons.calender className="h-4 w-4 fill-slate-400" />
                      <p className="">{formatDate(item.insertDate, lang)}</p>
                    </div>
                  </div>
                  <div className="flex justify-center border-t border-t-gray-100 py-3.5 dark:border-gray-700">
                    <Link
                      href={`/blog/${item.id}`}
                      className="group flex items-center gap-x-2 text-white"
                    >
                      <p className="space-x-2.5 text-lg font-bold text-zinc-700 transition-colors duration-500 group-hover:text-primary">
                        {{ fa: "مطالعه مقاله", en: "Read Article" }[lang]}
                      </p>
                      <Icons.rightArrow className="flex h-5 w-5 items-center justify-center rounded-full bg-black p-1 text-white duration-500 group-hover:bg-primary" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {data.news.length > 1 ? (
        <div className="flex w-full items-center justify-center gap-2">
          <Button
            variant="default"
            size="icon"
            className="mr-0.5 aspect-square h-7 w-7 rounded-none sm:mr-2 sm:h-8 sm:w-8"
            disabled={prevBtnDisabled}
            onClick={scrollPrev}
          >
            <ChevronLeftIcon
              className="h-3 w-3 sm:h-4 sm:w-4"
              aria-hidden="true"
            />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="default"
            size="icon"
            className="ml-0.5 aspect-square h-7 w-7 rounded-none sm:ml-2 sm:h-8 sm:w-8"
            disabled={nextBtnDisabled}
            onClick={scrollNext}
          >
            <ChevronRightIcon
              className="h-3 w-3 sm:h-4 sm:w-4"
              aria-hidden="true"
            />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      ) : null}
    </div>
  );
};
