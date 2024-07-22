"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from 'framer-motion'
import { useState } from 'react'
import { cn } from "@/lib/utils"
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
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export const Dropdown = () => {

  const [crossed, setCrossedState] = useState(false)
  return (
    <>
    <button
      aria-expanded={crossed}
      onClick={() => setCrossedState((e) => !e)}
      className={
        'flex aspect-square h-fit select-none flex-col items-center justify-center rounded-full'
      }><motion.div
      style={{
        width: '30px',
        borderTop: '2px solid var(--neutral-500)',
        transformOrigin: 'center'
      }}
      initial={{ translateY: '-3px' }}
      animate={
        crossed ? { rotate: '45deg', translateY: '1px' } : { translateY: '-3px', rotate: '0deg' }
      }
      transition={{ bounce: 0, duration: 0.1 }}
    />
    <motion.div className=""
      transition={{ bounce: 0, duration: 0.1 }}
      style={{
        width: '30px',
        borderTop: '2px solid var(--neutral-500)',
        transformOrigin: 'center'
      }}
      initial={{ translateY: '3px' }}
      animate={
        crossed
          ? { rotate: '-45deg', translateY: '-1px' }
          : { translateY: '3px', rotate: '0deg', scaleX: 1 }
      }
    />
  </button>
  {crossed?(
    <div className=" h-screen w-screen">
    <div className="fixed h-screen w-screen bg-primary-foreground text-primary flex flex-col justify-center items-center m-0 p-0">
      <button onClick={
        () => setCrossedState((e) => !e)
      } className="text-center text-5xl pb-8 font-bold">
        <Link href={"customer"}>Customers</Link>
      </button>
      <button onClick={
        () => setCrossedState((e) => !e)
      } className="text-center text-5xl pb-8 font-bold">
        <Link href={"integration"}>Integration</Link>
      </button>
      <button onClick={
        () => setCrossedState((e) => !e)
      } className="text-center text-5xl font-bold">
        <Link href={"pricing"}>Pricing</Link>
      </button>

    </div>
  </div>):(<></>)}
    </>
  )
}

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>

      <NavigationMenuList className="hidden lg:flex">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Customers</NavigationMenuTrigger>
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
          <Link href="/integrations" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Integrations
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

        <NavigationMenuList className="lg:hidden">
            <NavigationMenuItem>
            <Dropdown/>
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
