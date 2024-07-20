import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { ChevronRight } from "lucide-react";
import { NavigationMenuDemo } from "../pages/NavMenuPage";
import Image from "next/image";
import Link from "next/link";
export const NavBar = () => {
  return (
    <>
      <div className="flex justify-between p-5 ">
        <Link href={"/"}>
        <Image className="dark:invert" src={"/logo.png"} alt="" width={200} height={100}></Image>
        </Link>
        <div className="">
    <NavigationMenuDemo/>
        </div>
        <div className="flex justify-end gap-4 mr-4">
          <SignedOut>
              <SignUpButton>
            <button className="px-4 py-2 h-12 rounded-md border border-black dark:border-white dark:border-dashed bg-white text-black dark:text-white dark:bg-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
            Sign Up</button>
            </SignUpButton>
            <SignInButton>
            <button className=" flex h-12 w-22 items-center px-4 py-2 rounded-md border border-black bg-white text-black dark:bg-black dark:border-dashed dark:border-white dark:text-white text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 dark:filter-none ">
              Sign In
              <ChevronRight />
            </button>
                </SignInButton>
          </SignedOut>
        <div className="flex mr-2">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        </div>
      </div>
    </>
  );
};
