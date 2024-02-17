import { type Locale } from "#/i18n.config";

export interface ShortLinkSideCardDictProps {
  href: string;
}

export const shortLinkSideCardDict: ShortLinkSideCardDictProps = {
  href: "https://luminous.com/blog/welcome-to-luminous",
};

export interface LinksSideCardDictProps {
  links: {
    title: {
      [key in Locale]: string;
    };
    href: string;
  }[];
}

export const latestPostsSideCardDict: LinksSideCardDictProps = {
  links: [
    {
      title: {
        en: "Working with Files in Python + Table",
        fa: "کار با فایل در پایتون (در سه سوت) + جدول راهنما",
      },
      href: "welcome-to-luminous",
    },
    {
      title: {
        en: "Working with Files in Python",
        fa: "کار با فایل در پایتون",
      },
      href: "welcome-to-luminous",
    },
    {
      title: {
        en: "Working with Files in Python + Table",
        fa: "کار با فایل در پایتون (در سه سوت) + جدول راهنما",
      },
      href: "welcome-to-luminous",
    },
    {
      title: {
        en: "Working with Files in Python",
        fa: "کار با فایل در پایتون",
      },
      href: "welcome-to-luminous",
    },
  ],
};

export const categoriesDict: LinksSideCardDictProps = {
  links: [
    {
      title: {
        en: "Website Design",
        fa: "طراحی وبسایت",
      },
      href: "web-design",
    },
    {
      title: {
        fa: "جاوااسکریپت",
        en: "JavaScript",
      },
      href: "javascript",
    },
    {
      title: {
        fa: "کسب درآمد از برنامه‌نویسی",
        en: "Make Money Through Programming",
      },
      href: "make-money-programming",
    },
    {
      title: {
        fa: "شروع برنامه‌نویسی",
        en: "Start Programming",
      },
      href: "start-programming",
    },
    {
      title: {
        fa: "پایتون",
        en: "Python",
      },
      href: "python",
    },
  ],
};
