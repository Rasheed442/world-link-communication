"use client";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Performance from "@/components/Performance";
import RightStarlink from "@/components/RightStarlink";
import Solution from "@/components/Solution";
import Why from "@/components/Why";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header
       />
       <Hero/>
       <Performance/>
       <RightStarlink/>
       <Why/>
       <Solution/>
       <ContactSection/>
       <Footer/>
    </div>
  );
}
