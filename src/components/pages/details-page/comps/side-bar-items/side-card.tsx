import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

export const SideCard = ({
  lang,
  title,
  color,
  children,
}: {
  lang: Locale;
  title: {
    [key in Locale]: string;
  };
  color: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="shadow-light rounded-xl border-none bg-card px-7 py-6">
      <p className="-ms-7 mb-5 flex items-center gap-x-2.5 text-2xl font-bold">
        <span className={cn("block h-2 w-7 rounded-e-sm", color)} />
        <span>{title[lang]}</span>
      </p>
      {children}
    </div>
  );
};
