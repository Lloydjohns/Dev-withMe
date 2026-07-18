"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart3,
  Sparkles,
  Palette,
  Brush,
  ShoppingCart,
  Zap,
  ArrowRight,
  CheckCircle,
  Code2,
  Cloud,
  Shield,
  Cpu,
} from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper";

const services = [
  {
    icon: BarChart3,
    title: "Social Media Management",
    description:
      "Strategic content planning, scheduling, and community management across all major platforms to grow your online presence and engage your audience.",
    href: "/services/social-media",
    features: [
      "Content Strategy & Planning",
      "Daily Posting & Scheduling",
      "Community Management",
      "Analytics & Reporting",
    ],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Sparkles,
    title: "Content Creation",
    description:
      "Engaging posts, stories, reels, videos, and graphics tailored to your brand voice and optimized for maximum engagement across every channel.",
    href: "/services/content-creation",
    features: [
      "Custom Graphics & Visuals",
      "Short-form Video Content",
      "Copywriting & Captions",
      "Story & Reel Creation",
    ],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    description:
      "Complete brand identity development including logo design, color palette, typography, brand guidelines, and comprehensive visual direction.",
    href: "/services/branding",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Color & Typography",
      "Visual Identity System",
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Brush,
    title: "Graphic Design",
    description:
      "Professional designs for social media, marketing materials, presentations, packaging, and print collateral that elevate your brand presence.",
    href: "/services/graphic-design",
    features: [
      "Social Media Graphics",
      "Marketing Materials",
      "Presentation Design",
      "Print Collateral",
    ],
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: ShoppingCart,
    title: "Digital Products",
    description:
      "Premium templates, planners, and digital resources designed to streamline your business operations and enhance team productivity at scale.",
    href: "/shop",
    features: [
      "Canva Templates",
      "Notion Templates",
      "Business Planners",
      "Marketing Kits",
    ],
    gradient: "from-cyan-500 to-teal-600",
  },
  {
    icon: Zap,
    title: "Business Automation",
    description:
      "Smart workflows, AI integration, and automation strategies to save time, reduce manual work, and scale your operations with precision.",
    href: "/services/automation",
    features: [
      "Workflow Automation",
      "AI Integration",
      "System Integration",
      "Process Optimization",
    ],
    gradient: "from-amber-500 to-orange-600",
  },
];

const capabilities = [
  { icon: Cloud, label: "Cloud Infrastructure", description: "AWS, Azure, GCP architecture and deployment" },
  { icon: Shield, label: "Cybersecurity", description: "Zero-trust security, compliance, and auditing" },
  { icon: Code2, label: "Custom Software", description: "Full-stack development, APIs, and microservices" },
  { icon: Cpu, label: "AI & Machine Learning", description: "Intelligent automation and predictive analytics" },
];

export function Services() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader
          badge="Our Services"
          title="Comprehensive Digital Solutions"
          subtitle="From social media management to enterprise IT infrastructure, we offer everything you need to build a powerful digital presence and scale your operations."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="feature-card group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              />
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-glow`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-secondary-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-secondary-300"
                  >
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="inline-flex items-center text-cyan-400 font-medium hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Capabilities strip */}
      <section className="relative py-16 overflow-hidden border-y border-primary/10 bg-secondary-950/50">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="font-heading text-2xl font-bold text-white mb-2">
              Enterprise Capabilities
            </h3>
            <p className="text-secondary-400">Beyond marketing — full-stack IT engineering</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-dark p-6 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <cap.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="font-semibold text-white mb-1">{cap.label}</h4>
                <p className="text-sm text-secondary-400">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
