import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
} from "@radix-ui/react-icons";
import { type Column } from "@tanstack/react-table";

import { Button } from "@/components/elements/ui/button";

import { cn } from "@/lib/utils";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return (
      <div
        className={cn("flex items-center justify-center space-x-2", className)}
      >
        {title}
      </div>
    );
  }

  return (
    <div
      className={cn("flex items-center justify-center space-x-2", className)}
    >
      <Button
        aria-label={
          column.getIsSorted() === "desc"
            ? `Sorted descending. Click to sort ascending.`
            : column.getIsSorted() === "asc"
              ? `Sorted ascending. Click to sort descending.`
              : `Not sorted. Click to sort ascending.`
        }
        className="hover:bg-white/40"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span>{title}</span>
        {column.getIsSorted() === "desc" ? (
          <ArrowDownIcon className="h-4 w-4" aria-hidden="true" />
        ) : column.getIsSorted() === "asc" ? (
          <ArrowUpIcon className="h-4 w-4" aria-hidden="true" />
        ) : (
          <CaretSortIcon className="h-4 w-4" aria-hidden="true" />
        )}
      </Button>
    </div>
  );
}
