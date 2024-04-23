import { AwsInstance, columns } from "./columns"
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

export default async function DemoPage() {
  const data = await getAwsData()
  console.log(data)
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
