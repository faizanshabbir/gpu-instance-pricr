"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type AzureInstance = {
  instance_name: string
  gpu_name: string
  gpu_memory_gb: number
  num_gpus: number
  peer_to_peer: string
  vcpus: number
  instance_memory_gb: number
  temp_storage_ssd_gb: number
  max_data_discs: number
  max_nics_bandwidth: string
  disk_throughput_iops_mbps: string
  on_demand_price_hr: number
  one_yr_reserved_price_hr: number
  three_yr_reserved_price_hr: number
  disk_nvme: string
  os: string
}

function filterByNumericalValue(row: any, columnId: any, filterValue: any) {
  const value = row.getValue(columnId);
  return value !== null && value >= parseInt(filterValue) ? true : false;
}

export const azurecolumns: ColumnDef<AzureInstance>[] = [
  {
    accessorKey: "instance_name",
    header: "Instance Name",
  },
  {
    accessorKey: "gpu_name",
    header: "GPU",
  },
  {
    accessorKey: "gpu_memory_gb",
    header: "GPU Memory (GB)",
    filterFn: filterByNumericalValue,
  },
  {
    accessorKey: "num_gpus",
    header: "Number of GPUs",
    filterFn: filterByNumericalValue,
  },
  {
    accessorKey: "vcpus",
    header: "vCPUs",
    filterFn: filterByNumericalValue,
  },
  {
    accessorKey: "instance_memory_gb",
    header: "Instance Memory (GB)",
    filterFn: filterByNumericalValue,
  },
  {
    accessorKey: "on_demand_price_hr",
    header: "On-Demand Price/Hr",
  },
  {
    accessorKey: "one_yr_reserved_price_hr",
    header: "1 Yr Reserved Price/Hr",
  },
  {
    accessorKey: "three_yr_reserved_price_hr",
    header: "3 Yr Reserved Price/Hr",
  },
  {
    accessorKey: "max_nics_bandwidth",
    header: "Max NICs / Bandwidth",
  },
  {
    accessorKey: "disk_throughput_iops_mbps",
    header: "Max uncached disk throughput: IOPS/MBps",
  },
  {
    accessorKey: "temp_storage_ssd_gb",
    header: "Instance Storage",
  },
  {
    accessorKey: "disk_nvme",
    header: "NVME Direct Disk",
  },
]
