import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { ModeToggle } from "@/components/global//mode-toggle";
import { Separator } from "../ui/separator";
import { ChevronRight } from "lucide-react";
export const NavBar = () => {
  return (
    <>
      <div className="flex justify-end p-5 ">
        <div className="flex gap-4 mr-4">
          <SignedOut>
          <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
  <SignUpButton/>
</button>
            <button className=" flex items-center px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
  <SignInButton/>
  <ChevronRight />

</button>
          </SignedOut>
        </div>
        <div className="flex gap-4 mr-4">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
      <Separator />
    </>
  );
};
