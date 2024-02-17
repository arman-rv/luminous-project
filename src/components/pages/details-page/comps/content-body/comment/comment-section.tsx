import { Button, H3, Input } from "@/components/elements/ui";

import { getCourseComments, getNewsComments } from "@/core/services/api";
import {
  type CourseCommentListType,
  type NewsCommentListType,
} from "@/core/validators/api";

import { type Locale } from "#/i18n.config";

import { CommentButton } from "./comment-button";
import { CourseComment } from "./course-comment";
import { NewsComment } from "./news-comment";

type CommentSectionProps = {
  lang: Locale;
  commentCount: number;
} & (CourseCommentProps | NewsCommentProps);

type CourseCommentProps = {
  typeOf: "course";
  courseId: string;
};

type NewsCommentProps = {
  typeOf: "news";
  newsId: string;
};

export const CommentSection = async (props: CommentSectionProps) => {
  const { lang, commentCount, typeOf } = props;

  const courseComments: CourseCommentListType = [];
  const newsComments: NewsCommentListType = [];

  if (typeOf === "course") {
    const comments =
      commentCount > 0 ? await getCourseComments(props.courseId) : [];

    courseComments.push(...comments);
  } else if (typeOf === "news") {
    const comments =
      commentCount > 0 ? await getNewsComments(props.newsId) : [];

    newsComments.push(...comments);
  }

  const isThereComments =
    typeOf === "course" ? courseComments.length > 0 : newsComments.length > 0;

  return (
    <section className="rounded-xl bg-card px-7 py-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-x-3.5">
          <span className="h-10 w-2.5 rounded-sm bg-pink-500" />
          <H3 className="text-3xl font-bold">
            {
              {
                en: "Comments",
                fa: "نظرات",
              }[lang]
            }
          </H3>
        </div>
        {typeOf === "course" && (
          <CommentButton lang={lang} courseId={props.courseId} />
        )}
      </div>
      {isThereComments ? (
        <section className="space-y-5">
          {typeOf === "course"
            ? courseComments.map((comment, index) => (
                <CourseComment lang={lang} key={index} comment={comment} />
              ))
            : newsComments.map((comment, index) => (
                <NewsComment lang={lang} key={index} comment={comment} />
              ))}
        </section>
      ) : (
        <p>
          {
            {
              en: "There are no comments yet.",
              fa: "هنوز نظری ثبت نشده است.",
            }[lang]
          }
        </p>
      )}
    </section>
  );
};
