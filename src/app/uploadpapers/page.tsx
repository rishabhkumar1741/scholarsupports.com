"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
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

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
const validationSchema = z.object({
  course: z.string().trim(),
  semester: z.string().trim(),
  college: z.string().trim(),
  papertype: z.string().trim(),
  level: z.string().trim(),
  batch: z.string(),
  subject: z.string().trim(),
});

export default function UplaodForm() {
  const { theme, setTheme } = useTheme();
  const [buttonDisable, setbuttonDisable] = useState(false);
  const [file, setfile] = useState<File>();
  const route = useRouter();
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      course: "",
      semester: "",
      college: "",
      papertype: "",
      level: "",
      batch: "",
      subject: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof validationSchema>) {
    try {
      // setbuttonDisable(true);
      // console.log(values);
      const data = new FormData();

      data.set("file", file || "");
      data.set("course", values.course);
      data.set("semester", values.semester);
      data.set("college", values.college);
      data.set("papertype", values.papertype);
      data.set("level", values.level);
      data.set("batch", values.batch);
      data.set("subject", values.subject);
 
      
      const res = await axios.post("/api/users/paperpost", data);
      if(res.status==201)
      {
        toast.success("done")
      }
     
      console.log(res);
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setbuttonDisable(false);
    }
  }
  return (
    <div className="flex justify-center mt-3 md:mt-5">
      <Card className="w-[350px] md:w-[50%]">
        <CardHeader>
          <CardTitle className={`${theme == "light" ? "text-[#A613F5]" : ""}`}>
            Upload Your Papers.
          </CardTitle>
          <CardDescription
            className={`${theme == "light" ? "text-[#35A800]" : ""} `}
          >
            We&#39;re excited to see what you&#39;d like to share with the
            ScholarSupports community. Please upload your papers below..
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className=" flex justify-between gap-6 ">
                <div className="w-[50%]">
                  <FormField
                    control={form.control}
                    name="course"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select the Course" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="mca">MCA</SelectItem>
                            <SelectItem value="btech">Btech</SelectItem>
                            <SelectItem value="mtech">Mtech</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-[50%]">
                  <FormField
                    control={form.control}
                    name="semester"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Semester</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select the Semester" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="sem1">sem1</SelectItem>
                            <SelectItem value="sem2">sem2</SelectItem>
                            <SelectItem value="sem3">sem3</SelectItem>
                            <SelectItem value="sem4">sem4</SelectItem>
                            <SelectItem value="sem5">sem5</SelectItem>
                            <SelectItem value="sem6">sem6</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              {/* college */}

              <FormField
                control={form.control}
                name="college"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>College</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the College" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="vitbhopal">Vit Bhopal</SelectItem>
                        <SelectItem value="vitvellore">Vit Vellore</SelectItem>
                        <SelectItem value="vitchennai">Vit Chennai</SelectItem>
                        <SelectItem value="vitapamravati">
                          Vit AP-Amravati
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <div className=" flex justify-between gap-6 ">
                <div className="w-[50%]">
                  <FormField
                    control={form.control}
                    name="papertype"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Paper Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select the Paper Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="midterm">Mid Term</SelectItem>
                            <SelectItem value="final">Final</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-[50%]">
                  <FormField
                    control={form.control}
                    name="level"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Paper Level</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select the Paper Level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="hard">Hard</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="easy">Easy</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className=" flex justify-between gap-6 ">
                <div className="w-[50%]">
                  <FormField
                    name="file"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          className={`${
                            theme == "light" ? "text-[#A613F5]" : ""
                          }`}
                        >
                          Select the file
                        </FormLabel>
                        <FormControl>
                          <div className="grid w-full max-w-sm items-center gap-1.5">
                            <input
                              name="file"
                              onChange={(e) => setfile(e.target.files?.[0])}
                              id="file"
                              type="file"
                            />
                          </div>
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-[50%]">
                  <FormField
                    control={form.control}
                    name="batch"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel> Enter Your Batch</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder=" 2022" {...field} />
                        </FormControl>
                        
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              {/* form for subject  */}
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Enter The Subject Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="ex operating system " {...field} />
                    </FormControl>
                   
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className={`${
                  theme == "light"
                    ? "text-white bg-[#35A800]  "
                    : " text-black bg-white p-2  "
                }px-3 p-2 rounded-lg `}
                type="submit"
              >
                {buttonDisable ? "Processing..." : "Submit"}
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </div>
  );
}
