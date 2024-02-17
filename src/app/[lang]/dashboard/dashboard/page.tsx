import React from "react";

import { AllUserCoursesTable } from "@/components/pages/user-panel/data-tables/all-user-courses-table";
import { DataTableSkeleton } from "@/components/elements/data-table/data-table-skeleton";
import { H2 } from "@/components/elements/ui";

import { getUserCourses } from "@/core/services/api";
import { type UserCourseType } from "@/core/validators/api";
import { allUserCoursesSearchParamsSchema } from "@/lib/validators/params";

import { type Locale } from "#/i18n.config";

interface CourseDashboardProps {
  params: {
    lang: Locale;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const CourseDashboard = async ({
  params: { lang },
  searchParams,
}: CourseDashboardProps) => {
  const { page, per_page, courseTitle, sort } =
    allUserCoursesSearchParamsSchema.parse(searchParams);

  // Fallback page for invalid page numbers
  const pageAsNumber = Number(page);
  const fallbackPage =
    isNaN(pageAsNumber) || pageAsNumber < 1 ? 1 : pageAsNumber;
  const perPageAsNumber = Number(per_page);
  const limit = isNaN(perPageAsNumber) ? 7 : perPageAsNumber;
  const [column, order] = (sort?.split(".") as [
    keyof UserCourseType | undefined,
    "asc" | "desc" | undefined,
  ]) ?? ["courseTitle", "asc"];

  const data = await getUserCourses({
    page: fallbackPage,
    perPage: perPageAsNumber,
    query: courseTitle,
    sortingCol: column,
    sortType: order,
  });

  if (!data) return null;

  return (
    <div className="flex h-full w-full flex-col space-y-6">
      <div className="flex flex-col gap-4 xs:flex-row xs:items-center xs:justify-between">
        <H2 className="text-2xl font-bold tracking-tight">
          {{ fa: "دوره‌ها", en: "Courses" }[lang]}
        </H2>
      </div>
      <div className="h-full w-full">
        <React.Suspense fallback={<DataTableSkeleton columnCount={4} />}>
          <AllUserCoursesTable
            lang={lang}
            data={data}
            limit={perPageAsNumber}
          />
        </React.Suspense>
      </div>
    </div>
  );
};
export default CourseDashboard;
