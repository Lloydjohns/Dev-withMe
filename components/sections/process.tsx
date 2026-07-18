"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Rocket, BarChart3, Wrench, ArrowRight } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Analysis",
    description:
      "We dive deep into your business, technical landscape, goals, and challenges. Through stakeholder interviews, system audits, and competitive analysis, we build a comprehensive understanding of your needs.",
    deliverables: [
      "Technical requirements document",
      "Stakeholder interview reports",
      "Competitive landscape analysis",
      "Project roadmap & timeline",
    ],
    duration: "1-2 weeks",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Architecture & Design",
    description:
      "Our architects design scalable, secure, and maintainable systems. From wireframes to technical specs, we create a blueprint that aligns engineering with business objectives.",
    deliverables: [
      "System architecture diagrams",
      "UI/UX wireframes & prototypes",
      "Technical specification document",
      "Database schema & API contracts",
    ],
    duration: "2-3 weeks",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Development & Testing",
    description:
      "Agile sprints with weekly demos. Our engineers write clean, tested, and documented code. Continuous integration ensures every commit is verified before merging.",
    deliverables: [
      "Weekly sprint deliverables",
      "Automated test suite (90%+ coverage)",
      "Code documentation",
      "Staging environment access",
    ],
    duration: "4-12 weeks",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Deployment & Launch",
    description:
      "Zero-downtime deployment with blue-green or canary strategies. We monitor every metric in real-time and roll back instantly if anything looks off.",
    deliverables: [
      "Production deployment",
      "Monitoring & alerting setup",
      "Performance baseline report",
      "Launch documentation",
    ],
    duration: "1 week",
  },
  {
    icon: Wrench,
    step: "05",
    title: "Support & Optimization",
    description:
      "Post-launch, we provide ongoing support, performance tuning, and feature iteration. Monthly reviews ensure your system evolves with your business.",
    deliverables: [
      "24/7 monitoring & support",
      "Monthly performance reports",
      "Quarterly optimization reviews",
      "Continuous improvement roadmap",
    ],
    duration: "Ongoing",
  },
];

export function Process() {
  return (
    <SectionWrapper>
      <SectionHeader
        badge="Our Process"
        title="A Proven Engineering Methodology"
        subtitle="We've refined our approach across 500+ projects. Every phase is designed to minimize risk, maximize quality, and deliver measurable results."
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/20 via-primary/30 to-transparent md:-translate-x-1/2" />

        {steps.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`relative flex gap-6 md:gap-12 mb-16 last:mb-0 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Step number */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-glow">
                <step.icon className="w-6 h-6 text-secondary-950" />
              </div>
            </div>

            {/* Content */}
            <div
              className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
              }`}
            >
              <div className="glass-card p-6 hover-lift">
                <div className="flex items-center gap-3 mb-4 ${i % 2 === 0 ? 'md:justify-end' : ''}">
                  <span className="text-3xl font-bold text-cyan-400/30 font-mono">
                    {step.step}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-cyan-400 text-xs font-mono">
                    {step.duration}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-400 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className={`space-y-2 ${i % 2 === 0 ? "md:text-left" : ""}`}>
                  <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                    Deliverables
                  </div>
                  {step.deliverables.map((d) => (
                    <div
                      key={d}
                      className="flex items-start gap-2 text-sm text-secondary-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Spacer for the other side */}
            <div className="hidden md:block md:w-[calc(50%-3rem)]" />
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/contact">
          <Button size="lg" className="btn-primary">
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
}
