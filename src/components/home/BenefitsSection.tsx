"use client";

import { motion } from "framer-motion";
import { UserPlus, ShieldCheck, LineChart } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: <UserPlus className="w-8 h-8 text-primary" />,
    title: "Lead Generation",
    description: "Capture leads directly from your profile with integrated forms and smart CTAs.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
    title: "Built for Trust",
    description: "Showcase live case studies, testimonials, and verifiable credentials to build immediate trust.",
  },
  {
    icon: <LineChart className="w-8 h-8 text-purple-500" />,
    title: "Smart Analytics",
    description: "Track visitor behavior, scan analytics, and click-through rates in real-time.",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

export function BenefitsSection() {
  return (
    <section className="py-24 px-4 bg-background border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6 font-heading"
          >
            A true <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">conversion engine.</span> <br className="hidden md:block" />
            <span className="text-muted-foreground">Not just a profile page.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4"
          >
            Built on proven strategies from our <Link href="/blog/digital-business-card-guide" className="text-primary hover:underline font-medium">digital business card conversion guide</Link>.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group flex flex-col items-center text-center p-8 rounded-3xl bg-muted/30 border border-border/50 hover:bg-muted/80 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-background border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
