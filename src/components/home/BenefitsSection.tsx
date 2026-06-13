"use client";

import { motion } from "framer-motion";
import { Share2, Briefcase, Zap } from "lucide-react";

const benefits = [
  {
    icon: <Share2 className="w-8 h-8 text-primary" />,
    title: "Share your identity instantly",
    description: "One click, one link, or one QR scan is all it takes to share your complete professional portfolio and contact details.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-blue-500" />,
    title: "Look professional online",
    description: "First impressions matter. Elevate your status with a premium, meticulously designed digital presence that builds immediate trust.",
  },
  {
    icon: <Zap className="w-8 h-8 text-amber-500" />,
    title: "Replace boring resumes",
    description: "Stand out from the stack of static PDFs. A dynamic brand card showcases your personality and skills in a modern, interactive format.",
  }
];

export function BenefitsSection() {
  return (
    <section className="py-24 px-4 bg-background border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 font-heading">
            More than just a business card. <br className="hidden md:block" />
            <span className="text-muted-foreground">It&apos;s your digital identity.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-muted/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-6 shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
