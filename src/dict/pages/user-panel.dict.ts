import { Icons, type Icon } from "@/components/assets/icons";

import { type Locale } from "#/i18n.config";

export interface PanelAsideOptionProps {
  id: number;
  Icon: Icon;
  title: { [lang in Locale]: string };
  href: string;
}
export const panelAsideOption: PanelAsideOptionProps[] = [
  {
    id: 1,
    Icon: Icons.home,
    title: {
      fa: "پروفایل",
      en: "Profile",
    },
    href: "profile",
  },
  {
    id: 2,
    Icon: Icons.myCourses,
    title: {
      fa: "داشبورد",
      en: "Dashboard",
    },
    href: "dashboard",
  },
  {
    id: 3,
    Icon: Icons.edit,
    title: {
      fa: "جزئیات پروفایل",
      en: "Profile Details",
    },
    href: "edit",
  },
];
