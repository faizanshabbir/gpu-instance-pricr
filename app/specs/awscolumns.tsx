"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type AwsInstance = {
  instance_name: string
  gpu_name: string
  gpu_memory_gb: number
  num_gpus: number
  peer_to_peer: string
  vcpus: number
  instance_memory_gb: number
  network_bandwidth: string
  ebs_bandwidth_gbps: string
  on_demand_price_hr: number
  one_yr_reserved_price_hr: number
  three_yr_reserved_price_hr: number
  instance_storage: string
}

function filterByNumericalValue(row, columnId, filterValue) {
  const value = row.getValue<number | null>(columnId);
  return value !== null && value >= parseInt(filterValue) ? true : false;
}

export const awscolumns: ColumnDef<AwsInstance>[] = [
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
    accessorKey: "instance_storage",
    header: "Instance Storage",
  },
  {
    accessorKey: "network_bandwidth",
    header: "Network Bandwidth",
  },
  {
    accessorKey: "ebs_bandwidth_gbps",
    header: "EBS Bandwidth (Gbps)",
  },
]
