import React from 'react';
import { AwsInstance } from "./awscolumns"
import { AzureInstance } from "./azurecolumns"
import { InstanceSpecsWrapper } from "./wrapped-tables"

async function getAwsData(): Promise<AwsInstance[]> {
  // Fetch data from your API here.
  const response = await fetch("https://sheetdb.io/api/v1/ddtqulvvu5lba", { next: { revalidate: 1800 } });
  const data = await response.json();
  return data;
}

async function getAzureData(): Promise<AzureInstance[]> {
  // Fetch data from your API here.
  const response = await fetch("https://sheetdb.io/api/v1/nl5lyk7jf10lm", { next: { revalidate: 1800 } });
  const data = await response.json();
  return data;
}

export default async function InstanceSpecsPage() {
  const awsdata = await getAwsData()
  const azuredata = await getAzureData()
  return (
    <div className="container mx-auto">
      <InstanceSpecsWrapper awsData={awsdata} azureData={azuredata} />
      <div className="container mx-auto pb-5 text-center">
        <a href="mailto:gpuinstancessup@gmail.com">Suggestions or see something wrong? Reach out to us here</a>
      </div>
    </div>
  )
}
