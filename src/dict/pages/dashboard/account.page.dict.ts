import { Rocket } from "lucide-react";

import { type Icon } from "@/components/assets/icons";

import { type Locale } from "#/i18n.config";

export interface DashboardAccoundPageDict {
  welcomeText: {
    [key in Locale]: string;
  };
  profileCompletion: {
    [key in Locale]: string;
  };
  profileCompletionGift: {
    [key in Locale]: string;
  };
  latestUpdates: {
    [keu in Locale]: string;
  };
  weeklySchedule: {
    [key in Locale]: string;
  };
  smallDetailsCardKeys: {
    title: { [key in Locale]: string };
    subtitle: { [key in Locale]: string };
    Icon: Icon;
    color: string;
  }[];
}

export const dashboardAccountPageDict: DashboardAccoundPageDict = {
  welcomeText: {
    fa: "، خوش آمدید!",
    en: ", Welcome!",
  },
  profileCompletion: {
    fa: "درصد تکمیل پروفایل",
    en: "Profile Completion",
  },
  profileCompletionGift: {
    fa: "با تکمیل پروفایل خود، هدیه‌ای از ما دریافت کنید!",
    en: "Complete your profile and get a gift from us!",
  },
  latestUpdates: {
    fa: "آخرین به‌روز‌رسانی‌ها",
    en: "Latest Updates",
  },
  weeklySchedule: {
    fa: "برنامه هفتگی",
    en: "Weekly Schedule",
  },
  smallDetailsCardKeys: [
    {
      title: { fa: "تکلیف‌های انجام نشده", en: "Unfinished Homeworks" },
      subtitle: {
        fa: "تکلیف",
        en: "Homework",
      },
      Icon: Rocket,
      color: "bg-teal-400",
    },
    {
      title: {
        fa: "جلسات تماشا نشده",
        en: "Unwatched Sessions",
      },
      subtitle: {
        fa: "جلسه",
        en: "Session",
      },

      Icon: Rocket,
      color: "bg-purple-400",
    },
    {
      title: {
        fa: "دوره‌های تکمیل نشده",
        en: "Incomplete Courses",
      },
      subtitle: {
        fa: "دوره",
        en: "Course",
      },
      Icon: Rocket,
      color: "bg-slate-400",
    },
    {
      title: {
        fa: "تمامی دوره‌های من",
        en: "All My Courses",
      },
      subtitle: {
        fa: "دوره",
        en: "Course",
      },
      Icon: Rocket,
      color: "bg-blue-400",
    },
  ],
};

export interface MockDashboardAccountPageDict {
  month: {
    [key in Locale]: string;
  };
  latestUpdates: {
    courseTitle: string;
    update: string;
  }[];
  schedule: {
    title: string;
    time: string;
  };
}

export const mockDashboardAccountPageDict: MockDashboardAccountPageDict = {
  month: {
    fa: "آذر ۱۴۰۲",
    en: "December 2023",
  },
  latestUpdates: [
    {
      courseTitle: "دوره آموزشی ری‌اکت",
      update: "درس ۱۰ اضافه شد",
    },
    {
      courseTitle: "دوره آموزشی ری‌اکت",
      update: "درس ۱۱ اضافه شد",
    },
    {
      courseTitle: "دوره آموزشی ری‌اکت",
      update: "درس ۱۲ اضافه شد",
    },
    {
      courseTitle: "دوره آموزشی ری‌اکت",
      update: "درس ۱۳ اضافه شد",
    },
    {
      courseTitle: "دوره آموزشی ری‌اکت",
      update: "درس ۱۴ اضافه شد",
    },
    {
      courseTitle: "دوره آموزشی ری‌اکت",
      update: "درس ۱۵ اضافه شد",
    },
    {
      courseTitle: "دوره آموزشی ری‌اکت",
      update: "درس ۱۶ اضافه شد",
    },
    {
      courseTitle: "دوره آموزشی ری‌اکت",
      update: "درس ۱۷ اضافه شد",
    },
  ],
  schedule: {
    title: "آموزش Next.js",
    time: "۱۰:۰۰ صبح",
  },
};
