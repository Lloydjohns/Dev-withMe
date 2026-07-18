"use client";

import React from "react";
import Link from "next/link";
import {
  Terminal,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Shield,
  Zap,
  Cloud,
  Code2,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  services: [
    { label: "Social Media Management", href: "/services/social-media" },
    { label: "Content Creation", href: "/services/content-creation" },
    { label: "Branding & Identity", href: "/services/branding" },
    { label: "Graphic Design", href: "/services/graphic-design" },
    { label: "Business Automation", href: "/services/automation" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Book a Call", href: "/booking" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Digital Shop", href: "/shop" },
    { label: "Documentation", href: "/blog" },
    { label: "Case Studies", href: "/portfolio" },
    { label: "Support Center", href: "/contact" },
    { label: "Privacy Policy", href: "/" },
  ],
};

const techStack = [
  { icon: Cloud, label: "Cloud" },
  { icon: Shield, label: "Security" },
  { icon: Zap, label: "Automation" },
  { icon: Code2, label: "Development" },
  { icon: Server, label: "Infrastructure" },
];

export function Footer() {
  return (
    <footer className="relative bg-secondary-950 border-t border-primary/10 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-blob opacity-20" />

      <div className="relative container-custom pt-20 pb-8">
        {/* Top section */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-glow">
                <Terminal className="w-5 h-5 text-secondary-950" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-lg text-white">
                  Dev|<span className="text-cyan-400">withMe</span>
                </span>
                <span className="text-[10px] text-cyan-400/60 font-mono tracking-wider uppercase">
                  IT Solutions
                </span>
              </div>
            </Link>
            <p className="text-secondary-400 text-sm leading-relaxed mb-6 max-w-sm">
              Enterprise-grade IT solutions and digital transformation services.
              We engineer scalable systems, automate workflows, and build
              digital experiences that power business growth.
            </p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech) => (
                <div
                  key={tech.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-900/60 border border-primary/10 text-xs text-secondary-300"
                >
                  <tech.icon className="w-3.5 h-3.5 text-cyan-400" />
                  {tech.label}
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary-900/60 border border-primary/10 flex items-center justify-center text-secondary-400 hover:text-cyan-400 hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-400 hover:text-cyan-400 transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-400 hover:text-cyan-400 transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-sm text-secondary-400 mb-4">
              Get the latest insights on IT trends, automation, and digital
              transformation delivered to your inbox.
            </p>
            <div className="flex gap-2 mb-6">
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-secondary-900/60 border-primary/10"
              />
              <Button size="sm" className="btn-primary px-4">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Contact info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-secondary-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                hello@nexusdigital.io
              </div>
              <div className="flex items-center gap-2 text-secondary-400">
                <Phone className="w-4 h-4 text-cyan-400" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-2 text-secondary-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-500">
            &copy; {new Date().getFullYear()} Nexus Digital. All rights reserved.
            Built with precision.
          </p>
          <div className="flex items-center gap-6 text-sm text-secondary-500">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Terms
            </Link>
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Privacy
            </Link>
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Cookies
            </Link>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
