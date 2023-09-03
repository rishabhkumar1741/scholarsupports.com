"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "New Technology ",
    href: "/docs/primitives/alert-dialog",
    description:
      "Embrace the future of learning with insights into innovative educational technology.",
  },
  {
    title: "Colleges and Campus Life:",
    href: "/docs/primitives/alert-dialog",
    description:
      "Navigate college life with confidence through resources on campus, extracurricular activities, and effective time management.",
  },
  {
    title: "Other",
    href: "/docs/primitives/hover-card",
    description:
      "Explore diverse topics beyond academics, from financial wellness to personal growth strategies.",
  },
  {
    title: "All-Inclusive:",
    href: "/docs/primitives/tooltip",
    description:
      "A comprehensive collection covering technology, campus life, personal development, and more for a holistic college experience.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Colleges</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      ScholarSupports
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Empowering students with shared exam papers for effective exam preparation. Join our community to excel academically.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/exampapers" title="Exam Papers">
              Access a variety of past exam papers.
              </ListItem>
              <ListItem href="/docs/installation" title="Subjects/Courses">
              Find papers by subjects and courses.
              </ListItem>
              <ListItem href="/uploadpapers" title="Upload Paper">
              Contribute your own past exam papers.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Blog/Articles/Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
