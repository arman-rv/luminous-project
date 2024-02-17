import { CalendarPlus } from "lucide-react";

import { cn } from "@/lib/utils";

export const LatestUpdatesCard = ({
  index,
  post,
}: {
  index: number;
  post: {
    courseTitle: string;
    update: string;
  };
}) => {
  return (
    <div className="flex w-60 snap-start flex-col gap-2 rounded-2xl bg-emerald-400 p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-extrabold text-white">
          {post.courseTitle}
        </span>
        <CalendarPlus className="text-white" />
      </div>
      <span className="text-lg font-extrabold text-white">{post.update}</span>
    </div>
  );
};
