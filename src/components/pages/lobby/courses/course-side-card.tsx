import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/assets/icons";

export const CourseSideCard = ({ img }: { img: string | null }) => {
  return (
    <Link
      href="#"
      className="relative flex aspect-video h-full w-full items-center justify-center rounded-xl bg-gray-200"
    >
      {/* <Image
        src={img}
        alt="course-picture"
        fill
        className="rounded-lg object-contain md:rounded-xl"
      /> */}
      <Icons.placeholder className=" h-8 w-8 text-slate-600" />
    </Link>
  );
};
