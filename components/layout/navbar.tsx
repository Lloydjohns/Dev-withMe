"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Terminal,
  Cloud,
  Shield,
  Zap,
  Palette,
  Code2,
  ShoppingCart,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/social-media", label: "Social Media Management", icon: Zap, description: "Strategic content & community growth" },
      { href: "/services/content-creation", label: "Content Creation", icon: Code2, description: "Visuals, video & copy production" },
      { href: "/services/branding", label: "Branding & Identity", icon: Palette, description: "Logo, guidelines & visual systems" },
      { href: "/services/graphic-design", label: "Graphic Design", icon: Palette, description: "Marketing & print collateral" },
      { href: "/services/automation", label: "Business Automation", icon: Zap, description: "Workflows, AI & system integration" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Web Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-secondary-950/90 backdrop-blur-xl border-b border-primary/10 shadow-glow"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-shadow">
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

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-secondary-300 hover:text-cyan-400 transition-colors">
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 pt-2 w-80"
                        >
                          <div className="glass-card-dark p-3 rounded-2xl shadow-soft-xl">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/10 transition-colors group/item"
                              >
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 transition-colors">
                                  <child.icon className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                  <div className="font-medium text-white text-sm group-hover/item:text-cyan-400 transition-colors">
                                    {child.label}
                                  </div>
                                  <div className="text-xs text-secondary-400 mt-0.5">
                                    {child.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-4 py-2 text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "text-cyan-400"
                        : "text-secondary-300 hover:text-cyan-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/shop">
              <Button variant="ghost" size="sm" className="text-secondary-300 hover:text-cyan-400 hover:bg-primary/10">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Shop
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="sm" className="btn-primary">
                <CalendarCheck className="w-4 h-4 mr-1" />
                Book a Call
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-secondary-200 hover:text-cyan-400 transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-secondary-950/95 backdrop-blur-xl border-b border-primary/10"
          >
            <div className="container-custom py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-primary/10 text-cyan-400"
                        : "text-secondary-300 hover:bg-primary/5 hover:text-cyan-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-3 px-4 py-2 rounded-xl text-sm text-secondary-400 hover:text-cyan-400 hover:bg-primary/5 transition-colors"
                        >
                          <child.icon className="w-4 h-4" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/booking" className="block mt-4">
                <Button className="btn-primary w-full">
                  <CalendarCheck className="w-4 h-4 mr-2" />
                  Book a Call
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
