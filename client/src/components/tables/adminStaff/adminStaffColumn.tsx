"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

import { RxDotsHorizontal } from "react-icons/rx";
import { LuArrowUpDown } from "react-icons/lu";
import Link from "next/link";

import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { RxClock } from "react-icons/rx";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const updateStatus = (id: number) => {
  const res = console.log(id);
  return res;
};

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type AdminStaffColumnType = {
  staffId: string;
  name: string;
  phoneNumber: string;
  email: string;
  role: string;
};

// Defining the clolumns
export const adminStaffColumn: ColumnDef<AdminStaffColumnType>[] = [
  {
    accessorKey: "name",

    header: ({ column }) => {
      return <div>Name</div>;
    },
    cell: ({ row }) => {
      return <div className="">{row.getValue("name")}</div>;
    },
  },
  {
    accessorKey: "email",

    header: ({ column }) => {
      return <div>Email</div>;
    },
    cell: ({ row }) => {
      return (
        <a href="#" className="font-semibold hover:underline">
          {row.getValue("email")}
        </a>
      );
    },
  },
  {
    accessorKey: "phoneNumber",

    header: ({ column }) => {
      return <div>Phone Number</div>;
    },
    cell: ({ row }) => {
      return <div>{row.getValue("phoneNumber")}</div>;
    },
  },
  {
    accessorKey: "role",

    header: ({ column }) => {
      return <div>Role</div>;
    },
    cell: ({ row }) => {
      return (
        <div>
          <Badge variant={"destructive"}>{row.getValue("role")}</Badge>
        </div>
      );
    },
  },
  {
    // Added dropdown menu to rows
    accessorKey: "id",
    header: "",
    cell: ({ row }) => {
      // const jobId: string = row.getValue("id");
      // const jobStatus: string = row.getValue("status");

      // const router = useRouter()

      // const handleDeleteJob = async () => {
      //   try {
      //     await axios.delete(`https://job-app-q299.onrender.com/api/v1/job/${jobId}`);
      //     toast.success("Job deleted successfully");
      //     window.location.reload();
      //   } catch (error) {
      //     console.error("Error deleting job:", error);
      //     toast.error("Error deleting job");
      //   }
      // };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <RxDotsHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44">
            <DropdownMenuLabel>Staff</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Dialog>
                <DialogTrigger className="flex p-1 justify-between text-sm">
                  <RxClock className="mr-5 ml-0.5 mt-0.5" size={15} />
                  <p>Update details</p>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="mb-5">Update details</DialogTitle>
                    {/* <DialogDescription>Current Status: {jobStatus}</DialogDescription> */}
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link
                // href={`viewDetailedJob/${jobId}`}
                href={"asc/"}
              >
                {/* <DropdownMenuItem>
                  <FaRegEye className="mr-5" />
                  View
                </DropdownMenuItem> */}
              </Link>
              <DropdownMenuItem
              // onClick={handleDeleteJob}
              >
                <FaRegTrashAlt className="mr-5" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
