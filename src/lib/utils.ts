import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { type Locale } from "#/i18n.config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  date: string,
  locale: Locale,
  option: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
) {
  return new Intl.DateTimeFormat(locale, option).format(new Date(date));
}

export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

export const formDataMaker = (data: { [keys: string]: string }) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    const item = data[key];

    if (item) {
      console.log(key, item);
      formData.append(key, item);
    }
  });

  return formData;
};
