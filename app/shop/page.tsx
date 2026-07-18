"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Star,
  Search,
  Grid3X3,
  LayoutGrid,
  Heart,
  ArrowRight,
  Download,
  Package,
  TrendingUp,
  Terminal,
  CheckCircle,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { CTASection } from "@/components/sections/cta";

const categories = [
  "All Products",
  "Canva Templates",
  "Notion Templates",
  "Business Templates",
  "Social Media Kits",
  "Marketing Kits",
  "Planners",
  "Brand Kits",
  "DevOps Kits",
];

const products = [
  { id: 1, name: "Enterprise Content Calendar 2024", price: 2600, originalPrice: 4400, image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop", rating: 4.9, reviews: 124, category: "Planners", badge: "Best Seller", description: "Complete yearly content planner with 365+ post ideas and monthly themes." },
  { id: 2, name: "Professional Brand Kit Bundle", price: 5400, originalPrice: 8900, image: "https://images.pexels.com/photos/6304/pexels-photo-6304.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop", rating: 4.8, reviews: 89, category: "Brand Kits", badge: "Popular", description: "Logo templates, color palettes, typography guides, and brand assets." },
  { id: 3, name: "Notion Business OS Template", price: 3700, originalPrice: 5500, image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop", rating: 5.0, reviews: 156, category: "Notion Templates", badge: "New", description: "Complete business management system for Notion with projects, CRM, and finance." },
  { id: 4, name: "Canva Social Media Kit", price: 2100, originalPrice: 3300, image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop", rating: 4.9, reviews: 201, category: "Canva Templates", badge: "Featured", description: "100+ customizable social media templates for Instagram, Facebook, and LinkedIn." },
  { id: 5, name: "Marketing Strategy Toolkit", price: 7100, originalPrice: 11100, image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop", rating: 4.7, reviews: 78, category: "Marketing Kits", badge: null, description: "Complete marketing planning system with templates, checklists, and guides." },
  { id: 6, name: "Instagram Story Templates", price: 1500, originalPrice: 2700, image: "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop", rating: 4.8, reviews: 143, category: "Social Media Kits", badge: null, description: "50+ animated and static story templates for maximum engagement." },
  { id: 7, name: "Invoice & Proposal Templates", price: 2100, originalPrice: 3300, image: "https://images.pexels.com/photos/34577/pexels-photo-34577.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop", rating: 4.6, reviews: 92, category: "Business Templates", badge: null, description: "Professional invoice and proposal templates for client communication." },
  { id: 8, name: "Content Creator Planner", price: 2600, originalPrice: 4400, image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop", rating: 4.9, reviews: 167, category: "Planners", badge: "Best Seller", description: "The ultimate planner for content creators with tracking and analytics." },
  { id: 9, name: "DevOps Pipeline Template Kit", price: 4900, originalPrice: 7200, image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop", rating: 5.0, reviews: 54, category: "DevOps Kits", badge: "New", description: "Pre-built CI/CD pipeline templates for Docker, Kubernetes, and Terraform." },
  { id: 10, name: "Brand Guidelines Template", price: 3200, originalPrice: 5000, image: "https://images.pexels.com/photos/6304/pexels-photo-6304.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop", rating: 4.8, reviews: 76, category: "Brand Kits", badge: null, description: "Professional brand guidelines document template with 30+ sections." },
  { id: 11, name: "Notion Project Management", price: 2600, originalPrice: 4400, image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop", rating: 4.9, reviews: 112, category: "Notion Templates", badge: null, description: "Complete project management system with sprints, backlog, and roadmaps." },
  { id: 12, name: "Social Media Analytics Dashboard", price: 3700, originalPrice: 5500, image: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop", rating: 4.7, reviews: 88, category: "Marketing Kits", badge: null, description: "Track and visualize your social media performance with automated dashboards." },
];

const shopStats = [
  { icon: Package, value: "500+", label: "Digital Products" },
  { icon: Download, value: "10K+", label: "Downloads" },
  { icon: Star, value: "4.9", label: "Avg Rating" },
  { icon: TrendingUp, value: "97%", label: "Satisfaction" },
];

const features = [
  { icon: CheckCircle, label: "Instant Download" },
  { icon: CheckCircle, label: "Lifetime Updates" },
  { icon: CheckCircle, label: "Commercial License" },
  { icon: CheckCircle, label: "Premium Support" },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [viewGrid, setViewGrid] = useState<"grid" | "list">("grid");
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low": return a.price - b.price;
      case "price-high": return b.price - a.price;
      case "rating": return b.rating - a.rating;
      default: return 0;
    }
  });

  const toggleLike = (id: number) => {
    setLikedProducts((prev) => prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]);
  };

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
                nexus shop --browse
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Premium <span className="gradient-text">Digital Products</span>
              </h1>
              <p className="text-lg sm:text-xl text-secondary-400">
                Ready-to-use templates, planners, and resources designed to save
                you time and elevate your business operations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 border-y border-primary/10 bg-secondary-950/50">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {shopStats.map((stat, i) => (
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

        {/* Features bar */}
        <section className="py-6 border-b border-primary/10">
          <div className="container-custom">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {features.map((f, i) => (
                <div key={f.label} className="flex items-center gap-2 text-sm text-secondary-300">
                  <f.icon className="w-4 h-4 text-cyan-400" />
                  {f.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 border-b border-primary/10 bg-secondary-950/80 backdrop-blur-xl sticky top-16 md:top-20 z-40">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-400" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-secondary-900/60 border-primary/10"
                />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px] bg-secondary-900/60 border-primary/10">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[150px] bg-secondary-900/60 border-primary/10">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Top Rated</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center border border-primary/10 rounded-lg overflow-hidden">
                  <button className={`p-2 ${viewGrid === "grid" ? "bg-primary text-secondary-950" : "text-secondary-400"}`} onClick={() => setViewGrid("grid")}>
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button className={`p-2 ${viewGrid === "list" ? "bg-primary text-secondary-950" : "text-secondary-400"}`} onClick={() => setViewGrid("list")}>
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium font-mono transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-secondary-950"
                      : "bg-secondary-900/60 border border-primary/10 text-secondary-400 hover:border-primary/30 hover:text-cyan-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <SectionWrapper>
          <div className="mb-6 flex items-center justify-between">
            <p className="text-secondary-400 font-mono">
              Showing <span className="text-cyan-400">{sortedProducts.length}</span> products
            </p>
          </div>

          <div className={viewGrid === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"}>
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className={`group glass-card overflow-hidden hover-lift ${
                  viewGrid === "list" ? "flex gap-6 p-4" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className={`relative overflow-hidden ${viewGrid === "list" ? "w-48 flex-shrink-0 rounded-lg" : "aspect-[4/3]"}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 bg-primary text-secondary-950">
                      {product.badge}
                    </Badge>
                  )}
                  <button
                    onClick={() => toggleLike(product.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-secondary-950/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className={`w-4 h-4 ${likedProducts.includes(product.id) ? "fill-error text-error" : "text-white"}`} />
                  </button>
                </div>

                <div className={viewGrid === "list" ? "flex-1" : "p-5"}>
                  <div className="text-xs text-cyan-400 font-medium mb-1 font-mono uppercase tracking-wider">
                    {product.category}
                  </div>
                  <h3 className="font-semibold text-white mb-2 line-clamp-2">{product.name}</h3>
                  {viewGrid === "list" && (
                    <p className="text-sm text-secondary-400 mb-3">{product.description}</p>
                  )}
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 fill-warning text-warning" />
                    <span className="text-sm font-medium text-white">{product.rating}</span>
                    <span className="text-xs text-secondary-500">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-white font-mono">₱{product.price.toLocaleString()}</span>
                      <span className="text-sm text-secondary-500 line-through">₱{product.originalPrice.toLocaleString()}</span>
                    </div>
                    <Button size="sm" className="btn-primary">
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Add
                    </Button>
                  </div>
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
