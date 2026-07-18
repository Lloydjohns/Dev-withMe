"use client";

import { Play, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "James Carter",
    role: "CTO",
    company: "CloudFlow Banking",
    duration: "2:34",
    title: "CloudFlow Banking",
    thumbnail: "/testimonials/cloudflow.jpg",
    video: "https://www.youtube.com/embed/VIDEO_ID",
    quote:
      "Nexus Digital rebuilt our entire banking infrastructure in just four months. Today our platform processes over 50 million transactions daily with 99.99% uptime. Their engineering discipline, security-first mindset, and execution exceeded every expectation.",
  },
  {
    id: 2,
    name: "Sarah Lin",
    role: "VP Engineering",
    company: "MedTrack Health",
    duration: "3:12",
    title: "MedTrack",
    thumbnail: "/testimonials/medtrack.jpg",
    video: "https://www.youtube.com/embed/VIDEO_ID",
    quote:
      "The HIPAA-compliant platform delivered by Nexus Digital transformed our operations. Their attention to compliance, security, and architecture allowed us to launch faster while exceeding regulatory requirements.",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "CEO",
    company: "ShopWave",
    duration: "1:58",
    title: "ShopWave",
    thumbnail: "/testimonials/shopwave.jpg",
    video: "https://www.youtube.com/embed/VIDEO_ID",
    quote:
      "We scaled from one hundred thousand users to over one million without rewriting our infrastructure. Nexus engineered a platform that simply works under pressure, even during our biggest sales events.",
  },
];

export default function VideoTestimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm text-primary mb-5">
            Video Testimonials
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hear Directly From Our Clients
          </h2>

          <p className="mt-6 text-muted-foreground text-lg leading-8">
            Watch engineering leaders share how Nexus Digital helped transform
            their infrastructure, accelerate delivery, and build scalable
            enterprise platforms.
          </p>
        </motion.div>

        {/* Videos */}

        <div className="grid gap-10 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-border bg-card overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >

              {/* Video */}

              <div className="relative aspect-video overflow-hidden">
                <iframe
                  src={item.video}
                  title={item.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>

              <div className="p-7">

                <div className="flex items-center justify-between mb-5">

                  <div className="flex items-center gap-2 text-primary">
                    <Play className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium">
                      {item.duration}
                    </span>
                  </div>

                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {item.title}
                  </span>

                </div>

                <Quote className="h-8 w-8 text-primary mb-5" />

                <p className="text-muted-foreground leading-7">
                  "{item.quote}"
                </p>

                <div className="mt-8 border-t border-border pt-6 flex items-center justify-between">

                  <div>

                    <h4 className="font-semibold text-lg">
                      {item.name}
                    </h4>

                    <p className="text-sm text-muted-foreground">
                      {item.role}
                    </p>

                    <p className="text-sm text-primary font-medium">
                      {item.company}
                    </p>

                  </div>

                  <div className="flex">
                    {[1,2,3,4,5].map((star)=>(
                      <Star
                        key={star}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {[
            {
              value: "500+",
              label: "Projects Delivered",
            },
            {
              value: "120+",
              label: "Enterprise Clients",
            },
            {
              value: "98%",
              label: "Client Retention",
            },
            {
              value: "4.9/5",
              label: "Average Rating",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-8 text-center"
            >
              <div className="text-4xl font-bold text-primary">
                {stat.value}
              </div>

              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}