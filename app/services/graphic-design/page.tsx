"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brush,
  CheckCircle,
  ArrowRight,
  Image,
  Presentation,
  FileText,
  Layout,
  Terminal,
  Package,
  Mail,
  Printer,
  Smartphone,
  Monitor,
  Award,
  Clock,
  Layers,
  Palette,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper";
import { CTASection } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const designServices = [
  { icon: Image, title: "Social Media Graphics", description: "Platform-optimized posts, stories, and ads designed for maximum engagement and reach." },
  { icon: Presentation, title: "Presentations", description: "Professional pitch decks and slide presentations that command attention and drive results." },
  { icon: FileText, title: "Marketing Collateral", description: "Brochures, flyers, and promotional materials that tell your brand story effectively." },
  { icon: Layout, title: "Print Design", description: "Business cards, packaging, and signage with premium print-ready quality." },
  { icon: Mail, title: "Email Templates", description: "Custom email newsletter and campaign templates that convert subscribers into customers." },
  { icon: Smartphone, title: "Mobile Graphics", description: "App icons, splash screens, and mobile-optimized visuals for iOS and Android." },
  { icon: Monitor, title: "Web Graphics", description: "Website banners, hero images, and digital ad creatives optimized for the web." },
  { icon: Package, title: "Packaging Design", description: "Product packaging that stands out on shelves and elevates the unboxing experience." },
];

const designProcess = [
  { step: "01", title: "Brief", description: "We gather requirements, understand your goals, and define the project scope." },
  { step: "02", title: "Concept", description: "We present initial design concepts for your review and feedback." },
  { step: "03", title: "Refine", description: "We refine the chosen concept based on your feedback until it's perfect." },
  { step: "04", title: "Deliver", description: "Final files delivered in all required formats, ready for use." },
];

const packages = [
  {
    name: "Starter",
    price: 22000,
    description: "One-off design projects",
    features: [
      "5 custom designs",
      "2 revision rounds",
      "3-day turnaround",
      "Source files included",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: 45000,
    description: "Multiple design needs",
    features: [
      "15 custom designs",
      "Unlimited revisions",
      "2-day turnaround",
      "Priority support",
      "Brand consistency check",
      "Multiple formats",
      "Monthly check-in call",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 84000,
    description: "Complete design solution",
    features: [
      "30 custom designs",
      "Unlimited revisions",
      "Same-day rush available",
      "Dedicated designer",
      "Full brand alignment",
      "All formats included",
      "Priority 24/7 support",
      "Weekly strategy calls",
    ],
  },
];

const stats = [
  { icon: Award, value: "500+", label: "Designs Created" },
  { icon: Clock, value: "2 days", label: "Avg Turnaround" },
  { icon: Layers, value: "50+", label: "Design Categories" },
  { icon: Palette, value: "100%", label: "Custom Work" },
];

const faqs = [
  { question: "What software do you use for design?", answer: "We use industry-standard tools including Adobe Creative Suite (Illustrator, Photoshop, InDesign), Figma, and Canva Pro. Source files are provided in their native formats." },
  { question: "Can you match our existing brand style?", answer: "Yes! We review your existing brand assets and guidelines to ensure all designs are consistent with your established visual identity." },
  { question: "What file formats do you deliver?", answer: "We deliver in all major formats including AI, PSD, PDF, PNG, JPG, SVG, and EPS. We can also provide specific formats upon request." },
  { question: "Do you offer print-ready files?", answer: "Yes! All print designs come with proper bleed, crop marks, and CMYK color profiles, ready for professional printing." },
  { question: "Can you create designs for specific platforms?", answer: "Absolutely! We create designs optimized for Instagram, Facebook, LinkedIn, TikTok, YouTube, email, web, and print — each properly sized and formatted." },
  { question: "What if I need more designs than my package includes?", answer: "Additional designs can be purchased at our standard rate of $25 per design. You can also upgrade to a higher package at any time." },
  { question: "Do you offer rush delivery?", answer: "Yes! The Enterprise package includes same-day rush delivery. For other packages, rush delivery is available for an additional $199 fee." },
  { question: "Can I see the design process?", answer: "Yes! We provide progress updates and share concepts at each stage. You'll have visibility into the entire design process from concept to delivery." },
];

export default function GraphicDesignPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-blob opacity-15" />
          <div className="container-custom relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-cyan-400 text-sm font-mono mb-6">
                <Terminal className="w-4 h-4" />
                service: graphic-design
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Professional{" "}
                <span className="gradient-text">Visual Design</span>
              </h1>
              <p className="text-lg sm:text-xl text-secondary-400 mb-8">
                High-quality graphics for social media, marketing, presentations,
                and print. Designs that elevate your brand and drive engagement.
              </p>
              <Button asChild size="lg" className="btn-primary">
                <Link href="/contact">
                  Start Designing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-y border-primary/10 bg-secondary-950/50">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white font-mono">{stat.value}</div>
                  <div className="text-sm text-secondary-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <SectionWrapper>
          <SectionHeader
            badge="Design Solutions"
            title="Professional Graphics for Every Need"
            subtitle="From social media to print, we create designs that capture attention and communicate your message effectively."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {designServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="glass-card p-6 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4 shadow-glow">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                <p className="text-sm text-secondary-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Process */}
        <SectionWrapper className="bg-secondary-950/30">
          <SectionHeader
            badge="Our Process"
            title="How We Create Your Designs"
            subtitle="A streamlined 4-step process for efficient, high-quality design delivery."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designProcess.map((item, index) => (
              <motion.div
                key={item.step}
                className="glass-card p-6 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary/20 mb-3 font-mono">{item.step}</div>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-secondary-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Pricing */}
        <SectionWrapper>
          <SectionHeader
            badge="Pricing"
            title="Design Packages"
            subtitle="Flexible packages for every design need and budget."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`glass-card p-8 relative ${pkg.popular ? "ring-2 ring-primary shadow-glow" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-secondary-950 text-sm font-semibold rounded-full shadow-glow">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading text-xl font-semibold text-white mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white font-mono">₱{pkg.price.toLocaleString()}</span>
                  <span className="text-secondary-500">/month</span>
                </div>
                <p className="text-sm text-secondary-400 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className={`w-full ${pkg.popular ? "btn-primary" : "btn-outline"}`}>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* FAQ */}
        <SectionWrapper className="bg-secondary-950/30">
          <SectionHeader badge="FAQ" title="Frequently Asked Questions" subtitle="Common questions about our graphic design services." />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass-card px-6 border-none rounded-2xl">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <span className="font-semibold text-white text-left">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-secondary-400 pb-6">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </SectionWrapper>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
