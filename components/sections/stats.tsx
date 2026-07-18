"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Server, Code2, Activity, Cloud, Shield, GitBranch, Cpu } from "lucide-react";

const stats = [
  { icon: Code2, value: 500, suffix: "+", label: "Projects Delivered", description: "Enterprise solutions shipped to production" },
  { icon: Users, value: 120, suffix: "+", label: "Enterprise Clients", description: "Companies trusting our expertise" },
  { icon: Server, value: 99.99, suffix: "%", label: "Uptime SLA", description: "Mission-critical reliability", decimals: 2 },
  { icon: Activity, value: 2.3, suffix: "s", label: "Avg Deploy Time", description: "From commit to production", decimals: 1 },
];

const additionalStats = [
  { icon: Cloud, value: "50M+", label: "API Calls / Day" },
  { icon: Shield, value: "Zero", label: "Security Breaches" },
  { icon: GitBranch, value: "10K+", label: "Pipelines Built" },
  { icon: Cpu, value: "24/7", label: "Monitoring" },
];

export function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-20" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-cyan-400 text-sm font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            System Metrics
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Numbers That Define Our Excellence
          </h2>
          <p className="text-secondary-400 max-w-2xl mx-auto">
            Real metrics from real projects. We measure our success by the impact
            we create for our clients.
          </p>
        </motion.div>

        {/* Main stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="stat-card group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-mono">
                {stat.value.toFixed(stat.decimals || 0)}
                <span className="text-cyan-400">{stat.suffix}</span>
              </div>
              <div className="font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-sm text-secondary-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Secondary stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card-dark p-6 rounded-2xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalStats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-10 h-10 rounded-lg bg-secondary-900/60 border border-primary/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white font-mono">{stat.value}</div>
                  <div className="text-xs text-secondary-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
