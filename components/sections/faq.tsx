"use client";

import React from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of projects do you take on?",
    answer:
      "We handle full-stack engineering projects — from cloud infrastructure and enterprise software development to cybersecurity, automation, and digital transformation. Our expertise spans fintech, healthcare, e-commerce, SaaS, and DevOps. If it involves scalable systems, we can build it.",
  },
  {
    question: "How do you ensure code quality and security?",
    answer:
      "Every project follows our rigorous engineering standards: 90%+ test coverage, automated security scanning in CI/CD, peer code review for every PR, and compliance with OWASP Top 10. We also conduct regular penetration testing and maintain SOC 2, GDPR, and ISO 27001 compliance documentation.",
  },
  {
    question: "What's your typical project timeline?",
    answer:
      "Timelines vary by scope. MVPs typically take 4-8 weeks, mid-size systems 8-16 weeks, and enterprise platforms 3-6 months. We use agile sprints with weekly deliverables, so you see progress continuously. 94% of our projects are delivered ahead of schedule.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer:
      "Yes. We offer 24/7 monitoring, proactive alerting, and tiered support plans with guaranteed response times. Our SLA includes 15-minute response for critical issues, 99.99% uptime, and monthly performance optimization reviews. We're in it for the long haul.",
  },
  {
    question: "How do you handle project management and communication?",
    answer:
      "You get a dedicated project manager, weekly sprint demos, daily standup updates, and access to our project dashboard. We use Jira, Slack, and GitHub for full transparency. You'll always know exactly what's being worked on and when it will ship.",
  },
  {
    question: "Can you work with our existing engineering team?",
    answer:
      "Absolutely. We frequently augment existing teams, providing specialized expertise in areas like DevOps, security, or architecture. We follow your coding standards, integrate with your tools, and document everything so your team can maintain the system independently.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Our core stack includes TypeScript, React, Next.js, Node.js, Python, Go, PostgreSQL, Redis, Docker, Kubernetes, Terraform, AWS, Azure, GCP, and more. We're polyglot engineers who choose the right tool for each job, not one-size-fits-all solutions.",
  },
  {
    question: "How does pricing work?",
    answer:
      "We offer fixed-price scopes for well-defined projects and retainer models for ongoing work. Pricing is based on scope, complexity, and timeline. We provide detailed estimates after a free discovery call. No hidden fees, no surprise invoices. Check our pricing page for package details.",
  },
];

export function FAQ() {
  return (
    <SectionWrapper>
      <SectionHeader
        badge="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with us. Can't find what you're looking for? Reach out to our team."
      />

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
              <AccordionContent className="text-secondary-400 pb-6 pl-8">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
