"use client";

import { motion } from "framer-motion";

type PricingCardProps = {
  accent: string;
  compact?: boolean;
  description: string;
  features: string[];
  index: number;
  label: string;
  mostRequested?: boolean;
  price: string;
  productionTime: string;
  scriptFee: string;
  title: string;
};

export function PricingCard({
  accent,
  compact = false,
  description,
  features,
  index,
  label,
  mostRequested,
  price,
  productionTime,
  scriptFee,
  title,
}: PricingCardProps) {
  function handleContactClick() {
    const packageSummary = [
      `I'm interested in the ${title} package.`,
      "",
      `Package: ${title}`,
      `Budget range: ${price}`,
      `Production window: ${productionTime}`,
      `Scripting add-on: ${scriptFee}`,
      "",
      "Included:",
      ...features.map((feature) => `- ${feature}`),
      "",
      "I will add my product details and any creative direction here.",
    ].join("\n");

    window.dispatchEvent(
      new CustomEvent("astvilelabs:prefill-contact", {
        detail: {
          budgetRange: price,
          message: packageSummary,
          timeline: productionTime,
          videoLength: title,
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
      className={`group relative flex overflow-hidden border border-white/12 bg-white/[0.045] shadow-[0_30px_120px_rgba(0,0,0,0.3)] backdrop-blur transition duration-500 hover:-translate-y-1.5 hover:border-white/34 hover:bg-white/[0.065] ${
        compact ? "min-h-[365px] sm:min-h-[380px]" : "min-h-[520px]"
      }`}
      style={{
        boxShadow: `0 30px 120px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)`,
      }}
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

      <div className={`relative flex w-full flex-col ${compact ? "p-4 sm:p-5" : "p-6 sm:p-7"}`}>
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

        <div className={compact ? "mt-4" : "mt-10"}>
          <h3
            className={`font-normal leading-none text-white ${
              compact ? "text-2xl sm:text-[1.7rem]" : "text-3xl sm:text-4xl"
            }`}
          >
            {title}
          </h3>
          <p
            className={`mt-4 font-normal leading-none text-white ${
              compact
                ? "text-[clamp(2.1rem,7vw,3.05rem)]"
                : "text-[clamp(2.5rem,7vw,4.5rem)]"
            }`}
          >
            {price}
          </p>
          <p className={`${compact ? "mt-3 leading-5" : "mt-4 leading-6"} max-w-md text-sm text-white/58`}>
            {description}
          </p>
        </div>

        <div className={`${compact ? "mt-4 py-2.5" : "mt-7 py-4"} flex items-center gap-3 border-y border-white/10 text-xs uppercase tracking-[0.16em] text-white/48`}>
          <span
            className="size-2 rounded-full"
            style={{ backgroundColor: accent }}
          />
          {productionTime}
        </div>

        <ul className={compact ? "mt-4 space-y-1.5" : "mt-6 space-y-3"}>
          {features.map((feature) => (
            <li key={feature} className={`flex gap-3 text-sm text-white/68 ${compact ? "leading-5" : "leading-6"}`}>
              <span style={{ color: accent }}>+</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className={compact ? "mt-auto pt-4" : "mt-auto pt-8"}>
          <div className={`${compact ? "p-3" : "p-4"} grid grid-cols-[1fr_auto] items-center gap-4 border border-white/12 bg-black/20 transition duration-300 group-hover:border-white/22`}>
            <div>
              <p className="text-sm text-white">Need scripting?</p>
              <p className="mt-1 text-xs leading-4 text-white/48">
                Add-on when no script is provided.
              </p>
            </div>
            <p className={`${compact ? "text-base" : "text-lg"} text-white`} style={{ color: accent }}>
              {scriptFee}
            </p>
          </div>
          <button
            type="button"
            onClick={handleContactClick}
            className={`${compact ? "mt-3 h-11" : "mt-4 h-12"} w-full border border-white/14 bg-white/[0.045] text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-white/36 hover:bg-white hover:text-[#101010] hover:shadow-[0_18px_50px_rgba(255,255,255,0.1)]`}
          >
            Contact About This
          </button>
        </div>
      </div>
    </motion.article>
  );
}
