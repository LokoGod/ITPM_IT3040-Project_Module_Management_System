import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { DataTable } from "@/components/tables/adminStaff/adminStaffTableData";
import { adminStaffColumn, AdminStaffColumnType } from "@/components/tables/adminStaff/adminStaffColumn";

export default async function AdminStaffRegistration() {
  async function getGroupData(): Promise<AdminStaffColumnType[]> {
    return [
      {
        name: "Vijitha Yapa",
        phoneNumber: "0761233233",
        staffId: "A-001",
        email: "vijitha@sliit.lk",
        role: "Admin",
      },
      {
        name: "Rasith Pahungala",
        phoneNumber: "0768745625",
        staffId: "E-001",
        email: "rasith@sliit.lk",
        role: "Examiner",
      },
      {
        name: "Thenuka Maheshan",
        phoneNumber: "0764562584",
        staffId: "P-001",
        email: "senerath@sliit.lk",
        role: "Project Manager",
      },
    ];
  }

  const data = await getGroupData();
  return (
    <main>
      <Tabs defaultValue="existing">
        <Card className="w-fit mt-2 mb-10 mx-10">
          <TabsList>
            <TabsTrigger value="existing">Existing Staff</TabsTrigger>
            <TabsTrigger value="add">Add Staff</TabsTrigger>
          </TabsList>
        </Card>

        <TabsContent value="existing">
          <DataTable columns={adminStaffColumn} data={data} />
        </TabsContent>

        <TabsContent value="add"></TabsContent>
      </Tabs>
    </main>
  );
}
