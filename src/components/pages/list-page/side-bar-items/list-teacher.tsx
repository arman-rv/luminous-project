import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

export const ListTeacher = ({
  className,
  lang,
}: {
  className?: string;
  lang: Locale;
}) => {
  return (
    <div
      className={cn(
        " w-1/2 rounded-xl bg-card p-4 shadow  md:w-full",
        className
      )}
    >
      <input
        type="text"
        className="border-none text-base placeholder-[#444] focus:placeholder-transparent focus:outline-none"
        placeholder={lang === "fa" ? "جستجو براساس مدرس" : "Search by teacher"}
      />
    </div>
  );
};
