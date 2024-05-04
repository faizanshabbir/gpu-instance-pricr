import { AwsInstance, awscolumns } from "./awscolumns"
import { AzureInstance, azurecolumns } from "./azurecolumns"
import { DataTable } from "./data-table"

async function getAwsData(): Promise<AwsInstance[]> {
  // Fetch data from your API here.
  const response = await fetch("https://sheetdb.io/api/v1/ddtqulvvu5lba", { next: { revalidate: 1800 } });
  const data = await response.json();
  return data;
  // return [
  //   {
  //     id: "728ed52f",
  //     amount: 100,
  //     status: "pending",
  //     email: "m@example.com",
  //   },
  //   // ...
  // ]
}

async function getAzureData(): Promise<AzureInstance[]> {
  // Fetch data from your API here.
  const response = await fetch("https://sheetdb.io/api/v1/nl5lyk7jf10lm", { next: { revalidate: 5 } });
  const data = await response.json();
  return data;
}

export default async function InstanceSpecsPage() {
  const awsdata = await getAwsData()
  const azuredata = await getAzureData()
  return (
    <div>
      <div className="container mx-auto py-10">
        <DataTable title="AWS Instances" columns={awscolumns} data={awsdata} />
      </div>
      <div className="container mx-auto py-10">
        <DataTable title="Azure Instances" columns={azurecolumns} data={azuredata} />
      </div>
    </div>
  )
}
