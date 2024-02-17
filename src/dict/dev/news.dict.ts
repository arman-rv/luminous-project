import { type Locale } from "#/i18n.config";

export interface NewsDictProps {
  title: {
    [key in Locale]: string;
  };
  content: {
    image: string;
    text: {
      [key in Locale]: string;
    };
  }[];
}

export const newsDict: NewsDictProps = {
  title: {
    fa: "اخبار",
    en: "News",
  },
  content: [
    {
      image: "/images/dev/node-dark-green.jpg",
      text: {
        fa: "آموزشگاه در تدارک دوره‌های جدید برنامه‌نویسی است",
        en: "The school is preparing new programming courses",
      },
    },
    {
      image: "/images/dev/node-dark-green.jpg",
      text: {
        fa: "آموزشگاه در تدارک دوره‌های جدید برنامه‌نویسی است. آموزشگاه در تدارک دوره‌های جدید برنامه‌نویسی است. آموزشگاه در تدارک دوره‌های جدید برنامه‌نویسی است",
        en: "The school is preparing new programming courses",
      },
    },
    {
      image: "/images/dev/node-dark-green.jpg",
      text: {
        fa: "آموزشگاه در تدارک دوره‌های جدید برنامه‌نویسی است",
        en: "The school is preparing new programming courses",
      },
    },
    {
      image: "/images/dev/node-dark-green.jpg",
      text: {
        fa: "آموزشگاه در تدارک دوره‌های جدید برنامه‌نویسی است",
        en: "The school is preparing new programming courses",
      },
    },
  ],
};

export const articlesDict: NewsDictProps = {
  title: {
    fa: "مقالات",
    en: "Articles",
  },
  content: [
    {
      image: "/images/dev/node-dark-green.jpg",
      text: {
        fa: "آموزشگاه در تدارک دوره‌های جدید برنامه‌نویسی است",
        en: "The school is preparing new programming courses",
      },
    },
    {
      image: "/images/dev/node-dark-green.jpg",
      text: {
        fa: "آموزشگاه در تدارک دوره‌های جدید برنامه‌نویسی است",
        en: "The school is preparing new programming courses",
      },
    },
    {
      image: "/images/dev/node-dark-green.jpg",
      text: {
        fa: "آموزشگاه در تدارک دوره‌های جدید برنامه‌نویسی است",
        en: "The school is preparing new programming courses",
      },
    },
    {
      image: "/images/dev/node-dark-green.jpg",
      text: {
        fa: "آموزشگاه در تدارک دوره‌های جدید برنامه‌نویسی است",
        en: "The school is preparing new programming courses",
      },
    },
  ],
};
