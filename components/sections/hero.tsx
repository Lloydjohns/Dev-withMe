"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  Shield,
  Zap,
  Cloud,
  CheckCircle,
  Cpu,
  Lock,
  Activity,
  Server,
  Code2,
  GitBranch,
  Boxes,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const terminalLines = [
  { text: "$ nexus init --project", type: "command" },
  { text: "Initializing Nexus Digital infrastructure...", type: "output" },
  { text: "[OK] Cloud infrastructure provisioned", type: "success" },
  { text: "[OK] CI/CD pipeline configured", type: "success" },
  { text: "[OK] Security policies enforced", type: "success" },
  { text: "[OK] Monitoring & alerting active", type: "success" },
  { text: "[OK] Auto-scaling enabled", type: "success" },
  { text: "$ deploy --env production", type: "command" },
  { text: "Building... ████████████████████ 100%", type: "output" },
  { text: "Deployment successful! Live in 2.3s", type: "success" },
];

const techBadges = [
  { icon: Cloud, label: "AWS" },
  { icon: Server, label: "Docker" },
  { icon: GitBranch, label: "CI/CD" },
  { icon: Lock, label: "Zero Trust" },
  { icon: Cpu, label: "AI/ML" },
  { icon: Boxes, label: "Microservices" },
];

const features = [
  { icon: Shield, label: "Enterprise Security" },
  { icon: Zap, label: "Lightning Fast" },
  { icon: Cloud, label: "Cloud Native" },
  { icon: Activity, label: "24/7 Monitoring" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 dot-bg opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-blob opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-blob opacity-15 animate-float-delayed" />

      {/* Scan line effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-scan" />

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-cyan-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              System Status: All Services Operational
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Engineering
              <br />
              <span className="gradient-text">Digital Excellence</span>
              <br />
              at Scale
            </h1>

            <p className="text-lg text-secondary-400 mb-8 max-w-xl leading-relaxed">
              We architect enterprise-grade IT solutions — from cloud
              infrastructure and cybersecurity to automation and digital
              transformation. Build smarter, scale faster, and operate with
              confidence.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary-900/60 border border-primary/10 text-sm text-secondary-300"
                >
                  <f.icon className="w-4 h-4 text-cyan-400" />
                  {f.label}
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact">
                <Button size="lg" className="btn-primary group">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="btn-outline">
                  <Terminal className="w-5 h-5 mr-2" />
                  View Our Work
                </Button>
              </Link>
            </div>

            {/* Tech stack */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-xs text-secondary-500 font-mono uppercase tracking-wider">
                Powered by
              </span>
              {techBadges.map((tech) => (
                <div
                  key={tech.label}
                  className="flex items-center gap-1.5 text-secondary-400 hover:text-cyan-400 transition-colors cursor-default"
                >
                  <tech.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tech.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Terminal window */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Terminal window */}
            <div className="glass-card-dark terminal-border overflow-hidden shadow-soft-xl">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 bg-secondary-900/80 border-b border-primary/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-error/80" />
                  <div className="w-3 h-3 rounded-full bg-warning/80" />
                  <div className="w-3 h-3 rounded-full bg-success/80" />
                </div>
                <div className="flex items-center gap-2 text-xs text-secondary-500 font-mono">
                  <Terminal className="w-3.5 h-3.5" />
                  nexus@production:~$
                </div>
                <div className="w-12" />
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono text-sm space-y-1 min-h-[400px] bg-secondary-950/50">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className={`flex items-start gap-2 ${
                      line.type === "command"
                        ? "text-cyan-400"
                        : line.type === "success"
                        ? "text-success"
                        : "text-secondary-400"
                    }`}
                  >
                    {line.type === "success" && (
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    )}
                    <span>{line.text}</span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="text-cyan-400 font-mono"
                >
                  $ <span className="animate-blink">_</span>
                </motion.div>
              </div>
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 glass-card-dark p-4 shadow-soft-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">99.99%</div>
                  <div className="text-xs text-secondary-400">Uptime SLA</div>
                </div>
              </div>
            </motion.div>

            {/* Floating deploy card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -top-6 -right-6 glass-card-dark p-4 shadow-soft-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">2.3s</div>
                  <div className="text-xs text-secondary-400">Avg Deploy Time</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Logos / trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-24 pt-12 border-t border-primary/10"
        >
          <p className="text-center text-sm text-secondary-500 mb-8 font-mono uppercase tracking-wider">
            Trusted by engineering teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {["TechCorp", "DataFlow", "CloudNet", "DevOps Co", "ScaleUp", "ByteWorks"].map(
              (logo) => (
                <div
                  key={logo}
                  className="text-xl font-heading font-bold text-secondary-600 hover:text-cyan-400 transition-colors cursor-default"
                >
                  {logo}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
