"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ShoppingCart, ArrowRight, TrendingUp, Download, Package } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Enterprise Content Calendar 2024",
    price: 2600,
    originalPrice: 4400,
    image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 124,
    category: "Planners",
    badge: "Best Seller",
    description: "Complete yearly content planner with 365+ post ideas and monthly themes.",
  },
  {
    id: 2,
    name: "Professional Brand Kit Bundle",
    price: 5400,
    originalPrice: 8900,
    image: "https://images.pexels.com/photos/6304/pexels-photo-6304.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 89,
    category: "Brand Kits",
    badge: "Popular",
    description: "Logo templates, color palettes, typography guides, and brand assets.",
  },
  {
    id: 3,
    name: "Notion Business OS Template",
    price: 3700,
    originalPrice: 5500,
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 5.0,
    reviews: 156,
    category: "Notion Templates",
    badge: "New",
    description: "Complete business management system for Notion with projects, CRM, and finance.",
  },
  {
    id: 4,
    name: "Canva Social Media Kit",
    price: 2100,
    originalPrice: 3300,
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 201,
    category: "Canva Templates",
    badge: "Featured",
    description: "100+ customizable social media templates for Instagram, Facebook, and LinkedIn.",
  },
  {
    id: 5,
    name: "Marketing Strategy Toolkit",
    price: 7100,
    originalPrice: 11100,
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 78,
    category: "Marketing Kits",
    badge: null,
    description: "Complete marketing planning system with templates, checklists, and guides.",
  },
  {
    id: 6,
    name: "Instagram Story Templates",
    price: 1500,
    originalPrice: 2700,
    image: "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 143,
    category: "Social Media Kits",
    badge: null,
    description: "50+ animated and static story templates for maximum engagement.",
  },
];

const productStats = [
  { icon: Package, value: "500+", label: "Digital Products" },
  { icon: Download, value: "10K+", label: "Downloads" },
  { icon: Star, value: "4.9", label: "Avg Rating" },
  { icon: TrendingUp, value: "97%", label: "Satisfaction" },
];

export function Products() {
  return (
    <SectionWrapper className="bg-secondary-950/30">
      <SectionHeader
        badge="Digital Products"
        title="Premium Templates & Resources"
        subtitle="Ready-to-use templates, planners, and digital resources designed to save you time and elevate your business operations."
      />

      {/* Stats bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {productStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-dark p-4 text-center"
          >
            <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white font-mono">{stat.value}</div>
            <div className="text-xs text-secondary-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card overflow-hidden hover-lift group"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/80 via-transparent to-transparent" />
              {product.badge && (
                <Badge className="absolute top-3 left-3 bg-primary text-secondary-950">
                  {product.badge}
                </Badge>
              )}
            </div>
            <div className="p-5">
              <div className="text-xs text-cyan-400 font-medium mb-1 font-mono uppercase tracking-wider">
                {product.category}
              </div>
              <h3 className="font-semibold text-white mb-2 line-clamp-2">
                {product.name}
              </h3>
              <p className="text-sm text-secondary-400 mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center gap-1 mb-3">
                <Star className="w-4 h-4 fill-warning text-warning" />
                <span className="text-sm font-medium text-white">{product.rating}</span>
                <span className="text-xs text-secondary-500">({product.reviews})</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-white font-mono">
                    ₱{product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-secondary-500 line-through">
                    ₱{product.originalPrice.toLocaleString()}
                  </span>
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

      <div className="text-center mt-12">
        <Link href="/shop">
          <Button size="lg" variant="outline" className="btn-outline">
            View All Products
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
}
