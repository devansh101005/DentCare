import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignUpButton,SignedOut,SignedIn,SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
    <h1>
      Home Page
    </h1>

    <SignedOut>
    <SignUpButton mode ="modal">SignUp</SignUpButton>
    </SignedOut>

    <SignedIn>
      <SignOutButton>
        LogOut
      </SignOutButton>
    </SignedIn>


    </div>
  )
}