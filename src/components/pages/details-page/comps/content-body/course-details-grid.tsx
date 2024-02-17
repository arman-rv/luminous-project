import { Icons, type Icon } from "@/components/assets/icons";

import { type CourseIdType } from "@/core/validators/api";

import { type Locale } from "#/i18n.config";

export const CourseDetailsGrid = ({
  lang,
  data,
}: {
  lang: Locale;
  data: CourseIdType;
}) => {
  return (
    <section className="grid grid-cols-3 grid-rows-2 gap-5">
      <CourseDetail
        lang={lang}
        title={{
          fa: "وضعیت دوره",
          en: "Course Status",
        }}
        describe="در حال برگزاری"
        Icon={Icons.info}
      />
      <CourseDetail
        lang={lang}
        title={{
          fa: "مدت زمان دوره",
          en: "Course Duration",
        }}
        describe="۱۰ ساعت"
        Icon={Icons.clock}
      />
      <CourseDetail
        lang={lang}
        title={{
          fa: "آخرین بروزرسانی",
          en: "Last Update",
        }}
        describe="۱۰ ساعت پیش"
        Icon={Icons.calender}
      />
      <CourseDetail
        lang={lang}
        title={{
          fa: "روش پشتیبانی",
          en: "Support Method",
        }}
        describe="آنلاین"
        Icon={Icons.users}
      />
      <CourseDetail
        lang={lang}
        title={{
          fa: "پیش نیازها",
          en: "Prerequisites",
        }}
        describe="ندارد"
        Icon={Icons.bag}
      />
      <CourseDetail
        lang={lang}
        title={{
          fa: "نوع مشاهده",
          en: "View Type",
        }}
        describe="به‌صورت آنلاین"
        Icon={Icons.camera}
      />
    </section>
  );
};

const CourseDetail = ({
  lang,
  title,
  describe,
  Icon,
}: {
  lang: Locale;
  title: {
    [key in Locale]: string;
  };
  describe: string;
  Icon: Icon;
}) => {
  return (
    <div className="flex items-center gap-x-4 rounded-2xl bg-card p-5 text-black">
      <Icon className="h-9 w-9 fill-green-500" />
      <div>
        <h4 className="text-lg font-semibold">{title[lang]}</h4>
        <p className="mt-0.5 text-xs text-slate-500">{describe}</p>
      </div>
    </div>
  );
};
