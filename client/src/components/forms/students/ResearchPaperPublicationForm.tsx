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

const formSchema = z.object({
  projectGroupNum: z.string().min(2, {
    message: "Error must be at least 2 characters.",
  }),
  researchTitle: z.string().min(2, {
    message: "registration number must be at least 2 characters.",
  }),
  student: z.string().min(1, {
    message: "an item must be at least 1 characters",
  }),
  coSupervisor: z.string().min(2, {
    message: "Model must be at least 2 characters.",
  }),
  supervisor: z.string().min(2, {
    message: "Category must be at least 2 characters.",
  }),
  nameOfConferenceOrJournal: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  issnNumber: z.string().min(10, {
    message: "Phone-num must have 10 numericals.",
  }),
  h5IndexLink: z.string().min(10, {
    message: "Phone-num must have 10 numericals.",
  }),
  scopusLink: z.string().min(10, {
    message: "Phone-num must have 10 numericals.",
  }),
  photoOfAcceptanceLetter: z
    .string()
    .min(10, {
      message: "Phone-num must have 10 numericals.",
    })
    .optional(),
  photoOfReviewSheet: z
    .string()
    .min(2, {
      message: "email must be at least 2 characters.",
    })
    .optional(),
  photoOfRegistrationAtConference: z
    .string()
    .min(2, {
      message: "email must be at least 2 characters.",
    })
    .optional(),
  feePaidProof: z
    .string()
    .min(2, {
      message: "email must be at least 2 characters.",
    })
    .optional(),
});

export function ResearchPaperPublicationForm() {
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
          <CardTitle>Publication Form</CardTitle>
          <CardDescription>
            Enter the detailes of your research paper
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <FormField
                    control={form.control}
                    name="projectGroupNum"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>projectGroupNum</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>projectGroupNum</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="researchTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>researchTitle</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>researchTitle</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="">
                  <FormField
                    control={form.control}
                    name="student"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>student</FormLabel>
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
                    name="coSupervisor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>coSupervisor</FormLabel>
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
                    name="supervisor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Supervisor</FormLabel>
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

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="nameOfConferenceOrJournal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>nameOfConferenceOrJournal</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>
                          nameOfConferenceOrJournal
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-1">
                  <FormField
                    control={form.control}
                    name="issnNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>issnNumber</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>issnNumber</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="">
                <div className="mb-3">
                  <FormField
                    control={form.control}
                    name="h5IndexLink"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>h5IndexLink</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>h5IndexLink</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="">
                  <FormField
                    control={form.control}
                    name="scopusLink"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>scopusLink</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>scopusLink</FormDescription>
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
                    name="photoOfAcceptanceLetter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>photoOfAcceptanceLetter</FormLabel>
                        <FormControl>
                          <Input id="picture" type="file" {...field} />
                        </FormControl>
                        <FormDescription>
                          photoOfAcceptanceLetter
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="">
                  <FormField
                    control={form.control}
                    name="photoOfReviewSheet"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>photoOfReviewSheet</FormLabel>
                        <FormControl>
                          <Input id="picture" type="file" {...field} />
                        </FormControl>
                        <FormDescription>photoOfReviewSheet</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="">
                  <FormField
                    control={form.control}
                    name="photoOfRegistrationAtConference"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>photoOfRegistrationAtConference</FormLabel>
                        <FormControl>
                          <Input id="picture" type="file" {...field} />
                        </FormControl>
                        <FormDescription>
                          photoOfRegistrationAtConference
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="">
                  <FormField
                    control={form.control}
                    name="feePaidProof"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>feePaidProof</FormLabel>
                        <FormControl>
                          <Input id="picture" type="file" {...field} />
                        </FormControl>
                        <FormDescription>feePaidProof</FormDescription>
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
