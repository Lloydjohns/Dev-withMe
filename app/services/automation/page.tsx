"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  CheckCircle,
  ArrowRight,
  Workflow,
  Bot,
  Timer,
  Settings,
  Terminal,
  Cpu,
  GitBranch,
  Database,
  Cloud,
  Activity,
  TrendingUp,
  Clock,
  DollarSign,
  Repeat,
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

const services = [
  { icon: Workflow, title: "Workflow Automation", description: "Streamline repetitive tasks and processes with intelligent automation workflows that save hours every week." },
  { icon: Bot, title: "AI Integration", description: "Smart tools, chatbots, and AI-powered systems that enhance productivity and decision-making." },
  { icon: Timer, title: "Time Optimization", description: "Calendar and task management systems that maximize team productivity and minimize wasted time." },
  { icon: Settings, title: "System Integration", description: "Connect your tools and platforms with seamless API integrations and data synchronization." },
  { icon: GitBranch, title: "Process Optimization", description: "Analyze and optimize business processes to eliminate bottlenecks and improve efficiency." },
  { icon: Cpu, title: "Custom Automation", description: "Tailored automation solutions built specifically for your unique business requirements." },
];

const automationTools = [
  { name: "Zapier", description: "Connect 5,000+ apps", icon: GitBranch },
  { name: "Make", description: "Visual automation builder", icon: Workflow },
  { name: "n8n", description: "Open-source workflows", icon: Settings },
  { name: "OpenAI API", description: "AI-powered automation", icon: Bot },
  { name: "Airtable", description: "Database automation", icon: Database },
  { name: "Slack API", description: "Team communication", icon: Activity },
];

const workflow = [
  { step: "01", title: "Process Audit", description: "We analyze your current workflows to identify automation opportunities and calculate potential ROI." },
  { step: "02", title: "Strategy Design", description: "We design automation workflows tailored to your business processes and tool stack." },
  { step: "03", title: "Implementation", description: "We build, test, and deploy the automation workflows with proper error handling." },
  { step: "04", title: "Team Training", description: "We train your team on how to use and maintain the automated systems." },
  { step: "05", title: "Optimization", description: "We monitor performance and continuously optimize for maximum efficiency." },
];

const packages = [
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
      "1-hour strategy call",
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
      "Performance monitoring setup",
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
      "Quarterly business review",
    ],
  },
];

const stats = [
  { icon: Clock, value: "40h+", label: "Hours Saved / Week" },
  { icon: DollarSign, value: "300%", label: "Avg ROI" },
  { icon: Repeat, value: "90%", label: "Tasks Automated" },
  { icon: TrendingUp, value: "5x", label: "Productivity Gain" },
];

const faqs = [
  { question: "What processes can be automated?", answer: "Common automation targets include data entry, report generation, email sequences, social media posting, lead nurturing, invoicing, appointment scheduling, CRM updates, and file management. If a task is repetitive and rule-based, it can likely be automated." },
  { question: "How long does implementation take?", answer: "The Discovery package takes 1 week, Implementation takes 2-3 weeks, and Full System takes 4-6 weeks depending on complexity. We provide detailed timelines during the strategy phase." },
  { question: "What tools do you work with?", answer: "We work with Zapier, Make (Integromat), n8n, custom API integrations, OpenAI, Airtable, Slack, Google Workspace, and 5,000+ other tools via APIs. We recommend the best tools for your specific needs." },
  { question: "Can you integrate AI into our workflows?", answer: "Yes! We specialize in AI-powered automation including chatbots, content generation, data analysis, sentiment analysis, and predictive recommendations using OpenAI, Anthropic, and custom ML models." },
  { question: "What if a workflow breaks?", answer: "All packages include monitoring and alerting. The Implementation package includes 30-day support, and Full System includes ongoing support. We set up error handling and fallback mechanisms to minimize disruptions." },
  { question: "Do you provide training for our team?", answer: "Yes! The Implementation and Full System packages include team training sessions. We also provide documentation and video tutorials so your team can manage the workflows independently." },
  { question: "Can you automate our existing systems?", answer: "Absolutely! We specialize in integrating with existing tools and platforms. We'll audit your current tech stack and design automations that work with what you already use." },
  { question: "How do you measure automation ROI?", answer: "We track hours saved, error reduction, cost savings, productivity gains, and revenue impact. Our Discovery package includes an ROI projection, and we provide ongoing performance reports." },
];

export default function AutomationPage() {
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
                service: automation
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Work{" "}
                <span className="gradient-text">Smarter</span>, Not Harder
              </h1>
              <p className="text-lg sm:text-xl text-secondary-400 mb-8">
                Automate repetitive tasks, integrate your systems, and scale
                efficiently with intelligent automation and AI-powered workflows.
              </p>
              <Button asChild size="lg" className="btn-primary">
                <Link href="/contact">
                  Automate Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-y border-primary/10 bg-secondary-950/50">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white font-mono">{stat.value}</div>
                  <div className="text-sm text-secondary-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <SectionWrapper>
          <SectionHeader
            badge="Automation Solutions"
            title="Smart Systems That Save Time"
            subtitle="Comprehensive automation services that eliminate manual work and let your team focus on what matters."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="glass-card p-6 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 shadow-glow">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                <p className="text-sm text-secondary-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Tools */}
        <SectionWrapper className="bg-secondary-950/30">
          <SectionHeader
            badge="Tools We Use"
            title="Automation Platform Expertise"
            subtitle="We work with the best automation tools and can recommend the right stack for your needs."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {automationTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card-dark p-6 text-center hover-lift"
              >
                <tool.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="font-semibold text-white text-sm">{tool.name}</div>
                <div className="text-xs text-secondary-400 mt-1">{tool.description}</div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Workflow */}
        <SectionWrapper>
          <SectionHeader
            badge="Our Process"
            title="How We Automate Your Business"
            subtitle="A proven 5-step methodology that delivers measurable results."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
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

        {/* Pricing */}
        <SectionWrapper className="bg-secondary-950/30">
          <SectionHeader
            badge="Pricing"
            title="Automation Packages"
            subtitle="Choose the package that fits your automation needs and goals."
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
        <SectionWrapper>
          <SectionHeader badge="FAQ" title="Frequently Asked Questions" subtitle="Common questions about our automation services." />
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
