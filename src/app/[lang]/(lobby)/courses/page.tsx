import PageAnimationWrapper from "@/components/layouts/animation/page-animation-wrapper";
import {
  CourseFullCard,
  CourseMidCard,
} from "@/components/pages/list-page/cards";
import {
  CourseContentBar,
  NewsContentBar,
} from "@/components/pages/list-page/content/content-bar";
import {
  CourseContentBody,
  NewsContentBody,
} from "@/components/pages/list-page/content/content-body";
import {
  ListContent,
  ListPage,
  ListSideBar,
  ListTitle,
} from "@/components/pages/list-page/list-page";
import {
  ListCommingSoon,
  ListFree,
  ListSearch,
  ListTeacher,
} from "@/components/pages/list-page/side-bar-items";
import { CourseListCategory } from "@/components/pages/list-page/side-bar-items/list-category";
import { Pagination } from "@/components/elements/common";
import { FetchErrorAnnouncement } from "@/components/elements/common/error-announcement";

import {
  courseDateSortOptionsDict,
  coursePriceSortOptionsDict,
  courseSortOptionsDict,
  type SortTypeStates,
  type SwitchedListStates,
} from "@/dict/pages/list.dict";

import {
  getCourseCategories,
  getCoursesByPagination,
} from "@/core/services/api";

import { type Locale } from "#/i18n.config";

const CoursesPage = async ({
  params: { lang },
  searchParams,
}: {
  params: { lang: Locale };
  searchParams?: {
    query?: string;
    page?: string;
    perPage?: number;
    view?: SwitchedListStates;
    sort?: string; //sort option of content bar
    order?: SortTypeStates;
    techIds?: string;
    techCount?: number;
  };
}) => {
  const query = searchParams?.query || "";
  // const currentPage = Number(searchParams?.page) ?? 0;
  // const rows = searchParams?.perPage ?? 3;

  const pageAsNumber = Number(searchParams?.page);
  const fallbackPage =
    isNaN(pageAsNumber) || pageAsNumber < 1 ? 0 : pageAsNumber;
  const perPageAsNumber = Number(searchParams?.perPage);
  const limit = isNaN(perPageAsNumber) ? 6 : perPageAsNumber;

  const view = searchParams?.view || "grid";
  const sortCol = searchParams?.sort || "Active";
  const sortType = searchParams?.order || "DESC";
  const tech = searchParams?.techIds || "";
  const count = searchParams?.techCount || tech === "" ? 0 : 1;
  const data = await getCoursesByPagination({
    currentPage: fallbackPage,
    query,
    rows: limit,
    sortCol,
    sortType,
    tech,
    count,
  });
  const categoriesData = await getCourseCategories();

  return (
    <PageAnimationWrapper className="mt-10 h-full w-full">
      <ListPage>
        <ListTitle />
        <ListSideBar>
          <ListSearch lang={lang} />
          {!categoriesData ? (
            <FetchErrorAnnouncement
              lang={lang}
              place={{ fa: "دسته‌بندی‌ها", en: "Categories" }}
            />
          ) : (
            <CourseListCategory courseCategory={categoriesData} lang={lang} />
          )}
          <div className="flex gap-3 md:flex-col">
            <ListFree lang={lang} />
            <ListCommingSoon lang={lang} />
          </div>
          {/* <ListTeacher lang={lang} /> */}
        </ListSideBar>
        <ListContent>
          <CourseContentBar
            sortOptions={courseSortOptionsDict}
            sortDateOption={courseDateSortOptionsDict}
            sortPriceOption={coursePriceSortOptionsDict}
            lang={lang}
            selectedOption={{ col: sortCol, type: sortType }}
            switchedList={view}
          />
          {!data ? (
            <FetchErrorAnnouncement
              lang={lang}
              place={{ fa: "مطالب", en: "News" }}
            />
          ) : (
            <>
              <CourseContentBody
                lang={lang}
                CourseFullCard={CourseFullCard}
                CourseMidCard={CourseMidCard}
                courseData={data?.courseFilterDtos}
                switchedList={view}
              />
              <Pagination className=" mt-4" totalCount={data.totalCount} />
            </>
          )}
        </ListContent>
      </ListPage>
    </PageAnimationWrapper>
  );
};

export default CoursesPage;
