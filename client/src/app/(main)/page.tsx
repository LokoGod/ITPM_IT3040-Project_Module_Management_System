import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LineSalesChart from "@/components/visualizations/LineSalesChart";
import HomeCardData from "@/components/visualizations/HomeCardData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/tables/jobTableData";
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



export default async function Home() {

  return (
    <main>
      <Tabs defaultValue="dash">
        <Card className="w-fit mt-2 mb-10 mx-10">
          <TabsList>
            <TabsTrigger value="dash">Dashboard</TabsTrigger>
            <TabsTrigger value="job">Job Listing</TabsTrigger>
          </TabsList>
        </Card>

        <TabsContent value="dash">
          <HomeCardData />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mx-10 mb-5">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <HomeBarChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Jobs</CardTitle>
                <CardDescription>
             
                </CardDescription>
              </CardHeader>
              <CardContent>
                <HomeTable />
              </CardContent>
            </Card>
          </div>

          <LineSalesChart />
        </TabsContent>

        <TabsContent value="job">
          <div className="flex justify-end mr-10">
            <Tooltip>
              <a href="/createJob">
                <TooltipTrigger asChild>
                  <Button className="">
                    <IoMdAddCircleOutline size={20} />
                  </Button>
                </TooltipTrigger>
              </a>
              <TooltipContent className="mb-1">
                <p>Create Job</p>
              </TooltipContent>
            </Tooltip>
          </div>

        </TabsContent>
      </Tabs>
    </main>
  );
}
