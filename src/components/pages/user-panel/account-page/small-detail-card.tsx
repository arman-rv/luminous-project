import { type Icon } from "@/components/assets/icons";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

type SmallDetailCardProps = {
  lang: Locale;
  count: number;
  card: {
    title: {
      [key in Locale]: string;
    };
    subtitle: {
      [key in Locale]: string;
    };
    Icon: Icon;
    color: string;
  };
};

export const SmallDetailCard = ({
  lang,
  count,
  card: { title, subtitle, Icon, color },
}: SmallDetailCardProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-2xl p-4 text-white",
        color
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
        <Icon className="h-8 w-8" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-2xl font-extrabold">
          {count} {subtitle[lang]}
        </span>
        <span className="text-xs font-semibold">{title[lang]}</span>
      </div>
    </div>
  );
};
