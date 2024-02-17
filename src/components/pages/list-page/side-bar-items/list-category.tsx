"use client";

import { count } from "console";
import { useEffect, useId, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Checkbox } from "@/components/elements/ui/checkbox";
import { Label } from "@/components/elements/ui/label";

import { type CourseCategoryListType } from "@/core/validators/api/course/get/course-categories.schema";
import { type NewsListCategoriesListType } from "@/core/validators/api/news/get/news-list-categories-schema";

import { type Locale } from "#/i18n.config";

type CourseListCategoryProps = {
  lang: Locale;
  courseCategory: CourseCategoryListType;
};
type NewsListCategoryProps = {
  lang: Locale;
  newsCategory: NewsListCategoriesListType;
};
export const CourseListCategory = ({
  lang,
  courseCategory,
}: CourseListCategoryProps) => {
  const id = useId();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const techIds = searchParams.get("tech");

  const [categoryIds, setCategoryIds] = useState<number[] | []>(
    techIds ? techIds?.split(",").map(Number) : []
  );
  useEffect(() => {
    const params = new URLSearchParams();
    categoryIds.length !== 0 && params.set("techIds", categoryIds.join(","));
    router.push(`${pathname}?${params.toString()}`);
  }, [categoryIds]);

  return (
    <div className="flex w-full  flex-col justify-start gap-4 rounded-xl bg-card p-4 text-text font-bold text-[#333] shadow">
      {{ fa: "دسته بندی دوره ها", en: "Course Category" }[lang]}

      {courseCategory.map((item) => (
        <div key={item.id} className="flex flex-row  font-[#666] text-sm">
          <Checkbox
            id={`${id}-course${item.id}`}
            checked={categoryIds?.includes(item.id) ?? false}
            onCheckedChange={(value) => {
              if (value) {
                setCategoryIds([...(categoryIds ?? []), item.id]);
              } else {
                setCategoryIds(
                  categoryIds?.filter((id) => id !== item.id) ?? null
                );
              }
            }}
          />
          <Label
            htmlFor={`${id}-course${item.id}`}
            className="mr-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {item.techName}
          </Label>
        </div>
      ))}
    </div>
  );
};

export const NewsListCategory = ({
  lang,
  newsCategory,
}: NewsListCategoryProps) => {
  const id = useId();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const techIds = searchParams.get("tech");
  const [catNewsId, setCatNewsId] = useState(techIds ? techIds : "");
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("techIds", catNewsId ? catNewsId.toString() : "");
    router.push(`${pathname}?${params.toString()}`);
  }, [catNewsId]);

  return (
    <div className="flex w-full  flex-col justify-start gap-4 rounded-xl bg-card p-4 text-text font-bold text-[#333] shadow">
      {{ fa: "دسته بندی اخبار", en: "News Category" }[lang]}

      {newsCategory.map((item) => (
        <div key={item.id} className="flex flex-row  font-[#666] text-sm">
          <Checkbox
            id={`${id}-news${item.id}`}
            checked={item.id === catNewsId ?? false}
            onCheckedChange={(value) => {
              if (value) {
                setCatNewsId(item.id);
              } else {
                setCatNewsId(null);
              }
            }}
          />
          <Label
            htmlFor={`${id}-news${item.id}`}
            className="mr-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {item.categoryName}
          </Label>
        </div>
      ))}
    </div>
  );
};
