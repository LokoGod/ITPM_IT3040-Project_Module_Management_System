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

export default function ResearchPaperPublication() {
  return (
    <>
      <main>
        <Tabs defaultValue="publication">
          <Card className="w-fit mt-2 mb-10 mx-10">
            <TabsList>
              <TabsTrigger value="publication">Publication</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
          </Card>

          <TabsContent value="publication"></TabsContent>

          <TabsContent value="other"></TabsContent>
        </Tabs>
      </main>
    </>
  );
}
