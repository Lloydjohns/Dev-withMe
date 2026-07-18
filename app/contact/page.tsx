"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Terminal,
  MessageCircle,
  Headphones,
  Globe,
  Zap,
  Shield,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@nexusdigital.io",
    description: "We'll respond within 24 hours",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
    description: "Mon-Fri from 9am to 6pm PST",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    value: "Available 24/7",
    description: "Instant support via our chat widget",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "San Francisco, CA",
    description: "By appointment only",
    color: "from-orange-500 to-red-600",
  },
];

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST", status: "open" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM PST", status: "open" },
  { day: "Sunday", hours: "Closed", status: "closed" },
];

const departments = [
  { icon: Zap, name: "Sales", email: "sales@nexusdigital.io", description: "Pricing, packages, and new project inquiries" },
  { icon: Headphones, name: "Support", email: "support@nexusdigital.io", description: "Technical support and bug reports" },
  { icon: Shield, name: "Security", email: "security@nexusdigital.io", description: "Security concerns and vulnerability reports" },
  { icon: Globe, name: "Partnerships", email: "partners@nexusdigital.io", description: "Strategic partnerships and collaborations" },
];

const offices = [
  { city: "San Francisco", country: "USA", address: "535 Mission St, San Francisco, CA 94105", timezone: "PST (UTC-8)" },
  { city: "London", country: "UK", address: "1 Finsbury Avenue, London EC2M 2PF", timezone: "GMT (UTC+0)" },
  { city: "Singapore", country: "SG", address: "8 Marina View, #43-01, Singapore 018960", timezone: "SGT (UTC+8)" },
];

const faqs = [
  { question: "What's the best way to get started?", answer: "Book a free 30-minute consultation through our contact form. We'll discuss your goals and recommend the best approach for your business." },
  { question: "How quickly do you respond?", answer: "We respond to all inquiries within 24 business hours. For urgent matters, please call us directly or use our live chat." },
  { question: "Do you work with international clients?", answer: "Yes! We work with clients worldwide across 30+ countries. All services can be delivered remotely, and we have offices in San Francisco, London, and Singapore." },
  { question: "Can I schedule a call before committing?", answer: "Absolutely! We offer free 30-minute discovery calls to discuss your needs and see if we're a good fit. No commitment required." },
  { question: "What information should I prepare before contacting?", answer: "It helps to have a brief description of your project, your current challenges, timeline expectations, and budget range. But don't worry — we'll guide the conversation." },
  { question: "Do you offer NDA before initial discussions?", answer: "Yes, we're happy to sign an NDA before diving into project specifics. Your intellectual property is always protected with us." },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                nexus connect --client
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Let's <span className="gradient-text">Build Something</span>
                <br />
                Extraordinary Together
              </h1>
              <p className="text-lg sm:text-xl text-secondary-400">
                Ready to transform your digital infrastructure? We're here to help.
                Reach out and let's discuss how we can engineer your success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 border-y border-primary/10 bg-secondary-950/50">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  className="glass-card p-6 hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 shadow-glow`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{method.title}</h3>
                  <p className="text-cyan-400 font-medium text-sm">{method.value}</p>
                  <p className="text-sm text-secondary-400 mt-1">{method.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <motion.div
                  className="glass-card p-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-success" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-white mb-4">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-secondary-400 mb-6 max-w-md mx-auto">
                        Thank you for reaching out. Our team will get back to you
                        within 24 hours. Check your inbox for a confirmation email.
                      </p>
                      <Button onClick={() => setSubmitted(false)} variant="outline" className="btn-outline">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-heading text-2xl font-bold text-white mb-2">
                        Send Us a Message
                      </h2>
                      <p className="text-secondary-400 mb-6">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name" className="text-secondary-300">Full Name *</Label>
                            <Input
                              id="name"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="John Smith"
                              className="mt-1.5 bg-secondary-900/60 border-primary/10"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email" className="text-secondary-300">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="john@company.com"
                              className="mt-1.5 bg-secondary-900/60 border-primary/10"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="company" className="text-secondary-300">Company Name</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Your Company"
                            className="mt-1.5 bg-secondary-900/60 border-primary/10"
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <Label className="text-secondary-300">Service Interested In</Label>
                            <Select
                              value={formData.service}
                              onValueChange={(value) => setFormData({ ...formData, service: value })}
                            >
                              <SelectTrigger className="mt-1.5 bg-secondary-900/60 border-primary/10">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="social-media">Social Media Management</SelectItem>
                                <SelectItem value="content">Content Creation</SelectItem>
                                <SelectItem value="branding">Branding & Identity</SelectItem>
                                <SelectItem value="design">Graphic Design</SelectItem>
                                <SelectItem value="automation">Business Automation</SelectItem>
                                <SelectItem value="cloud">Cloud Infrastructure</SelectItem>
                                <SelectItem value="security">Cybersecurity</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label className="text-secondary-300">Monthly Budget</Label>
                            <Select
                              value={formData.budget}
                              onValueChange={(value) => setFormData({ ...formData, budget: value })}
                            >
                              <SelectTrigger className="mt-1.5 bg-secondary-900/60 border-primary/10">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="under-56000">Under ₱56,000</SelectItem>
                                <SelectItem value="56000-140000">₱56,000 - ₱140,000</SelectItem>
                                <SelectItem value="140000-280000">₱140,000 - ₱280,000</SelectItem>
                                <SelectItem value="280000-560000">₱280,000 - ₱560,000</SelectItem>
                                <SelectItem value="560000-plus">₱560,000+</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="message" className="text-secondary-300">Your Message *</Label>
                          <Textarea
                            id="message"
                            required
                            rows={6}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell us about your project, goals, and timeline..."
                            className="mt-1.5 bg-secondary-900/60 border-primary/10"
                          />
                        </div>

                        <Button type="submit" size="lg" className="btn-primary w-full sm:w-auto">
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </form>
                    </>
                  )}
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Business Hours */}
                <motion.div
                  className="glass-card p-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    Business Hours
                  </h3>
                  <div className="space-y-3">
                    {businessHours.map((item) => (
                      <div key={item.day} className="flex justify-between items-center text-sm">
                        <span className="text-secondary-400">{item.day}</span>
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${item.status === "open" ? "bg-success" : "bg-error"}`} />
                          <span className="font-medium text-white">{item.hours}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Departments */}
                <motion.div
                  className="glass-card p-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="font-semibold text-white mb-4">Direct Departments</h3>
                  <div className="space-y-4">
                    {departments.map((dept) => (
                      <div key={dept.name} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <dept.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="font-medium text-white text-sm">{dept.name}</div>
                          <a href={`mailto:${dept.email}`} className="text-sm text-cyan-400 hover:underline">
                            {dept.email}
                          </a>
                          <p className="text-xs text-secondary-500 mt-0.5">{dept.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* FAQ */}
                <motion.div
                  className="glass-card p-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="font-semibold text-white mb-4">Common Questions</h3>
                  <Accordion type="single" collapsible className="space-y-2">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                        <AccordionTrigger className="text-sm text-white hover:no-underline py-3 text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-secondary-400 text-sm pb-3">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Offices */}
        <section className="py-20 border-t border-primary/10 bg-secondary-950/50">
          <div className="container-custom">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-cyan-400 text-sm font-mono mb-4">
                <Globe className="w-4 h-4" />
                Our Offices
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Global Presence, Local Expertise
              </h2>
              <p className="text-secondary-400 max-w-2xl mx-auto">
                With offices across three continents, we provide round-the-clock
                support and local expertise to clients worldwide.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {offices.map((office, index) => (
                <motion.div
                  key={office.city}
                  className="glass-card p-8 hover-lift"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white text-lg">{office.city}</h3>
                      <p className="text-sm text-cyan-400">{office.country}</p>
                    </div>
                  </div>
                  <p className="text-sm text-secondary-400 mb-2">{office.address}</p>
                  <div className="flex items-center gap-2 text-sm text-secondary-500">
                    <Clock className="w-4 h-4" />
                    {office.timezone}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
