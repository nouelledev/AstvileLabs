"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    answer:
      "Yes. Final videos are prepared for paid social use, organic posts, landing pages, and campaign testing. Usage can be scoped further for custom campaigns.",
    question: "Can I use these videos for ads?",
  },
  {
    answer:
      "Yes. You can provide a finished script, or I can add scripting based on your offer, audience, product notes, and desired angle.",
    question: "Do you offer scripts?",
  },
  {
    answer:
      "Most short ads start around 48 hours after the brief is complete. Longer videos and custom campaigns are scheduled based on length, feedback, and production scope.",
    question: "How long does it take to get my video?",
  },
  {
    answer:
      "Yes. You can share direction for the avatar's age range, gender presentation, style, and ethnicity so the creative fits your brand and audience.",
    question: "Can I choose the avatar's age, gender, or ethnicity?",
  },
  {
    answer:
      "Send your product or offer details, brand assets, preferred style, video length, platform, and any script or references you already have.",
    question: "What do I need to send you to get started?",
  },
  {
    answer:
      "Videos can be formatted for TikTok, Instagram Reels, YouTube Shorts, Meta ads, and other vertical short-form placements.",
    question: "What platforms are the videos optimized for?",
  },
  {
    answer:
      "Voiceover can be AI-generated, client-provided, or directed around a specific tone such as natural UGC, cinematic, energetic, calm, or premium editorial.",
    question: "What kind of voiceover do you use?",
  },
  {
    answer:
      "If something feels off, revisions are handled based on the agreed scope so the final video aligns with the brief, pacing, and platform goal.",
    question: "What if I'm not satisfied with the video?",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden border-b border-white/12 bg-[#101010] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="pointer-events-none absolute right-[-16rem] top-10 size-[34rem] rounded-full bg-[#d6ff6b]/6 blur-3xl" />
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm uppercase tracking-[0.24em] text-[#d6ff6b]">
            FAQ
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-normal leading-none text-white sm:text-5xl">
            A few things clients usually ask.
          </h2>
        </motion.div>

        <div className="mt-10 border-t border-white/12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: index * 0.03,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-white/12"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="group flex w-full items-center justify-between gap-6 py-5 text-left transition hover:text-[#d6ff6b] sm:py-6"
                >
                  <span className="text-base font-medium leading-6 text-white/82 transition group-hover:text-white sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="relative grid size-7 shrink-0 place-items-center border border-white/14 bg-white/[0.035] transition group-hover:border-[#d6ff6b]/55"
                  >
                    <span
                      className={`size-2 border-b border-r border-white/70 transition duration-300 ${
                        isOpen ? "-rotate-135" : "rotate-45"
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pb-6 text-sm leading-7 text-white/58 sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
