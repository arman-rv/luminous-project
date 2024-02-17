import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

export const ScheduleTable = ({
  lang,
  schedule,
}: {
  lang: Locale;
  schedule: { title: string; time: string };
}) => {
  const colors = [
    "bg-emerald-400",
    "bg-blue-400",
    "bg-yellow-400",
    "bg-red-400",
    "bg-pink-400",
    "bg-purple-400",
    "bg-indigo-400",
    "bg-green-400",
  ];

  return (
    <div className="grid h-fit w-full grid-flow-row grid-cols-7 grid-rows-3 border">
      {Array(21)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="relative flex aspect-square items-center justify-center border"
          >
            {index % 5 === 0 ? (
              <div
                className={cn(
                  "relative z-10 flex h-full w-full -translate-y-1 rotate-[-10deg] cursor-pointer items-center rounded-xl bg-blue-400 transition-all duration-500 hover:scale-110",
                  colors[index % (colors.length - 1)]
                )}
              >
                <p className="absolute end-2 top-2 flex aspect-square h-5 w-5 items-center justify-center rounded-full bg-teal-300 text-center text-xs font-semibold text-black">
                  {(index + 1).toLocaleString(lang)}
                </p>
                <p className="flex aspect-square w-28 flex-col items-start justify-center p-3">
                  <span className="text-white">{schedule.title}</span>
                  <span className="text-xs">{schedule.time}</span>
                </p>
              </div>
            ) : (
              <p className="absolute end-2 top-2 text-sm font-semibold">
                {(index + 1).toLocaleString(lang, {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </p>
            )}
          </div>
        ))}
    </div>
  );
};
