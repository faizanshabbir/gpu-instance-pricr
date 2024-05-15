
import * as React from "react"
import { useEffect } from 'react';

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Input } from "@/components/ui/input"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[],
  externalFilter: { [key: string]: string },
}

export function DataTable<TData, TValue>({
    columns,
    data,
    externalFilter,
  }: DataTableProps<TData, TValue>
) {

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })
  
  useEffect(() => {
    table.getColumn("gpu_name")?.setFilterValue(externalFilter.gpu_name)
    table.getColumn("gpu_memory_gb")?.setFilterValue(parseInt(externalFilter.gpu_memory) || undefined)
    table.getColumn("instance_memory_gb")?.setFilterValue(parseInt(externalFilter.instance_memory) || undefined)
    table.getColumn("vcpus")?.setFilterValue(parseInt(externalFilter.vcpus) || undefined)
  }, [externalFilter]);

  const filterColumns = [
    "gpu_name",
    "instance_name",
    "gpu_memory_gb",
    "instance_memory_gb",
    "num_gpus",
    "vcpus",
  ]

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {filterColumns.includes(header.column.id) ? (
                        <Input className="max-w-sm"
                          placeholder={`Filter`}
                          value={(header.column.getFilterValue() as string) ?? ""}
                          onChange={(event) =>
                            header.column.setFilterValue(event.target.value)
                          }
                        />
                      ) : null}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
