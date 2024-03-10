import React from "react";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";

import { IoIosAdd } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";
import { FaHouseChimney } from "react-icons/fa6";

import { DataTable } from "@/components/tables/dataTables/payrollTable/payrollDataTable";
import {
  PayrollColumnType,
  payrollColumn,
} from "@/components/tables/dataTables/payrollTable/payrollColumn";

async function getData(): Promise<PayrollColumnType[]> {
  return [
    {
      id: "12Abc3F4e5D",
      title: "Intern",
      frequency: "Monthly Compensation",
      employees: 20,
    },
    {
      id: "12Abc3F4e5C",
      title: "Temp",
      frequency: "Weekly Compensation",
      employees: 52,
    },
    {
      id: "12Abc3F4e5A",
      title: "Permenant",
      frequency: "Monthly Comp",
      employees: 100,
    },
  ];
}

const Payroll = async () => {
  const data = await getData();

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
            <BreadcrumbLink href="/humanResource">
              Human Resource
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem className="text-blue-600">
            <BreadcrumbLink href="/humanResource/payroll">
              Payroll
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="flex justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Payroll cycles</h2>

        <div className="flex justify-end ">
          <Button variant={"accentBlue"} size={"sm"} asChild>
            <Link href={"/humanResource/payroll/addNewCycle"}>
              <IoIosAdd className=" mr-0.5 h-6 w-6" /> Add new cycle
            </Link>
          </Button>
        </div>
      </div>

      <DataTable columns={payrollColumn} data={data} />
    </div>
  );
};

export default Payroll;
