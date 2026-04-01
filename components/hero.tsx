"use client";

import { motion } from "framer-motion";
import { Logo } from "./logo";

const float = {
  y: [0, -10, 0],
  transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-24 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-mesh-glow" />
      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-7">
          <p className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
            Digital Growth Systems
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            We Build Digital Systems That <span className="gradient-text">Transform Businesses</span>
          </h1>
          <p className="max-w-2xl text-lg text-white/75">
            DELTART combines premium design, high-performance engineering, and conversion strategy to elevate perception,
            automate execution, and create measurable growth.
          </p>
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Fancy in perception, disciplined in execution.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-white px-7 py-3 font-medium text-base text-black transition hover:bg-violet-100">
              Start Your Transformation
            </a>
            <a
              href="#work"
              className="rounded-full border border-white/25 px-7 py-3 font-medium text-white/90 transition hover:border-violet-300 hover:bg-white/5"
            >
              View Results
            </a>
          </div>
        </div>

        <div className="relative">
          <motion.div animate={float} className="glass-panel relative p-7 shadow-glow">
            <div className="mb-8 flex items-center justify-between">
              <Logo compact />
              <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs text-violet-100">Live System Snapshot</span>
            </div>
            <div className="space-y-4 text-sm text-white/80">
              <div className="glass-panel p-4">
                <p className="text-white">Website Performance</p>
                <p className="mt-2 text-2xl font-semibold">98 / 100</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-panel p-4">
                  <p className="text-xs text-white/60">CVR Uplift</p>
                  <p className="text-xl font-semibold">+31%</p>
                </div>
                <div className="glass-panel p-4">
                  <p className="text-xs text-white/60">Ops Time Saved</p>
                  <p className="text-xl font-semibold">14 hrs/wk</p>
                </div>
              </div>
            </div>
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-violet-500/30 blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
