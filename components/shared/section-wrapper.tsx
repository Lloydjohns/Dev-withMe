"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className = "", id }: SectionWrapperProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-custom">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeader({ badge, title, subtitle, center = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 lg:mb-16 ${center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-cyan-400 text-sm font-medium font-mono mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-secondary-400 leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
