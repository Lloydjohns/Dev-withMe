"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Users,
  Eye,
  ArrowRight,
  X,
  Calendar,
  Clock,
  Server,
  Cloud,
  Shield,
  Cpu,
  Code2,
  Database,
  Activity,
  Zap,
  Target,
  CheckCircle,
  Terminal,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper";
import { CTASection } from "@/components/sections/cta";

const categories = ["All", "FinTech", "Healthcare", "E-Commerce", "SaaS", "Cybersecurity", "DevOps", "AI/ML"];

const projects = [
  {
    id: 1,
    title: "CloudFlow Banking Platform",
    category: "FinTech",
    image: "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    stats: { users: "2.4M", uptime: "99.99%", transactions: "50M/day" },
    description: "Enterprise banking platform with real-time transaction processing, zero-trust security, and regulatory compliance built-in.",
    challenge: "Legacy banking system couldn't handle peak loads, had frequent downtime, and failed compliance audits. The client needed a complete rebuild without disrupting existing operations.",
    solution: "We architected a cloud-native microservices platform on AWS with event-driven architecture, real-time fraud detection using ML, and automated compliance reporting. Zero-downtime migration strategy ensured no disruption to existing customers.",
    results: [
      "2.4M active users migrated with zero downtime",
      "50M transactions processed daily",
      "99.99% uptime SLA achieved",
      "Fraud detection accuracy improved by 94%",
      "SOC 2 and PCI DSS compliance achieved",
      "Infrastructure costs reduced by 40%",
    ],
    tags: ["AWS", "Kubernetes", "Microservices", "PostgreSQL", "Kafka", "Python"],
    duration: "6 months",
    team: "12 engineers",
    year: "2024",
  },
  {
    id: 2,
    title: "MedTrack Health System",
    category: "Healthcare",
    image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    stats: { users: "500K", uptime: "99.9%", records: "10M+" },
    description: "HIPAA-compliant patient management system with AI-driven diagnostics and integrated telemedicine platform.",
    challenge: "Fragmented patient data across 15+ systems, no telemedicine capability, and manual processes causing 30% error rates in patient records.",
    solution: "Built a unified healthcare platform with HL7 FHIR integration, AI-powered diagnostic suggestions, real-time telemedicine with WebRTC, and automated medical record reconciliation.",
    results: [
      "500K patient records consolidated",
      "30% reduction in medical errors",
      "HIPAA compliance achieved in 4 months",
      "Telemedicine adoption reached 78%",
      "Patient satisfaction scores up 45%",
      "Administrative costs reduced by 35%",
    ],
    tags: ["React", "Node.js", "HIPAA", "AI/ML", "WebRTC", "FHIR"],
    duration: "8 months",
    team: "10 engineers",
    year: "2024",
  },
  {
    id: 3,
    title: "ShopWave E-Commerce Engine",
    category: "E-Commerce",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    stats: { users: "1.2M", uptime: "99.95%", gmv: "$200M" },
    description: "Scalable e-commerce platform handling Black Friday traffic surges with auto-scaling architecture and real-time inventory.",
    challenge: "Existing platform crashed during peak shopping events, losing an estimated $2M per hour of downtime. Inventory sync was 15 minutes behind, causing overselling.",
    solution: "Rebuilt on a headless commerce architecture with Redis-based real-time inventory, GraphQL API layer, and Kubernetes auto-scaling that handles 10x traffic spikes automatically.",
    results: [
      "1.2M concurrent users handled",
      "Zero downtime during Black Friday",
      "$200M GMV processed annually",
      "Inventory sync reduced from 15min to 200ms",
      "Page load time improved by 70%",
      "Conversion rate increased by 23%",
    ],
    tags: ["Next.js", "Redis", "GraphQL", "Stripe", "Kubernetes", "Elasticsearch"],
    duration: "5 months",
    team: "8 engineers",
    year: "2024",
  },
  {
    id: 4,
    title: "DataInsight Analytics Suite",
    category: "SaaS",
    image: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    stats: { users: "100K", uptime: "99.99%", queries: "1B/day" },
    description: "Real-time business intelligence platform with predictive analytics, custom dashboards, and natural language query interface.",
    challenge: "Existing BI tools were too slow for real-time decisions, required SQL expertise, and couldn't handle the volume of event data the client was generating.",
    solution: "Built a streaming analytics platform on ClickHouse with Kafka ingestion, AI-powered natural language queries, and customizable real-time dashboards with sub-second response times.",
    results: [
      "1B queries processed per day",
      "Sub-second query response times",
      "100K active business users",
      "Natural language query accuracy at 92%",
      "Data pipeline latency reduced from hours to seconds",
      "Customer retention improved by 30%",
    ],
    tags: ["Vue.js", "Python", "ClickHouse", "Kafka", "NLP", "D3.js"],
    duration: "7 months",
    team: "9 engineers",
    year: "2023",
  },
  {
    id: 5,
    title: "SecureGate Identity Platform",
    category: "Cybersecurity",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    stats: { users: "5M+", uptime: "100%", threats: "10K/day" },
    description: "Zero-trust identity and access management platform with biometric authentication and real-time threat detection.",
    challenge: "Password-based authentication was causing 60% of help desk tickets, and the client experienced 3 security breaches in one year due to credential theft.",
    solution: "Implemented a zero-trust IAM platform with biometric authentication, behavioral analysis, device fingerprinting, and real-time anomaly detection powered by ML models.",
    results: [
      "5M+ users secured with biometric auth",
      "Zero security breaches since deployment",
      "10K threats blocked daily",
      "Help desk tickets reduced by 60%",
      "SOC 2 Type II certified on first audit",
      "Authentication time reduced from 15s to 2s",
    ],
    tags: ["Go", "OAuth2", "Biometrics", "SOC2", "ML", "Redis"],
    duration: "6 months",
    team: "7 engineers",
    year: "2024",
  },
  {
    id: 6,
    title: "AutoScale DevOps Pipeline",
    category: "DevOps",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    stats: { users: "200+", uptime: "99.99%", deploys: "10K+" },
    description: "Self-healing CI/CD pipeline with automated testing, security scanning, and canary deployment strategies.",
    challenge: "Manual deployment process took 45 minutes, had a 15% failure rate, and required a dedicated release manager. No automated rollback existed.",
    solution: "Built a fully automated CI/CD pipeline with GitOps, automated security scanning, canary deployments, and self-healing infrastructure using Kubernetes operators.",
    results: [
      "Deployment time reduced from 45min to 2.3s",
      "Deployment failure rate dropped to 0.1%",
      "10K+ deployments automated",
      "Automated rollback in <5 seconds",
      "Security vulnerabilities caught before production",
      "Release manager role eliminated",
    ],
    tags: ["Docker", "Terraform", "Jenkins", "Prometheus", "ArgoCD", "Kubernetes"],
    duration: "4 months",
    team: "5 engineers",
    year: "2023",
  },
  {
    id: 7,
    title: "NeuralFlow AI Platform",
    category: "AI/ML",
    image: "https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    stats: { users: "50K", uptime: "99.9%", models: "200+" },
    description: "End-to-end MLOps platform for training, deploying, and monitoring machine learning models at scale with automated retraining.",
    challenge: "Data science team couldn't deploy models to production — each model took 3 months to deploy, and there was no monitoring or versioning.",
    solution: "Built a comprehensive MLOps platform with automated model training pipelines, A/B testing framework, model versioning, drift detection, and automated retraining triggers.",
    results: [
      "Model deployment time reduced from 3 months to 2 hours",
      "200+ models in production",
      "50K data scientists using the platform",
      "Model accuracy improved by 25% through automated retraining",
      "A/B testing framework increased conversion by 18%",
      "Model drift detected and fixed automatically",
    ],
    tags: ["Python", "TensorFlow", "Kubeflow", "MLflow", "Kubernetes", "S3"],
    duration: "8 months",
    team: "11 engineers",
    year: "2024",
  },
  {
    id: 8,
    title: "FinEdge Trading System",
    category: "FinTech",
    image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    stats: { users: "80K", uptime: "99.999%", latency: "<1ms" },
    description: "High-frequency trading platform with sub-millisecond latency, real-time market data processing, and risk management.",
    challenge: "Existing trading system had 50ms latency, causing the client to miss profitable trades. Risk calculations were batch-based, creating exposure during market volatility.",
    solution: "Built an ultra-low-latency trading platform in Rust with FPGA-accelerated market data processing, real-time risk engine, and co-location at major exchanges.",
    results: [
      "Latency reduced from 50ms to <1ms",
      "80K active traders onboarded",
      "99.999% uptime achieved",
      "Risk exposure reduced by 80%",
      "Trade execution speed 50x faster than competitors",
      "Daily trading volume increased by 300%",
    ],
    tags: ["Rust", "FPGA", "Redis", "Linux", "C++", "WebSocket"],
    duration: "10 months",
    team: "8 engineers",
    year: "2023",
  },
  {
    id: 9,
    title: "TeleHealth Connect",
    category: "Healthcare",
    image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    stats: { users: "1M+", uptime: "99.9%", sessions: "500K/day" },
    description: "Telemedicine platform connecting patients with specialists worldwide, featuring AI triage and real-time language translation.",
    challenge: "Rural patients had no access to specialists. Existing telemedicine solutions were unreliable, had poor video quality, and didn't support multiple languages.",
    solution: "Built a WebRTC-based telemedicine platform with AI-powered symptom triage, real-time language translation in 30+ languages, and adaptive video quality based on connection.",
    results: [
      "1M+ patients served",
      "500K daily telemedicine sessions",
      "30+ languages supported with real-time translation",
      "AI triage reduced unnecessary visits by 40%",
      "Patient wait time reduced from 2 weeks to 15 minutes",
      "Rural healthcare access improved by 500%",
    ],
    tags: ["React", "WebRTC", "Node.js", "AI/ML", "Translate API", "MongoDB"],
    duration: "7 months",
    team: "9 engineers",
    year: "2024",
  },
  {
    id: 10,
    title: "RetailIQ Inventory System",
    category: "SaaS",
    image: "https://images.pexels.com/photos/4454718/pexels-photo-4454718.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    stats: { users: "300+", uptime: "99.95%", items: "50M+" },
    description: "AI-powered inventory management system with demand forecasting, automated reordering, and real-time stock tracking across 1000+ locations.",
    challenge: "Overstocking and stockouts were costing the client $15M annually. Manual inventory processes across 1000+ retail locations were unsustainable.",
    solution: "Built an AI-driven inventory platform with demand forecasting using time-series ML models, automated reorder triggers, and real-time stock visibility across all locations.",
    results: [
      "50M+ items tracked across 1000+ locations",
      "Stockouts reduced by 70%",
      "Overstock costs reduced by 45%",
      "Automated reordering saved $15M annually",
      "Demand forecasting accuracy at 94%",
      "Inventory turnover improved by 35%",
    ],
    tags: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS", "Kafka"],
    duration: "6 months",
    team: "7 engineers",
    year: "2024",
  },
  {
    id: 11,
    title: "CloudShield Security Suite",
    category: "Cybersecurity",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    stats: { users: "10K+", uptime: "99.99%", threats: "100K/day" },
    description: "Cloud-native security platform with SIEM, threat hunting, automated incident response, and compliance reporting.",
    challenge: "The client's security team was overwhelmed by 10,000+ daily alerts with no prioritization. Incident response took hours, and compliance reporting was manual.",
    solution: "Built an integrated security platform with AI-powered alert triage, automated incident response playbooks, and real-time compliance dashboards for SOC 2, GDPR, and ISO 27001.",
    results: [
      "100K threats blocked daily",
      "Alert fatigue reduced by 85% through AI triage",
      "Incident response time reduced from hours to minutes",
      "Automated compliance reporting for 5 frameworks",
      "10K+ organizations secured",
      "Zero successful breaches since deployment",
    ],
    tags: ["Go", "Elasticsearch", "Python", "Kafka", "React", "AWS"],
    duration: "9 months",
    team: "10 engineers",
    year: "2023",
  },
  {
    id: 12,
    title: "DataLake Analytics Platform",
    category: "DevOps",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    stats: { users: "500+", uptime: "99.99%", data: "10PB+" },
    description: "Petabyte-scale data lake with automated ETL pipelines, data governance, and self-service analytics for 500+ data consumers.",
    challenge: "Data was siloed across 20+ systems, ETL pipelines were breaking daily, and data consumers were waiting weeks for new data products.",
    solution: "Built a unified data lake on S3 with automated ETL using Airflow, data governance with Apache Atlas, and self-service analytics with Trino and Superset.",
    results: [
      "10PB+ data consolidated",
      "ETL pipeline reliability improved to 99.9%",
      "Data product delivery time reduced from weeks to hours",
      "500+ data consumers self-served",
      "Data governance compliance achieved",
      "Infrastructure costs reduced by 50%",
    ],
    tags: ["Airflow", "Trino", "S3", "Apache Atlas", "Superset", "Terraform"],
    duration: "8 months",
    team: "8 engineers",
    year: "2024",
  },
];

const projectStats = [
  { icon: Server, value: "500+", label: "Projects Delivered" },
  { icon: Users, value: "120+", label: "Enterprise Clients" },
  { icon: Activity, value: "99.99%", label: "Avg Uptime" },
  { icon: Zap, value: "2.3s", label: "Avg Deploy Time" },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

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
                cat /portfolio/*.json
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Engineering That
                <br />
                <span className="gradient-text">Speaks for Itself</span>
              </h1>
              <p className="text-lg sm:text-xl text-secondary-400">
                Explore 12 case studies spanning fintech, healthcare, e-commerce,
                cybersecurity, and AI. See the measurable impact we've delivered
                for businesses like yours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="py-12 border-y border-primary/10 bg-secondary-950/50">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {projectStats.map((stat, i) => (
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

        {/* Filter */}
        <section className="py-6 border-b border-primary/10 bg-secondary-950/80 backdrop-blur-xl sticky top-16 md:top-20 z-40">
          <div className="container-custom">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium font-mono transition-all ${
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
        </section>

        {/* Projects Grid */}
        <SectionWrapper>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="glass-card overflow-hidden cursor-pointer hover-lift group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/90 via-secondary-950/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-secondary-950/80 backdrop-blur-sm text-cyan-400 text-xs font-mono border border-primary/20">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-secondary-400 mb-4 text-sm">{project.description}</p>

                  <div className="grid grid-cols-3 gap-3 mb-4 py-4 border-y border-primary/10">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-bold text-white font-mono">{value}</div>
                        <div className="text-[10px] text-secondary-500 uppercase tracking-wider">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-secondary-900/60 border border-primary/10 text-xs text-cyan-400 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-secondary-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {project.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {project.team}
                    </span>
                  </div>

                  <Button variant="link" className="p-0 text-cyan-400">
                    View Case Study <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary-950/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="glass-card-dark rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-video">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover rounded-t-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-950 via-secondary-950/30 to-transparent rounded-t-3xl" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary-950/80 backdrop-blur-sm flex items-center justify-center hover:bg-secondary-800 transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-cyan-400 text-xs font-mono border border-primary/20 mb-3 inline-block">
                      {selectedProject.category}
                    </span>
                    <h2 className="font-heading text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>

                <div className="p-8">
                  {/* Quick info */}
                  <div className="grid grid-cols-3 gap-4 mb-8 p-4 rounded-2xl bg-secondary-900/40 border border-primary/10">
                    <div className="text-center">
                      <Calendar className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-white">{selectedProject.year}</div>
                      <div className="text-xs text-secondary-500">Year</div>
                    </div>
                    <div className="text-center">
                      <Clock className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-white">{selectedProject.duration}</div>
                      <div className="text-xs text-secondary-500">Duration</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-white">{selectedProject.team}</div>
                      <div className="text-xs text-secondary-500">Team Size</div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(selectedProject.stats).map(([key, value]) => (
                      <div key={key} className="glass-card-dark p-4 text-center">
                        <div className="text-2xl font-bold text-cyan-400 font-mono">{value}</div>
                        <div className="text-xs text-secondary-400 uppercase tracking-wider mt-1">{key}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-secondary-400 mb-8 leading-relaxed">{selectedProject.description}</p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <Target className="w-5 h-5 text-cyan-400" />
                        The Challenge
                      </h4>
                      <p className="text-secondary-400 leading-relaxed">{selectedProject.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <Code2 className="w-5 h-5 text-cyan-400" />
                        Our Solution
                      </h4>
                      <p className="text-secondary-400 leading-relaxed">{selectedProject.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-cyan-400" />
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-secondary-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-secondary-900/60 border border-primary/10 text-sm text-cyan-400 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button asChild className="w-full btn-primary">
                    <Link href="/contact">
                      Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
