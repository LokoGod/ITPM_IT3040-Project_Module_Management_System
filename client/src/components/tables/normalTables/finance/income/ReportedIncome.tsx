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

const ReportedIncome = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Received Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Reason 01</TableCell>
            <TableCell>School</TableCell>
            <TableCell>2023/11/10</TableCell>
            <TableCell className="text-right">Rs 250.00</TableCell>
            <TableCell><Button><FaRegEdit /></Button></TableCell>
            <TableCell><Button><FaRegTrashAlt /></Button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ReportedIncome;
