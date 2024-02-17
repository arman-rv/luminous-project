import {
  type BlogFullCardProps,
  type BlogMidCardProps,
  type CourseFullCardProps,
  type CourseMidCardProps,
} from "@/components/pages/list-page/cards";

import { type SwitchedListStates } from "@/dict/pages/list.dict";

import {
  type AllCourseFilterDtoType,
  type AllNewsType,
} from "@/core/validators/api";
import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

type CourseContentBodyProps = {
  lang: Locale;
  switchedList: SwitchedListStates;
  CourseFullCard: React.FC<CourseFullCardProps>;
  CourseMidCard: React.FC<CourseMidCardProps>;
  courseData: AllCourseFilterDtoType;
};
type NewsContentBodyProps = {
  lang: Locale;
  switchedList: SwitchedListStates;
  NewsFullCard: React.FC<BlogFullCardProps>;
  NewsMidCard: React.FC<BlogMidCardProps>;
  newsData: AllNewsType;
};
//courses
export const CourseContentBody = (props: CourseContentBodyProps) => {
  const { lang, switchedList, CourseFullCard, CourseMidCard, courseData } =
    props;
  return (
    <div className="">
      <div
        className={cn(
          "grid gap-4",
          switchedList === "grid" ? "grid-cols-3 " : "grid-cols-1 "
        )}
      >
        {courseData.map((item, index) => (
          <>
            {switchedList === "grid" ? (
              <CourseMidCard key={index} item={item} lang={lang} />
            ) : (
              <CourseFullCard key={index} item={item} lang={lang} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};
//news
export const NewsContentBody = (props: NewsContentBodyProps) => {
  const { lang, switchedList, NewsFullCard, NewsMidCard, newsData } = props;
  return (
    <div className="">
      <div
        className={cn(
          "grid gap-4",
          switchedList === "grid" ? "grid-cols-3 " : "grid-cols-1 "
        )}
      >
        {newsData.map((item, index) => (
          <>
            {switchedList === "grid" ? (
              <NewsMidCard key={index} item={item} lang={lang} />
            ) : (
              <NewsFullCard key={index} item={item} lang={lang} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};
