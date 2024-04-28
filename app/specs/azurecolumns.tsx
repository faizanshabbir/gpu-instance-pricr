"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type AzureInstance = {
  instance_name: string
  gpu: string
  gpu_memory_gb: string
  num_gpus: string
  peer_to_peer: string
  vcpus: string
  instance_memory_gb: string
  temp_storage_ssd_gb: string
  max_data_discs: string
  max_nics_bandwidth: string
  disk_throughput_iops_mbps: string
  on_demand_price_hr: string
  one_yr_reserved_price_hr: string
  three_yr_reserved_price_hr: string
  disk_nvme: string
  os: string
}

export const azurecolumns: ColumnDef<AzureInstance>[] = [
  {
    accessorKey: "instance_name",
    header: "Instance Name",
  },
  {
    accessorKey: "gpu",
    header: "GPU",
  },
  {
    accessorKey: "gpu_memory_gb",
    header: "GPU Memory (GB)",
  },
  {
    accessorKey: "num_gpus",
    header: "Number of GPUs",
  },
  {
    accessorKey: "vcpus",
    header: "vCPUs",
  },
  {
    accessorKey: "instance_memory_gb",
    header: "Instance Memory (GB)",
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
