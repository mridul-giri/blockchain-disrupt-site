// src/app/page.js
"use client";

import { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import { initAnimations } from "@/lib/animation";
import Speakers from "@/components/home/Speakers";
import Ticket from "@/components/home/Ticket";
import FaqAccordion from "@/components/home/FaqAccordion";
import Countdown from "@/components/home/Countdown";
import EventSession from "@/components/home/events";

export default function Home() {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <main className="overflow-hidden">
      <HeroSection />
      <Countdown />
      <EventSession />
      {/* <FeaturesSection /> */}
      <Speakers />
      {/* <TestimonialsSection /> */}
      <Ticket />
      <FaqAccordion />
    </main>
  );
}
