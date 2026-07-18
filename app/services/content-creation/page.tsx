"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle,
  ArrowRight,
  Video,
  Image,
  FileText,
  PenTool,
  Clapperboard,
  Terminal,
  Camera,
  Mic,
  Film,
  Palette,
  Type,
  Layout,
  TrendingUp,
  Eye,
  Heart,
  Share2,
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

const contentTypes = [
  { icon: Image, title: "Social Media Graphics", description: "Eye-catching visuals optimized for each platform's specifications and audience expectations." },
  { icon: Video, title: "Short-form Video", description: "Engaging Reels, TikToks, and video content designed for maximum reach and virality." },
  { icon: FileText, title: "Blog Content", description: "SEO-optimized articles and blog posts that drive organic traffic and establish authority." },
  { icon: PenTool, title: "Copywriting", description: "Compelling captions, ad copy, and marketing copy that converts followers into customers." },
  { icon: Clapperboard, title: "Stories & Highlights", description: "Interactive story content and organized highlights that capture attention and drive action." },
  { icon: Camera, title: "Photography", description: "Professional product and lifestyle photography that elevates your brand visual identity." },
  { icon: Mic, title: "Podcast Content", description: "Audio content creation including podcast production, editing, and show notes writing." },
  { icon: Film, title: "Long-form Video", description: "YouTube videos, tutorials, and brand films that build deep connections with your audience." },
];

const designProcess = [
  { step: "01", title: "Brief & Research", description: "We understand your goals, audience, and brand voice through a detailed creative brief." },
  { step: "02", title: "Concept Development", description: "Our creative team develops concepts and mood boards aligned with your brand identity." },
  { step: "03", title: "Production", description: "We create the content — designing graphics, shooting video, writing copy, and editing." },
  { step: "04", title: "Review & Revise", description: "You review and request changes. We refine until you're 100% satisfied with the result." },
  { step: "05", title: "Delivery", description: "Final files delivered in all required formats via your preferred platform." },
];

const packages = [
  {
    name: "Starter",
    price: 28000,
    description: "Perfect for consistent content needs",
    features: [
      "12 custom graphics/month",
      "Basic copywriting included",
      "2 revision rounds",
      "3-day turnaround",
      "Email support",
      "Brand style alignment",
    ],
  },
  {
    name: "Professional",
    price: 56000,
    description: "Complete content solution for growing brands",
    features: [
      "24 custom graphics/month",
      "4 short-form videos",
      "Full copywriting services",
      "Story content package",
      "Unlimited revisions",
      "2-day turnaround priority",
      "Brand style guide",
      "Monthly strategy call",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 112000,
    description: "Full-scale content production",
    features: [
      "48 custom graphics/month",
      "8 short-form videos",
      "Blog content (4 posts)",
      "Complete content calendar",
      "Dedicated creative team",
      "Same-day rush available",
      "Video editing included",
      "Performance analytics",
      "Quarterly business review",
    ],
  },
];

const metrics = [
  { icon: Eye, value: "3.2M", label: "Avg Monthly Views" },
  { icon: Heart, value: "12%", label: "Avg Engagement Rate" },
  { icon: Share2, value: "45K", label: "Avg Monthly Shares" },
  { icon: TrendingUp, value: "180%", label: "Avg ROI" },
];

const faqs = [
  { question: "What types of content do you create?", answer: "We create social media graphics, short-form videos (Reels, TikToks), stories, carousels, infographics, blog posts, caption copy, and more. Custom projects are available upon request." },
  { question: "How is content delivered?", answer: "Content is delivered via Google Drive, Dropbox, or your preferred platform. We provide organized folders with properly sized files for each platform." },
  { question: "Can you match our brand style?", answer: "Absolutely! We start with a brand review session to understand your visual identity, voice, and aesthetic. We create templates and style guides to ensure consistency." },
  { question: "What's included in revisions?", answer: "Each package includes revision rounds. The Professional and Enterprise packages include unlimited revisions. We refine until you're completely satisfied." },
  { question: "Do you create content for specific platforms?", answer: "Yes! We create content optimized for Instagram, Facebook, TikTok, LinkedIn, YouTube, Pinterest, and more. Each piece is sized and formatted for its target platform." },
  { question: "Can you handle video production?", answer: "Yes, we offer full video production services including shooting, editing, motion graphics, and post-production for both short-form and long-form content." },
  { question: "How quickly can you deliver content?", answer: "Standard turnaround is 3 days for graphics and 5 days for video. Rush delivery is available with the Enterprise package for same-day service." },
  { question: "Do you offer content strategy?", answer: "Yes! The Professional and Enterprise packages include content strategy development, monthly planning, and performance analysis to ensure your content drives results." },
];

export default function ContentCreationPage() {
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
                service: content-creation
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Content That{" "}
                <span className="gradient-text">Captivates</span>
              </h1>
              <p className="text-lg sm:text-xl text-secondary-400 mb-8">
                Professional graphics, videos, and copy that engage your audience
                and drive action. Content created specifically for your brand.
              </p>
              <Button asChild size="lg" className="btn-primary">
                <Link href="/contact">
                  Start Creating
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-12 border-y border-primary/10 bg-secondary-950/50">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <metric.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white font-mono">{metric.value}</div>
                  <div className="text-sm text-secondary-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types */}
        <SectionWrapper>
          <SectionHeader
            badge="What We Create"
            title="Full-Service Content Production"
            subtitle="From static posts to video content, we handle every aspect of content creation."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((type, index) => (
              <motion.div
                key={type.title}
                className="glass-card p-6 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">{type.title}</h4>
                <p className="text-sm text-secondary-400">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Design Process */}
        <SectionWrapper className="bg-secondary-950/30">
          <SectionHeader
            badge="Our Process"
            title="How We Create Your Content"
            subtitle="A structured creative process that ensures quality and consistency."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
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
            title="Content Packages"
            subtitle="Choose the package that fits your content needs."
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
          <SectionHeader badge="FAQ" title="Frequently Asked Questions" subtitle="Common questions about our content creation services." />
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
