import { Label, Switch } from "@/components/elements/ui/client";

import { type Locale } from "#/i18n.config";

export const ListCommingSoon = ({ lang }: { lang: Locale }) => {
  return (
    <div className="flex w-full justify-between rounded-xl bg-card p-4  shadow">
      <Label htmlFor="list-free">
        {lang === "fa" ? "درحال پیش فروش" : "Pre-sale"}
      </Label>
      <Switch
        id="list-free"
        className="bg-[#ccc] data-[state=checked]:bg-primary"
      />
    </div>
  );
};
