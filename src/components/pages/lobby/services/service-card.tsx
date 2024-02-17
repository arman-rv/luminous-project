import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/elements/ui";
import { type Icon } from "@/components/assets/icons";

import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  desc: string;
  Icon: Icon;
  bgColor: string;
};

export const ServiceCard = ({
  Icon,
  title,
  desc,
  bgColor,
}: ServiceCardProps) => {
  return (
    <Card className="shadow-light flex flex-wrap items-center justify-center gap-6 rounded-2xl border-none bg-card p-5 text-center dark:border dark:border-gray-700 dark:shadow-none xs:flex-nowrap xs:justify-start xs:text-start">
      <div
        className={cn(
          "h-20 w-20 shrink-0 rotate-45 rounded-full bg-gradient-to-t",
          bgColor
        )}
      />
      <CardContent className="space-y-2.5">
        <CardTitle className="text-xl font-black text-text">{title}</CardTitle>
        <CardDescription className="pe-5 font-light text-slate-500 dark:text-slate-400">
          {desc}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
