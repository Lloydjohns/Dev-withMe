"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Zap, Shield, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: Zap, label: "2.3s avg deploy time" },
  { icon: Shield, label: "Zero security breaches" },
  { icon: Cloud, label: "99.99% uptime SLA" },
];

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-blob opacity-15" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Terminal-style heading */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-cyan-400 text-sm font-mono mb-8">
            <Terminal className="w-4 h-4" />
            $ nexus deploy --your-project
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Engineer
            <br />
            <span className="gradient-text">Something Extraordinary?</span>
          </h2>
          <p className="text-lg text-secondary-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's talk about your project. Whether you need a full system rebuild,
            a security audit, or an automation pipeline, our engineering team is
            ready to deliver. Book a free consultation today.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-secondary-300"
              >
                <h.icon className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium">{h.label}</span>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="btn-primary group">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="btn-outline">
                <Terminal className="w-5 h-5 mr-2" />
                View Case Studies
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
