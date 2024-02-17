import Link from "next/link";

import { TitleBox } from "@/components/pages/lobby";
import { CourseCard } from "@/components/pages/lobby/courses/course-card";
import { CourseSideCard } from "@/components/pages/lobby/courses/course-side-card";
import { FetchErrorAnnouncement } from "@/components/elements/common/error-announcement";
import { Button } from "@/components/elements/ui";

import { coursesTitleBoxDict } from "@/dict/pages/lobby.dict";

import { getCoursesByPagination, getTopCoursesList } from "@/core/services/api";

import { type Locale } from "#/i18n.config";

import { CourseCarousel } from "./course-caraousel";

export const CourseSection = async ({ lang }: { lang: Locale }) => {
  const data = await getCoursesByPagination();

  return (
    <section className="relative mt-24">
      <div className="container">
        <TitleBox
          lang={lang}
          title={coursesTitleBoxDict.title}
          desc={coursesTitleBoxDict.subtitle}
        />
        {!data ? (
          <FetchErrorAnnouncement
            place={coursesTitleBoxDict.title}
            lang={lang}
          />
        ) : (
          <CourseCarousel lang={lang} data={data} />
        )}
      </div>
    </section>
  );
};
