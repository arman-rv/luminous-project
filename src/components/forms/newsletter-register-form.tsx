"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { AnimatedInput } from "@/components/elements/common";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/elements/ui";

import {
  newsletterRegisterInputSchema,
  type NewsletterRegisterInputProps,
} from "@/core/validators/forms/newsletter.schema";

import { type Locale } from "#/i18n.config";

import { Icons } from "../assets/icons";

export const NewsletterRegisterForm = ({ lang }: { lang: Locale }) => {
  const router = useRouter();

  const form = useForm<NewsletterRegisterInputProps>({
    resolver: zodResolver(newsletterRegisterInputSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: NewsletterRegisterInputProps) => {
    router.push(`/${lang}`);
  };

  return (
    <Form {...form}>
      <form onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="md:w-96">
              <FormControl>
                <AnimatedInput
                  lang={lang}
                  Icon={Icons.mailBox}
                  label={"عضویت در خبرنامه"}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
