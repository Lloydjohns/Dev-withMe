"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-blob opacity-10" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card-dark p-8 md:p-12 rounded-3xl text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Bell className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-secondary-400 mb-8 max-w-xl mx-auto">
              Join 50,000+ engineering leaders getting weekly insights on IT
              trends, automation strategies, and digital transformation best
              practices. No spam, ever.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-white">You're In!</h3>
                <p className="text-secondary-400">
                  Check your inbox for a confirmation email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-secondary-900/60 border-primary/10 flex-1"
                />
                <Button type="submit" className="btn-primary">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}

            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-secondary-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                Weekly digest
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                No spam
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                Unsubscribe anytime
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
