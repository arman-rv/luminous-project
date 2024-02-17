"use client";
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useDebouncedCallback } from "use-debounce";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

export const ListSearch = ({
  className,
  lang,
}: {
  className?: string;
  lang: Locale;
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <div className={cn("w-full rounded-xl bg-card p-4 shadow", className)}>
      <input
        type="text"
        className="border-none bg-transparent text-text placeholder:text-[#444] focus:outline-none focus:placeholder:text-transparent"
        placeholder={lang === "fa" ? "جستجو..." : "search..."}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};
