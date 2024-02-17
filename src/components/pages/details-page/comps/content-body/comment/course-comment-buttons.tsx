"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/elements/ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/elements/ui/dialog";
import { Input } from "@/components/elements/ui/input";
import { Label } from "@/components/elements/ui/label";
import { Textarea } from "@/components/elements/ui/textarea";
import { Icons } from "@/components/assets/icons";

import {
  courseCommentDissLikeAction,
  courseCommentLikeAction,
} from "@/core/actions";
import { addCourseReplyComment } from "@/core/services/api/course/post/post-course-comment.api";
import { type CourseCommentType } from "@/core/validators/api";
import {
  courseCommentInputSchema,
  type CourseCommentInputProps,
} from "@/core/validators/forms/course/comment.schema";
import { cn, formDataMaker } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

export const CourseCommentButtons = ({
  lang,
  data,
}: {
  lang: Locale;
  data: CourseCommentType;
}) => {
  const { id: commentId, courseId, currentUserEmotion } = data;

  const likeAction = async () => {
    const res = await courseCommentLikeAction(courseId, commentId, lang);

    toast.success(res);

    console.log(res);
  };

  const dislikeAction = async () => {
    const res = await courseCommentDissLikeAction(courseId, commentId, lang);

    toast.success(res);

    console.log(res);
  };

  return (
    <div className="flex gap-2">
      <Button className="h-5 p-0" onClick={() => void dislikeAction()}>
        <Icons.thumbsDown
          className={cn(
            "h-5 w-5 text-slate-600 transition-all duration-500 hover:fill-slate-600",
            currentUserEmotion === "DISSLIKED" && "fill-slate-600"
          )}
        />
      </Button>
      <Button className="h-5 p-0" onClick={() => void likeAction()}>
        <Icons.thumbsUp
          className={cn(
            "h-5 w-5 text-slate-600 transition-all duration-500 hover:fill-slate-600",
            currentUserEmotion === "LIKED" && "fill-slate-600"
          )}
        />
      </Button>
      <ReplyButton lang={lang} commentId={commentId} courseId={courseId} />
    </div>
  );
};

export function ReplyButton({
  lang,
  commentId,
  courseId,
}: {
  lang: Locale;
  commentId: string;
  courseId: string;
}) {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CourseCommentInputProps>({
    resolver: zodResolver(courseCommentInputSchema),
  });

  const comment = async (data: CourseCommentInputProps) => {
    const formData = new FormData();

    formData.append("Title", data.title);
    formData.append("Describe", data.describe);
    formData.append("CourseId", courseId);
    formData.append("CommentId", commentId);

    console.log(formData);

    try {
      const response = await addCourseReplyComment(formData);
      toast.success(response.message);
    } catch (e) {
      toast.error("خطایی رخ داده است");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-5 p-0">
          <Icons.reply
            className={cn(
              "h-5 w-5 text-slate-600 transition-colors duration-500 hover:text-slate-400",
              lang === "en" && "-scale-x-100"
            )}
          />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px]"
        dir={lang === "fa" ? "rtl" : "ltr"}
      >
        <form onSubmit={handleSubmit(comment)}>
          <DialogHeader className="w-full">
            <DialogTitle className="text-start">
              {
                {
                  fa: "پاسخ به دیدگاه",
                  en: "Reply to comment",
                }[lang]
              }
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                {
                  {
                    fa: "تیتر",
                    en: "Title",
                  }[lang]
                }
              </Label>
              <Input
                id="title"
                type="text"
                className="col-span-3 p-2"
                {...register("title")}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                {
                  {
                    fa: "توضیحات",
                    en: "Description",
                  }[lang]
                }
              </Label>
              <Textarea
                id="describe"
                className="col-span-3 bg-white"
                {...register("describe")}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">
              {
                {
                  fa: "ارسال",
                  en: "Send",
                }[lang]
              }
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
