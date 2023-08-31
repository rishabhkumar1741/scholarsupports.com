"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import { useState } from "react";
import Link from "next/link";

export default function login() {
  const { theme, setTheme } = useTheme();
  const [user, setuser] = useState({ email: "", password: "" });
  const submitform = (e: any) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <div className="flex justify-center items-center pt-[20%] md:pt-[10%] ">
        <Card className="w-[350px] md:w-[50%]">
          <CardHeader>
            <CardTitle>
              <span
                className={`${
                  theme == "light" ? "text-purple-700" : ""
                } md:text-2xl`}
              >
                Welcome Back! Log into Your Account
              </span>
            </CardTitle>
            <CardDescription>
              <span className={`${theme == "light" ? "text-[#35A800]" : ""} `} >
                      Unlock a World of Possibilities – Log in to Your Account`</span>
              
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={submitform}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label className={`${theme=="light"?"text-[#A613F5]":""}`} htmlFor="email">Email</Label>
                  <Input
                  className={`${theme=="light"?"text-[#d39c36]":""}`}
                    onChange={(e) =>
                      setuser({ ...user, email: e.target.value })
                    }
                    type="email"
                    id="email"
                    placeholder="Enter your Email Id"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label className={`${theme=="light"?"text-[#A613F5]":""}`} htmlFor="email">Password</Label>
                  <Input
                  className={`${theme=="light"?"text-[#DE991D]":""}`}
                    onChange={(e) =>
                      setuser({ ...user, password: e.target.value })
                    }
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-row-reverse">
                <button
                  type="submit"
                  className={`${
                    theme == "light"
                      ? "text-white bg-[#35A800]  "
                      : " text-black bg-white p-2  "
                  }px-3 p-2 rounded-lg `}
                >
                  Log In
                </button>
              </div>
            </form>
          </CardContent>
          <CardFooter className={`${theme == "light"? "text-black": " text-white"} flex justify-between`}>
            <p className={`${theme=="light"?"text-[#A613F5]":""}`}>
              <Link href="/signup">Register Now</Link>
            </p>
            <p>
              <Link href="forgotpassword">Forgot password </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
