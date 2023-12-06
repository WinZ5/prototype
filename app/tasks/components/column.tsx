"use client"

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { labels, statuses, units } from "@/app/data/data";
import { Risk } from "@/app/data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-action";

export const column: ColumnDef<Risk>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.original.id}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Risk Factor" />
    ),
    cell: ({ row }) => {
      const label: any = units.find((label) => label.value === row.original.unit)

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span
            className="max-w-[500px] truncate font-medium"
            onClick={() => { console.log(row) }}
          >
            {row.original.description}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "objectives",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Objectives" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <Badge variant="outline">{row.original.objectives[row.index].id}</Badge>
          <span className="max-w-[500px] truncate font-medium">
            {row.original.objectives[row.index].description}
          </span>
        </div>
      )
    }
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />
  },
]