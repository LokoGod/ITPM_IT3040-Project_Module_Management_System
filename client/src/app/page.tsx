import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import HomeCardData from "@/components/visualizations/HomeCardData";
import HomeBarChart from "@/components/visualizations/charts/HomeBarChart";
import HomeTable from "@/components/visualizations/HomeTable";
import LineSalesChart from "@/components/visualizations/charts/LineSalesChart";

const Home = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight mb-2">Home</h2>
      <Tabs defaultValue="overview">
        <Card className="w-fit mb-2">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports" disabled>
              Reports
            </TabsTrigger>
            <TabsTrigger value="notifications" disabled>
              Notifications
            </TabsTrigger>
          </TabsList>
        </Card>

        <TabsContent value="overview">
          <HomeCardData />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
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
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>
                  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <HomeTable />
              </CardContent>
            </Card>
          </div>

          <div className="mt-5">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Sales Chart</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <LineSalesChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <h1>Hello, there!</h1>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Home;
