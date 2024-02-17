import Image from "next/image";

import { Icons } from "@/components/assets/icons";

import { getCourseCommentReplies } from "@/core/services/api";
import { type CourseCommentType } from "@/core/validators/api";
import { formatDate } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

import { CourseCommentButtons } from "./course-comment-buttons";

type CommentProps = {
  lang: Locale;
  comment: CourseCommentType;
};

export const CourseComment = async ({ lang, comment }: CommentProps) => {
  const { id, courseId, acceptReplysCount, describe } = comment;

  const replies =
    acceptReplysCount > 0 ? await getCourseCommentReplies(courseId, id) : [];

  return (
    <div className="rounded-2xl bg-gray-100 p-5 dark:bg-background">
      <div className="flex items-start gap-x-5">
        <UserAvatar avatar={null} userType={"student"} />
        <div className="w-full">
          <UserInfo lang={lang} data={comment} />
          <CommentText text={describe} />
          {replies.length > 0 && (
            <section className="mt-7 space-y-4">
              {replies.map((reply, index) => (
                <Reply key={index} lang={lang} reply={reply} />
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

const Reply = ({ lang, reply }: { lang: Locale; reply: CourseCommentType }) => {
  const { describe } = reply;

  return (
    <div className="rounded-2xl bg-gray-200 p-5 dark:bg-card">
      <div className="flex items-start gap-x-5">
        <UserAvatar avatar={null} userType={"student"} />
        <div className="w-full">
          <UserInfo lang={lang} data={reply} />
          <CommentText text={describe} />
        </div>
      </div>
    </div>
  );
};

const UserAvatar = ({
  avatar,
  userType,
}: {
  avatar: string | null;
  userType: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-16 w-16">
        {avatar ? (
          <Image
            src={avatar}
            fill
            alt="user-avatar"
            className="rounded-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-300">
            <Icons.placeholder className="h-5 w-5 text-slate-600" />
          </div>
        )}
      </div>
      <span className="rounded-md bg-green-500 px-1.5 py-0.5 text-center text-xs text-white">
        {userType}
      </span>
    </div>
  );
};

const UserInfo = ({
  lang,
  data,
}: {
  lang: Locale;
  data: CourseCommentType;
}) => {
  const { author: name, insertDate: date } = data;

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-1">
        <span className="text-xl font-medium">{name}</span>
        <span className="text-xs">{formatDate(date, lang)}</span>
      </div>
      <CourseCommentButtons lang={lang} data={data} />
    </div>
  );
};

const CommentText = ({ text }: { text: string }) => {
  return <p className="mt-3.5">{text}</p>;
};
