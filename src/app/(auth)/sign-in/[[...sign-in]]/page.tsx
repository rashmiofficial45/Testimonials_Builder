"use client";
import Home from "@/app/page";
import { SignIn, useUser } from "@clerk/nextjs";

export default function Signin() {
  const { user } = useUser();

  if (!user) {
    return (
      <div className=" flex h-screen items-center justify-center">
        <SignIn />
      </div>
    );
  }

  return <Home />;
}
