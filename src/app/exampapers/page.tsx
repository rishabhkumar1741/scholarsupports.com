"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PaperCard } from "@/components/PaperCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useSWR from "swr";
import { any } from "zod";
import { Button } from "@/components/ui/button";
export default function ExamPapers() {
  const [allpaper, setallpaper] = useState([]);


  useEffect(() => {
    async function getallpaper() {
      const res = await axios.get("/api/allpapers");
      console.log(res.data.fileList);

      setallpaper(res.data.fileList);
    }
    getallpaper();
  }, []);

  return (
    <div>
      <div className="mb-6">
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Explore Previous Year Exam Papers
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
              Welcome to ScholarSupports collection of previous year exam
              papers. Access valuable resources to improve your exam
              preparation. Gain insights into exam formats and types of
              questions. Start exploring now to excel in your studies!
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Get started
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div className="my-6 flex">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a Course" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Course</SelectLabel>
              <SelectItem value="MCA">MCA</SelectItem>
              <SelectItem value="Btech">Btech</SelectItem>
              <SelectItem value="Mtech">Mtech</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
     
      </div>
      <div className="grid grid-cols md:grid-cols-3 gap-4">
        {allpaper?.map((data: any, index: any) => {
          return <PaperCard carddata={data} key={index} />;
        })}
      </div>
    </div>
  );
}


export const revalidate = 0