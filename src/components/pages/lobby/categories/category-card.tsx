import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/elements/ui";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

type CategoryCardProps = {
  lang: Locale;
  id: number;
  title: string;
  desc: string;
  color: string | undefined;
};

export const CategoryCard = ({
  lang,
  id,
  title,
  desc,
  color,
}: CategoryCardProps) => {
  return (
    <Link href={`${lang}/courses?techIds=${id}`}>
      <Card
        className={cn(
          "flex items-center justify-center rounded-xl border-none bg-card bg-gradient-to-tr px-7 py-6 dark:border dark:border-gray-700 sm:px-10",
          color
        )}
      >
        <CardContent className="flex flex-col items-end justify-center">
          <CardTitle className="text-center text-xl font-black lg:text-3xl">
            {title.toUpperCase()}
          </CardTitle>
          <CardDescription className="text-center font-medium lg:text-xl">
            {desc}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};
