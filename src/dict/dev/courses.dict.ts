import { type Locale } from "#/i18n.config";

export interface CoursesDictProps {
  id: number;
  image: string;
  title: {
    [key in Locale]: string;
  };
  description: {
    [key in Locale]: string;
  };
  teacher: {
    [key in Locale]: string;
  };
}

export const coursesDict: CoursesDictProps[] = [
  {
    id: 1,
    image: "/images/dev/node-dark-green.jpg",
    title: {
      fa: "آموزش Node.js",
      en: "Node.js: The Complete Course 1",
    },
    description: {
      fa: "Node.js یک محیط اجرایی برای اجرای کدهای جاوااسکریپت است که بر پایه موتور V8 گوگل ساخته شده است. این محیط اجرایی می‌تواند در سمت سرور اجرا شود و کدهای جاوااسکریپتی را اجرا کند.",
      en: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
    },
    teacher: {
      fa: "آرمین اسلامی",
      en: "Armin Eslami",
    },
  },
  {
    id: 2,
    image: "/images/dev/node-red.png",
    title: {
      fa: "آموزش Node.js",
      en: "Node.js: The Complete Course 2",
    },
    description: {
      fa: "در این دوره آموزشی با Node.js آشنا می‌شوید و با کمک آن اپلیکیشن‌های وب پیشرفته بسازید.",
      en: "In this course, you will learn Node.js and build advanced web applications with it.",
    },
    teacher: {
      fa: "آرمین اسلامی",
      en: "Armin Eslami",
    },
  },
  {
    id: 3,
    image: "/images/dev/node-dark-green.jpg",
    title: {
      fa: "آموزش Node.js",
      en: "Node.js: The Complete Course 3",
    },
    description: {
      fa: "در این دوره آموزشی با Node.js آشنا می‌شوید و با کمک آن اپلیکیشن‌های وب پیشرفته بسازید.",
      en: "In this course, you will learn Node.js and build advanced web applications with it.",
    },
    teacher: {
      fa: "آرمین اسلامی",
      en: "Armin Eslami",
    },
  },
  {
    id: 4,
    image: "/images/dev/node-green.jpg",
    title: {
      fa: "آموزش Node.js",
      en: "Node.js: The Complete Course 4",
    },
    description: {
      fa: "در این دوره آموزشی با Node.js آشنا می‌شوید و با کمک آن اپلیکیشن‌های وب پیشرفته بسازید.",
      en: "In this course, you will learn Node.js and build advanced web applications with it.",
    },
    teacher: {
      fa: "آرمین اسلامی",
      en: "Armin Eslami",
    },
  },
  {
    id: 5,
    image: "/images/dev/node-dark-green.jpg",
    title: {
      fa: "آموزش Node.js",
      en: "Node.js: The Complete Course 1",
    },
    description: {
      fa: "Node.js یک محیط اجرایی برای اجرای کدهای جاوااسکریپت است که بر پایه موتور V8 گوگل ساخته شده است. این محیط اجرایی می‌تواند در سمت سرور اجرا شود و کدهای جاوااسکریپتی را اجرا کند.",
      en: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
    },
    teacher: {
      fa: "آرمین اسلامی",
      en: "Armin Eslami",
    },
  },
  {
    id: 6,
    image: "/images/dev/node-dark-green.jpg",
    title: {
      fa: "آموزش Node.js",
      en: "Node.js: The Complete Course 2",
    },
    description: {
      fa: "در این دوره آموزشی با Node.js آشنا می‌شوید و با کمک آن اپلیکیشن‌های وب پیشرفته بسازید.",
      en: "In this course, you will learn Node.js and build advanced web applications with it.",
    },
    teacher: {
      fa: "آرمین اسلامی",
      en: "Armin Eslami",
    },
  },
  {
    id: 7,
    image: "/images/dev/node-dark-green.jpg",
    title: {
      fa: "آموزش Node.js",
      en: "Node.js: The Complete Course 3",
    },
    description: {
      fa: "در این دوره آموزشی با Node.js آشنا می‌شوید و با کمک آن اپلیکیشن‌های وب پیشرفته بسازید.",
      en: "In this course, you will learn Node.js and build advanced web applications with it.",
    },
    teacher: {
      fa: "آرمین اسلامی",
      en: "Armin Eslami",
    },
  },
  {
    id: 8,
    image: "/images/dev/node-dark-green.jpg",
    title: {
      fa: "آموزش Node.js",
      en: "Node.js: The Complete Course 4",
    },
    description: {
      fa: "در این دوره آموزشی با Node.js آشنا می‌شوید و با کمک آن اپلیکیشن‌های وب پیشرفته بسازید.",
      en: "In this course, you will learn Node.js and build advanced web applications with it.",
    },
    teacher: {
      fa: "آرمین اسلامی",
      en: "Armin Eslami",
    },
  },
  {
    id: 9,
    image: "/images/dev/node-dark-green.jpg",
    title: {
      fa: "آموزش Node.js",
      en: "Node.js: The Complete Course 1",
    },
    description: {
      fa: "Node.js یک محیط اجرایی برای اجرای کدهای جاوااسکریپت است که بر پایه موتور V8 گوگل ساخته شده است. این محیط اجرایی می‌تواند در سمت سرور اجرا شود و کدهای جاوااسکریپتی را اجرا کند.",
      en: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
    },
    teacher: {
      fa: "آرمین اسلامی",
      en: "Armin Eslami",
    },
  },
  {
    id: 10,
    image: "/images/dev/node-dark-green.jpg",
    title: {
      fa: "آموزش Node.js",
      en: "Node.js: The Complete Course 2",
    },
    description: {
      fa: "در این دوره آموزشی با Node.js آشنا می‌شوید و با کمک آن اپلیکیشن‌های وب پیشرفته بسازید.",
      en: "In this course, you will learn Node.js and build advanced web applications with it.",
    },
    teacher: {
      fa: "آرمین اسلامی",
      en: "Armin Eslami",
    },
  },
  {
    id: 11,
    image: "/images/dev/node-dark-green.jpg",
    title: {
      fa: "آموزش Node.js",
      en: "Node.js: The Complete Course 3",
    },
    description: {
      fa: "در این دوره آموزشی با Node.js آشنا می‌شوید و با کمک آن اپلیکیشن‌های وب پیشرفته بسازید.",
      en: "In this course, you will learn Node.js and build advanced web applications with it.",
    },
    teacher: {
      fa: "آرمین اسلامی",
      en: "Armin Eslami",
    },
  },
  {
    id: 12,
    image: "/images/dev/node-dark-green.jpg",
    title: {
      fa: "آموزش Node.js",
      en: "Node.js: The Complete Course 4",
    },
    description: {
      fa: "در این دوره آموزشی با Node.js آشنا می‌شوید و با کمک آن اپلیکیشن‌های وب پیشرفته بسازید.",
      en: "In this course, you will learn Node.js and build advanced web applications with it.",
    },
    teacher: {
      fa: "آرمین اسلامی",
      en: "Armin Eslami",
    },
  },
];
