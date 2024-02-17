import { getLandingRepost } from "@/core/services/api/landing/get-landing-repost.api";
import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

import { TitleBox } from "..";

export const InfoSection = async ({ lang }: { lang: Locale }) => {
  const data = await getLandingRepost();

  return (
    <section className="relative mt-20 sm:mt-40">
      <div className="container">
        <TitleBox
          lang={lang}
          title={{ en: "We are not alone", fa: "ما تنها نیستیم" }}
        />
        <div className="grid w-full cursor-default grid-cols-2 gap-5 rounded-lg bg-card p-3 lg:grid-cols-4">
          <Box
            name={{ fa: "اساتید ما", en: "Our Teachers" }[lang]}
            number={data.teacherCount}
            color="bg-red-300"
          />
          <Box
            name={{ fa: "دانشجویان ما", en: "Our Students" }[lang]}
            number={data.studentCount}
            color="bg-emerald-400"
          />
          <Box
            name={{ fa: "دوره‌های ما", en: "Our Courses" }[lang]}
            number={data.courseCount}
            color="bg-yellow-300"
          />
          <Box
            name={{ fa: "مقالات ما", en: "Our News" }[lang]}
            number={data.newsCount}
            color="bg-blue-300"
          />
        </div>
      </div>
    </section>
  );
};

const Box = ({
  name,
  number,
  color,
}: {
  name: string;
  number: number;
  color: string;
}) => {
  return (
    <div
      className={cn(
        "flex aspect-square h-40 w-full flex-col items-center justify-center gap-4 rounded-lg p-2 text-white",
        color
      )}
    >
      <div className="text-3xl font-bold">{number}</div>
      <div className="text-4xl font-bold">{name}</div>
    </div>
  );
};
