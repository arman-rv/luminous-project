import { ScheduleTable } from "@/components/pages/user-panel/account-page";
import { LatestUpdatesCard } from "@/components/pages/user-panel/account-page/latest-posts-card";
import { SmallDetailCard } from "@/components/pages/user-panel/account-page/small-detail-card";
import { Progress } from "@/components/elements/ui/progress";

import {
  dashboardAccountPageDict,
  mockDashboardAccountPageDict,
} from "@/dict/pages/dashboard/account.page.dict";

import { getUserProfileInfo } from "@/core/services/api";
import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

const AccountPage = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const data = await getUserProfileInfo();
  const dict = dashboardAccountPageDict;
  const mockData = mockDashboardAccountPageDict;

  if (!data) return null;

  return (
    <div className="grid h-full w-full grid-cols-8 items-center justify-center gap-10">
      <div className="col-span-5 flex h-full flex-col items-start justify-between gap-3">
        <div className="h-full w-full space-y-3">
          <div className="flex w-full items-center justify-between text-xl font-bold">
            <p>{dict.profileCompletion[lang]}</p>
            <p>
              {(data.profileCompletionPercentage / 100).toLocaleString(lang, {
                style: "percent",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </p>
          </div>
          <Progress
            value={data.profileCompletionPercentage}
            className={cn(lang === "fa" && "-scale-100")}
          />
          {data.profileCompletionPercentage !== 100 && (
            <p className="text-sm font-semibold">
              {dict.profileCompletionGift[lang]}
            </p>
          )}
        </div>
        <div className="h-full w-full">
          <div className="flex w-full items-center justify-between py-3 text-xl font-bold">
            <p>{dict.weeklySchedule[lang]}</p>
            <p>{mockData.month[lang]}</p>
          </div>
          <ScheduleTable lang={lang} schedule={mockData.schedule} />
        </div>
      </div>
      <div className="col-span-3 flex h-full flex-col justify-end">
        <div className="h-full w-full">
          <p className="py-2 text-xl font-bold">{dict.latestUpdates[lang]}</p>
          <div className="grid max-w-full snap-x grid-flow-col gap-3 overflow-auto scrollbar-none">
            {mockData.latestUpdates.map((post, index) => (
              <LatestUpdatesCard key={index} index={index} post={post} />
            ))}
          </div>
        </div>
        <div className="grid grid-rows-4 gap-3">
          {dict.smallDetailsCardKeys.map((card, index) => (
            <SmallDetailCard key={index} lang={lang} card={card} count={5} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
