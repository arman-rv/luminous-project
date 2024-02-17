import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { type Table } from "@tanstack/react-table";

import { Button } from "@/components/elements/ui/button";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  pageSizeOptions?: number[];
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex w-full flex-col items-center justify-end gap-4 px-2 py-1 sm:flex-row sm:gap-8">
      <div className="flex items-center space-x-2">
        <Button
          aria-label="Go to first page"
          variant="outline"
          size="icon"
          className="hidden h-8 w-8 lg:flex"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <DoubleArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
        </Button>
        <Button
          aria-label="Go to previous page"
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
        </Button>
        <Button
          aria-label="Current Page"
          variant="outline"
          size="icon"
          className="h-8 w-8 disabled:opacity-50"
          disabled
        >
          {table.getState().pagination.pageIndex + 1}
        </Button>
        <Button
          aria-label="Go to next page"
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
        </Button>
        <Button
          aria-label="Go to last page"
          variant="outline"
          size="icon"
          className="hidden h-8 w-8 lg:flex"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <DoubleArrowRightIcon className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
