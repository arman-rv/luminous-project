"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { AnimatedInput } from "@/components/elements/common";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/elements/ui";

import { resetPasswordFormDict } from "@/dict/pages/auth.dict";

import {
  resetPasswordInputSchema,
  type ResetPasswordInputProps,
} from "@/core/validators/forms";

import { type Locale } from "#/i18n.config";

import { Icons } from "../assets/icons";

export const ResetPasswordForm = ({ lang }: { lang: Locale }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<ResetPasswordInputProps>({
    resolver: zodResolver(resetPasswordInputSchema),
  });

  const onSubmit = (data: ResetPasswordInputProps) => {
    router.push(`/${lang}`);
  };

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AnimatedInput
                  lang={lang}
                  Icon={Icons.mail}
                  label={resetPasswordFormDict.email[lang]}
                  inputVariant="auth"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button disabled={isLoading} dir="ltr" variant="auth">
          {isLoading && (
            <Icons.loader
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          {resetPasswordFormDict.button[lang]}
          <span className="sr-only">{resetPasswordFormDict.button[lang]}</span>
        </Button>
      </form>
    </Form>
  );
};
