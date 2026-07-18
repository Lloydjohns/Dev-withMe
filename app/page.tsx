"use client";

import React from "react";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { Products } from "@/components/sections/products";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { Testimonials } from "@/components/sections/testimonials";
import VideoTestimonials from "@/components/sections/videotestimonials";
import { FAQ } from "@/components/sections/faq";
import { Newsletter } from "@/components/sections/newsletter";
import { CTASection } from "@/components/sections/cta";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Process />
        <Products />
        <PortfolioPreview />
        <Testimonials />
        <VideoTestimonials />
        <FAQ />
        <Newsletter />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
