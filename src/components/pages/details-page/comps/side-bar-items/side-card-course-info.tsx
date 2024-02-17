import { Progress } from "@/components/elements/ui/progress";
import { Icons, type Icon } from "@/components/assets/icons";

import { type CourseIdType } from "@/core/validators/api";
import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

import { CourseInfoSideCardButtons } from "./side-card-course-info-buttons";

type CourseInfoSideCardProps = {
  lang: Locale;
  data: CourseIdType;
};

export const CourseInfoSideCard = ({
  lang,
  data: {
    courseId,
    currentRegistrants,
    currentRate,
    commentCount,
    likeCount,
    dissLikeCount,
    currentUserLike,
    currentUserDissLike,
    isUserFavorite,
  },
}: CourseInfoSideCardProps) => {
  return (
    <div className="shadow-light rounded-2xl bg-card p-5">
      <div className="flex gap-5">
        <DetailCard
          text={lang === "fa" ? "دانشجو" : "Student"}
          num={currentRegistrants.toLocaleString(lang)}
          Icon={Icons.usersFill}
          iconColor="fill-green-500"
        />
        <DetailCard
          text={lang === "fa" ? "رضایت" : "Satisfaction"}
          num={currentRate.toLocaleString(lang)}
          Icon={Icons.starFilled}
          iconColor="fill-yellow-400"
        />
      </div>
      <CourseInfoSideCardButtons
        lang={lang}
        courseId={courseId}
        likeCount={likeCount}
        dissLikeCount={dissLikeCount}
        currentUserLike={currentUserLike}
        currentUserDissLike={currentUserDissLike}
        isUserFavorite={isUserFavorite}
      />
      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between text-xl text-zinc-700">
          <span>
            {
              {
                fa: "میزان پیشرفت دوره",
                en: "Course Progress",
              }[lang]
            }
          </span>
          <span>
            {(commentCount / 100).toLocaleString(lang, {
              style: "percent",
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
        <Progress value={commentCount} />
      </div>
    </div>
  );
};

const DetailCard = ({
  num,
  text,
  Icon,
  iconColor,
}: {
  Icon: Icon;
  iconColor: string;
  text: string;
  num: number | string;
}) => {
  return (
    <div className="flex grow items-center justify-between rounded-2xl bg-gray-100 px-5 py-4">
      <Icon className={cn("h-10 w-10", iconColor)} />
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl font-extrabold text-zinc-700">{num}</span>
        <p className="text-sm text-slate-500">{text}</p>
      </div>
    </div>
  );
};
