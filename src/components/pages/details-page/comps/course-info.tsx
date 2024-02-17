import { Button, H1 } from "@/components/elements/ui";
import { Icons } from "@/components/assets/icons";

import { type CourseIdType } from "@/core/validators/api";

import { type Locale } from "#/i18n.config";

type CourseInfoProps = {
  lang: Locale;
  data: CourseIdType;
};

export const CourseInfo = ({
  lang,
  data: { title, describe, miniDescribe, cost, isCourseReseve },
}: CourseInfoProps) => {
  return (
    <section className="my-10 flex justify-between gap-x-10">
      <div className="flex w-full flex-col justify-between">
        <div className="">
          <H1 className="text-3xl font-black">{title}</H1>
          <p className="mt-3.5 line-clamp-4 text-xl font-light">
            {miniDescribe}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <Button className="group flex gap-2 rounded-xl border-4 border-green-500 bg-green-500 px-5 py-7 text-2xl font-extrabold text-white transition-colors duration-500 hover:bg-transparent hover:text-green-500">
            <Icons.shieldDone className="h-7 w-7 fill-white transition-colors duration-500 group-hover:fill-green-500" />
            {isCourseReseve ? (
              <span>
                {
                  {
                    fa: "رزرو شده",
                    en: "Course Reserved",
                  }[lang]
                }
              </span>
            ) : (
              <span>
                {
                  {
                    fa: "شرکت در دوره",
                    en: "Join Course",
                  }[lang]
                }
              </span>
            )}
          </Button>
          <span className="flex gap-2 text-4xl font-semibold">
            {cost.toLocaleString(lang)}
            <Icons.toman className="h-7 w-7" />
          </span>
        </div>
      </div>
      <div className="aspect-video h-[360px]">
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gray-300">
          <Icons.placeholder className="h-8 w-8 text-slate-600" />
        </div>
      </div>
    </section>
  );
};
