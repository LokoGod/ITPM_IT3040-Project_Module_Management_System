import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const RecurringIncome = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Receiving Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Salary</TableCell>
            <TableCell>Job</TableCell>
            <TableCell>2024/1/31</TableCell>
            <TableCell className="text-right">Rs 25,000.00</TableCell>
            <TableCell><Button><FaRegEdit /></Button></TableCell>
            <TableCell><Button><FaRegTrashAlt /></Button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default RecurringIncome;
