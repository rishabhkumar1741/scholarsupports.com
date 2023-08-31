"use client"
import Link from "next/link";
import { DropdownMenuDemo } from "@/components/MobileMenu";
import { ModeToggle } from "@/components/modeToggle";
import { NavigationMenuDemo } from "@/components/NavigationMenuDemo";
import { ButtonDemo } from "@/components/Button";
import Image from "next/image";
import { useTheme } from 'next-themes'

export function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <Image
              width={50}
              height={50}
              src="/whitelogo.png"
              className=" text-cyan-50 mr-3 w-[100%] h-[100%]"
              alt="Flowbite Logo"
            />
            <span className=" self-center md:text-2xl font-semibold whitespace-nowrap dark:text-white">
              ScholarSupports
            </span>
          </Link>
          {/* mobile nav */}
          <div className="sm:hidden flex gap-3">
            <ModeToggle />
            <DropdownMenuDemo />
          </div>
          {/* desktop nav*/}
          <div className=" hidden  md:flex gap-2">
            <NavigationMenuDemo />
            <div className="flex gap-6">
              <ModeToggle />
              
              <button className={`${theme=="light"?"text-white bg-green-500  ":" text-black bg-white p-2  "}px-3 p-2 rounded-lg` }>
              <Link href={`/login`}>Log In</Link>
              </button>
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
