import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LineSalesChart from "@/components/visualizations/LineSalesChart";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { jobColumn, JobColumnType } from "@/components/tables/jobColumn";
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

export default function GroupRegistration() {
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

          <TabsContent value="groups"></TabsContent>

          <TabsContent value="register"></TabsContent>
        </Tabs>
      </main>
    </>
  );
}
