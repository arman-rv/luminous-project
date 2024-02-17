import { type Locale } from "#/i18n.config";

export interface TeacherDictProps {
  image: string;
  fullName: {
    [key in Locale]: string;
  };
  position: {
    [key in Locale]: string;
  };
  description: {
    [key in Locale]: string;
  };
}

export const teachersDict: TeacherDictProps[] = [
  {
    image: "/images/dev/person-avatar.jpg",
    fullName: {
      fa: "دکتر بحرالعلوم",
      en: "Dr. Baharaloloom",
    },
    position: {
      fa: "مدیریت",
      en: "Management",
    },
    description: {
      fa: "مدرس در آموزشگاه مدرس در دانشگاه علم‌و‌فناوری مازندران مستغر در بهشهر مدرس دوره‌های وب ",
      en: "Teacher at Mazandaran University of Science and Technology, Teacher at Behshahr, Teacher of Web Courses",
    },
  },
  {
    image: "/images/dev/person-avatar.jpg",
    fullName: {
      fa: "حامد نظری",
      en: "Hamed Nazari",
    },
    position: {
      fa: "طراح فرانت",
      en: "Frontend Developer",
    },
    description: {
      fa: "طراح وب و برنامه نویس فرانت اند",
      en: "Web Designer and Frontend Developer",
    },
  },
  {
    image: "/images/dev/person-avatar.jpg",
    fullName: {
      fa: "احمد رضایی",
      en: "Mohammadreza Rezaei",
    },
    position: {
      fa: "طراح بک",
      en: "Backend Developer",
    },
    description: {
      fa: "برنامه نویس بک اند",
      en: "Backend Developer",
    },
  },
  {
    image: "/images/dev/person-avatar.jpg",
    fullName: {
      fa: "محمدرضا رضایی",
      en: "Mohammadreza Rezaei",
    },
    position: {
      fa: "طراح بک",
      en: "Backend Developer",
    },
    description: {
      fa: "برنامه نویس بک اند",
      en: "Backend Developer",
    },
  },
];
