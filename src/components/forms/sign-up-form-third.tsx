"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { AnimatedInput } from "@/components/elements/common";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/elements/ui";
import { type SignUpFormStates } from "@/app/[lang]/(auth)/sign-up/page";

import { thirdSignUpFormDict } from "@/dict/pages/auth.dict";

import { loginAction } from "@/core/actions/auth.action";
import { register } from "@/core/services/api/auth/index";
import {
  thirdSignUpInputSchema,
  type ThirdSignUpInputProps,
} from "@/core/validators/forms";
import { useUserStore } from "@/stores/sign-up-store-phone";

import { type Locale } from "#/i18n.config";

import { Icons } from "../assets/icons";
import { AnimatedPasswordInput } from "../elements/common/animated-input";

export const ThirdSignUpForm = ({
  lang,
  setFormState,
}: {
  lang: Locale;
  setFormState: (state: SignUpFormStates) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<ThirdSignUpInputProps>({
    resolver: zodResolver(thirdSignUpInputSchema),
  });

  const user = useUserStore((state) => state.user);
  const onSubmit = async (data: ThirdSignUpInputProps) => {
    const result = await register(data.email, data.password, user.phoneNumber);
    console.log("regieter", result);

    if (result?.success) {
      toast.success(
        {
          fa: "ثبت نام با موفقیت انجام شد",
          en: "Register was successful",
        }[lang]
      );
    } else {
      toast.error(
        {
          fa: "ثبت نام با خطا مواجه شد",
          en: "Register was unsuccessful",
        }[lang]
      );
    }

    if (result?.success) {
      const result = await loginAction({
        phoneOrGmail: data.email,
        password: data.password,
        rememberMe: false,
      });
      console.log("login", result);
      if (result === "Success") {
        router.push(`/${lang}`);
      }
    }
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
                  label={thirdSignUpFormDict.email[lang]}
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
                  label={thirdSignUpFormDict.password[lang]}
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
          {thirdSignUpFormDict.button[lang]}
          <span className="sr-only">{thirdSignUpFormDict.button[lang]}</span>
        </Button>
      </form>
    </Form>
  );
};
