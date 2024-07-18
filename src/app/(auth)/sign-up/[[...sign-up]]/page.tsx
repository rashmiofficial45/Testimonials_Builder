"use client"
import Home from "@/app/page";
import { SignUp, useUser } from "@clerk/nextjs";

export default function Signup() {
  const { user } = useUser();

  if (!user) {
    return <div className=" flex h-screen items-center justify-center">
        <SignUp />
      </div>
  }

  return <Home/>;
}