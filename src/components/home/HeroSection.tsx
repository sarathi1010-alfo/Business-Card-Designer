"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40 px-4">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] opacity-30 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] opacity-20 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border text-sm font-medium mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary" />
          Join 500+ professionals building their digital identity
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 font-heading text-balance leading-tight"
        >
          Create professional digital brand cards in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
            30 seconds.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance leading-relaxed"
        >
          Generate modern personal brand cards, portfolio cards, and business identity pages instantly. Replace boring resumes with a premium digital presence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link href="/templates">
            <Button size="lg" className="h-14 px-8 text-lg font-semibold rounded-full shadow-lg shadow-primary/20 w-full sm:w-auto gap-2 group">
              Create Brand Card
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="#showcase">
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold rounded-full w-full sm:w-auto">
              View Examples
            </Button>
          </Link>
        </motion.div>

        {/* Social Proof / Stats Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 pt-8 border-t text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=e2e8f0`} alt="User avatar" width={40} height={40} />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start text-sm">
              <div className="flex gap-1 text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="font-medium text-foreground">Loved by 500+ users</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Users className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-start text-sm">
              <span className="font-bold text-foreground text-lg">12</span>
              <span>Countries used in</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-start text-sm">
              <span className="font-bold text-foreground text-lg">1,240+</span>
              <span>Cards generated</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
