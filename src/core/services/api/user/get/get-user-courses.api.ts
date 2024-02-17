import { type TempSortTypeStates } from "@/dict/pages/list.dict";

import http from "@/core/services/interceptor";
import { allUserCoursesSchema } from "@/core/validators/api";

type GetUserCoursesQueryParams = {
  page?: number;
  perPage?: number;
  sortingCol?: string;
  sortType?: TempSortTypeStates;
  query?: string;
};

export const getUserCourses = async ({
  page = 1,
  perPage = 5,
  sortingCol = "LastUpdate",
  sortType = "desc",
  query = "",
}: GetUserCoursesQueryParams = {}) => {
  const response = await http.get("/SharePanel/GetMyCourses", {
    params: {
      PageNumber: page,
      RowsOfPage: perPage,
      SortingCol: sortingCol,
      SortType: sortType,
      Query: query,
    },
  });

  const parsedResult = allUserCoursesSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error("error in get-user-courses.api", parsedResult.error.errors);

    return null;
  }

  return parsedResult.data;
};
