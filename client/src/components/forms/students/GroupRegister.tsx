"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";

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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { redirect, useRouter } from "next/navigation";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

//  stu name, regi num, contact num, email, batch, special, (leader details),
// pro title, research area, research group, select supervisors & co-supervisors

const formSchema = z.object({
  stuName: z.string().min(2, {
    message: "Error must be at least 2 characters.",
  }),
  stuRegiNum: z.string().min(2, {
    message: "registration number must be at least 2 characters.",
  }),
  stuContactNum: z.string().min(1, {
    message: "an item must be at least 1 characters",
  }),
  stuEmail: z.string().min(2, {
    message: "Model must be at least 2 characters.",
  }),
  stuBatch: z.string().min(2, {
    message: "Category must be at least 2 characters.",
  }),
  stuSpecial: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  proTitle: z.string().min(10, {
    message: "Phone-num must have 10 numericals.",
  }),
  proResearchArea: z
    .string()
    .min(10, {
      message: "Phone-num must have 10 numericals.",
    })
    .optional(),
  proResearchGroup: z
    .string()
    .min(2, {
      message: "email must be at least 2 characters.",
    })
    .optional(),
  supervisor: z
    .string()
    .min(2, {
      message: "email must be at least 2 characters.",
    })
    .optional(),
  co_supervisor: z
    .string()
    .min(2, {
      message: "email must be at least 2 characters.",
    })
    .optional(),
});

export function GroupRegister() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      //   jobError: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>, event: any) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://job-app-q299.onrender.com/api/v1/job",
        values
      );
      toast.success("Job record saved successfully!");
      router.push("/");
    } catch (error) {
      toast.error("Cannot create a job at the moment");
    }
  }

  return (
    <div>
      <Card className="w-auto mx-10">
        <CardHeader>
          <CardTitle>Registration Form</CardTitle>
          <CardDescription>
            Enter the details of your group members
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-8 gap-4">
                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="stuName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>stuName</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>stuName</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-1">
                  <FormField
                    control={form.control}
                    name="stuRegiNum"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>stuRegiNum</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>stuRegiNum</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-1">
                  <FormField
                    control={form.control}
                    name="stuContactNum"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>stuContactNum</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>stuContactNum</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="stuEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>stuEmail</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>stuEmail</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-1">
                  <FormField
                    control={form.control}
                    name="stuBatch"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>stuBatch</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Laptop">Regular</SelectItem>
                              <SelectItem value="Desktop">June</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-1">
                  <FormField
                    control={form.control}
                    name="stuSpecial"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>stuSpecial</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Laptop">IT</SelectItem>
                              <SelectItem value="Desktop">CSNE</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="">
                  <FormField
                    control={form.control}
                    name="proTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>proTitle</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="">
                  <FormField
                    control={form.control}
                    name="proResearchArea"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>proResearchArea</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="">
                  <FormField
                    control={form.control}
                    name="proResearchGroup"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>proResearchGroup</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="">
                  <FormField
                    control={form.control}
                    name="supervisor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>supervisor</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Laptop">Laptop</SelectItem>
                              <SelectItem value="Desktop">Desktop</SelectItem>
                              <SelectItem value="Mobile">Mobile</SelectItem>
                              <SelectItem value="Server">Server</SelectItem>
                              <SelectItem value="SparePart">
                                Spare Part
                              </SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="">
                  <FormField
                    control={form.control}
                    name="co_supervisor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>co-supervisor</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Laptop">Laptop</SelectItem>
                              <SelectItem value="Desktop">Desktop</SelectItem>
                              <SelectItem value="Mobile">Mobile</SelectItem>
                              <SelectItem value="Server">Server</SelectItem>
                              <SelectItem value="SparePart">
                                Spare Part
                              </SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button type="submit">Add</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
