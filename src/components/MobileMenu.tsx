import {
  Cloud,
  PenSquare,
  Github,
  Baseline,
  LifeBuoy,
  LogOut,
  Lightbulb,
  HelpCircle,
  Plus,
  Cpu,
  Settings,
  User,
  UserPlus,
  Laugh,
  School,
  Newspaper,
  FlaskConical,
  Upload,
  LogIn,
} from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
export function DropdownMenuDemo() {
  const route = useRouter();
  const { data } = useSession();
  async function logoutsubmit() {
    signOut();
    route.push("/");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <span className="text-xl">
            <AiOutlineMenu />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        {/* separated */}
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <Link href={`/profile`}>
              <span>Profile</span>
            </Link>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        {/* separated */}
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <School className="mr-2 h-4 w-4" />
              <span>Colleges</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Newspaper className="mr-2 h-4 w-4" />
                  <Link href={`/exampapers`}>
                    <span>Exam Papers </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FlaskConical className="mr-2 h-4 w-4" />
                  <span>Subjects/Courses</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Upload className="mr-2 h-4 w-4" />
                  <Link href={`/uploadpapers`}>
                    <span>Upload Paper </span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <PenSquare className="mr-2 h-4 w-4" />
              <span>Blog/Articles/Resources</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Cpu className="mr-2 h-4 w-4" />
                  <span>New Technology</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Laugh className="mr-2 h-4 w-4" />
                  <span>Colleges Life</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Lightbulb className="mr-2 h-4 w-4" />
                  <span>Other</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Baseline className="mr-2 h-4 w-4" />
                  <span>All-Inclusive</span>
                </DropdownMenuItem>

                {/* <DropdownMenuItem>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    <span>More...</span>
                  </DropdownMenuItem> */}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuItem>
            <HelpCircle className="mr-2 h-4 w-4" />
            <Link href={`/aboutus`}>
              <span>About us</span>
            </Link>

            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogIn className="mr-2 h-4 w-4" />
          {data?.user ? (
            <button onClick={logoutsubmit}> Log Out</button>
          ) : (
            <Link href={`/login`}>
              <span>Log In</span>
            </Link>
          )}

          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
