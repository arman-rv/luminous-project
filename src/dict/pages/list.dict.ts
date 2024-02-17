import { Icons, type Icon } from "@/components/assets/icons";

import { type Locale } from "#/i18n.config";

export interface TitleDictProps {
  title: {
    [key in Locale]: string;
  };
}
export const courseDictTitle: TitleDictProps[] = [
  {
    title: {
      fa: "دوره ها",
      en: "Courses",
    },
  },
];
export const blogDictTitle: TitleDictProps[] = [
  {
    title: {
      fa: " اخبار",
      en: "News",
    },
  },
];

export type SortTypeStates = "ASC" | "DESC";

export type TempSortTypeStates = "asc" | "desc";

export type SwitchedListStates = "grid" | "list";

export interface GridListSwitcherDictProps {
  id: number;
  Icon: Icon;
  name: SwitchedListStates;
}

export const gridListSwitcherDict: GridListSwitcherDictProps[] = [
  {
    id: 1,
    Icon: Icons.layoutGrid,
    name: "grid",
  },
  {
    id: 2,
    Icon: Icons.layoutList,
    name: "list",
  },
];

export interface SortOptionDictProps {
  title: { [key in Locale]: string };
}
export const courseSortOptionsDict: SortOptionDictProps[] = [
  {
    title: {
      fa: "همه ی دوره ها",
      en: "all courses",
    },
  },
  {
    title: {
      fa: " تاریخ",
      en: "date ",
    },
  },
  {
    title: {
      fa: " قیمت",
      en: "price ",
    },
  },
];

export const blogSortOptionsDict: SortOptionDictProps[] = [
  {
    title: {
      fa: "همه ی اخبار",
      en: "all news",
    },
  },
  {
    title: {
      fa: "تاریخ",
      en: "The newest",
    },
  },
];
export interface SortSelectOptionDictProps {
  title: { [key in Locale]: string };
  option: {
    col: string;
    type: SortTypeStates;
  };
}
//   course options

export const coursePriceSortOptionsDict: SortSelectOptionDictProps[] = [
  {
    title: {
      fa: "ارزان ترین",
      en: "cheapest ",
    },
    option: {
      col: "cost",
      type: "ASC",
    },
  },
  {
    title: {
      fa: "گران ترین",
      en: "the most expensive ",
    },
    option: {
      col: "cost",
      type: "DESC",
    },
  },
];

export const courseDateSortOptionsDict: SortSelectOptionDictProps[] = [
  {
    title: {
      fa: "جدید ترین",
      en: "newest ",
    },
    option: {
      col: "InsertDate",
      type: "ASC",
    },
  },
  {
    title: {
      fa: "قدیم ترین",
      en: "oldest ",
    },
    option: {
      col: "InsertDate",
      type: "DESC",
    },
  },
];

//blog option

export const blogDateSortOptionsDict: SortSelectOptionDictProps[] = [
  {
    title: {
      fa: "جدید ترین",
      en: "newest ",
    },
    option: {
      col: "InsertDate",
      type: "ASC",
    },
  },
  {
    title: {
      fa: "قدیم ترین",
      en: "oldest ",
    },
    option: {
      col: "InsertDate",
      type: "DESC",
    },
  },
];
