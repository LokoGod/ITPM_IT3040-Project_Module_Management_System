import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LineSalesChart from "@/components/visualizations/LineSalesChart";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import HomeTable from "@/components/visualizations/HomeTable";
import HomeBarChart from "@/components/visualizations/HomeBarChart";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { IoMdAddCircleOutline } from "react-icons/io";
import { toast } from "sonner";

import {
  groupColumn,
  GroupColumnType,
} from "@/components/tables/students/groups/groupsColumn";
import { DataTable } from "@/components/tables/students/groups/groupsTableData";



export default async function GroupRegistration() {
  async function getGroupData(): Promise<GroupColumnType[]> {
    return [
      {
        groupNum: "G-001",
        members: "hasitha. pathum, vijitha",
        noMem: 3,
        description: "This is the description",
      },
      {
        groupNum: "G-002",
        members: "mayukha, adilu, visura, sidath",
        noMem: 4,
        description: "This is the description",
      },
      {
        groupNum: "G-003",
        members: "kavindu, danidu, munidu, sasika, roshan",
        noMem: 5,
        description: "This is the description",
      },
    ]
  }

  const data =  await getGroupData();

  return (
    <>
      <main>
        <Tabs defaultValue="groups">
          <Card className="w-fit mt-2 mb-10 mx-10">
            <TabsList>
              <TabsTrigger value="groups">Groups</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
          </Card>

          <TabsContent value="groups">
            <DataTable columns={groupColumn} data={data} />
          </TabsContent>

          <TabsContent value="register"></TabsContent>
        </Tabs>
      </main>
    </>
  );
}
