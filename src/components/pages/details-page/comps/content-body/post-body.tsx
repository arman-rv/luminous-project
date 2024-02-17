import { H1 } from "@/components/elements/ui";
import { Icons } from "@/components/assets/icons";

import { type NewsIdType } from "@/core/validators/api";

import { type Locale } from "#/i18n.config";

export const PostBody = ({
  lang,
  data: {
    detailsNewsDto: { title, describe, addUserFullName, insertDate },
  },
}: {
  lang: Locale;
  data: NewsIdType;
}) => {
  return (
    <div className="shadow-light rounded-xl bg-card px-7 py-6">
      <div className="mb-5 border-b border-b-gray-200 pb-6">
        <H1 className="text-4xl font-black text-zinc-700">{title}</H1>
      </div>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-x-1 text-xs">
          <Icons.user className="h-4 w-4 text-zinc-700" />
          <span>
            {
              {
                fa: "نوشته از",
                en: "Written by",
              }[lang]
            }
          </span>

          <span>{addUserFullName}</span>
        </div>
        <div className="flex items-center gap-x-1 text-xs">
          <Icons.calender className="h-4 w-4 text-zinc-700" />
          <span>{insertDate}</span>
        </div>
      </div>
      <div>
        <p className="text-lg leading-loose text-gray-800">{describe}</p>
      </div>
    </div>
  );
};
