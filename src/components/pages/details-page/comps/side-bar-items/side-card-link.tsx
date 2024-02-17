"use client";

import { Files } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/elements/ui";

import { linkSideCardDict } from "@/dict/pages/details.dict";

import { type Locale } from "#/i18n.config";

import { SideCard } from ".";

export const LinkSideCard = ({
  lang,
  link,
}: {
  lang: Locale;
  link: string;
}) => {
  const copyToClipboard = () => {
    try {
      void navigator.clipboard.writeText(link);

      toast.success(
        {
          fa: "لینک با موفقیت کپی شد!",
          en: "Link copied successfully!",
        }[lang]
      );
    } catch (err) {
      console.error(err);

      toast.error(
        {
          fa: "مشکلی در کپی لینک به وجود آمد!",
          en: "An error occurred while copying the link!",
        }[lang]
      );
    }
  };

  return (
    <SideCard
      lang={lang}
      title={linkSideCardDict.text}
      color={linkSideCardDict.color}
    >
      <div
        className="flex items-center justify-between gap-x-2.5 rounded-xl border border-dashed border-gray-600/30 bg-background p-5 text-text/60"
        dir="rtl"
      >
        <Button size="icon" className="" onClick={() => void copyToClipboard()}>
          <Files />
        </Button>
        <span className="truncate text-lg" dir="ltr">
          {link}
        </span>
      </div>
    </SideCard>
  );
};
