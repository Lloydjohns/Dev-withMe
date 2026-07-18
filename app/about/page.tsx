"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper";
import { CTASection } from "@/components/sections/cta";

const values = [
  {
    icon: Sparkles,
    title: "Excellence",
    description:
      "We strive for exceptional quality in every project, never settling for mediocrity.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Honest communication, transparent pricing, and ethical practices guide everything we do.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We see ourselves as an extension of your team, invested in your success.",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description:
      "Continuous learning and improvement help us stay ahead of industry trends.",
  },
];

const team = [
  {
    name: "Sarah Mitchell",
    role: "Founder & Operations Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5b2?w=400&h=400&fit=crop",
    bio: "With 10+ years in digital marketing, Sarah leads our operations with strategic vision and client-focused excellence.",
  },
  {
    name: "David Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    bio: "Award-winning designer with expertise in brand identity, David crafts visual stories that captivate audiences.",
  },
  {
    name: "Emily Rodriguez",
    role: "Social Media Strategist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Platform expert with proven track record of growing engagement and building loyal communities.",
  },
  {
    name: "Michael Foster",
    role: "Digital Product Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Creator of industry-leading templates and tools that help businesses work smarter, not harder.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "Founded",
    description:
      "Started as a freelance social media consultant helping local businesses grow online.",
  },
  {
    year: "2020",
    title: "First Team Member",
    description:
      "Expanded to include a dedicated designer, allowing us to offer comprehensive creative services.",
  },
  {
    year: "2021",
    title: "Digital Shop Launch",
    description:
      "Introduced our first digital products, helping entrepreneurs worldwide access premium templates.",
  },
  {
    year: "2022",
    title: "50+ Clients Milestone",
    description:
      "Reached 50+ active clients across multiple industries and expanded our service offerings.",
  },
  {
    year: "2023",
    title: "Full Agency Status",
    description:
      "Transitioned from freelancers to a structured agency with specialized departments and processes.",
  },
  {
    year: "2024",
    title: "500+ Products",
    description:
      "Our digital shop surpassed 500+ products, serving 10,000+ customers globally.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-hero dark:bg-gradient-hero-dark overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 dark:opacity-10" />
          <div className="container-custom relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                About Us
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mb-6">
                Your Partner in{" "}
                <span className="gradient-text">Digital Growth</span>
              </h1>
              <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-400">
                We're not just another agency. We're a team of passionate
                strategists, designers, and digital experts dedicated to
                helping businesses thrive in the digital age.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium mb-4 block">Our Story</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
                From Passion Project to Full-Service Agency
              </h2>
              <div className="space-y-4 text-secondary-600 dark:text-secondary-400">
                <p>
                  What started as a passion for helping small businesses succeed
                  on social media has evolved into a comprehensive digital growth
                  agency. We understand the challenges entrepreneurs face because
                  we've lived them ourselves.
                </p>
                <p>
                  Unlike large agencies that treat clients as numbers, we build
                  genuine partnerships. We take the time to understand your unique
                  challenges, industry dynamics, and goals. Your success is our
                  success—that's not just a tagline, it's our business model.
                </p>
                <p>
                  Today, we operate two complementary divisions: a social media
                  management agency that serves businesses worldwide, and a
                  digital products marketplace that empowers entrepreneurs with
                  premium templates and resources.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary-900 dark:text-white">
                      50+
                    </p>
                    <p className="text-sm text-secondary-500">Happy Clients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Mission & Vision */}
        <SectionWrapper className="bg-secondary-50/50 dark:bg-secondary-900/50">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                To empower businesses of all sizes with professional digital
                strategies, creative excellence, and practical tools that drive
                measurable growth. We believe every business deserves access to
                expert-level digital marketing—without the enterprise price tag.
              </p>
            </motion.div>

            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                To become the go-to digital growth partner for entrepreneurs and
                small businesses worldwide, known for exceptional quality,
                transparent practices, and results that speak for themselves.
                We envision a future where every business can compete digitally.
              </p>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Core Values */}
        <SectionWrapper>
          <SectionHeader
            badge="Our Values"
            title="What Drives Us"
            subtitle="The principles that guide every decision we make and every client we serve."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Team Section */}
        <SectionWrapper id="team" className="bg-secondary-50/50 dark:bg-secondary-900/50">
          <SectionHeader
            badge="Our Team"
            title="Meet the Experts Behind Your Success"
            subtitle="A dedicated team of professionals passionate about helping you grow."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-semibold text-secondary-900 dark:text-white mb-1">
                  {member.name}
                </h4>
                <p className="text-sm text-primary font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Timeline */}
        <SectionWrapper>
          <SectionHeader
            badge="Our Journey"
            title="Milestones & Achievements"
            subtitle="Key moments that shaped who we are today."
          />

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Year badge */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-secondary-800 border-2 border-primary shadow-soft flex items-center justify-center">
                    <span className="font-bold text-primary text-sm">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"
                  }`}
                >
                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
