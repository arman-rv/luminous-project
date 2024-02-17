"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  AnimatedInput,
  AnimatedPasswordInput,
} from "@/components/elements/common";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/elements/ui";
import { Checkbox } from "@/components/elements/ui/client";
import { Icons } from "@/components/assets/icons";

import { signInFormDict } from "@/dict/pages/auth.dict";

import { loginAction } from "@/core/actions";
import {
  signInInputSchema,
  type SignInInputProps,
} from "@/core/validators/forms";

import { type Locale } from "#/i18n.config";

export const SignInForm = ({ lang }: { lang: Locale }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<SignInInputProps>({
    resolver: zodResolver(signInInputSchema),
    defaultValues: {
      phoneOrGmail: "",
      password: "",
      rememberMe: true,
    },
  });

  const onSubmit = async (data: SignInInputProps) => {
    setIsLoading(true);

    const result = await loginAction(data);

    if (result === "Success") {
      toast.success(
        {
          fa: "ورود با موفقیت انجام شد",
          en: "Login was successful",
        }[lang]
      );
      router.push(`/${lang}`);
    } else {
      toast.error(result);
      toast.error(
        {
          fa: "ورود با شکست مواجه شد",
          en: "Login failed",
        }[lang]
      );
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="phoneOrGmail"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AnimatedInput
                  lang={lang}
                  Icon={Icons.user}
                  label={signInFormDict.phoneOrGmail[lang]}
                  inputVariant="auth"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AnimatedPasswordInput
                  lang={lang}
                  label={signInFormDict.password[lang]}
                  inputVariant="auth"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rememberMe"
          render={({ field }) => (
            <FormItem className="flex items-center justify-center gap-1 space-y-0 text-blue-800">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="border-2 text-blue-800"
                />
              </FormControl>
              <div className="leading-none">
                <FormLabel className="text-xs">
                  {signInFormDict.rememberMe[lang]}
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button
          disabled={isLoading}
          dir="ltr"
          className="border-2 border-green-600 bg-green-600 text-white transition-colors duration-500 hover:bg-white hover:text-green-600"
        >
          {isLoading && (
            <Icons.loader
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          {signInFormDict.button[lang]}
          <span className="sr-only">{signInFormDict.button[lang]}</span>
        </Button>
      </form>
    </Form>
  );
};
