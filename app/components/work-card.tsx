"use client";

import { motion } from "framer-motion";

type WorkCardProps = {
  accent: string;
  category: string;
  description: string;
  gradient: string;
  index: number;
  metric: string;
  title: string;
};

export function WorkCard({
  accent,
  category,
  description,
  gradient,
  index,
  metric,
  title,
}: WorkCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group border border-white/14 bg-[#171717] transition duration-300 hover:-translate-y-1 hover:border-white/36 hover:shadow-[0_0_40px_rgba(214,255,107,0.08)]"
    >
      <div className="p-3">
        <div
          className={`relative aspect-[9/16] overflow-hidden bg-gradient-to-br ${gradient}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.28),transparent_24%),linear-gradient(to_top,rgba(0,0,0,0.72),transparent_55%)]" />
          <div className="absolute left-4 top-4 border border-black/20 bg-black/20 px-3 py-2 text-xs uppercase tracking-[0.16em] text-black/70 backdrop-blur-sm">
            {metric}
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="h-16 border border-white/20 bg-black/30 backdrop-blur-sm transition duration-300 group-hover:scale-[1.02]" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/12 p-5">
        <p
          className="text-xs uppercase tracking-[0.18em]"
          style={{ color: accent }}
        >
          {category}
        </p>
        <h3 className="mt-3 text-2xl font-normal text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/55">{description}</p>
      </div>
    </motion.article>
  );
}
