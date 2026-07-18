"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper";

const testimonials = [
  {
    name: "James Carter",
    role: "CTO, CloudFlow Banking",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    rating: 5,
    quote:
      "Nexus Digital rebuilt our entire banking infrastructure in 4 months. The system handles 50M transactions daily with 99.99% uptime. Their engineering rigor is unmatched in the industry.",
  },
  {
    name: "Sarah Lin",
    role: "VP Engineering, MedTrack",
    image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    rating: 5,
    quote:
      "The HIPAA-compliant system they delivered exceeded our expectations. Their attention to security detail and regulatory compliance saved us months of auditing. Truly enterprise-grade work.",
  },
  {
    name: "Michael Rodriguez",
    role: "CEO, ShopWave",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    rating: 5,
    quote:
      "We went from 100K to 1.2M users without a single infrastructure rewrite. Nexus built a system that scales effortlessly. Black Friday? No problem. The architecture just works.",
  },
  {
    name: "Emily Chen",
    role: "Head of Product, DataInsight",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    rating: 5,
    quote:
      "The analytics platform processes 1 billion queries per day with sub-second response times. Nexus's choice of ClickHouse and Kafka was spot on. Our customers love the real-time insights.",
  },
  {
    name: "David Park",
    role: "CISO, SecureGate",
    image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    rating: 5,
    quote:
      "Zero security incidents in 3 years. Their zero-trust architecture and proactive monitoring give us complete peace of mind. The SOC 2 audit passed on the first try because of their work.",
  },
  {
    name: "Olivia Foster",
    role: "Director of DevOps, AutoScale",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    rating: 5,
    quote:
      "Our deployment time went from 45 minutes to 2.3 seconds. The self-healing CI/CD pipeline Nexus built has reduced our incident response time by 90%. Game-changing engineering.",
  },
];

export function Testimonials() {
  return (
    <SectionWrapper className="bg-secondary-950/30">
      <SectionHeader
        badge="Testimonials"
        title="What Our Clients Say"
        subtitle="Don't just take our word for it. Hear from the engineering leaders and executives who trust us with their most critical systems."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 hover-lift"
          >
            <Quote className="w-8 h-8 text-cyan-400/30 mb-4" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-warning text-warning" />
              ))}
            </div>
            <p className="text-secondary-300 leading-relaxed mb-6">"{t.quote}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
              />
              <div>
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-sm text-cyan-400">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
