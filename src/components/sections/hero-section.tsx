"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Jersey } from "@/components/ui/jersey";
import { revealUp, staggerContainer } from "@/lib/motion";

type HeroSectionProps = {
  name: string;
  number: string;
};

export function HeroSection({ name, number }: HeroSectionProps) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-united-black px-5 py-6 text-white sm:px-8 lg:px-10">
      <div
        className="absolute inset-0 -z-20 bg-pitch bg-[length:72px_72px] opacity-35"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_64%_30%,rgba(218,41,28,0.32),transparent_26rem),linear-gradient(135deg,rgba(255,255,255,0.09),transparent_34%),linear-gradient(180deg,transparent,rgba(0,0,0,0.92))]"
        aria-hidden="true"
      />
      <div
        className="absolute left-0 right-0 top-0 h-1 origin-left bg-united-red shadow-aura animate-pulse-line"
        aria-hidden="true"
      />

      <nav className="mx-auto flex max-w-7xl items-center justify-between py-2" aria-label="Main navigation">
        <a href="#home" className="font-condensed text-xl font-bold uppercase tracking-[0.18em] text-white">
          United Systems
        </a>
        <div className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          <a className="transition hover:text-white" href="#work">Work</a>
          <a className="transition hover:text-white" href="#writing">Writing</a>
          <a className="transition hover:text-white" href="#labs">AI & Labs</a>
        </div>
      </nav>

      <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-10 py-10 lg:grid-cols-[1fr_0.82fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={revealUp}
            className="mb-5 inline-flex rounded-full border border-united-gold/35 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-united-gold backdrop-blur-xl"
          >
            Match-day engineering for product systems
          </motion.p>

          <motion.h1
            variants={revealUp}
            className="font-condensed text-[clamp(4.2rem,13vw,11rem)] font-bold uppercase leading-[0.82] text-white"
          >
            Build Fast.
            <span className="block text-united-red">Play Bold.</span>
          </motion.h1>

          <motion.p
            variants={revealUp}
            className="mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-lg"
          >
            A premium developer portfolio for production-grade software, technical writing,
            and AI experiments, wrapped in a refined Old Trafford-inspired visual system.
          </motion.p>

          <motion.div variants={revealUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button aria-label="View software projects">View Work</Button>
            <Button variant="ghost" aria-label="Open AI experiments">
              AI Labs
            </Button>
          </motion.div>

          <motion.div
            variants={revealUp}
            className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-white/10 pt-6"
            aria-label="Portfolio highlights"
          >
            {[
              ["12+", "Shipped builds"],
              ["99", "Perf score aim"],
              ["AI", "Lab systems"]
            ].map(([value, label]) => (
              <div key={label}>
                <div className="font-condensed text-3xl font-bold text-white">{value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          className="relative"
        >
          <div className="absolute inset-8 rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-gold backdrop-blur-2xl" />
          <div className="absolute inset-x-12 top-10 h-24 rounded-full bg-united-gold/20 blur-3xl" aria-hidden="true" />
          <Jersey name={name} number={number} />
        </motion.div>
      </div>
    </section>
  );
}
