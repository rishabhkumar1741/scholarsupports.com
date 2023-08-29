import Image from "next/image";
import { ModeToggle } from "@/components/modeToggle";
import { Navbar } from "@/components/Navbar";
import { ButtonDemo } from "@/components/Button";
import Link from "next/link";
export default function Home() {
  return (
    <header className=" ">
      <div className=" justify-center items-center md:flex gap-32 ">
        <div className="md:w-[50%]">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-4xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Free Question Papers
            </span>{" "}
            for College Students: Get the Edge on Your Exams
          </h1>
          <p className=" hidden md:block text-lg font-normal text-gray-500 lg:text-xl mb-4 dark:text-gray-400">
            Are you a college student looking to improve your grades? Get free
            access to previous year question papers for all major college
            courses on our website. We also offer a variety of other resources
            to help you succeed in your studies, including a blog and a forum.
            Sign up for our email list today to get started!
          </p>

          <button className=" p-3 font-mono text-md rounded-xl bg-gradient-to-r from-blue-600 to-violet-600">
            <Link href="/signup">Sign up for access</Link>
          </button>
        </div>

        <div>
          <Image
            className="w-[100%]h-[100%] pt-[18%]"
            width={400}
            height={400}
            alt="image"
            src={`/hero.png`}
          ></Image>
        </div>
      </div>
    </header>
  );
}
