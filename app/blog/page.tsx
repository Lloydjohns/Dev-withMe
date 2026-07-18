"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, Tag, Terminal, TrendingUp, BookOpen, Code2, Cloud, Shield, Zap, Cpu, Server } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/section-wrapper";
import { CTASection } from "@/components/sections/cta";

const categories = ["All", "IT Infrastructure", "Cybersecurity", "Cloud", "AI & ML", "DevOps", "Digital Transformation", "Automation"];

const featuredPost = {
  title: "Building Zero-Trust Architecture: A Complete Guide for Enterprise Teams",
  excerpt: "Zero-trust security is no longer optional. Learn how to implement a zero-trust model that protects your infrastructure while enabling seamless access for your team.",
  image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
  category: "Cybersecurity",
  date: "Jan 15, 2024",
  readTime: "12 min read",
  author: "Sarah Mitchell",
  authorImage: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  authorRole: "Founder & CEO",
};

const posts = [
  {
    title: "How to Architect a Microservices System That Scales to 50M Users",
    excerpt: "A deep dive into the architectural decisions, trade-offs, and patterns we used to build a banking platform serving 2.4M users and 50M daily transactions.",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "IT Infrastructure",
    date: "Jan 12, 2024",
    readTime: "10 min read",
    author: "David Chen",
  },
  {
    title: "The Complete Guide to HIPAA-Compliant Cloud Architecture",
    excerpt: "Everything you need to know about building healthcare systems in the cloud that meet HIPAA requirements without sacrificing developer velocity.",
    image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "Cloud",
    date: "Jan 10, 2024",
    readTime: "8 min read",
    author: "Sarah Lin",
  },
  {
    title: "Using AI to Scale Your Infrastructure: Practical ML Ops Patterns",
    excerpt: "How we built an MLOps platform that reduced model deployment time from 3 months to 2 hours, with automated retraining and drift detection.",
    image: "https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "AI & ML",
    date: "Jan 8, 2024",
    readTime: "9 min read",
    author: "James Lee",
  },
  {
    title: "CI/CD Pipeline Design: From 45 Minutes to 2.3 Seconds",
    excerpt: "A case study on how we rebuilt a CI/CD pipeline using GitOps, canary deployments, and self-healing infrastructure to achieve sub-3-second deploy times.",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "DevOps",
    date: "Jan 5, 2024",
    readTime: "7 min read",
    author: "Olivia Park",
  },
  {
    title: "5 Kubernetes Patterns Every Enterprise Should Know",
    excerpt: "From self-healing deployments to automated scaling, these Kubernetes patterns will transform how your team manages infrastructure.",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "DevOps",
    date: "Jan 3, 2024",
    readTime: "6 min read",
    author: "Olivia Park",
  },
  {
    title: "Digital Transformation: A Roadmap for Legacy Enterprises",
    excerpt: "How to modernize legacy systems without disrupting business operations. A step-by-step guide based on our experience with Fortune 500 clients.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "Digital Transformation",
    date: "Dec 28, 2023",
    readTime: "11 min read",
    author: "Sarah Mitchell",
  },
  {
    title: "Building a Real-Time Analytics Platform with ClickHouse and Kafka",
    excerpt: "How we built a system processing 1 billion queries per day with sub-second response times using streaming architecture.",
    image: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "IT Infrastructure",
    date: "Dec 25, 2023",
    readTime: "8 min read",
    author: "David Chen",
  },
  {
    title: "Security Automation: Detecting Threats Before They Strike",
    excerpt: "How AI-powered threat detection and automated incident response can reduce your security team's alert fatigue by 85%.",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "Cybersecurity",
    date: "Dec 20, 2023",
    readTime: "7 min read",
    author: "Michael Foster",
  },
  {
    title: "The ROI of Business Automation: Measuring What Matters",
    excerpt: "A framework for calculating the true ROI of automation initiatives, including hidden costs and long-term benefits.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "Automation",
    date: "Dec 18, 2023",
    readTime: "5 min read",
    author: "Emily Rodriguez",
  },
];

const popularTopics = [
  { icon: Cloud, label: "Cloud Migration", count: 24 },
  { icon: Shield, label: "Security", count: 18 },
  { icon: Cpu, label: "AI & Machine Learning", count: 15 },
  { icon: Server, label: "Infrastructure", count: 31 },
  { icon: Zap, label: "Automation", count: 12 },
  { icon: Code2, label: "Development", count: 27 },
];

const blogStats = [
  { icon: BookOpen, value: "150+", label: "Articles Published" },
  { icon: TrendingUp, value: "50K+", label: "Monthly Readers" },
  { icon: Tag, value: "8", label: "Categories" },
  { icon: Clock, value: "7 min", label: "Avg Read Time" },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-12 overflow-hidden">
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
                cat /blog/*.md
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Insights & <span className="gradient-text">Engineering Knowledge</span>
              </h1>
              <p className="text-lg sm:text-xl text-secondary-400">
                Deep dives, case studies, and actionable insights from our
                engineering team. Learn from real projects, not theoretical
                tutorials.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="py-8 border-y border-primary/10 bg-secondary-950/50">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {blogStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white font-mono">{stat.value}</div>
                  <div className="text-xs text-secondary-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="py-6 border-b border-primary/10 bg-secondary-950/80 backdrop-blur-xl sticky top-16 md:top-20 z-40">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-400" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-secondary-900/60 border-primary/10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium font-mono transition-all ${
                      selectedCategory === cat
                        ? "bg-primary text-secondary-950 shadow-glow"
                        : "bg-secondary-900/60 border border-primary/10 text-secondary-400 hover:border-primary/30 hover:text-cyan-400"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="section-padding pb-12">
          <div className="container-custom">
            <motion.div
              className="glass-card overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-secondary-950/50" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-primary/20 text-cyan-400 border-primary/20">Featured · {featuredPost.category}</Badge>
                  <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-secondary-400 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={featuredPost.authorImage}
                      alt={featuredPost.author}
                      className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <div className="font-medium text-white">{featuredPost.author}</div>
                      <div className="text-sm text-cyan-400">{featuredPost.authorRole}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-secondary-500 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Button asChild className="btn-primary w-fit">
                    <Link href="/blog">
                      Read Article <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-12 border-y border-primary/10 bg-secondary-950/50">
          <div className="container-custom">
            <h3 className="font-heading text-xl font-bold text-white mb-6 text-center">Popular Topics</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {popularTopics.map((topic, i) => (
                <motion.div
                  key={topic.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card-dark p-4 text-center hover-lift cursor-pointer"
                  onClick={() => setSelectedCategory(topic.label)}
                >
                  <topic.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-sm font-medium text-white">{topic.label}</div>
                  <div className="text-xs text-secondary-500">{topic.count} articles</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="section-padding pt-12">
          <div className="container-custom">
            <SectionHeader
              badge="Latest Articles"
              title="Engineering Insights & Case Studies"
              subtitle="Real-world lessons from building systems at scale. Filter by category or search for specific topics."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  className="glass-card overflow-hidden hover-lift cursor-pointer group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="outline" className="mb-3 border-primary/20 text-cyan-400">{post.category}</Badge>
                    <h3 className="font-heading text-lg font-semibold text-white mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-secondary-400 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-secondary-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-primary/10 text-sm text-secondary-400">
                      By <span className="text-cyan-400 font-medium">{post.author}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-secondary-400 text-lg">No articles found. Try a different search or category.</p>
              </div>
            )}

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="btn-outline">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
