"use client";

import * as React from "react";
import Link from "next/link";

import { type ColumnDef } from "@tanstack/react-table";

import { DataTable } from "@/components/elements/data-table/data-table";
import { DataTableColumnHeader } from "@/components/elements/data-table/data-table-column-header";
import { Badge } from "@/components/elements/ui/badge";

import { type UserCourseType } from "@/core/validators/api";
import { formatDate } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

type AwaiterCourses = Pick<
  UserCourseType,
  | "courseId"
  | "courseTitle"
  | "fullName"
  | "statusName"
  | "levelName"
  | "lastUpdate"
  | "typeName"
  | "isExpire"
  | "isActive"
  | "isdelete"
  | "paymentStatus"
>;

interface AllCoursesTableProps {
  data: {
    listOfMyCourses: AwaiterCourses[];
    totalCount: number;
  };
  limit: number;
  lang: Locale;
}

export const AllUserCoursesTable = ({
  data: { listOfMyCourses, totalCount },
  limit,
  lang,
}: AllCoursesTableProps) => {
  const pageCount = Math.ceil(totalCount / limit);

  const columns = React.useMemo<ColumnDef<AwaiterCourses, unknown>[]>(
    () => [
      {
        accessorKey: "courseTitle",
        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title={{ fa: "دوره", en: "Title" }[lang]}
          />
        ),
        cell: ({ row }) => (
          <div className="flex flex-col">
            <Link
              href={`/${lang}/courses/${row.original.courseId}`}
              className="w-40 truncate text-sm text-gray-600"
            >
              {row.original.courseTitle}
            </Link>
          </div>
        ),
      },
      {
        accessorKey: "fullName",
        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title={{ fa: "استاد", en: "Teacher" }[lang]}
          />
        ),
        cell: ({ row }) => (
          <div className="flex flex-col">
            <span className="text-sm text-gray-600">
              {row.original.fullName}
            </span>
          </div>
        ),
      },
      {
        accessorKey: "lastUpdate",
        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title={{ fa: "تاریخ", en: "Date" }[lang]}
          />
        ),
        cell: ({ row }) => (
          <div className="flex flex-col">
            <span className="text-sm text-gray-600">
              {formatDate(row.original.lastUpdate, lang, {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
              })}
            </span>
          </div>
        ),
      },
      {
        accessorKey: "levelName",
        enableSorting: false,
        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title={{ fa: "سطح", en: "Level" }[lang]}
          />
        ),
        cell: ({ row }) => (
          <div className="flex flex-col items-center">
            <Badge className="justify-center bg-green-400 text-center text-white hover:bg-green-400">
              {
                {
                  مقدماتی: { fa: "مقدماتی", en: "Introductory" }[lang],
                  متوسط: { fa: "متوسط", en: "Intermediate" }[lang],
                  پیشرفته: { fa: "پیشرفته", en: "Advanced" }[lang],
                }[row.original.levelName]
              }
            </Badge>
          </div>
        ),
      },
      {
        accessorKey: "typeName",
        enableSorting: false,
        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title={{ fa: "نحوه برگزاری", en: "Type" }[lang]}
          />
        ),
        cell: ({ row }) => (
          <div className="flex flex-col items-center">
            <Badge className="justify-center bg-green-400 text-center text-white hover:bg-green-400">
              {
                {
                  حضوری: { fa: "حضوری", en: "In Person" }[lang],
                  "آنلاین-حضوری": {
                    fa: "آنلاین-حضوری",
                    en: "In Person-Online",
                  }[lang],
                }[row.original.typeName]
              }
            </Badge>
          </div>
        ),
      },
      {
        accessorKey: "statusName",
        enableSorting: false,
        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title={{ fa: "وضعیت", en: "Status" }[lang]}
          />
        ),
        cell: ({ row }) => (
          <div className="flex flex-col items-center">
            <Badge className="justify-center bg-green-400 text-center text-white hover:bg-green-400">
              {
                {
                  "درحال برگذاری": {
                    fa: "درحال برگذاری",
                    en: "In rogress",
                  }[lang],
                  "درحال ثبت نام": {
                    fa: "در حال ثبت نام",
                    en: "Registering",
                  }[lang],
                }[row.original.statusName]
              }
            </Badge>
          </div>
        ),
      },
      {
        accessorKey: "paymentStatus",
        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title={{ fa: "پرداخت", en: "Payment" }[lang]}
          />
        ),
        cell: ({ row }) => (
          <div className="flex flex-col items-center">
            {row.original.paymentStatus === "پرداخت شده" ? (
              <Badge className="justify-center bg-green-400 text-white hover:bg-green-400">
                {{ fa: "پرداخت شده", en: "Paid" }[lang]}
              </Badge>
            ) : (
              <Badge className="justify-center bg-red-400 text-white hover:bg-red-400">
                {{ fa: "پرداخت نشده", en: "Unpaid" }[lang]}
              </Badge>
            )}
          </div>
        ),
      },
      {
        accessorKey: "isActive",
        enableSorting: false,
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title={" "} />
        ),
        cell: ({ row }) => (
          <div className="flex flex-col items-center">
            {row.original.isActive ? (
              <Badge className="justify-center bg-green-400 text-white hover:bg-green-400">
                {{ fa: "فعال", en: "Active" }[lang]}
              </Badge>
            ) : row.original.isExpire ? (
              <Badge className="justify-center bg-red-400 text-white hover:bg-red-400">
                {{ fa: "منقضی", en: "Expired" }[lang]}
              </Badge>
            ) : row.original.isdelete ? (
              <Badge className="justify-center bg-red-400 text-white hover:bg-red-400">
                {{ fa: "حذف شده", en: "Deleted" }[lang]}
              </Badge>
            ) : (
              <Badge className="justify-center bg-yellow-400 text-white hover:bg-yellow-400">
                {{ fa: "نامشخص", en: "Unknown" }[lang]}
              </Badge>
            )}
          </div>
        ),
      },
    ],
    [lang]
  );

  return (
    <DataTable
      columns={columns}
      data={listOfMyCourses}
      pageCount={pageCount}
      searchableColumns={[{ id: "courseTitle", title: "names" }]}
    />
  );
};
