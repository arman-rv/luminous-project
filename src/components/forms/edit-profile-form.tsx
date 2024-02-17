"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { AnimatedInput } from "@/components/elements/common";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/elements/ui";
import { Icons } from "@/components/assets/icons";

import {
  editProfileInputSchema,
  type EditProfileInputProps,
} from "@/core/validators/forms";

import { type Locale } from "#/i18n.config";

import { Checkbox } from "../elements/ui/checkbox";

export const EditProfileForm = ({ lang }: { lang: Locale }) => {
  const form = useForm<EditProfileInputProps>({
    resolver: zodResolver(editProfileInputSchema),
  });
  const onSubmit = async (_data: EditProfileInputProps) => {};

  return (
    <Form {...form}>
      <form
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        dir={lang === "fa" ? "rtl" : "ltr"}
        className="grid grid-cols-3 gap-3"
      >
        <FormField
          control={form.control}
          name="FName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AnimatedInput
                  lang={lang}
                  Icon={Icons.user}
                  label={{ fa: "نام", en: "First Name" }[lang]}
                  inputVariant="default"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="LName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AnimatedInput
                  lang={lang}
                  Icon={Icons.user}
                  label={{ fa: "نام خانوادگی", en: "Last Name" }[lang]}
                  inputVariant="default"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="UserAbout"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AnimatedInput
                  lang={lang}
                  Icon={Icons.user}
                  label={{ fa: "درباره من", en: "About Me" }[lang]}
                  inputVariant="default"
                  {...field}
                  dir="rtl"
                />
              </FormControl>
            </FormItem>
          )}
        />{" "}
        <FormField
          control={form.control}
          name="LinkdinProfile"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AnimatedInput
                  lang={lang}
                  Icon={Icons.user}
                  label={{ fa: "لینکدین", en: "Linkdin" }[lang]}
                  inputVariant="default"
                  {...field}
                  dir="rtl"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="TelegramLink"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AnimatedInput
                  lang={lang}
                  Icon={Icons.user}
                  label={{ fa: "تلگرام", en: "Telegram" }[lang]}
                  inputVariant="default"
                  {...field}
                  dir="rtl"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ReceiveMessageEvent"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="border-2 text-blue-800"
                />
              </FormControl>
              <div className="leading-none">
                <FormLabel className="text-xs">
                  {{ fa: "دریافت ایمیل", en: "Receive Email" }[lang]}
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="HomeAdderess"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AnimatedInput
                  lang={lang}
                  Icon={Icons.user}
                  label={{ fa: "آدرس منزل", en: "Home Address" }[lang]}
                  inputVariant="default"
                  {...field}
                  dir="rtl"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="NationalCode"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AnimatedInput
                  lang={lang}
                  Icon={Icons.user}
                  label={{ fa: "کد ملی", en: "National Code" }[lang]}
                  inputVariant="default"
                  {...field}
                  dir="rtl"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Gender"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AnimatedInput
                  lang={lang}
                  Icon={Icons.user}
                  label={{ fa: "تلگرام", en: "Telegram" }[lang]}
                  inputVariant="default"
                  {...field}
                  dir="rtl"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
