import React from "react";
import Link from "next/link";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";

import { IoIosAdd } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";
import { FaHouseChimney } from "react-icons/fa6";

import { DataTable } from "@/components/tables/dataTables/finance/incomeTable/incomeDataTable";
import {
  IncomeColumnType,
  incomeColumn,
} from "@/components/tables/dataTables/finance/incomeTable/incomeColumn";

async function getIncomeData(): Promise<IncomeColumnType[]> {
  const response = await fetch("http://localhost:5000/api/v1/income/", { next: { revalidate: 3600 } });

  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  const data = await response.json()
  return data.income
}

const RecordFinances = async () => {
  const incomeData = await getIncomeData();

  return (
    <div>
      <div className="text-xs mb-2">
        <Breadcrumb
          spacing="8px"
          separator={<IoChevronForward color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <FaHouseChimney />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/finance">Finances</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem className="text-blue-600">
            <BreadcrumbLink href="/finance/recordFinances">
              Record Finances
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <h2 className="text-3xl font-bold tracking-tight mb-2">Record</h2>
      <Tabs defaultValue="expenses">
        <Card className="w-fit mb-5">
          <TabsList>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="income">Income</TabsTrigger>
            <TabsTrigger value="receivables" disabled>
              Receivables
            </TabsTrigger>
            <TabsTrigger value="payables" disabled>
              Payables
            </TabsTrigger>
          </TabsList>
        </Card>

        <TabsContent value="expenses"></TabsContent>

        <TabsContent value="income">
          <div className="flex justify-end mb-5">
            <Button className="" asChild>
              <Link href={"/finance/recordFinances/incomeSource"}>
                <IoIosAdd />
                Add income source
              </Link>
            </Button>
          </div>

          <DataTable columns={incomeColumn} data={incomeData} />
        </TabsContent>

        <TabsContent value="receivables"></TabsContent>

        <TabsContent value="payables"></TabsContent>
      </Tabs>
    </div>
  );
};

export default RecordFinances;
