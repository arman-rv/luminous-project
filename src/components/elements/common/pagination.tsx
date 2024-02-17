"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import clsx from "clsx";
import { ArrowLeftIcon, ArrowRightIcon, CloudCog } from "lucide-react";

import { cn, generatePagination } from "@/lib/utils";

export const Pagination = ({
  className,
  totalCount,
}: {
  className: string;
  totalCount: number;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page"));
  const rows = Number(searchParams.get("perPage")) | 2;
  const totalPages = Math.ceil(totalCount / rows);

  const createPageURL = (pageNumber: number | string = 0) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    params.set("perPage", rows.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="inline-flex">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      <div className="flex -space-x-px">
        {allPages.map((page, index) => {
          let position: "first" | "last" | "single" | "middle" | undefined;

          if (index === 0) position = "first";
          if (index === allPages.length - 1) position = "last";
          if (allPages.length === 1) position = "single";
          if (page === "...") position = "middle";

          return (
            <PaginationNumber
              key={page}
              href={createPageURL(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
};

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: "first" | "last" | "middle" | "single";
  isActive: boolean;
}) {
  const className = clsx(
    "flex h-10 w-10 items-center justify-center text-sm text-purple-primary border bg-card",
    {
      "rounded-r-md": position === "first" || position === "single",
      "rounded-l-md": position === "last" || position === "single",
      "z-10  text-primary": isActive,
      "hover:border-primary ": !isActive && position !== "middle",
      "text-gray-300": position === "middle",
    }
  );

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: "left" | "right";
  isDisabled?: boolean;
}) {
  const className = cn(
    "mx-auto flex h-10 w-10 items-center justify-center rounded-md border bg-card",
    {
      "pointer-events-none text-gray-300": isDisabled,
      "hover:border-primary": !isDisabled,
      "ml-2 md:ml-4": direction === "left",
      "mr-2 md:mr-4": direction === "right",
    }
  );

  const icon =
    direction === "right" ? (
      <ArrowLeftIcon className="w-4" />
    ) : (
      <ArrowRightIcon className="w-4" />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}
