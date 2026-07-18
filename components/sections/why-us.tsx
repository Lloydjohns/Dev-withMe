"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Clock,
  Users,
  Award,
  TrendingUp,
  Headphones,
  Target,
  Layers,
  Lock,
  RefreshCw,
  Rocket,
} from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper";

const reasons = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Zero-trust architecture, end-to-end encryption, and compliance with SOC 2, GDPR, and ISO 27001 standards. Your data is protected at every layer.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Delivery",
    description:
      "Agile sprints with weekly deliverables. From kickoff to production in weeks, not months. Our CI/CD pipelines deploy with 2.3s average build time.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "You get a dedicated squad — project manager, lead engineer, designer, and QA specialist. No handoffs, no miscommunication, just results.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "500+ projects delivered, 120+ enterprise clients, and a 98% client retention rate. Our portfolio spans fintech, healthcare, e-commerce, and SaaS.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description:
      "We build systems that grow with you. Microservices, auto-scaling, and cloud-native design ensure your infrastructure handles 10x growth without rewrites.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock monitoring, proactive alerting, and a guaranteed 15-minute response time for critical issues. We never sleep so you can.",
  },
];

const differentiators = [
  { icon: Target, label: "Goal-Driven", description: "Every decision tied to your KPIs" },
  { icon: Layers, label: "Full-Stack", description: "Frontend to infrastructure, end-to-end" },
  { icon: Lock, label: "Secure by Design", description: "Security baked in, not bolted on" },
  { icon: RefreshCw, label: "Iterative", description: "Ship fast, learn, improve, repeat" },
  { icon: Rocket, label: "Performance", description: "Sub-second load times, every time" },
  { icon: Clock, label: "On-Time", description: "94% of projects delivered ahead of schedule" },
];

export function WhyUs() {
  return (
    <SectionWrapper className="bg-secondary-950/30">
      <SectionHeader
        badge="Why Choose Us"
        title="Engineering Excellence, Business Impact"
        subtitle="We don't just build software — we engineer solutions that drive measurable business outcomes. Here's what sets us apart."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="feature-card group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-secondary-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Differentiators grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card-dark p-8 rounded-2xl"
      >
        <h3 className="font-heading text-xl font-bold text-white mb-6 text-center">
          The Nexus Difference
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary-900/60 border border-primary/10 flex items-center justify-center mx-auto mb-3">
                <d.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="font-semibold text-white text-sm mb-1">{d.label}</div>
              <div className="text-xs text-secondary-400">{d.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
