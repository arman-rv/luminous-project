"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { AnimatedPasswordInput } from "@/components/elements/common";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/elements/ui";

import { changePassword } from "@/core/services/api/user/post/change-password.api";
import {
  changePasswordInputSchema,
  type ChangePasswordInputProps,
} from "@/core/validators/forms";

import { type Locale } from "#/i18n.config";

import { Icons } from "../assets/icons";

export const ChangePasswordForm = ({ lang }: { lang: Locale }) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ChangePasswordInputProps>({
    resolver: zodResolver(changePasswordInputSchema),
  });
  const onSubmit = async (data: ChangePasswordInputProps) => {
    setIsLoading(true);

    const response = await changePassword(data);

    setIsLoading(false);

    if (response?.apiKey) {
      toast.success(
        {
          fa: "رمز عبور با موفقیت تغییر کرد",
          en: "Password Changed Successfully",
        }[lang]
      );
    } else {
      toast.error(response?.message);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        dir={lang === "fa" ? "rtl" : "ltr"}
        className="space-y-2"
      >
        <FormField
          control={form.control}
          name="oldPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AnimatedPasswordInput
                  lang={lang}
                  label={{ fa: "رمز عبور قبلی", en: "Old Password" }[lang]}
                  inputVariant="auth"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AnimatedPasswordInput
                  lang={lang}
                  label={{ fa: "رمز عبور جدید", en: "New Password" }[lang]}
                  inputVariant="auth"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          disabled={isLoading}
          dir="ltr"
          className="w-full border-2 border-primary bg-primary text-white transition-colors duration-500 hover:bg-white hover:text-primary"
        >
          {isLoading && (
            <Icons.loader
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          {{ fa: "تغییر رمزعبور", en: "Password Change" }[lang]}
        </Button>
      </form>
    </Form>
  );
};
