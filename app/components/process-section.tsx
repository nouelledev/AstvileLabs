"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";

const steps = [
  {
    number: "01",
    title: "Strategy",
    body: "Assesment , Scripting , Gather materials.",
  },
  {
    number: "02",
    title: "AI Production",
    body: "Visual generation, and creative assembly.",
  },
  {
    number: "03",
    title: "Edit & Polish",
    body: "Captions, pacing, sound design, and platform formatting.",
  },
  {
    number: "04",
    title: "Delivery",
    body: "Export-ready assets for TikTok, Reels, Shorts, and paid campaigns.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative scroll-mt-16 overflow-hidden border-b border-white/12 bg-[#111111] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      aria-labelledby="process-heading"
    >
      <div className="pointer-events-none absolute left-[-16rem] bottom-[-18rem] size-[38rem] rounded-full bg-[#87f7ff]/8 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          accent="#87f7ff"
          eyebrow="Process"
          headingId="process-heading"
          title="From offer to finished ad."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="min-h-64 border border-white/14 bg-[#171717] p-6 transition duration-300 hover:border-white/32 hover:bg-[#1b1b1b]"
            >
              <p className="text-sm text-[#87f7ff]">{step.number}</p>
              <h3 className="mt-8 text-2xl font-normal text-white">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-white/56">{step.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
