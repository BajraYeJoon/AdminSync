import { Table, Button } from "flowbite-react";
import { productDashboard } from "../../lib/data";

export default function WidgetRight() {
  return (
    <div className="flex flex-auto flex-col overflow-x-auto h-full">
      <Table className="py-12">
        <Table.Head className="text-lg">
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {productDashboard.map(
            ({ productName, color, category, price, status }) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {productName}
                </Table.Cell>
                <Table.Cell>{color}</Table.Cell>
                <Table.Cell>{category}</Table.Cell>
                <Table.Cell>{`$${price}`}</Table.Cell>
                <Table.Cell>
                  <Button
                    color={
                      status === "delivered"
                        ? "blue"
                        : status === "pending"
                        ? "warning"
                        : status === "success"
                        ? "success"
                        : ""
                    }
                  >
                    {status}
                  </Button>
                </Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
    </div>
  );
}
