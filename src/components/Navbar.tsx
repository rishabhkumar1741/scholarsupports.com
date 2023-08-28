import Link from "next/link";
import {DropdownMenuDemo} from '@/components/MobileMenu';
import { ModeToggle } from '@/components/modeToggle'
import {NavigationMenuDemo} from '@/components/NavigationMenuDemo'
import {ButtonDemo} from '@/components/Button'

export function Navbar() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </Link>
          {/* mobile nav */}
          <div className="sm:hidden flex gap-3">
            <ModeToggle/>
          <DropdownMenuDemo/>
          </div>
          {/* desktop nav*/}
          <div className=" hidden  md:flex gap-2">
            <NavigationMenuDemo/>
            <div className="flex gap-6">
            <ModeToggle/>
            <ButtonDemo value="Log In"/>
            </div>


            
          </div>
      


      
         
           
         
        
        </div>
      </nav>
    </>
  );
}
