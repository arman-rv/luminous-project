"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { Button } from "@/components/elements/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/elements/ui/dropdown-menu";
import { Icons } from "@/components/assets/icons";

import { logOutAction } from "@/core/actions";
import { getUserProfileInfo } from "@/core/services/api";
import { type UserProfileInfoType } from "@/core/validators/api";
import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

import { SearchNav } from "../search-nav";

export const AuthNav = ({
  lang,
  token,
}: {
  lang: Locale;
  token: string | undefined;
}) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<UserProfileInfoType | null>(null);

  const handleLogOut = async () => {
    const res = await logOutAction();

    if (res) {
      toast.success(
        {
          fa: "خروج با موفقیت انجام شد",
          en: "Logout was successful",
        }[lang]
      );
      router.refresh();
    } else {
      toast.error(
        {
          fa: "خطایی در خروج از حساب کاربری رخ داده است",
          en: "An error occurred while logging out",
        }[lang]
      );
    }
  };

  useEffect(() => {
    if (token) {
      const getUserInfo = async () => {
        const res = await getUserProfileInfo();

        if (res) {
          setUserInfo(res);
        }
      };

      void getUserInfo();
    }
  }, [token]);

  return (
    <nav className="flex basis-2/5 flex-wrap items-center justify-end">
      <div className="hidden items-center gap-2 md:flex">
        <SearchNav lang={lang} />
        {token ? (
          userInfo && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="h-10 w-10 px-0">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full border bg-card px-0">
                    <Icons.user className="h-6 w-6" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="mt-2 w-56 bg-card"
                align={lang === "fa" ? "start" : "end"}
                forceMount
              >
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {userInfo.fName} {userInfo.lName}
                    </p>
                    <p className="text-xs leading-none">{userInfo.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href={`/${lang}/dashboard/profile`}>
                      <Icons.eye className="mr-2 h-4 w-4" aria-hidden="true" />
                      {
                        {
                          fa: "پروفایل",
                          en: "Profile",
                        }[lang]
                      }
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href={`/${lang}/dashboard/dashboard`}>
                      <Icons.home className="mr-2 h-4 w-4" aria-hidden="true" />
                      {
                        {
                          fa: "داشبورد",
                          en: "Dashboard",
                        }[lang]
                      }
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href={`/${lang}/dashboard/edit`}>
                      <Icons.edit className="mr-2 h-4 w-4" aria-hidden="true" />
                      {
                        {
                          fa: "ویرایش اطلاعات",
                          en: "Edit Profile",
                        }[lang]
                      }
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  asChild
                  onClick={() => void handleLogOut()}
                  className="cursor-pointer"
                >
                  <span>
                    <Icons.logOut className="mr-2 h-4 w-4" aria-hidden="true" />
                    {
                      {
                        fa: "خروج",
                        en: "Log Out",
                      }[lang]
                    }
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        ) : (
          <div className="flex h-full flex-wrap gap-2 font-semibold">
            <LinkButton
              lang={lang}
              text={{ fa: "ثبت نام", en: "Sign Up" }}
              href="sign-up"
              className="hidden lg:flex"
            />
            <LinkButton
              lang={lang}
              text={{ fa: "ورود", en: "Sign In" }}
              href="sign-in"
              className="flex"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

const LinkButton = ({
  lang,
  text,
  href,
  className,
}: {
  lang: Locale;
  text: {
    [key in Locale]: string;
  };
  href: string;
  className?: string;
}) => {
  return (
    <Link
      href={`/${lang}/${href}`}
      className={cn(
        "h-full flex-wrap items-center justify-center rounded-xl border-[3px] border-primary bg-primary px-5 py-1.5 text-center text-secondary transition duration-500 hover:bg-transparent hover:text-primary",
        className
      )}
    >
      {text[lang]}
    </Link>
  );
};
