import Image from "next/image";
import Link from "next/link";

import { Button, Card, CardContent, CardTitle } from "@/components/elements/ui";
import { Icons } from "@/components/assets/icons";

import { type CourseType } from "@/core/validators/api";

import { type Locale } from "#/i18n.config";

type CourseCardProps = {
  lang: Locale;
  data: CourseType;
};

export const CourseCard = ({
  lang,
  data: { tumbImageAddress, title, teacherName, describe },
}: CourseCardProps) => {
  return (
    <Card className="h-full w-full rounded-xl border-none bg-card p-4 shadow">
      <CardContent className="flex h-full w-full flex-col justify-between">
        <Link
          href="#"
          className="// relative flex aspect-video h-full w-full items-center justify-center
        rounded-xl bg-gray-200 
        "
        >
          <Icons.placeholder className=" h-8 w-8 text-slate-600" />
          {/* <Image
            src={tumbImageAddress?tumbImageAddress:'/images/dev/node-green.jpg'}
            alt="course-picture"
            fill
            className="rounded-xl object-contain"
          /> */}
        </Link>
        <div className="h-full">
          <div className="flex w-full items-center justify-between">
            <CardTitle className="py-4 font-black md:text-2xl">
              {title}
            </CardTitle>
            <h4 className="text-sm text-text/60 md:text-lg">{teacherName}</h4>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="line-clamp-2 max-w-xs pe-5 text-sm text-text/60 sm:max-w-md md:max-w-sm md:text-base lg:max-w-md">
              {describe}
            </p>
            <Link href="#" className="">
              <Button className="w-full max-w-fit rounded-lg border-2 border-primary bg-primary p-3 text-xs text-secondary duration-500 hover:bg-card hover:text-primary">
                <p className="hidden sm:block">
                  {
                    {
                      fa: "مشاهده دوره",
                      en: "View Course",
                    }[lang]
                  }
                </p>
                <p className="sm:hidden">
                  {
                    {
                      fa: "مشاهده",
                      en: "View",
                    }[lang]
                  }
                </p>
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
