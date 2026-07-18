export const dynamic = "force-dynamic";
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import {
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Terminal,
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  Users,
  DollarSign,
  FileText,
  Globe,
  Zap,
  Palette,
  BarChart3,
  Sparkles,
  Brush,
  ShoppingCart,
  Cloud,
  Shield,
  Cpu,
  Server,
  Code2,
  CalendarCheck,
  Video,
  MapPin,
  Star,
  ShieldCheck,
  Lock,
  RefreshCw,
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

const services = [
  { id: "social-media", label: "Social Media Management", icon: BarChart3, description: "Content strategy, posting, and community management" },
  { id: "content-creation", label: "Content Creation", icon: Sparkles, description: "Graphics, video, and copywriting production" },
  { id: "branding", label: "Branding & Identity", icon: Palette, description: "Logo design, brand guidelines, and visual systems" },
  { id: "graphic-design", label: "Graphic Design", icon: Brush, description: "Marketing collateral and print design" },
  { id: "automation", label: "Business Automation", icon: Zap, description: "Workflow automation and AI integration" },
  { id: "cloud-infrastructure", label: "Cloud Infrastructure", icon: Cloud, description: "AWS, Azure, GCP architecture and deployment" },
  { id: "cybersecurity", label: "Cybersecurity", icon: Shield, description: "Security audits, compliance, and threat detection" },
  { id: "custom-software", label: "Custom Software Development", icon: Code2, description: "Full-stack development, APIs, and microservices" },
  { id: "ai-ml", label: "AI & Machine Learning", icon: Cpu, description: "MLOps, predictive analytics, and intelligent automation" },
  { id: "devops", label: "DevOps & CI/CD", icon: Server, description: "Pipeline design, Kubernetes, and infrastructure as code" },
  { id: "digital-products", label: "Digital Products & Templates", icon: ShoppingCart, description: "Premium templates, planners, and resources" },
  { id: "consultation", label: "General Consultation", icon: Briefcase, description: "Not sure what you need? Let's talk!" },
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
];

const timezones = [
  "Pacific (PST/PDT)", "Mountain (MST/MDT)", "Central (CST/CDT)",
  "Eastern (EST/EDT)", "Greenwich (GMT/BST)", "Central European (CET/CEST)",
  "Eastern European (EET/EEST)", "India (IST)", "China (CST)",
  "Japan (JST)", "Singapore (SGT)", "Australia Eastern (AEST/AEDT)",
];

const teamSizes = [
  "Just me", "2-10 employees", "11-50 employees", "51-200 employees", "201-1000 employees", "1000+ employees",
];

const budgets = [
  "Under ₱56,000", "₱56,000 - ₱280,000", "₱280,000 - ₱560,000", "₱560,000 - ₱1,400,000",
  "₱1,400,000 - ₱2,800,000", "₱2,800,000 - ₱5,600,000", "₱5,600,000+", "Not sure yet",
];

const meetingTypes = [
  { id: "video", label: "Video Call", icon: Video, description: "Google Meet or Zoom — 30 min" },
  { id: "phone", label: "Phone Call", icon: Phone, description: "We'll call you — 30 min" },
  { id: "office", label: "In-Person", icon: MapPin, description: "Visit our SF office — 1 hour" },
];

const bookingSteps = [
  { number: 1, label: "Service", icon: Briefcase },
  { number: 2, label: "Schedule", icon: Calendar },
  { number: 3, label: "Details", icon: User },
  { number: 4, label: "Confirm", icon: CheckCircle },
];

const features = [
  { icon: Clock, title: "30-Min Free Consultation", description: "No pressure, no commitment. Just a conversation about your goals." },
  { icon: ShieldCheck, title: "100% Confidential", description: "Your project details are kept private. NDA available on request." },
  { icon: Zap, title: "Quick Response", description: "We confirm bookings within 4 business hours." },
  { icon: Star, title: "Expert Engineers", description: "Speak directly with a senior engineer or architect." },
];

const faqs = [
  { question: "Is the consultation really free?", answer: "Yes! Your first 30-minute consultation is completely free. We'll discuss your project, goals, and how we can help. No payment required." },
  { question: "What should I prepare for the call?", answer: "It helps to have a brief description of your project, your current challenges, and any timeline or budget expectations. But don't worry — we'll guide the conversation." },
  { question: "Can I reschedule my booking?", answer: "Absolutely. After booking, you'll receive a confirmation email with a reschedule link. You can reschedule up to 24 hours before your appointment." },
  { question: "Do you offer NDA before the call?", answer: "Yes, we're happy to sign an NDA before diving into project specifics. Just mention it in the project description field or email us after booking." },
  { question: "What time zones do you support?", answer: "We have team members across PST, GMT, and SGT time zones. Select your timezone when booking and we'll match you with the right specialist." },
  { question: "What happens after the consultation?", answer: "Within 24 hours, you'll receive a follow-up email with a summary of our discussion, recommended next steps, and a custom proposal if applicable." },
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    service: "",
    meetingType: "video",
    preferredDate: "",
    preferredTime: "",
    timezone: "Pacific (PST/PDT)",
    name: "",
    email: "",
    phone: "",
    company: "",
    teamSize: "",
    budget: "",
    projectDescription: "",
  });

  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 1);
  const minDateStr = minDate.toISOString().split("T")[0];
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 60);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  // Check existing bookings when date changes
  useEffect(() => {
    if (formData.preferredDate) {
      checkExistingBookings(formData.preferredDate);
    }
  }, [formData.preferredDate]);

  const checkExistingBookings = async (date: string) => {
    try {
      const { data, error } = await supabase
        .from("bookings")
        .select("preferred_time")
        .eq("preferred_date", date)
        .neq("status", "cancelled");

      if (!error && data) {
        setBookedSlots(data.map((b) => b.preferred_time));
      }
    } catch (err) {
      // Silently fail — we just won't show booked slots
    }
  };

  const isSlotBooked = (slot: string) => bookedSlots.includes(slot);

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, service: serviceId });
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);

    try {
      const selectedService = services.find((s) => s.id === formData.service);
      const { error: insertError } = await supabase.from("bookings").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        service: selectedService?.label || formData.service,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        timezone: formData.timezone,
        team_size: formData.teamSize || null,
        budget: formData.budget || null,
        project_description: formData.projectDescription,
      });

      if (insertError) throw insertError;

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1: return formData.service !== "";
      case 2: return formData.preferredDate !== "" && formData.preferredTime !== "";
      case 3: return formData.name !== "" && formData.email !== "" && formData.projectDescription !== "";
      case 4: return true;
      default: return false;
    }
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main>
          <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-blob opacity-15" />
            <div className="container-custom relative z-10">
              <motion.div
                className="max-w-2xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-24 h-24 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-12 h-12 text-success" />
                </div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Booking Confirmed!
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Thank you, {formData.name}! We've received your booking request
                  and will send a confirmation email to{" "}
                  <span className="text-primary font-medium">{formData.email}</span>{" "}
                  within 4 business hours.
                </p>

                <div className="glass-card p-8 rounded-2xl text-left mb-8">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                    Booking Summary
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Service</div>
                        <div className="text-sm font-medium text-foreground">
                          {services.find((s) => s.id === formData.service)?.label}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Date</div>
                        <div className="text-sm font-medium text-foreground">
                          {new Date(formData.preferredDate).toLocaleDateString("en-US", {
                            weekday: "long", year: "numeric", month: "long", day: "numeric",
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Time</div>
                        <div className="text-sm font-medium text-foreground">
                          {formData.preferredTime} ({formData.timezone})
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {meetingTypes.find((m) => m.id === formData.meetingType)?.icon && (
                        <>
                          {React.createElement(
                            meetingTypes.find((m) => m.id === formData.meetingType)!.icon,
                            { className: "w-5 h-5 text-primary" }
                          )}
                          <div>
                            <div className="text-xs text-muted-foreground">Meeting Type</div>
                            <div className="text-sm font-medium text-foreground">
                              {meetingTypes.find((m) => m.id === formData.meetingType)?.label}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/">
                    <Button size="lg" className="btn-primary">
                      Back to Home
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="btn-outline"
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                      setFormData({
                        service: "", meetingType: "video", preferredDate: "",
                        preferredTime: "", timezone: "Pacific (PST/PDT)",
                        name: "", email: "", phone: "", company: "",
                        teamSize: "", budget: "", projectDescription: "",
                      });
                    }}
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Book Another
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

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
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6">
                <CalendarCheck className="w-4 h-4" />
                nexus book --consultation
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Book a{" "}
                <span className="gradient-text">Free Consultation</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Schedule a 30-minute call with our engineering team. We'll discuss
                your project, goals, and how we can help you build something
                extraordinary.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features bar */}
        <section className="py-8 border-y border-border bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            {/* Step indicator */}
            <div className="flex items-center justify-center mb-12">
              {bookingSteps.map((s, i) => (
                <React.Fragment key={s.number}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        step >= s.number
                          ? "bg-primary text-primary-foreground shadow-glow"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step > s.number ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <s.icon className="w-5 h-5" />
                      )}
                    </div>
                    <span className={`text-xs mt-2 font-medium ${step >= s.number ? "text-primary" : "text-muted-foreground"}`}>
                      {s.label}
                    </span>
                  </div>
                  {i < bookingSteps.length - 1 && (
                    <div className={`h-px w-12 md:w-24 mx-2 transition-all duration-300 ${step > s.number ? "bg-primary" : "bg-border"}`} />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="glass-card p-8 md:p-12 rounded-3xl">
              <AnimatePresence mode="wait">
                {/* Step 1: Service Selection */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                      What can we help you with?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Select the service you're interested in. This helps us match you with the right specialist.
                    </p>

                    {/* Meeting type */}
                    <div className="mb-8">
                      <Label className="text-foreground mb-3 block">Preferred Meeting Type</Label>
                      <div className="grid sm:grid-cols-3 gap-3">
                        {meetingTypes.map((type) => (
                          <button
                            key={type.id}
                            onClick={() => setFormData({ ...formData, meetingType: type.id })}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${
                              formData.meetingType === type.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/30"
                            }`}
                          >
                            <type.icon className="w-5 h-5 text-primary mb-2" />
                            <div className="font-semibold text-foreground text-sm">{type.label}</div>
                            <div className="text-xs text-muted-foreground">{type.description}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Service grid */}
                    <Label className="text-foreground mb-3 block">Select a Service</Label>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => handleServiceSelect(service.id)}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            formData.service === service.id
                              ? "border-primary bg-primary/5 shadow-glow"
                              : "border-border hover:border-primary/30 hover:bg-primary/5"
                          }`}
                        >
                          <service.icon className="w-5 h-5 text-primary mb-2" />
                          <div className="font-semibold text-foreground text-sm">{service.label}</div>
                          <div className="text-xs text-muted-foreground mt-1">{service.description}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Schedule */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                      Pick a date and time
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Choose your preferred date and time slot. All times are in your selected timezone.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Date picker */}
                      <div>
                        <Label htmlFor="date" className="text-foreground mb-3 block">Preferred Date</Label>
                        <Input
                          id="date"
                          type="date"
                          min={minDateStr}
                          max={maxDateStr}
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value, preferredTime: "" })}
                          className="bg-background border-border"
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                          Bookings available from tomorrow up to 60 days in advance.
                        </p>

                        <div className="mt-6">
                          <Label className="text-foreground mb-3 block">Your Timezone</Label>
                          <Select
                            value={formData.timezone}
                            onValueChange={(value) => setFormData({ ...formData, timezone: value })}
                          >
                            <SelectTrigger className="bg-background border-border">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {timezones.map((tz) => (
                                <SelectItem key={tz} value={tz}>{tz}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Time slots */}
                      <div>
                        <Label className="text-foreground mb-3 block">
                          Available Time Slots
                          {formData.preferredDate && (
                            <span className="text-xs text-muted-foreground ml-2">
                              for {new Date(formData.preferredDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                            </span>
                          )}
                        </Label>
                        {!formData.preferredDate ? (
                          <div className="flex items-center justify-center h-48 border-2 border-dashed border-border rounded-xl">
                            <p className="text-sm text-muted-foreground">Select a date first</p>
                          </div>
                        ) : (
                          <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                            {timeSlots.map((slot) => {
                              const booked = isSlotBooked(slot);
                              return (
                                <button
                                  key={slot}
                                  disabled={booked}
                                  onClick={() => setFormData({ ...formData, preferredTime: slot })}
                                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                    booked
                                      ? "bg-muted/50 text-muted-foreground/50 cursor-not-allowed line-through"
                                      : formData.preferredTime === slot
                                      ? "bg-primary text-primary-foreground shadow-glow"
                                      : "bg-background border border-border hover:border-primary/30 text-foreground"
                                  }`}
                                >
                                  {slot}
                                </button>
                              );
                            })}
                          </div>
                        )}
                        {bookedSlots.length > 0 && (
                          <p className="text-xs text-muted-foreground mt-2">
                            <span className="inline-block w-2 h-2 rounded-full bg-muted-foreground/40 mr-1" />
                            Greyed out slots are already booked
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Details */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                      Tell us about yourself
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      We need your contact details to confirm the booking and send you a calendar invite.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                        <div className="relative mt-1.5">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Smith"
                            className="pl-10 bg-background border-border"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                        <div className="relative mt-1.5">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@company.com"
                            className="pl-10 bg-background border-border"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                        <div className="relative mt-1.5">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+1 (555) 123-4567"
                            className="pl-10 bg-background border-border"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-foreground">Company Name</Label>
                        <div className="relative mt-1.5">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Your Company Inc."
                            className="pl-10 bg-background border-border"
                          />
                        </div>
                      </div>
                      <div>
                        <Label className="text-foreground">Team Size</Label>
                        <Select
                          value={formData.teamSize}
                          onValueChange={(value) => setFormData({ ...formData, teamSize: value })}
                        >
                          <SelectTrigger className="mt-1.5 bg-background border-border">
                            <SelectValue placeholder="Select team size" />
                          </SelectTrigger>
                          <SelectContent>
                            {teamSizes.map((size) => (
                              <SelectItem key={size} value={size}>{size}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-foreground">Budget Range</Label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) => setFormData({ ...formData, budget: value })}
                        >
                          <SelectTrigger className="mt-1.5 bg-background border-border">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgets.map((b) => (
                              <SelectItem key={b} value={b}>{b}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Label htmlFor="description" className="text-foreground">Project Description *</Label>
                      <Textarea
                        id="description"
                        required
                        rows={5}
                        value={formData.projectDescription}
                        onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                        placeholder="Tell us about your project, goals, timeline, and any specific challenges you're facing..."
                        className="mt-1.5 bg-background border-border"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        The more detail you provide, the more productive our consultation will be.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Confirm */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                      Review and confirm
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Please review your booking details before submitting.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="glass-card-dark p-5 rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                          <Briefcase className="w-5 h-5 text-primary" />
                          <span className="text-xs text-muted-foreground uppercase tracking-wider">Service</span>
                        </div>
                        <div className="font-medium text-foreground">
                          {services.find((s) => s.id === formData.service)?.label}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Meeting type: {meetingTypes.find((m) => m.id === formData.meetingType)?.label}
                        </div>
                      </div>

                      <div className="glass-card-dark p-5 rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span className="text-xs text-muted-foreground uppercase tracking-wider">Schedule</span>
                        </div>
                        <div className="font-medium text-foreground">
                          {formData.preferredDate && new Date(formData.preferredDate).toLocaleDateString("en-US", {
                            weekday: "long", year: "numeric", month: "long", day: "numeric",
                          })}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {formData.preferredTime} — {formData.timezone}
                        </div>
                      </div>

                      <div className="glass-card-dark p-5 rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                          <User className="w-5 h-5 text-primary" />
                          <span className="text-xs text-muted-foreground uppercase tracking-wider">Contact Details</span>
                        </div>
                        <div className="font-medium text-foreground">{formData.name}</div>
                        <div className="text-sm text-muted-foreground">{formData.email}</div>
                        {formData.phone && <div className="text-sm text-muted-foreground">{formData.phone}</div>}
                        {formData.company && <div className="text-sm text-muted-foreground">{formData.company}</div>}
                      </div>

                      {formData.projectDescription && (
                        <div className="glass-card-dark p-5 rounded-xl">
                          <div className="flex items-center gap-3 mb-2">
                            <FileText className="w-5 h-5 text-primary" />
                            <span className="text-xs text-muted-foreground uppercase tracking-wider">Project Description</span>
                          </div>
                          <p className="text-sm text-foreground leading-relaxed">{formData.projectDescription}</p>
                        </div>
                      )}
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10 mb-6">
                      <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        By submitting, you agree to our terms. Your information is kept
                        confidential and will only be used to prepare for your consultation.
                        We never share your data with third parties.
                      </p>
                    </div>

                    {error && (
                      <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 mb-6">
                        <p className="text-sm text-destructive">{error}</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  disabled={step === 1 || submitting}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>

                {step < 4 ? (
                  <Button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="btn-primary"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="btn-primary"
                  >
                    {submitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <CalendarCheck className="w-4 h-4 mr-2" />
                        Confirm Booking
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 border-t border-border bg-muted/20">
          <div className="container-custom max-w-3xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-4">
                FAQ
              </span>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Booking Questions
              </h2>
              <p className="text-muted-foreground">
                Everything you need to know about booking a consultation with us.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact alternative */}
        <section className="py-20">
          <div className="container-custom max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Prefer to reach us directly?
              </h2>
              <p className="text-muted-foreground mb-8">
                No problem. Contact us through any of these channels and we'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:hello@nexusdigital.io">
                  <Button size="lg" className="btn-primary">
                    <Mail className="w-5 h-5 mr-2" />
                    hello@nexusdigital.io
                  </Button>
                </a>
                <a href="tel:+15551234567">
                  <Button size="lg" variant="outline" className="btn-outline">
                    <Phone className="w-5 h-5 mr-2" />
                    +1 (555) 123-4567
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" variant="ghost" className="btn-ghost">
                    Contact Form
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
