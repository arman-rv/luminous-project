import { useCallback, useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useDebounce } from "use-debounce";

import { Button, H3 } from "@/components/elements/ui";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/elements/ui/client";
import { Skeleton } from "@/components/elements/ui/skeleton";
import { Icons } from "@/components/assets/icons";

import {
  getCoursesByPagination,
  getNewsFilterPages,
} from "@/core/services/api";
import {
  type AllCourseFilterDtoType,
  type AllNewsType,
} from "@/core/validators/api";
import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

export const SearchNav = ({ lang }: { lang: Locale }) => {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [courseList, setCourseList] = useState<
    AllCourseFilterDtoType | null | undefined
  >();
  const [newsList, setNewsList] = useState<AllNewsType | null | undefined>();
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);
  const router = useRouter();
  useEffect(() => {
    if (debouncedQuery.length <= 0) {
      setCourseList(null);
      setNewsList(null);
      return;
    }

    const getCourse = async () => {
      try {
        const data = await getCoursesByPagination({ query: debouncedQuery });

        setCourseList(data?.courseFilterDtos);
      } catch (err) {
        console.log(err);
      }
    };

    const getNews = async () => {
      try {
        const data = await getNewsFilterPages({ query: debouncedQuery });
        console.log(data);
        setNewsList(data?.news);
      } catch (err) {
        console.log(err);
      }
    };

    startTransition(async () => {
      await getCourse();
      await getNews();
    });

    return () => {
      setCourseList(null);
      setNewsList(null);
    };
  }, [debouncedQuery]);

  const handleSelect = useCallback((callback: () => unknown) => {
    setOpen(false);
    callback();
  }, []);

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="flex aspect-square h-full cursor-pointer items-center justify-center rounded-xl border-[3px] border-primary bg-primary p-1.5 text-secondary transition duration-500 hover:bg-transparent hover:text-primary"
      >
        <Icons.search />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder={
            { fa: "جستجو بر اساس عنوان...", en: "Search by title..." }[lang]
          }
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty
            className={cn(isPending ? "hidden" : "py-6 text-center text-sm")}
          >
            {{ fa: "یافت نشد.", en: "Not found." }[lang]}
          </CommandEmpty>
          <div className="mx-auto flex w-full justify-center ">
            {isPending ? (
              <div className="space-y-1 overflow-hidden px-1 py-2">
                <Skeleton className="h-4 w-10 rounded" />
                <Skeleton className="h-8 rounded-sm" />
                <Skeleton className="h-8 rounded-sm" />
              </div>
            ) : (
              <CommandGroup
                heading={{ fa: "دوره ها", en: "Courses" }[lang]}
                className="flex w-full basis-1/2 flex-col items-center py-2 text-purple-primary"
              >
                {courseList?.map((item) => (
                  <CommandItem
                    key={item.courseId}
                    value={item.title}
                    onSelect={() => {
                      handleSelect(() =>
                        router.push(`/courses/${item.courseId}`)
                      );
                    }}
                    className="w-full rounded-md p-2 hover:bg-slate-700"
                  >
                    <Link
                      href={`/courses/${item.courseId}`}
                      className="flex w-full items-center justify-between"
                    >
                      <H3 className="w-full text-text">{item.title}</H3>
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}

            <div className="divide-x border "></div>

            {isPending ? (
              <div className="space-y-1 overflow-hidden px-1 py-2">
                <Skeleton className="h-4 w-10 rounded" />
                <Skeleton className="h-8 rounded-sm" />
                <Skeleton className="h-8 rounded-sm" />
              </div>
            ) : (
              <CommandGroup
                heading={{ fa: "اخبار", en: "News" }[lang]}
                className="flex w-full basis-1/2 flex-col items-center py-2 text-purple-primary "
              >
                {newsList?.map((item) => (
                  <CommandItem
                    key={item.id}
                    value={item.title}
                    onSelect={() => {
                      handleSelect(() => router.push(`/blog/${item.id}`));
                    }}
                  >
                    <Link
                      href={`/courses/${item.id}`}
                      className="flex w-full items-center justify-between"
                    >
                      <H3 className="text-text ">{item.title}</H3>
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </div>
        </CommandList>
      </CommandDialog>
    </>
  );
};
