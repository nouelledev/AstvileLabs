"use client";

import { motion } from "framer-motion";

type EngagementCardProps = {
  accent: string;
  description: string;
  features: string[];
  index: number;
  label: string;
  mostRequested?: boolean;
  scope: string;
  timeline: string;
  title: string;
};

export function EngagementCard({
  accent,
  description,
  features,
  index,
  label,
  mostRequested,
  scope,
  timeline,
  title,
}: EngagementCardProps) {
  function handleContactClick() {
    const engagementSummary = [
      `I'm interested in the ${title} engagement.`,
      "",
      `Engagement: ${title}`,
      `Best fit: ${scope}`,
      `Working rhythm: ${timeline}`,
      "",
      "What I need:",
      ...features.map((feature) => `- ${feature}`),
      "",
      "I will add my product details, goals, and creative direction here.",
    ].join("\n");

    window.dispatchEvent(
      new CustomEvent("astvilelabs:prefill-contact", {
        detail: {
          budgetRange: "Let's discuss scope",
          message: engagementSummary,
          timeline,
          videoLength: "To be scoped",
        },
      }),
    );

    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex min-h-[430px] overflow-hidden border border-white/12 bg-white/[0.045] shadow-[0_30px_120px_rgba(0,0,0,0.3)] backdrop-blur transition duration-500 hover:-translate-y-1.5 hover:border-white/34 hover:bg-white/[0.065]"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-70 transition duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        }}
      />
      <div
        className="pointer-events-none absolute -right-16 -top-20 size-44 rounded-full opacity-20 blur-3xl transition duration-500 group-hover:opacity-35"
        style={{ backgroundColor: accent }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 size-16 border-r border-t opacity-60 transition duration-500 group-hover:opacity-100"
        style={{ borderColor: accent }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 [background:linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.08)_42%,transparent_58%)]" />

      <div className="relative flex w-full flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p
              className="text-xs uppercase tracking-[0.22em]"
              style={{ color: accent }}
            >
              {label}
            </p>
            {mostRequested ? (
              <span className="mt-2 inline-flex border border-white/16 bg-white/8 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/78">
                Most Requested
              </span>
            ) : null}
          </div>
          <span className="text-sm text-white/34">0{index + 1}</span>
        </div>

        <div className="mt-6">
          <h3 className="max-w-[12ch] text-[1.7rem] font-normal leading-none text-white">
            {title}
          </h3>
          <p className="mt-4 text-sm leading-5 text-white/58">{description}</p>
        </div>

        <div className="mt-5 border-y border-white/10 py-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/38">
            Best for
          </p>
          <p className="mt-2 text-sm leading-5 text-white/76">{scope}</p>
        </div>

        <ul className="mt-5 space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex gap-3 text-sm leading-5 text-white/68">
              <span style={{ color: accent }}>+</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="flex items-center gap-3 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.16em] text-white/48">
            <span
              className="size-2 rounded-full"
              style={{ backgroundColor: accent }}
            />
            {timeline}
          </div>
          <button
            type="button"
            onClick={handleContactClick}
            className="mt-4 h-11 w-full border border-white/14 bg-white/[0.045] text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-white/36 hover:bg-white hover:text-[#101010] hover:shadow-[0_18px_50px_rgba(255,255,255,0.1)]"
          >
            Start With This
          </button>
        </div>
      </div>
    </motion.article>
  );
}
