"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTheme } from "next-themes";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const validationSchema = z.object({
  fname: z
    .string()
    .trim()
    .min(3, { message: "First name must be at least 3 characters." })
    .toLowerCase()
    .nonempty(),
  lname: z
    .string()
    .trim()
    .min(3, { message: "Last name must be at least 3 characters." })
    .toLowerCase()
    .nonempty(),
  email: z.string().trim().min(5).email().toLowerCase().nonempty(),
  password: z.string().trim().min(8).nonempty(),
  confirmpassword: z.string().trim().min(8).nonempty(),
});

export function SignUpForm() {
  const { theme, setTheme } = useTheme();
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof validationSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex justify-center mt-3 md:mt-5">
      <Card className="w-[350px] md:w-[50%]">
      <CardHeader>
        <CardTitle className={`${theme=="light"?"text-[#A613F5]":""}`}>Start Your Journey.</CardTitle>
        <CardDescription className={`${theme == "light" ? "text-[#35A800]" : ""} `}>Welcome! Join us to begin an exciting journey together.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className=" flex justify-between gap-6 ">
              <div className="w-[50%]">
              <FormField 
                control={form.control}
                name="fname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={`${theme=="light"?"text-[#A613F5]":""}`}>First Name</FormLabel>
                    <FormControl>
                      <Input className={`${theme=="light"?"text-[#d39c36]":""}`} type="text" placeholder="John" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display First Name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              </div>
              <div className="w-[50%]">
              <FormField
                control={form.control}
                name="lname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={`${theme=="light"?"text-[#A613F5]":""}`}>Last Name</FormLabel>
                    <FormControl>
                      <Input className={`${theme=="light"?"text-[#d39c36]":""}`} type="text" placeholder="Doe" {...field} />
                    </FormControl>
                    <FormDescription>Enter your Last Name</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              </div>
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={`${theme=="light"?"text-[#A613F5]":""}`} >Email</FormLabel>
                  <FormControl>
                    <Input className={`${theme=="light"?"text-[#d39c36]":""}`} type="email" placeholder="johndoe@example.com" {...field} />
                  </FormControl>
                  <FormDescription>Enter your Email</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={`${theme=="light"?"text-[#A613F5]":""}`}>Password</FormLabel>
                  <FormControl>
                    <Input className={`${theme=="light"?"text-[#d39c36]":""}`} type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormDescription>Enter your Password</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmpassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={`${theme=="light"?"text-[#A613F5]":""}`}>Confirm Password</FormLabel>
                  <FormControl>
                    <Input className={`${theme=="light"?"text-[#d39c36]":""}`} type="password" placeholder="Confirm Password" {...field} />
                  </FormControl>
                  <FormDescription>Enter your Confirm Password</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          

            <Button className={`${
                    theme == "light"
                      ? "text-white bg-[#35A800]  "
                      : " text-black bg-white p-2  "
                  }px-3 p-2 rounded-lg `} type="submit">Submit</Button>
          </form>
        </Form>
        </CardContent>
      
        <CardFooter className="flex justify-between">

</CardFooter>

    </Card>
    </div>
  );
}
