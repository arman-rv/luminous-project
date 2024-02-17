"use client";

import * as React from "react";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel, {
  type EmblaCarouselType,
  type EmblaOptionsType,
} from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { Button, H4 } from "@/components/elements/ui";
import { Icons } from "@/components/assets/icons";

import {
  type CourseByPaginationType,
  type TopCourseListType,
} from "@/core/validators/api";
import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

import { CourseMidCard } from "../../list-page/cards";

export const CourseCarousel = ({
  lang,
  data,
  className,
}: {
  lang: Locale;
  data: CourseByPaginationType;
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
          {data.courseFilterDtos.map((course, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_25%] pl-4"
              dir={lang === "fa" ? "rtl" : "ltr"}
            >
              {/* <div className="flex translate-x-1/2 flex-col rounded-2xl bg-card">
                <div className="relative flex h-40 items-center justify-center rounded-2xl border">
                  <Icons.placeholder className="absolute h-8 w-8 text-slate-600" />
                </div>
                <div className="grow px-5 py-3">
                  <H4 className="mb-2.5 line-clamp-2 max-h-12 text-xl font-semibold">
                    {course.title}
                  </H4>
                  <p className="line-clamp-2 h-10 text-sm">{course.describe}</p>
                </div>
                <div></div>
              </div> */}
              <CourseMidCard item={course} lang={lang} />
            </div>
          ))}
        </div>
      </div>
      {data.courseFilterDtos.length > 1 ? (
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
