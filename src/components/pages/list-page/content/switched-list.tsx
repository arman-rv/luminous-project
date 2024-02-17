import {
  gridListSwitcherDict,
  type SwitchedListStates,
} from "@/dict/pages/list.dict";

import { cn } from "@/lib/utils";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "#/node_modules/next/navigation";

export const SwitchedList = ({
  switchedList,
}: {
  switchedList: SwitchedListStates;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleViewClick = (value: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("view", value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <ul className="flex items-center gap-4">
        {gridListSwitcherDict.map((item) => {
          return (
            <li
              key={item.id}
              className={cn(
                " cursor-pointer focus:border-b-2 focus:border-[#555] focus:text-[#555]",
                item.name === switchedList ? "text-primary" : "text-[#555]"
              )}
              onClick={() => handleViewClick(item.name)}
            >
              <item.Icon />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
