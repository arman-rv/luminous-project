"use server";

import { type SortTypeStates } from "@/dict/pages/list.dict";

import http from "@/core/services/interceptor";
import { courseByPaginationSchema } from "@/core/validators/api";

type GetCoursesQueryParams = {
  query?: string;
  currentPage?: number;
  rows?: number;
  sortCol?: string;
  sortType?: SortTypeStates;
  tech?: string;
  count?: number;
};

export const getCoursesByPagination = async ({
  currentPage = 0,
  query = "",
  rows = 2,
  sortCol = "Active",
  sortType = "DESC",
  tech = "",
  count = 0,
}: GetCoursesQueryParams = {}) => {
  const response = await http.get(`/Home/GetCoursesWithPagination`, {
    params: {
      PageNumber: currentPage,
      RowsOfPage: rows,
      ...(query && { Query: query }),
      SortingCol: sortCol,
      SortType: sortType,
      ...(tech && { ListTech: tech }),
      TechCount: count,
    },
  });

  const parsedResult = courseByPaginationSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error("error in get-course-query.api", parsedResult.error.errors);

    return null;
  }

  return parsedResult.data;
};
