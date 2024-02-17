"use client";

import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { Button } from "@/components/elements/ui";
import { Icons } from "@/components/assets/icons";

import { logOutAction } from "@/core/actions";

import { type Locale } from "#/i18n.config";

export const LogOutButton = ({ lang }: { lang: Locale }) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const res = await logOutAction();

    if (res) {
      toast.success(
        {
          fa: "خروج با موفقیت انجام شد",
          en: "Logout was successful",
        }[lang]
      );

      router.push(`/${lang}`);
    } else {
      toast.error(
        {
          fa: "خطایی در خروج از حساب کاربری رخ داده است",
          en: "An error occurred while logging out",
        }[lang]
      );
    }
  };
  return (
    <div className="flex items-center gap-2 py-7 font-bold text-white">
      <Icons.logOut className="" />
      <Button className="" onClick={() => void handleLogOut()}>
        {
          {
            fa: "خروج از حساب کاربری",
            en: "Exit",
          }[lang]
        }
      </Button>
    </div>
  );
};
