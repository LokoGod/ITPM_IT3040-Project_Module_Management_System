import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";

import { AddIncomeForm } from "@/components/forms/finance/income/AddIncomeForm";

import { IoIosAdd } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";
import { FaHouseChimney } from "react-icons/fa6";

const IncomeSource = () => {
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
          <BreadcrumbItem>
            <BreadcrumbLink href="/finance/recordFinances">
              Record Finances
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem className="text-blue-600">
            <BreadcrumbLink href="/finance/recordFinances/incomeSource">
              Income Source
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <h2 className="text-3xl font-bold tracking-tight mb-2">Add Source</h2>

      <AddIncomeForm />
      
    </div>
  );
};

export default IncomeSource;
