"use client";

import { toast } from "sonner";

import { Button } from "@/components/elements/ui";
import { Icons } from "@/components/assets/icons";

import {
  courseDislikeAction,
  courseFavoriteAction,
  courseLikeAction,
} from "@/core/actions";
import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

type CourseInfoSideCardProps = {
  lang: Locale;
  courseId: string;
  likeCount: number;
  dissLikeCount: number;
  currentUserLike: "0" | "1";
  currentUserDissLike: "0" | "1";
  isUserFavorite: boolean;
};

export const CourseInfoSideCardButtons = ({
  lang,
  courseId,
  likeCount,
  dissLikeCount,
  currentUserLike,
  currentUserDissLike,
  isUserFavorite,
}: CourseInfoSideCardProps) => {
  const likeAction = async () => {
    const res = await courseLikeAction(courseId, lang);

    toast.success(res);
  };

  const dislikeAction = async () => {
    const res = await courseDislikeAction(courseId, lang);

    toast.success(res);
  };

  const favoriteAction = async () => {
    const res = await courseFavoriteAction(courseId, lang);

    toast.success(res);
  };

  return (
    <div className="mt-4 grid grid-cols-3 gap-5">
      <div className="shadow-light flex items-center justify-center gap-4 rounded-xl bg-gray-100 py-3">
        <Button className="h-7 p-0" onClick={() => void dislikeAction()}>
          <Icons.thumbsDown
            className={cn(
              "h-7 w-7 text-slate-600 transition-all duration-500 hover:fill-slate-600",
              currentUserDissLike === "1" && "fill-slate-600"
            )}
          />
        </Button>
        <p className="text-2xl font-extrabold text-zinc-700">
          {dissLikeCount.toLocaleString(lang)}
        </p>
      </div>
      <div className="shadow-light flex items-center justify-center gap-4 rounded-xl bg-gray-100 py-3">
        <Button className="h-7 p-0" onClick={() => void likeAction()}>
          <Icons.thumbsUp
            className={cn(
              "h-7 w-7 text-slate-600 transition-all duration-500 hover:fill-slate-600",
              currentUserLike === "1" && "fill-slate-600"
            )}
          />
        </Button>
        <p className="text-2xl font-extrabold text-zinc-700">
          {likeCount.toLocaleString(lang)}
        </p>
      </div>
      <div className="shadow-light flex items-center justify-center rounded-xl bg-gray-100 py-3">
        <Button className="h-7 p-0" onClick={() => void favoriteAction()}>
          <Icons.heart
            className={cn(
              "h-7 w-7 text-slate-600 transition-all duration-500 hover:fill-slate-600",
              isUserFavorite && "fill-slate-600"
            )}
          />
        </Button>
      </div>
    </div>
  );
};
