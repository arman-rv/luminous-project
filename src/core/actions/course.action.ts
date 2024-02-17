"use server";

import { revalidatePath } from "next/cache";

import {
  addCourseCommentDissLike,
  addCourseCommentLike,
  addCourseDislike,
  addCourseFavorite,
  addCourseLike,
} from "@/core/services/api";

import { type Locale } from "#/i18n.config";

export const courseLikeAction = async (
  courseId: string,
  lang: Locale
): Promise<string | undefined> => {
  try {
    const res = await addCourseLike(courseId);
    revalidatePath(`${lang}/courses/${courseId}`);

    return res?.message;
  } catch (error) {
    console.log(error);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return error[lang] || "خطایی رخ داده است.";
  }
};

export const courseDislikeAction = async (
  courseId: string,
  lang: Locale
): Promise<string | undefined> => {
  try {
    const res = await addCourseDislike(courseId);

    revalidatePath(`${lang}/courses/${courseId}`);

    return res?.message;
  } catch (error) {
    console.log(error);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return error[lang] || "خطایی رخ داده است.";
  }
};

export const courseFavoriteAction = async (
  courseId: string,
  lang: Locale
): Promise<string | undefined> => {
  try {
    const res = await addCourseFavorite(courseId);

    revalidatePath(`${lang}/courses/${courseId}`);

    return res?.message;
  } catch (error) {
    console.log(error);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return error[lang] || "خطایی رخ داده است.";
  }
};

export const courseCommentLikeAction = async (
  courseId: string,
  commentId: string,
  lang: Locale
): Promise<string | undefined> => {
  try {
    const res = await addCourseCommentLike(commentId);

    revalidatePath(`${lang}/courses/${courseId}`);

    return res?.message;
  } catch (error) {
    console.log(error);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return error[lang] || "خطایی رخ داده است.";
  }
};

export const courseCommentDissLikeAction = async (
  courseId: string,
  commentId: string,
  lang: Locale
): Promise<string | undefined> => {
  try {
    const res = await addCourseCommentDissLike(commentId);

    revalidatePath(`${lang}/courses/${courseId}`);

    return res?.message;
  } catch (error) {
    console.log(error);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return error[lang] || "خطایی رخ داده است.";
  }
};
