"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  HelpCircle,
  Terminal,
  Zap,
  Shield,
  Cloud,
  Server,
  Cpu,
  Users,
  Star,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTASection } from "@/components/sections/cta";

const socialPackages = [
  {
    name: "Starter",
    monthlyPrice: 45000,
    yearlyPrice: 432000,
    description: "Perfect for small businesses starting their digital journey",
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
    name: "Professional",
    monthlyPrice: 84000,
    yearlyPrice: 806000,
    description: "Ideal for growing businesses ready to scale their presence",
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
    name: "Enterprise",
    monthlyPrice: 140000,
    yearlyPrice: 1344000,
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

const contentPackages = [
  {
    name: "Starter",
    monthlyPrice: 28000,
    description: "Consistent content creation for small teams",
    features: [
      "12 custom graphics/month",
      "Basic copywriting",
      "2 revision rounds",
      "3-day turnaround",
      "Email support",
    ],
  },
  {
    name: "Professional",
    monthlyPrice: 56000,
    description: "Complete content solution for growing brands",
    features: [
      "24 custom graphics/month",
      "4 short-form videos",
      "Full copywriting services",
      "Story content package",
      "Unlimited revisions",
      "2-day turnaround priority",
      "Brand style guide",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 112000,
    description: "Full-scale content production",
    features: [
      "48 custom graphics/month",
      "8 short-form videos",
      "Blog content (4 posts)",
      "Complete content calendar",
      "Dedicated creative team",
      "Same-day rush available",
      "Video editing included",
      "Performance analytics",
    ],
  },
];

const brandingPackages = [
  {
    name: "Essential",
    price: 56000,
    description: "Perfect for new businesses establishing their identity",
    features: [
      "Primary logo design",
      "3 revision rounds",
      "Color palette",
      "Basic brand guidelines",
      "All source files",
    ],
  },
  {
    name: "Professional",
    price: 112000,
    description: "Complete brand identity system",
    features: [
      "Logo + alternative versions",
      "Unlimited revisions",
      "Full color & typography system",
      "Comprehensive brand guidelines",
      "Social media kit",
      "Business card design",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 224000,
    description: "Full brand experience",
    features: [
      "Complete logo system",
      "Unlimited revisions",
      "Extended brand guidelines (50+ pages)",
      "Marketing collateral suite",
      "Presentation template",
      "Brand voice guidelines",
      "30 days post-launch support",
    ],
  },
];

const automationPackages = [
  {
    name: "Discovery",
    price: 28000,
    description: "Assessment and strategic recommendations",
    features: [
      "Full process audit",
      "Automation opportunities report",
      "Implementation roadmap",
      "Tool recommendations",
      "ROI projection",
    ],
  },
  {
    name: "Implementation",
    price: 56000,
    description: "Custom automation setup and integration",
    features: [
      "3 automation workflows",
      "Tool integrations",
      "Team training session",
      "30-day support",
      "Documentation",
    ],
    popular: true,
  },
  {
    name: "Full System",
    price: 140000,
    description: "Complete business automation overhaul",
    features: [
      "Unlimited workflows",
      "Full integration suite",
      "Ongoing optimization",
      "Priority 24/7 support",
      "Monthly strategy calls",
      "Custom AI integrations",
    ],
  },
];

const addOns = [
  { icon: Zap, name: "Extra Platform", price: 17000, description: "Add social media management for an additional platform" },
  { icon: Server, name: "Rush Delivery", price: 11000, description: "24-hour turnaround for urgent design needs" },
  { icon: Cpu, name: "Video Content", price: 28000, description: "Add 4 short-form videos to any package" },
  { icon: Users, name: "Strategy Call", price: 11000, description: "Additional strategy consultation call" },
  { icon: Shield, name: "Security Audit", price: 56000, description: "Comprehensive security audit of your systems" },
  { icon: Cloud, name: "Cloud Migration", price: 84000, description: "Migrate your infrastructure to the cloud" },
];

const comparisonFeatures = [
  { feature: "Dedicated project manager", starter: false, professional: true, enterprise: true },
  { feature: "Custom analytics dashboard", starter: false, professional: true, enterprise: true },
  { feature: "24/7 priority support", starter: false, professional: false, enterprise: true },
  { feature: "Dedicated team members", starter: false, professional: false, enterprise: true },
  { feature: "Quarterly business reviews", starter: false, professional: false, enterprise: true },
  { feature: "SLA guarantee", starter: false, professional: true, enterprise: true },
  { feature: "Source files included", starter: true, professional: true, enterprise: true },
  { feature: "Unlimited revisions", starter: false, professional: true, enterprise: true },
];

const faqs = [
  { question: "Can I customize my package?", answer: "Yes! While our packages are designed to cover most needs, we can create custom solutions for your specific requirements. Contact us to discuss a tailored plan." },
  { question: "Is there a minimum commitment?", answer: "Our services are month-to-month with no long-term contracts. You can cancel anytime with 30 days notice. Enterprise plans may have different terms." },
  { question: "What if I need more than what's included?", answer: "We offer add-on services and can scale your package as your needs grow. Additional work beyond your package is billed at our standard hourly rate of ₱8,400/hour." },
  { question: "Do you offer discounts for startups?", answer: "Yes! We offer a 10% discount for registered startups less than 2 years old. We also offer nonprofit discounts. Contact us to learn more." },
  { question: "How does billing work?", answer: "We bill monthly in advance. You'll receive an invoice at the start of each billing cycle with NET 15 payment terms. Annual plans receive a 20% discount." },
  { question: "What payment methods do you accept?", answer: "We accept all major credit cards, ACH transfers, wire transfers, and PayPal. Enterprise clients can set up net-30 invoicing upon approval." },
  { question: "Can I switch packages later?", answer: "Absolutely. You can upgrade or downgrade your package at any time. Upgrades take effect immediately, while downgrades take effect at the start of the next billing cycle." },
  { question: "Do you offer a money-back guarantee?", answer: "Yes, we offer a 14-day money-back guarantee on all monthly plans. If you're not satisfied within the first 14 days, we'll refund your payment in full, no questions asked." },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

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
                pricing --list
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Simple, <span className="gradient-text">Transparent</span> Pricing
              </h1>
              <p className="text-lg sm:text-xl text-secondary-400 mb-8">
                Choose the package that fits your needs. No hidden fees, no
                surprises. Cancel anytime.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4">
                <Label htmlFor="billing-toggle" className={!isYearly ? "text-white font-semibold" : "text-secondary-500"}>
                  Monthly
                </Label>
                <Switch id="billing-toggle" checked={isYearly} onCheckedChange={setIsYearly} />
                <Label htmlFor="billing-toggle" className={isYearly ? "text-white font-semibold" : "text-secondary-500"}>
                  Yearly
                  <span className="ml-2 px-2 py-0.5 text-xs bg-success/10 text-success rounded-full">Save 20%</span>
                </Label>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Media Pricing */}
        <SectionWrapper>
          <SectionHeader
            badge="Social Media Management"
            title="Grow Your Digital Presence"
            subtitle="Comprehensive packages for every stage of growth, from startup to enterprise."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {socialPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`glass-card p-8 relative ${pkg.popular ? "ring-2 ring-primary shadow-glow" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-secondary-950 text-sm font-semibold rounded-full shadow-glow">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading text-xl font-semibold text-white mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white font-mono">
                    ₱{isYearly ? pkg.yearlyPrice.toLocaleString() : pkg.monthlyPrice.toLocaleString()}
                  </span>
                  <span className="text-secondary-500">/{isYearly ? "year" : "month"}</span>
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

        {/* Comparison Table */}
        <SectionWrapper className="bg-secondary-950/30">
          <SectionHeader
            badge="Feature Comparison"
            title="What's Included in Each Plan"
            subtitle="Compare features across our social media management packages to find the right fit."
          />
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <div className="glass-card-dark overflow-hidden rounded-2xl">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary/10">
                    <th className="text-left p-6 font-semibold text-white">Feature</th>
                    <th className="text-center p-6 font-semibold text-white">Starter</th>
                    <th className="text-center p-6 font-semibold text-cyan-400">Professional</th>
                    <th className="text-center p-6 font-semibold text-white">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, i) => (
                    <tr key={i} className="border-b border-primary/5 hover:bg-primary/5 transition-colors">
                      <td className="p-6 text-sm text-secondary-300">{row.feature}</td>
                      <td className="p-6 text-center">
                        {row.starter ? (
                          <CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" />
                        ) : (
                          <span className="text-secondary-600">—</span>
                        )}
                      </td>
                      <td className="p-6 text-center bg-primary/5">
                        {row.professional ? (
                          <CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" />
                        ) : (
                          <span className="text-secondary-600">—</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {row.enterprise ? (
                          <CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" />
                        ) : (
                          <span className="text-secondary-600">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </SectionWrapper>

        {/* Content Creation */}
        <SectionWrapper>
          <SectionHeader
            badge="Content Creation"
            title="Content Production Packages"
            subtitle="Professional content creation services for every budget and need."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contentPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`glass-card p-8 relative ${pkg.popular ? "ring-2 ring-primary shadow-glow" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-secondary-950 text-sm font-semibold rounded-full shadow-glow">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading text-xl font-semibold text-white mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white font-mono">₱{pkg.monthlyPrice.toLocaleString()}</span>
                  <span className="text-secondary-500">/month</span>
                </div>
                <p className="text-sm text-secondary-400 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-300">{f}</span>
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

        {/* Branding */}
        <SectionWrapper className="bg-secondary-950/30">
          <SectionHeader
            badge="Branding"
            title="Brand Identity Packages"
            subtitle="One-time investment for a complete brand identity that sets you apart."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {brandingPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`glass-card p-8 relative ${pkg.popular ? "ring-2 ring-primary shadow-glow" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-secondary-950 text-sm font-semibold rounded-full shadow-glow">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading text-xl font-semibold text-white mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white font-mono">₱{pkg.price.toLocaleString()}</span>
                  <span className="text-secondary-500 block text-sm">one-time</span>
                </div>
                <p className="text-sm text-secondary-400 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-300">{f}</span>
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

        {/* Automation */}
        <SectionWrapper>
          <SectionHeader
            badge="Business Automation"
            title="Automation Packages"
            subtitle="Streamline your operations with intelligent automation and system integration."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {automationPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`glass-card p-8 relative ${pkg.popular ? "ring-2 ring-primary shadow-glow" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-secondary-950 text-sm font-semibold rounded-full shadow-glow">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading text-xl font-semibold text-white mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white font-mono">₱{pkg.price.toLocaleString()}</span>
                </div>
                <p className="text-sm text-secondary-400 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-300">{f}</span>
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

        {/* Add-ons */}
        <SectionWrapper className="bg-secondary-950/30">
          <SectionHeader
            badge="Add-ons"
            title="Enhance Your Package"
            subtitle="Additional services to customize and extend your experience."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                className="glass-card p-6 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <addon.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-white">{addon.name}</h4>
                      <span className="text-lg font-bold text-cyan-400 font-mono">₱{addon.price.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-secondary-400">{addon.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* FAQ */}
        <SectionWrapper>
          <SectionHeader badge="FAQ" title="Pricing Questions" subtitle="Everything you need to know about our pricing and billing." />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card px-6 border-none rounded-2xl"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <span className="font-semibold text-white text-left flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-secondary-400 pb-6 pl-8">{faq.answer}</AccordionContent>
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
