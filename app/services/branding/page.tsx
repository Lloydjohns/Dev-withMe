"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Palette,
  CheckCircle,
  ArrowRight,
  PenTool,
  Palette as PaletteIcon,
  BookOpen,
  Layers,
  Terminal,
  Type,
  Layout,
  Eye,
  Target,
  Users,
  Award,
  Briefcase,
  Image as ImageIcon,
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

const deliverables = [
  { icon: PenTool, title: "Logo Design", description: "Primary logo, alternative versions, and icon mark for every use case" },
  { icon: PaletteIcon, title: "Color Palette", description: "Primary and secondary colors with hex, RGB, and CMYK codes" },
  { icon: Layers, title: "Typography", description: "Font selections, pairings, and detailed usage guidelines" },
  { icon: BookOpen, title: "Brand Guidelines", description: "Complete brand usage documentation with 30+ pages of standards" },
  { icon: Layout, title: "Visual System", description: "Patterns, textures, and visual elements that define your brand" },
  { icon: Eye, title: "Mockups", description: "Realistic brand mockups for business cards, signage, and digital" },
];

const brandingProcess = [
  { step: "01", title: "Brand Discovery", description: "We dive deep into your business, values, audience, and competitive landscape." },
  { step: "02", title: "Mood Board", description: "We create visual mood boards to align on aesthetic direction and tone." },
  { step: "03", title: "Logo Concepts", description: "We present 3-5 logo concepts for your review, each with rationale." },
  { step: "04", title: "Refinement", description: "Based on your feedback, we refine the chosen concept to perfection." },
  { step: "05", title: "Brand System", description: "We develop the complete brand system — colors, typography, and guidelines." },
  { step: "06", title: "Final Delivery", description: "All files delivered in every format, plus a comprehensive brand book." },
];

const packages = [
  {
    name: "Essential",
    price: 56000,
    description: "Perfect for new businesses establishing their identity",
    features: [
      "Primary logo design",
      "3 revision rounds",
      "Color palette",
      "Basic brand guidelines",
      "All source files",
      "2-week turnaround",
    ],
  },
  {
    name: "Professional",
    price: 112000,
    description: "Complete brand identity system",
    features: [
      "Logo + alternative versions",
      "Unlimited revisions",
      "Full color & typography system",
      "Comprehensive brand guidelines",
      "Social media kit",
      "Business card design",
      "3-week turnaround",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 224000,
    description: "Full brand experience for established companies",
    features: [
      "Complete logo system",
      "Unlimited revisions",
      "Extended brand guidelines (50+ pages)",
      "Marketing collateral suite",
      "Presentation template",
      "Brand voice guidelines",
      "30 days post-launch support",
      "4-week turnaround",
    ],
  },
];

const stats = [
  { icon: Award, value: "200+", label: "Brands Created" },
  { icon: Users, value: "98%", label: "Client Satisfaction" },
  { icon: Briefcase, value: "15+", label: "Industries Served" },
  { icon: Target, value: "100%", label: "Custom Designs" },
];

const faqs = [
  { question: "How long does the branding process take?", answer: "The Essential package takes 2 weeks, Professional takes 3 weeks, and Enterprise takes 4 weeks. Rush delivery is available for an additional fee." },
  { question: "Do I own the rights to my brand?", answer: "Yes! Upon final payment, you receive full ownership of all brand assets, including the logo, color palette, and guidelines. We transfer all intellectual property rights to you." },
  { question: "What files do I receive?", answer: "You receive all source files (AI, PSD, SVG), web-optimized files (PNG, JPG, SVG), print-ready files (PDF, EPS), and a comprehensive brand guidelines document." },
  { question: "Can you rebrand an existing business?", answer: "Absolutely! We specialize in both new brand creation and brand refreshes. We'll analyze your current brand and recommend improvements while preserving brand equity." },
  { question: "What if I don't like the initial concepts?", answer: "Our process includes multiple revision rounds. The Professional and Enterprise packages include unlimited revisions. We refine until you're completely satisfied." },
  { question: "Do you create brand voice guidelines?", answer: "Yes, the Enterprise package includes brand voice guidelines covering tone, messaging pillars, and communication standards. This can also be added to other packages." },
  { question: "Can you design marketing collateral too?", answer: "Yes! The Enterprise package includes a marketing collateral suite. We can also design business cards, brochures, and other materials as add-ons." },
  { question: "What makes your branding service different?", answer: "We don't just create logos — we build complete brand systems. Our process includes competitive analysis, audience research, and strategic positioning to ensure your brand resonates with your target market." },
];

export default function BrandingPage() {
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
                service: branding
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Build a Brand That{" "}
                <span className="gradient-text">Stands Out</span>
              </h1>
              <p className="text-lg sm:text-xl text-secondary-400 mb-8">
                Complete brand identity development from logo design to
                comprehensive brand guidelines. We create brands that resonate.
              </p>
              <Button asChild size="lg" className="btn-primary">
                <Link href="/contact">
                  Start Your Brand Journey
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

        {/* Deliverables */}
        <SectionWrapper>
          <SectionHeader
            badge="Deliverables"
            title="What You'll Receive"
            subtitle="Everything needed for a cohesive, professional brand identity."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card p-6 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 shadow-glow">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-secondary-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Process */}
        <SectionWrapper className="bg-secondary-950/30">
          <SectionHeader
            badge="Our Process"
            title="How We Build Your Brand"
            subtitle="A strategic 6-step process that ensures your brand is distinctive, memorable, and effective."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandingProcess.map((item, index) => (
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
            title="Brand Packages"
            subtitle="Choose the package that fits your brand needs and budget."
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
                  <span className="text-secondary-500 block text-sm">one-time</span>
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
          <SectionHeader badge="FAQ" title="Frequently Asked Questions" subtitle="Common questions about our branding services." />
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
