"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button, Input } from "@/components/elements/ui";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/elements/ui/dialog";
import { Label } from "@/components/elements/ui/label";
import { Textarea } from "@/components/elements/ui/textarea";

import { addCourseComment } from "@/core/services/api/course/post/post-course-comment.api";
import {
  type CourseCommentInputProps,
  courseCommentInputSchema,
} from "@/core/validators/forms/course/comment.schema";

import { type Locale } from "#/i18n.config";

export function CommentButton({
  lang,
  courseId,
}: {
  lang: Locale;
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

    console.log(formData);

    try {
      const response = await addCourseComment(formData);
      toast.success(response.message);
    } catch (e) {
      toast.error("خطایی رخ داده است");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="border-[3px] border-green-500 bg-green-500 text-white transition-colors duration-500 hover:bg-transparent hover:text-green-500">
          {
            {
              en: "Add Comment",
              fa: "ایجاد نظر جدید",
            }[lang]
          }
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
