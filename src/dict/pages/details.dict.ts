import { type Locale } from "#/i18n.config";

export interface SideCardDictProps {
  text: {
    [key in Locale]: string;
  };
  color: string;
}

export const linkSideCardDict: SideCardDictProps = {
  text: {
    en: "Short Link",
    fa: "لینک کوتاه",
  },
  color: "bg-amber-500",
};

export const postSuggestionSideCardDict: SideCardDictProps = {
  text: {
    en: "Latest Posts",
    fa: "جدیدترین نوشته‌ها",
  },
  color: "bg-pink-500",
};

export const categoriesSideCardDict: SideCardDictProps = {
  text: {
    en: "Categories",
    fa: "دسته‌بندی‌ها",
  },
  color: "bg-green-500",
};
