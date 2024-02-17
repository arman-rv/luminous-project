import { TitleBox } from "@/components/pages/lobby";
import { CategoryCard } from "@/components/pages/lobby/categories/category-card";
import { FetchErrorAnnouncement } from "@/components/elements/common/error-announcement";

import {
  categoriesColorDict,
  categoriesTitleBoxDict,
} from "@/dict/pages/lobby.dict";

import { getCourseCategories } from "@/core/services/api";

import { type Locale } from "#/i18n.config";

export const CategoriesSection = async ({ lang }: { lang: Locale }) => {
  const data = await getCourseCategories();

  return (
    <section className="relative mt-24">
      <div className="container">
        <TitleBox
          lang={lang}
          title={categoriesTitleBoxDict.title}
          desc={categoriesTitleBoxDict.subtitle}
        />
        {!data ? (
          <FetchErrorAnnouncement
            place={categoriesTitleBoxDict.title}
            lang={lang}
          />
        ) : (
          <div className="flex w-full place-content-center place-items-center items-center justify-center">
            <div className="grid w-fit grid-cols-2 items-center gap-3 md:grid-cols-4 md:gap-5">
              {data.map((category, index) => (
                <CategoryCard
                  key={category.id}
                  lang={lang}
                  id={category.id}
                  title={category.techName}
                  desc={category.describe}
                  color={categoriesColorDict[index]?.color}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
