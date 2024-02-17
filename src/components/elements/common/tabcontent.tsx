import { Tabs, TabsContent } from "@/components/elements/ui/client";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

type TabContentProps = {
  value: { [key in Locale]: string };
  title: { [key in Locale]: string };
  className: string;
  lang: Locale;
};
export const TabContent = ({
  lang,
  value,
  title,
  className,
}: TabContentProps) => {
  return (
    <Tabs>
      <TabsContent value={value[lang]} className={cn("", className)}>
        {title[lang]}
      </TabsContent>
    </Tabs>
  );
};
