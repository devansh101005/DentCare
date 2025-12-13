import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignUpButton,SignedOut,SignedIn,SignOutButton } from "@clerk/nextjs";
import Hero from "@/components/landing/Hero";
import Header from "@/components/landing/Header";
import HowItWorks from "@/components/landing/HowItWorks";
import PricingSection from "@/components/landing/PricingSection";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import WhatToAsk from "@/components/landing/WhatToAsk";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { syncUser } from "@/lib/actions/users";

export default async function Home() {
  const user =await currentUser()

//The best way to sync the user is basically using web hooks 
  await syncUser();


//redirecting auth user 
if(user) redirect("/dashboard")


  return (
    <div className="min-h-screen bg-background"> 
    <Header />
    <Hero />
    <HowItWorks />
    <WhatToAsk />
    <PricingSection />
    <CTA />
    <Footer />
    </div>
  )
}