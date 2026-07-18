"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "James Carter",
    role: "CTO, CloudFlow Banking",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    rating: 5,
    quote:
      "Nexus Digital rebuilt our entire banking infrastructure in 4 months. The system handles 50M transactions daily with 99.99% uptime. Their engineering rigor is unmatched.",
  },
  {
    name: "Sarah Lin",
    role: "VP Engineering, MedTrack",
    image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    rating: 5,
    quote:
      "The HIPAA-compliant system they delivered exceeded our expectations. Their attention to security detail and regulatory compliance saved us months of auditing.",
  },
  {
    name: "Michael Rodriguez",
    role: "CEO, ShopWave",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    rating: 5,
    quote:
      "We went from 100K to 1.2M users without a single infrastructure rewrite. Nexus built a system that scales effortlessly. The architecture just works.",
  },
];

export function TestimonialsCarousel() {
  const [current, setCurrent] = React.useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="glass-card-dark p-8 md:p-12 rounded-3xl">
        <Quote className="w-12 h-12 text-cyan-400/30 mb-6" />
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex gap-1 mb-4">
            {Array.from({ length: testimonials[current].rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-warning text-warning" />
            ))}
          </div>
          <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
            "{testimonials[current].quote}"
          </p>
          <div className="flex items-center gap-4">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
            />
            <div>
              <div className="font-semibold text-white">{testimonials[current].name}</div>
              <div className="text-sm text-cyan-400">{testimonials[current].role}</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <Button variant="ghost" size="icon" onClick={prev} className="rounded-full">
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-8 bg-cyan-400" : "w-2 bg-secondary-600"
              }`}
            />
          ))}
        </div>
        <Button variant="ghost" size="icon" onClick={next} className="rounded-full">
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
