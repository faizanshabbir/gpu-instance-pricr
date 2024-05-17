"use client"

import React, { useState } from 'react';
import { AwsInstance, awscolumns } from "./awscolumns"
import { AzureInstance, azurecolumns } from "./azurecolumns"
import { DataTable } from "./data-table"
import { Input } from "@/components/ui/input"

interface InstanceSpecsWrapperProps {
    awsData: AwsInstance[],
    azureData: AzureInstance[],
}

export function InstanceSpecsWrapper({awsData, azureData}: InstanceSpecsWrapperProps) {
    const [gpuNameFilter, setGpuNameFilter] = useState('');
    const [gpuMemoryFilter, setGpuMemoryFilter] = useState('');
    const [vcpuFilter, setVcpuFilter] = useState('')
    const [instanceMemoryFilter, setInstanceMemoryFilter] = useState('');
    return (
        <div className="container mx-auto">
            <div className="container mx-auto pt-5">
                <div> 
                    <h2 className="font-bold">Global Filters</h2>
                    <p>Compare GPU Instances across AWS and Azure</p>
                </div>
                <div className="flex gap-4">
                    <Input 
                        placeholder="GPU Name"
                        value={gpuNameFilter}
                        onChange={e => setGpuNameFilter(e.target.value)}
                    />
                    <Input 
                        placeholder="GPU memory (GB)"
                        value={gpuMemoryFilter}
                        onChange={e => setGpuMemoryFilter(e.target.value)}
                    />
                    <Input 
                        placeholder="VCPUS"
                        value={vcpuFilter}
                        onChange={e => setVcpuFilter(e.target.value)}
                    />
                    <Input 
                        placeholder="Instance memory (GB)"
                        value={instanceMemoryFilter}
                        onChange={e => setInstanceMemoryFilter(e.target.value)}
                    />
                </div>
            </div>
            
            
            <div className="container mx-auto py-10">
                <h2 className="font-bold">AWS</h2>
                <DataTable columns={awscolumns} data={awsData} externalFilter={{ gpu_name: gpuNameFilter, gpu_memory: gpuMemoryFilter, vcpus: vcpuFilter, instance_memory: instanceMemoryFilter }} />
            </div>
            <div className="container mx-auto py-10">
                <h2 className="font-bold">Azure</h2>
                <DataTable columns={azurecolumns} data={azureData} externalFilter={{ gpu_name: gpuNameFilter, gpu_memory: gpuMemoryFilter, vcpus: vcpuFilter, instance_memory: instanceMemoryFilter }} />
            </div>
        </div>
    )
}