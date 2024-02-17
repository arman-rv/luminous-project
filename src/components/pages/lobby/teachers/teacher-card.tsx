import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/elements/ui";
import { Icons } from "@/components/assets/icons";

import { type TeacherType } from "@/core/validators/api";

import { type Locale } from "#/i18n.config";

type TeacherCardProps = {
  lang: Locale;
  data: TeacherType;
};

export const TeacherFullCard = ({
  lang,
  data: { fullName, pictureAddress, linkdinProfileLink },
}: TeacherCardProps) => {
  return (
    <div className="px-10">
      <Card className="relative flex max-w-sm flex-col items-center gap-4 border-none bg-card p-4 text-center shadow md:flex-row">
        <div className="md:absolute md:start-0 md:top-1/2 md:-translate-y-1/2 md:ltr:-translate-x-1/2 md:rtl:translate-x-1/2">
          <div className="relative flex aspect-square h-24 items-center justify-center rounded-xl bg-gray-200">
            <Icons.placeholder className=" h-8 w-8 text-slate-600" />
            {/* <Image
              src={pictureAddress? pictureAddress : "/images/dev/person-avatar.jpg"}
              alt="teacher-picture"
              fill
              className="rounded-xl"
            /> */}
          </div>
        </div>
        <CardContent className="flex flex-col items-center md:items-start md:ps-12">
          <CardTitle className="text-xl font-bold">{fullName}</CardTitle>
          <h4 className="text-lg font-semibold">{linkdinProfileLink}</h4>
          <CardDescription className="pt-4 text-center text-sm font-medium md:text-start">
            {/* استاد فلانی عضو هیت علمی دانشگاه علم کامپیوتر و خلاصه اینکه قدرت
            تکلم فووول قدرت شیرفهم کردن عااالی. */}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export const TeacherMiniCard = ({
  lang,
  data: { fullName, pictureAddress, linkdinProfileLink },
}: TeacherCardProps) => {
  return (
    <Card className="relative flex cursor-pointer border-none bg-card p-4 shadow">
      <div className="absolute -top-2 start-3">
        <div className="relative flex aspect-square  h-16 items-center justify-center rounded-xl bg-gray-200">
          <Icons.placeholder className=" h-8 w-8 text-slate-600" />
          {/* <Image
            src={pictureAddress? pictureAddress : "/images/dev/person-avatar.jpg"}
            alt="teacher-picture"
            fill
            className="rounded-xl"
          /> */}
        </div>
      </div>
      <CardContent className="flex flex-col ps-[70px]">
        <CardTitle className="text-sm font-semibold">{fullName}</CardTitle>
        <h4 className="text-xs font-medium">{linkdinProfileLink}</h4>
      </CardContent>
    </Card>
  );
};
