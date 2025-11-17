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

export default function Home() {
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