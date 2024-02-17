"use client";

import * as React from "react";

import { type Table } from "@tanstack/react-table";

import { Input } from "@/components/elements/ui/input";

import type {
  DataTableFilterableColumn,
  DataTableSearchableColumn,
} from "@/types/data-table-types";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filterableColumns?: DataTableFilterableColumn<TData>[];
  searchableColumns?: DataTableSearchableColumn<TData>[];
  newRowLink?: string;
  deleteRowsAction?: React.MouseEventHandler<HTMLButtonElement>;
}

export function DataTableToolbar<TData>({
  table,
  searchableColumns = [],
}: DataTableToolbarProps<TData>) {
  return (
    <div className="flex w-full items-center justify-between space-x-2 p-1">
      <div className="flex flex-1 items-center space-x-2">
        {searchableColumns.length > 0 &&
          searchableColumns.map(
            (column) =>
              table.getColumn(column.id ? String(column.id) : "") && (
                <Input
                  key={String(column.id)}
                  placeholder={`Filter ${column.title}...`}
                  value={
                    (table
                      .getColumn(String(column.id))
                      ?.getFilterValue() as string) ?? ""
                  }
                  onChange={(event) =>
                    table
                      .getColumn(String(column.id))
                      ?.setFilterValue(event.target.value)
                  }
                  className="h-8 w-[150px] lg:w-[250px]"
                  variant="shadcnDefault"
                />
              )
          )}
      </div>
    </div>
  );
}
