import Link from "next/link";

import { UserDashboardNotification } from "@/components/pages/user-panel/account-page";
import {
  LogOutButton,
  UserAvatar,
} from "@/components/pages/user-panel/side-bar-items";
import { SideBarNav } from "@/components/pages/user-panel/side-bar-items/client";
import { H3 } from "@/components/elements/ui";
import { Icons } from "@/components/assets/icons";

import { dashboardAccountPageDict } from "@/dict/pages/dashboard/account.page.dict";

import { getUserProfileInfo } from "@/core/services/api";

import { type Locale } from "#/i18n.config";

const DashboardLayout = async ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) => {
  const data = await getUserProfileInfo();
  const dict = dashboardAccountPageDict;

  if (!data) return null;

  return (
    <div className="flex h-screen max-h-screen min-h-screen w-full items-center px-24 py-16">
      <div className="flex h-full w-full rounded-2xl bg-primary py-3 pe-3">
        <aside className="relative hidden h-full flex-col items-center justify-between lg:flex lg:w-1/4">
          <Link href={`/${lang}`} className="absolute start-4 top-0">
            <Icons.home className="h-8 w-8 cursor-pointer text-white" />
          </Link>
          <div className="flex w-full flex-col items-center">
            <UserAvatar
              fName={data.fName}
              lName={data.lName}
              picture={data.currentPictureAddress}
            />
            <SideBarNav lang={lang} />
          </div>
          <LogOutButton lang={lang} />
        </aside>
        <section className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-card p-10">
          <header className="flex w-full items-center justify-between pb-5">
            <H3 className="text-2xl font-extrabold text-text">
              {data.fName + " " + data.lName + dict.welcomeText[lang]}
            </H3>
            <UserDashboardNotification />
          </header>
          {children}
        </section>
      </div>
    </div>
  );
};
export default DashboardLayout;
