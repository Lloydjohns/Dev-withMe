"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, TrendingUp, Eye, Star } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "CloudFlow Banking Platform",
    category: "FinTech",
    image: "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    stats: { users: "2.4M", uptime: "99.99%", transactions: "50M/day" },
    description: "Enterprise banking platform with real-time transaction processing and zero-trust security.",
    tags: ["AWS", "Kubernetes", "Microservices", "PostgreSQL"],
  },
  {
    id: 2,
    title: "MedTrack Health System",
    category: "Healthcare",
    image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    stats: { users: "500K", uptime: "99.9%", records: "10M+" },
    description: "HIPAA-compliant patient management system with AI-driven diagnostics and telemedicine.",
    tags: ["React", "Node.js", "HIPAA", "AI/ML"],
  },
  {
    id: 3,
    title: "ShopWave E-Commerce Engine",
    category: "E-Commerce",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    stats: { users: "1.2M", uptime: "99.95%", gmv: "$200M" },
    description: "Scalable e-commerce platform handling Black Friday traffic with auto-scaling architecture.",
    tags: ["Next.js", "Redis", "GraphQL", "Stripe"],
  },
  {
    id: 4,
    title: "DataInsight Analytics Suite",
    category: "SaaS",
    image: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    stats: { users: "100K", uptime: "99.99%", queries: "1B/day" },
    description: "Real-time business intelligence platform with predictive analytics and custom dashboards.",
    tags: ["Vue.js", "Python", "ClickHouse", "Kafka"],
  },
  {
    id: 5,
    title: "SecureGate Identity Platform",
    category: "Cybersecurity",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    stats: { users: "5M+", uptime: "100%", threats: "10K blocked/day" },
    description: "Zero-trust identity and access management platform with biometric authentication.",
    tags: ["Go", "OAuth2", "Biometrics", "SOC2"],
  },
  {
    id: 6,
    title: "AutoScale DevOps Pipeline",
    category: "DevOps",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    stats: { users: "200+", uptime: "99.99%", deploys: "10K+" },
    description: "Self-healing CI/CD pipeline with automated testing, security scanning, and canary deploys.",
    tags: ["Docker", "Terraform", "Jenkins", "Prometheus"],
  },
];

export function PortfolioPreview() {
  return (
    <SectionWrapper>
      <SectionHeader
        badge="Portfolio"
        title="Projects That Define Industries"
        subtitle="Explore a selection of our recent work. From fintech to healthcare, we've engineered solutions that scale to millions of users."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card overflow-hidden hover-lift group cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/90 via-secondary-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-xs uppercase tracking-wider text-cyan-400 font-mono mb-1">
                  {project.category}
                </div>
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
              </div>
            </div>

            <div className="p-5">
              <p className="text-sm text-secondary-400 mb-4">{project.description}</p>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-sm font-bold text-white font-mono">{value}</div>
                    <div className="text-[10px] text-secondary-500 uppercase tracking-wider">{key}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-md bg-secondary-900/60 border border-primary/10 text-xs text-cyan-400 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/portfolio"
                className="inline-flex items-center text-cyan-400 text-sm font-medium hover:gap-2 transition-all"
              >
                View Case Study
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/portfolio">
          <Button size="lg" variant="outline" className="btn-outline">
            View Full Portfolio
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
}
