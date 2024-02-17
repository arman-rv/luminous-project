import { Label, Switch } from "@/components/elements/ui/client";

import { type Locale } from "#/i18n.config";

export const ListFree = ({ lang }: { lang: Locale }) => {
  return (
    <div className="flex w-1/2 items-center justify-between rounded-xl bg-card p-4 shadow  md:w-full">
      <Label htmlFor="list-free">
        {lang === "fa" ? "فقط دوره های رایگان" : "Just free courses"}
      </Label>
      <Switch
        id="list-free"
        className="bg-[#ccc] data-[state=checked]:bg-primary"
      />
    </div>
  );
};
