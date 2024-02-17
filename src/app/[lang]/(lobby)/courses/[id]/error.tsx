"use client";

import { type Locale } from "#/i18n.config";

const CourseNotFound = ({ lang }: { lang: Locale }) => {
  return (
    <p>
      {
        {
          fa: "مشکلی رخ داد.",
          en: "An error occurred",
        }[lang]
      }
    </p>
  );
};

export default CourseNotFound;
