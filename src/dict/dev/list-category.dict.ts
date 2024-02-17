import { type Locale } from "#/i18n.config";

export interface FilterCategoryDictProps {
  title: { [key in Locale]: string };
  id: string;
}
export const courseCategoryDict: FilterCategoryDictProps[] = [
  {
    id: "r1",
    title: {
      fa: "فرانت اند",
      en: "front end",
    },
  },
  {
    id: "r2",
    title: {
      fa: "بک اند",
      en: "back end",
    },
  },
  {
    id: "r3",
    title: {
      fa: "هوش مصنوعی",
      en: "Artificial intelligence",
    },
  },
  {
    id: "r4",
    title: {
      fa: "دیتابیس",
      en: "database",
    },
  },
  {
    id: "r5",
    title: {
      fa: "امنیت",
      en: "security",
    },
  },
  {
    id: "r6",
    title: {
      fa: "تولید محتوا",
      en: "Content production",
    },
  },
];

export const blogCategory: FilterCategoryDictProps[] = [
  {
    id: "r1",
    title: {
      fa: "آموزشی",
      en: "Educational",
    },
  },
  {
    id: "r2",
    title: {
      fa: "تکنولوژی",
      en: "Technology",
    },
  },
  {
    id: "r3",
    title: {
      fa: "هوش مصنوعی",
      en: "Artificial Intelligence",
    },
  },
  {
    id: "r5",
    title: {
      fa: "امنیت",
      en: "security",
    },
  },
];
