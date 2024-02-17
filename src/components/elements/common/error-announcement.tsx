import { Card, CardHeader } from "@/components/elements/ui/card";

import { type Locale } from "#/i18n.config";

export const FetchErrorAnnouncement = ({
  place,
  lang,
}: {
  place: {
    [key in Locale]: string;
  };
  lang: Locale;
}) => {
  return (
    <Card className="flex items-center justify-center rounded-lg border-2 p-3 font-black">
      <CardHeader>
        {
          {
            fa: `خطایی در دریافت اطلاعات برای ${place[lang]} رخ داد`,
            en: `An error occurred while fetching data for ${place[lang]}`,
          }[lang]
        }
      </CardHeader>
    </Card>
  );
};
