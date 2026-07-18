"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart3,
  CheckCircle,
  ArrowRight,
  Calendar,
  Users,
  TrendingUp,
  MessageCircle,
  Hash,
  Target,
  LineChart,
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

const platforms = [
  { name: "Facebook", color: "#1877F2" },
  { name: "Instagram", color: "#E4405F" },
  { name: "TikTok", color: "#000000" },
  { name: "LinkedIn", color: "#0A66C2" },
  { name: "Pinterest", color: "#BD081C" },
];

const includedServices = [
  { icon: Target, title: "Content Strategy", description: "Data-driven content planning aligned with your goals" },
  { icon: Calendar, title: "Content Calendar", description: "Organized monthly content schedules" },
  { icon: MessageCircle, title: "Engaging Captions", description: "Compelling copy that drives engagement" },
  { icon: BarChart3, title: "Custom Graphics", description: "Professional visuals for every post" },
  { icon: Hash, title: "Hashtag Research", description: "Strategic hashtag strategy for discovery" },
  { icon: LineChart, title: "Analytics & Reporting", description: "Monthly performance reports with insights" },
];

const packages = [
  {
    name: "Basic",
    price: 797,
    description: "Perfect for small businesses starting their social journey",
    features: [
      "3 posts per week",
      "1 platform",
      "Basic analytics report",
      "Community management (5h/month)",
      "Content calendar planning",
    ],
  },
  {
    name: "Standard",
    price: 1497,
    description: "Ideal for growing businesses ready to scale",
    features: [
      "5 posts per week",
      "2 platforms",
      "Detailed analytics report",
      "Community management (10h/month)",
      "Content calendar + strategy",
      "Story content (3 per week)",
      "Monthly strategy call",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: 2497,
    description: "Comprehensive solution for established brands",
    features: [
      "7 posts per week",
      "3 platforms",
      "Advanced analytics dashboard",
      "Dedicated community manager",
      "Full content strategy",
      "Stories + Reels included",
      "Bi-weekly strategy calls",
      "Competitor analysis",
    ],
  },
];

const faqs = [
  {
    question: "Which platforms do you manage?",
    answer:
      "We manage Facebook, Instagram, TikTok, LinkedIn, and Pinterest. Our team stays up-to-date with platform algorithm changes and best practices.",
  },
  {
    question: "How do you create content for my brand?",
    answer:
      "We start with a brand discovery session to understand your voice, values, and goals. Then we develop a content strategy and create custom graphics and copy that align with your brand identity.",
  },
  {
    question: "Can I approve content before it's posted?",
    answer:
      "Absolutely! We provide monthly content calendars in advance for your review. You can request revisions or approve content before scheduling.",
  },
  {
    question: "What results can I expect?",
    answer:
      "Results vary by industry, but clients typically see increased engagement within the first month, follower growth within 60-90 days, and improved brand awareness ongoing.",
  },
  {
    question: "Do I need to provide content?",
    answer:
      "We handle all content creation, but we always appreciate brand assets, photos, and insights you can share. For best results, we recommend a collaborative approach.",
  },
];

export default function SocialMediaPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-hero dark:bg-gradient-hero-dark overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 dark:opacity-10" />
          <div className="container-custom relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Social Media Management
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mb-6">
                Grow Your Brand on{" "}
                <span className="gradient-text">Social Media</span>
              </h1>
              <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-400 mb-8">
                Strategic content, consistent posting, and engaged communities.
                We handle your social presence so you can focus on your business.
              </p>
              <Button asChild size="lg" className="btn-primary">
                <Link href="/contact">
                  Get a Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-12 bg-white dark:bg-secondary-900 border-y border-secondary-200 dark:border-secondary-700">
          <div className="container-custom">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {platforms.map((platform) => (
                <div key={platform.name} className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: platform.color }}
                  >
                    {platform.name[0]}
                  </div>
                  <span className="font-medium text-secondary-900 dark:text-white">
                    {platform.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <SectionWrapper>
          <SectionHeader
            badge="What's Included"
            title="Comprehensive Social Media Services"
            subtitle="Everything you need for a successful social media presence."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="glass-card p-6 flex gap-4 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-1">
                    {service.title}
                  </h4>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Pricing Packages */}
        <SectionWrapper className="bg-secondary-50/50 dark:bg-secondary-900/50">
          <SectionHeader
            badge="Pricing"
            title="Choose Your Package"
            subtitle="Flexible options to fit your business needs and budget."
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`glass-card p-8 relative ${
                  pkg.popular ? "ring-2 ring-primary" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-secondary-900 dark:text-white">
                    ${pkg.price}
                  </span>
                  <span className="text-secondary-500">/month</span>
                </div>
                <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-6">
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-600 dark:text-secondary-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full ${
                    pkg.popular ? "btn-primary" : "btn-outline"
                  }`}
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* FAQ */}
        <SectionWrapper>
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about our social media management services."
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card px-6 border-none rounded-2xl"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <span className="font-semibold text-secondary-900 dark:text-white text-left">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-secondary-600 dark:text-secondary-400 pb-6">
                    {faq.answer}
                  </AccordionContent>
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
