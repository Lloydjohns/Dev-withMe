"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart3,
  CheckCircle,
  ArrowRight,
  Calendar,
  Users,
  TrendingUp,
  MessageCircle,
  Hash,
  Target,
  LineChart,
  Terminal,
  Sparkles,
  Zap,
  Eye,
  Heart,
  Share2,
  Activity,
  Award,
  Clock,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper";
import { CTASection } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const platforms = [
  { name: "Facebook", color: "#1877F2", description: "Community building & paid social" },
  { name: "Instagram", color: "#E4405F", description: "Visual storytelling & reels" },
  { name: "TikTok", color: "#000000", description: "Short-form viral content" },
  { name: "LinkedIn", color: "#0A66C2", description: "B2B networking & thought leadership" },
  { name: "Pinterest", color: "#BD081C", description: "Visual discovery & traffic" },
  { name: "YouTube", color: "#FF0000", description: "Long-form video content" },
  { name: "Twitter/X", color: "#1DA1F2", description: "Real-time engagement" },
  { name: "Threads", color: "#000000", description: "Text-based conversations" },
];

const includedServices = [
  { icon: Target, title: "Content Strategy", description: "Data-driven content planning aligned with your business goals and audience behavior." },
  { icon: Calendar, title: "Content Calendar", description: "Organized monthly content schedules with strategic posting times for maximum reach." },
  { icon: MessageCircle, title: "Engaging Captions", description: "Compelling copy that drives engagement, saves, shares, and meaningful conversations." },
  { icon: BarChart3, title: "Custom Graphics", description: "Professional visuals for every post, story, and ad — designed to stop the scroll." },
  { icon: Hash, title: "Hashtag Research", description: "Strategic hashtag strategy for discovery, combining trending and niche tags." },
  { icon: LineChart, title: "Analytics & Reporting", description: "Monthly performance reports with actionable insights and growth recommendations." },
  { icon: Users, title: "Community Management", description: "Active engagement with your audience — responding to comments and DMs promptly." },
  { icon: TrendingUp, title: "Growth Optimization", description: "Continuous A/B testing and strategy refinement based on performance data." },
];

const packages = [
  {
    name: "Basic",
    price: 45000,
    description: "Perfect for small businesses starting their social journey",
    features: [
      "3 posts per week",
      "1 platform",
      "Basic analytics report",
      "Community management (5h/month)",
      "Content calendar planning",
      "Email support",
      "Monthly performance review",
    ],
  },
  {
    name: "Standard",
    price: 84000,
    description: "Ideal for growing businesses ready to scale",
    features: [
      "5 posts per week",
      "2 platforms",
      "Detailed analytics dashboard",
      "Community management (10h/month)",
      "Content calendar + strategy",
      "Story content (3 per week)",
      "Monthly strategy call",
      "Competitor analysis",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: 140000,
    description: "Comprehensive solution for established brands",
    features: [
      "7 posts per week",
      "3+ platforms",
      "Advanced analytics + custom dashboards",
      "Dedicated community manager",
      "Full content strategy + execution",
      "Stories + Reels included",
      "Bi-weekly strategy calls",
      "Competitor + market analysis",
      "24/7 priority support",
      "Quarterly business review",
    ],
  },
];

const metrics = [
  { icon: Eye, value: "2.4M", label: "Avg Monthly Impressions" },
  { icon: Heart, value: "45K", label: "Avg Monthly Engagement" },
  { icon: Users, value: "12K", label: "Avg Follower Growth / Month" },
  { icon: Share2, value: "8.5%", label: "Avg Engagement Rate" },
];

const workflow = [
  { step: "01", title: "Discovery & Audit", description: "We analyze your current social presence, competitors, and target audience to establish a baseline." },
  { step: "02", title: "Strategy Development", description: "We create a comprehensive content strategy with platform-specific tactics and growth targets." },
  { step: "03", title: "Content Creation", description: "Our team designs visuals, writes captions, and produces stories/reels aligned with your brand." },
  { step: "04", title: "Scheduling & Posting", description: "Content is scheduled at optimal times using data-driven posting schedules." },
  { step: "05", title: "Community Engagement", description: "We actively engage with your audience, respond to comments, and manage DMs." },
  { step: "06", title: "Analytics & Optimization", description: "Monthly reports with insights and continuous strategy refinement based on data." },
];

const faqs = [
  { question: "Which platforms do you manage?", answer: "We manage Facebook, Instagram, TikTok, LinkedIn, Pinterest, YouTube, Twitter/X, and Threads. Our team stays up-to-date with platform algorithm changes and best practices." },
  { question: "How do you create content for my brand?", answer: "We start with a brand discovery session to understand your voice, values, and goals. Then we develop a content strategy and create custom graphics and copy that align with your brand identity." },
  { question: "Can I approve content before it's posted?", answer: "Absolutely! We provide monthly content calendars in advance for your review. You can request revisions or approve content before scheduling." },
  { question: "What results can I expect?", answer: "Results vary by industry, but clients typically see increased engagement within the first month, follower growth within 60-90 days, and improved brand awareness ongoing." },
  { question: "Do I need to provide content?", answer: "We handle all content creation, but we always appreciate brand assets, photos, and insights you can share. For best results, we recommend a collaborative approach." },
  { question: "How do you measure success?", answer: "We track impressions, engagement rate, follower growth, website clicks, and conversions. Each month you receive a detailed report with key metrics and actionable insights." },
  { question: "Can you manage paid social media advertising?", answer: "Yes! We offer paid social management as an add-on service. This includes ad creation, targeting strategy, budget management, and performance optimization." },
  { question: "What if I want to change platforms mid-contract?", answer: "You can switch platforms at the start of any billing cycle. We'll adjust your strategy and content plan accordingly to ensure a smooth transition." },
];

export default function SocialMediaPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-blob opacity-15" />
          <div className="container-custom relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-cyan-400 text-sm font-mono mb-6">
                <Terminal className="w-4 h-4" />
                service: social-media
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Grow Your Brand on{" "}
                <span className="gradient-text">Social Media</span>
              </h1>
              <p className="text-lg sm:text-xl text-secondary-400 mb-8">
                Strategic content, consistent posting, and engaged communities.
                We handle your social presence so you can focus on your business.
              </p>
              <Button asChild size="lg" className="btn-primary">
                <Link href="/contact">
                  Get a Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-12 border-y border-primary/10 bg-secondary-950/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="font-heading text-xl font-bold text-white mb-2">Platforms We Manage</h3>
              <p className="text-secondary-400">Comprehensive coverage across all major social networks</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card-dark p-4 flex items-center gap-3 hover-lift"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: platform.color }}
                  >
                    {platform.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{platform.name}</div>
                    <div className="text-xs text-secondary-400">{platform.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-12 border-b border-primary/10">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <metric.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white font-mono">{metric.value}</div>
                  <div className="text-sm text-secondary-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <SectionWrapper>
          <SectionHeader
            badge="What's Included"
            title="Comprehensive Social Media Services"
            subtitle="Everything you need for a successful social media presence, managed by a dedicated team of specialists."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {includedServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="glass-card p-6 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                <p className="text-sm text-secondary-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Workflow */}
        <SectionWrapper className="bg-secondary-950/30">
          <SectionHeader
            badge="Our Workflow"
            title="How We Manage Your Social Media"
            subtitle="A proven 6-step process that ensures consistent growth and engagement."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflow.map((item, index) => (
              <motion.div
                key={item.step}
                className="glass-card p-6 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary/20 mb-3 font-mono">{item.step}</div>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-secondary-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Pricing Packages */}
        <SectionWrapper>
          <SectionHeader
            badge="Pricing"
            title="Choose Your Package"
            subtitle="Flexible options to fit your business needs and budget. Cancel anytime."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`glass-card p-8 relative ${pkg.popular ? "ring-2 ring-primary shadow-glow" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-secondary-950 text-sm font-semibold rounded-full shadow-glow">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading text-xl font-semibold text-white mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white font-mono">₱{pkg.price.toLocaleString()}</span>
                  <span className="text-secondary-500">/month</span>
                </div>
                <p className="text-sm text-secondary-400 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className={`w-full ${pkg.popular ? "btn-primary" : "btn-outline"}`}>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* FAQ */}
        <SectionWrapper className="bg-secondary-950/30">
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about our social media management services."
          />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass-card px-6 border-none rounded-2xl">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <span className="font-semibold text-white text-left">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-secondary-400 pb-6">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </SectionWrapper>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
