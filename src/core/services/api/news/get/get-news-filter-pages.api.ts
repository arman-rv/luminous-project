"use server";

import { type SortTypeStates } from "@/dict/pages/list.dict";

import http from "@/core/services/interceptor";
import { newsFilterPagesSchema } from "@/core/validators/api";

type NewsFilterPagesParams = {
  query?: string;
  currentPage?: number;
  rows?: number;
  sortCol?: string;
  sortType?: SortTypeStates;
  tech?: string;
  // pageNumber?: number;
  // rowsOfPage?: number;
  // sortingCol?: string;
  // sortType?: string;
  // query?: string;
};

export const getNewsFilterPages = async ({
  currentPage = 0,
  query = "",
  rows = 2,
  sortCol = "Active",
  sortType = "DESC",
  tech = "",
}: NewsFilterPagesParams = {}) => {
  const response = await http.get("/News", {
    params: {
      PageNumber: currentPage,
      RowsOfPage: rows,
      ...(query && { Query: query }),
      SortingCol: sortCol,
      SortType: sortType,
      ...(tech && { NewsCategoryId: tech }),
    },
  });

  const parsedResult = newsFilterPagesSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error(
      "errors in get-news-filter-page.api",
      parsedResult.error.errors
    );

    return null;
  }
  return parsedResult.data;
};
