import { Icons, type Icon } from "@/components/assets/icons";

import { type Locale } from "#/i18n.config";

export interface LobbyTitleBoxDict {
  title: {
    [key in Locale]: string;
  };
  subtitle?: {
    [key in Locale]: string;
  };
}

export const servicesTitleBoxDict: LobbyTitleBoxDict = {
  title: {
    fa: "ما چه کمکی به شما می‌تونیم بکنیم؟",
    en: "How Can We Help You?",
  },
  subtitle: {
    fa: "تمام آنچه نیاز دارید اینجاست",
    en: "Everything You Need Is Here",
  },
};

export const categoriesTitleBoxDict: LobbyTitleBoxDict = {
  title: {
    fa: "دسته‌بندی‌ها",
    en: "Categories",
  },
  subtitle: {
    fa: "گستره وسیعی از موضوعات",
    en: "A Wide Range of Topics",
  },
};

export const coursesTitleBoxDict: LobbyTitleBoxDict = {
  title: {
    fa: "دوره‌ها",
    en: "Courses",
  },
  subtitle: {
    fa: "سکوی شما به سمت موفقیت",
    en: "Your Platform to Success",
  },
};

export const teachersTitleBoxDict: LobbyTitleBoxDict = {
  title: {
    fa: "اساتید برتر",
    en: "Top teachers",
  },
  subtitle: {
    fa: "با اساتید برتر ما آشنا شوید",
    en: "Get to know our top teachers",
  },
};

export const newsTitleBoxDict: LobbyTitleBoxDict = {
  title: {
    fa: "اخبار و مقالات",
    en: "News and Articles",
  },
  subtitle: {
    fa: "جدیدترین اخبار دنیای برنامه‌نویسی",
    en: "Latest News in the World of Programming",
  },
};

export const suggestionsTitleBoxDict: LobbyTitleBoxDict = {
  title: {
    fa: "پیشنهادات و انتقادات",
    en: "Suggestions and Criticisms",
  },
  subtitle: {
    fa: "نظرات خود را با ما در میان بگذارید",
    en: "Share your comments with us",
  },
};

export interface HeroDictProps {
  title: {
    [key in Locale]: string;
  };
  description: {
    [key in Locale]: string;
  };
  button: {
    [key in Locale]: string;
  };
}

export const heroDict: HeroDictProps = {
  title: {
    fa: "آکادمی سپهر",
    en: "luminous Academy",
  },
  description: {
    fa: "پژوهشگاه سپهر با هدف تولید و انتشار محتوای با کیفیت آموزشی و همچنین آشنایی جامعه با فضای کسب‌و‌کار در فضای مجازی ایجاد شده و امید داریم بتوانیم با راه‌کار‌های نوین و استفاده از پتانسیل فضای مجازی ایجاد فرصت کنیم برای افرادی که خواهان پیشرفت خود و کشورشان هستند",
    en: "luminous Institute was established with the aim of producing and publishing quality educational content as well as introducing the community to the business opportunities in the virtual space, and we hope that through innovative solutions and use of the potential of the virtual space, we can create opportunities for people who want to advance themselves and their country",
  },
  button: {
    fa: "شروع یادگیری",
    en: "Start Learning",
  },
};

export interface ServicesDictProps {
  id: number;
  title: {
    [key in Locale]: string;
  };
  desc: {
    [key in Locale]: string;
  };
  icon: Icon;
  bgColor: string;
}

export const servicesDict: ServicesDictProps[] = [
  {
    id: 1,
    title: {
      fa: "ارائه مدرک معتبر",
      en: "Valid Certificate",
    },
    desc: {
      fa: "با اتمام دوره‌ها مدرک معتبری دریافت کنید و به رزومه خود اضافه کنید",
      en: "Get a valid certificate after completing the courses and add it to your resume",
    },
    icon: Icons.scrollText,
    bgColor: "from-[#E3B709]/30 to-[#E3B709]",
  },
  {
    id: 2,
    title: {
      fa: "دوره‌های متنوع",
      en: "Various Courses",
    },
    desc: {
      fa: "دوره‌های متنوعی در زمینه‌های مختلف برای شما فراهم کرده‌ایم که می‌توانید از آنها استفاده کنید تا جدیدترین مطالب را یاد بگیرید",
      en: "We have provided a variety of courses in various fields for you to use to learn the latest topics",
    },
    icon: Icons.fileCheck,
    bgColor: "from-[#D23120]/30 to-[#D23120]",
  },
  {
    id: 3,
    title: {
      fa: "فرصت‌های شغلی",
      en: "Job Opportunity",
    },
    desc: {
      fa: "با اتمام دوره‌ها می‌توانید در شرکت‌های معتبر مشغول به کار شوید و تجربه کسب کنید و از آن بهره‌مند شوید",
      en: "After completing the courses, you can work in reputable companies and gain experience and benefit from it",
    },
    icon: Icons.network,
    bgColor: "from-[#267AB2]/30 to-[#267AB2]",
  },
  {
    id: 4,
    title: {
      fa: "مشاوره",
      en: "Counseling",
    },
    desc: {
      fa: "با مشاوران ما می‌توانید در مورد دوره‌ها و مسیر شغلی خود صحبت کنید و راهنمایی بگیرید و از تجربه آنها بهره‌مند شوید",
      en: "You can talk to our consultants about courses and your career path and get guidance and benefit from their experience",
    },
    icon: Icons.user,
    bgColor: "from-[#7D329A]/30 to-[#7D329A]",
  },
];

export interface CategoryDictProps {
  title: {
    [key in Locale]: string;
  };
  Icon: Icon;
  color: string;
}

export const categoriesDict: CategoryDictProps[] = [
  {
    title: {
      fa: "وب",
      en: "Web",
    },
    Icon: Icons.search,
    color: "text-blue-500 border-blue-500",
  },
  {
    title: {
      fa: "هوش مصنوعی",
      en: "Artificial Intelligence",
    },
    Icon: Icons.search,
    color: "text-red-500 border-red-500",
  },
  {
    title: {
      fa: "هک و امنیت",
      en: "System & Security",
    },
    Icon: Icons.search,
    color: "text-green-500 border-green-500",
  },
  {
    title: {
      fa: "داده کاوی",
      en: "Data Analyses",
    },
    Icon: Icons.search,
    color: "text-cyan-500 border-cyan-500",
  },
  {
    title: {
      fa: "طراحی رابط کاربری",
      en: "UI Design",
    },
    Icon: Icons.search,
    color: "text-yellow-500 border-yellow-500",
  },
  {
    title: {
      fa: "برنامه‌نویسی فرانت",
      en: "Frontend",
    },
    Icon: Icons.search,
    color: "text-purple-500 border-purple-500",
  },
  {
    title: {
      en: "Backend",
      fa: "برنامه‌نویسی بکند",
    },
    Icon: Icons.search,
    color: "text-slate-300 border-slate-300",
  },
  {
    title: {
      fa: "برنامه‌نویسی موبایل",
      en: "Mobile Development",
    },
    Icon: Icons.search,
    color: "text-emerald-500 border-emerald-500",
  },
];
export interface CategoryColorDictProps {
  color: string;
}

export const categoriesColorDict: CategoryColorDictProps[] = [
  {
    color: "text-white from-blue-500 to-emerald-500",
  },
  {
    color: "text-white from-red-500 to-slate-500",
  },
  {
    color: "text-white from-green-500 to-purple-500",
  },
  {
    color: "text-white from-cyan-500 to-yellow-500",
  },
  {
    color: "text-white from-yellow-500 to-cyan-500",
  },
  {
    color: "text-white from-purple-500 to-purple-500",
  },
  {
    color: "text-white from-slate-500 to-red-500",
  },
  {
    color: "text-white from-emerald-500 to-blue-500",
  },
];
