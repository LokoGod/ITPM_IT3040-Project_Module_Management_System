"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "../ui/card";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function OnboardEmployeeForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="">
      <Tabs defaultValue="employeeBasic">
        <Card className="w-fit mb-2">
        <TabsList>
          <TabsTrigger value="employeeBasic">Basic Details</TabsTrigger>
          <TabsTrigger value="compensation" disabled>
            Compensation
          </TabsTrigger>
          <TabsTrigger value="timeoff" disabled>
            Time off
          </TabsTrigger>
          <TabsTrigger value="documents" disabled>
            Documents
          </TabsTrigger>
        </TabsList>
        </Card>
        <TabsContent value="employeeBasic">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </TabsContent>
        <TabsContent value="compensation">
          Change your password here.
        </TabsContent>
        <TabsContent value="timeoff">This is Time off</TabsContent>
        <TabsContent value="documents">This isDocuments</TabsContent>
      </Tabs>
    </div>
  );
}
