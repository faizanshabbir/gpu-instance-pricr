"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type AwsInstance = {
  instance_name: string
  gpu: string
  gpu_memory_gb: string
  num_gpus: string
  peer_to_peer: string
  vcpus: string
  instance_memory_gb: string
  network_bandwidth: string
  ebs_bandwidth_gbps: string
  on_demand_price_hr: string
  one_yr_reserved_price_hr: string
  three_yr_reserved_price_hr: string
  instance_storage: string
}

export const awscolumns: ColumnDef<AwsInstance>[] = [
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
