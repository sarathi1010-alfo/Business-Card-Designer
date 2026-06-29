"use client";

import { motion } from "framer-motion";
import { CheckCircle2, QrCode, LayoutTemplate, BarChart3 } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Clean Premium UI",
    description: "Glassmorphism, fluid animations, and perfect typography tailored for modern professionals.",
    icon: <LayoutTemplate className="w-6 h-6 text-primary" />,
  },
  {
    title: "Smart QR Codes",
    description: "Dynamic QR generation that works anywhere and tracks analytics for every scan.",
    icon: <QrCode className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Advanced Analytics",
    description: "Detailed insights into who views your card, what they click, and where they come from.",
    icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Premium Templates",
    description: "High-converting templates built for founders, creators, and business professionals.",
    icon: <CheckCircle2 className="w-6 h-6 text-amber-500" />,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 bg-muted/10 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6 font-heading"
          >
            Everything you need to <span className="text-primary">stand out.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A carefully crafted suite of tools designed to elevate your professional digital presence. Check out our <Link href="/blog/digital-business-card-guide" className="text-primary hover:underline font-medium">guide on creating high-converting digital cards</Link>.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-background/50 border flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
