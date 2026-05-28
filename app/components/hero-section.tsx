"use client";

import { motion } from "framer-motion";
import { ShowcasePanel } from "./showcase-panel";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[calc(100svh-4rem)] scroll-mt-16 overflow-hidden border-b border-white/12 bg-[#101010]"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute left-[-18rem] top-[-18rem] size-[38rem] rounded-full bg-[#d6ff6b]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-20rem] right-[-16rem] size-[42rem] rounded-full bg-[#87f7ff]/8 blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-7xl grid-cols-1 gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col justify-center gap-8 py-2 lg:py-7"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#d6ff6b]">
              AI AD CREATIVE STUDIO
            </p>
            <h1
              id="hero-heading"
              className="mt-5 max-w-[11ch] text-6xl font-normal leading-[0.9] tracking-normal text-white sm:text-7xl lg:text-8xl"
            >
              Performance-driven AI ads for modern brands.
            </h1>
          </div>

          <div className="space-y-6">
            <p className="max-w-2xl text-pretty text-lg leading-8 text-white/72 sm:text-xl sm:leading-9">
              UGC-style AI commercials, TikTok ad creatives, and cinematic
              product videos built for fast testing and scalable campaigns.
            </p>
            <p className="max-w-xl border-l border-[#d6ff6b]/45 pl-4 text-sm uppercase tracking-[0.16em] text-white/48">
              Built for ecommerce, beauty, wellness, and digital-first brands.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center border border-[#d6ff6b]/55 px-6 text-sm font-medium text-white transition hover:border-[#d6ff6b] hover:bg-[#d6ff6b] hover:text-[#101010]"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center border border-white/18 px-6 text-sm font-medium text-white/72 transition hover:border-white/45 hover:text-white"
            >
              Book Project
            </a>
          </div>
        </motion.div>

        <div className="relative flex w-full items-center lg:w-[calc(100%+15px)]">
          <ShowcasePanel />
        </div>
      </div>
    </section>
  );
}
