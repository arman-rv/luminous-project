import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button, Card, CardContent, CardTitle } from "@/components/elements/ui";

import { type NewsType } from "@/core/validators/api";

import { type Locale } from "#/i18n.config";

type NewsCardProps = {
  lang: Locale;
  title: {
    [key in Locale]: string;
  };
  contents: NewsType[];
};

export const NewsCard = ({ lang, title, contents: news }: NewsCardProps) => {
  return (
    <Card className="container relative w-full max-w-lg border-none bg-card px-4 pt-12">
      <CardTitle className="absolute -start-4 -top-4 w-fit rounded-xl border bg-card px-7 py-2 text-lg font-semibold shadow">
        {title[lang]}
      </CardTitle>
      <CardContent>
        <div className="flex max-w-lg flex-col items-center gap-3">
          {news.map((singleNews, index) => (
            <Fragment key={index}>
              <div className="flex w-full items-center gap-5">
                {/* <Image
                  src={singleNews.currentImageAddressTumb}
                  alt="news-item"
                  width={100}
                  height={100}
                  className="rounded-xl"
                /> */}
                <p className="line-clamp-1 text-sm">{singleNews.title}</p>
              </div>
              {index !== news.length - 1 && <div className="w-5/6 border" />}
            </Fragment>
          ))}
        </div>
        <Link href="#" className="flex w-full justify-end pb-4">
          <Button className="rounded-lg border-2 border-primary bg-primary px-7 py-3 font-medium text-secondary shadow transition-colors duration-500 hover:bg-card hover:text-primary">
            {
              {
                en: "More",
                fa: "بیشتر",
              }[lang]
            }
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
