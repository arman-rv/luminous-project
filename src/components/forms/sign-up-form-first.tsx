"use client";

import { useState } from "react";

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
import { type SignUpFormStates } from "@/app/[lang]/(auth)/sign-up/page";

import { firstSignUpFormDict } from "@/dict/pages/auth.dict";

import { sendVerifyMessage } from "@/core/services/api";
import {
  firstSignUpInputSchema,
  type FirstSignUpInputProps,
} from "@/core/validators/forms";
import { useStore, useUserStore } from "@/stores/sign-up-store-phone";

import { type Locale } from "#/i18n.config";

import { Icons } from "../assets/icons";

export const FirstSignUpForm = ({
  lang,
  setFormState,
}: {
  lang: Locale;
  setFormState: (state: SignUpFormStates) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FirstSignUpInputProps>({
    resolver: zodResolver(firstSignUpInputSchema),
    defaultValues: {
      phone: "",
    },
  });

  const setUser = useUserStore((state) => state.setUser);

  const onSubmit = async (data: FirstSignUpInputProps) => {
    const result = await sendVerifyMessage(data);
    console.log(result);
    setUser({ phoneNumber: data.phone });
    setFormState("second");
  };

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AnimatedInput
                  lang={lang}
                  Icon={Icons.phone}
                  label={firstSignUpFormDict.phone[lang]}
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
          {firstSignUpFormDict.button[lang]}
          <span className="sr-only">{firstSignUpFormDict.button[lang]}</span>
        </Button>
      </form>
    </Form>
  );
};
