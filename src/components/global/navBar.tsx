import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import { ModeToggle } from "@/components/global//mode-toggle";
export const NavBar = () => {
    return (
        <div>
            <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
            <ModeToggle/>
        </div>
    )
}

