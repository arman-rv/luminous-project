import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/elements/ui";

import { type Locale } from "#/i18n.config";

type TitleBoxProps = {
  lang: Locale;
  title: {
    [key in Locale]: string;
  };
  desc?: {
    [key in Locale]: string;
  };
  className?: string;
};

export const TitleBox = ({ lang, title, desc, className }: TitleBoxProps) => {
  return (
    <Card className="mb-10 flex flex-col flex-wrap items-center justify-between gap-4 border-none shadow-none sm:flex-row">
      <CardContent className="space-y-2.5 self-start">
        <div className="flex items-center gap-x-2.5 sm:gap-x-3.5">
          <span className="inline-block h-3.5 w-3.5 rounded-sm bg-amber-400" />
          <CardTitle className="text-2xl font-bold text-zinc-700 dark:text-white sm:text-3xl">
            {title[lang]}
          </CardTitle>
        </div>
        {desc && (
          <CardDescription className="text-slate-500 dark:text-slate-400 sm:text-xl">
            {desc[lang]}
          </CardDescription>
        )}
      </CardContent>
    </Card>
  );

  // return (
  //   <Card
  //     className={cn(
  //       `rounded-xl border-primary px-4 py-3 text-primary shadow-sm shadow-primary sm:px-7 md:px-12`,
  //       className
  //     )}
  //   >
  //     <CardContent className="flex flex-col items-center justify-center gap-1.5">
  //       <CardTitle className="text-2xl font-black md:text-3xl">
  //         {title[lang]}
  //       </CardTitle>
  //       {desc && (
  //         <CardDescription className="text-center text-xs md:text-sm">
  //           {desc[lang]}
  //         </CardDescription>
  //       )}
  //     </CardContent>
  //   </Card>
  // );
};
