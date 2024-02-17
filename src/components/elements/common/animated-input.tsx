import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import {
  FormLabel,
  Input,
  useFormField,
  type InputProps,
} from "@/components/elements/ui";
import { Icons, type Icon } from "@/components/assets/icons";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

const inputVariants = cva(
  "peer h-full w-full rounded-[7px] border-t-transparent bg-transparent px-3 py-2.5 !pe-9 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all disabled:border-0 disabled:bg-gray-50",
  {
    variants: {
      inputVariant: {
        default:
          "border border-gray-200 placeholder-shown:border placeholder-shown:border-gray-200",
        auth: "border-2 border-purple-secondary placeholder-shown:border-2 placeholder-shown:border-purple-secondary",
      },
      inputError: {
        none: "focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0",
        error:
          "focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0",
      },
    },
    defaultVariants: {
      inputVariant: "default",
      inputError: "none",
    },
  }
);

export interface AnimatedInputProps
  extends InputProps,
    VariantProps<typeof inputVariants> {
  lang: Locale;
  Icon: Icon;
  label: string;
}

export const AnimatedInput = React.forwardRef<
  HTMLInputElement,
  AnimatedInputProps
>(({ lang, Icon, label, inputVariant, ...props }, ref) => {
  const { error } = useFormField();
  const [isFocused, setIsFocus] = React.useState(false);

  return (
    <div className="group relative h-10 w-full min-w-[200px]">
      <div
        className={cn(
          "absolute top-[42%] grid h-5 w-5 -translate-y-2/4 place-items-center",
          lang === "en" ? "right-3" : "left-3",
          isFocused
            ? error
              ? "text-red-500"
              : "text-blue-500"
            : "text-gray-500"
        )}
      >
        <Icon aria-hidden="true" />
      </div>
      <Input
        placeholder=" "
        className={cn(
          inputVariants({
            inputVariant,
            inputError: error ? "error" : "none",
          })
        )}
        {...props}
        ref={ref}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <FormLabel
        className={cn(
          "pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:me-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:border-s before:border-t before:border-gray-200 before:transition-all after:pointer-events-none after:ms-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:grow after:border-e after:border-t after:border-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:before:border-s-2 peer-focus:before:border-t-2 peer-focus:after:border-e-2 peer-focus:after:border-t-2 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500",
          lang === "en"
            ? "before:rounded-tl-md after:rounded-tr-md"
            : "before:rounded-tr-md after:rounded-tl-md",
          error
            ? "peer-focus:text-red-500 peer-focus:before:border-red-500  peer-focus:after:border-red-500"
            : "peer-focus:text-blue-500 peer-focus:before:border-blue-500  peer-focus:after:border-blue-500"
        )}
      >
        {label}
      </FormLabel>
    </div>
  );
});
AnimatedInput.displayName = "AnimatedInput";

export interface AnimatedPasswordInputProps
  extends InputProps,
    VariantProps<typeof inputVariants> {
  lang: Locale;
  label: string;
}

export const AnimatedPasswordInput = React.forwardRef<
  HTMLInputElement,
  AnimatedPasswordInputProps
>(({ lang, label, inputVariant, ...props }, ref) => {
  const { error } = useFormField();
  const [isFocused, setIsFocus] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="group relative h-10 w-full min-w-[200px]">
      <div
        className={cn(
          "absolute top-[42%] grid h-5 w-5 -translate-y-2/4 place-items-center",
          lang === "en" ? "right-3" : "left-3",
          isFocused
            ? error
              ? "text-red-500"
              : "text-blue-500"
            : "text-gray-500"
        )}
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? (
          <Icons.eyeOff aria-hidden="true" />
        ) : (
          <Icons.eye aria-hidden="true" />
        )}
        <span className="sr-only">
          {showPassword ? "Hide password" : "Show password"}
        </span>
      </div>
      <Input
        placeholder=" "
        type={showPassword ? "text" : "password"}
        className={cn(
          inputVariants({
            inputVariant,
            inputError: error ? "error" : "none",
          })
        )}
        {...props}
        ref={ref}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <FormLabel
        className={cn(
          "pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:me-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:border-s before:border-t before:border-gray-200 before:transition-all after:pointer-events-none after:ms-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:grow after:border-e after:border-t after:border-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:before:border-s-2 peer-focus:before:border-t-2 peer-focus:after:border-e-2 peer-focus:after:border-t-2 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500",
          lang === "en"
            ? "before:rounded-tl-md after:rounded-tr-md"
            : "before:rounded-tr-md after:rounded-tl-md",
          error
            ? "peer-focus:text-red-500 peer-focus:before:border-red-500  peer-focus:after:border-red-500"
            : "peer-focus:text-blue-500 peer-focus:before:border-blue-500  peer-focus:after:border-blue-500"
        )}
      >
        {label}
      </FormLabel>
    </div>
  );
});
AnimatedPasswordInput.displayName = "AnimatedPasswordInput";
