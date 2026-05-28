"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const adSamples = [
  {
    accent: "#d6ff6b",
    category: "UGC Hook",
    href: "https://drive.google.com/file/d/1gLdKZMnVLwne-Il9_DK17nCFnV0lnkqH/view?usp=drivesdk",
    image: "/projects/50-off-ads.jpg",
    metric: "CTR winner",
    summary: "Urgency-led offer creative built around a fast sale hook.",
    title: "Offer hook test",
  },
  {
    accent: "#ff7a59",
    category: "Beauty Ad",
    href: "https://drive.google.com/file/d/1AG0O0i3DEeXOOmhJEKq5sNrZPrC3YsH4/view?usp=drivesdk",
    image: "/projects/hanae-korea.jpg",
    metric: "Beauty spot",
    summary: "Creator-style beauty sequence with product authority and soft glam pacing.",
    title: "Beauty creator spot",
  },
  {
    accent: "#87f7ff",
    category: "Product Demo",
    href: "https://drive.google.com/file/d/1z4cOolujwvpXuI15H97T3dj9ntwhwpMQ/view?usp=drivesdk",
    image: "/projects/miss-actually.jpg",
    metric: "Hook-first",
    summary: "Question-led demo angle designed for native TikTok response behavior.",
    title: "Comment response ad",
  },
  {
    accent: "#f8c572",
    category: "AI Character",
    href: "https://drive.google.com/file/d/1rx9PCn3XOXhROgCaT6XxddOY-IssWeZP/view?usp=drivesdk",
    image: "/projects/song-ads-1.jpg",
    metric: "3.1M views",
    summary: "Animated skincare metaphor with a clear problem/solution setup.",
    title: "Animated skincare hook",
  },
  {
    accent: "#b9ff9b",
    category: "Beauty Ad",
    href: "https://drive.google.com/file/d/1pgUBhPq-KzHP2lcI228LNnsfl-oM38VT/view?usp=drivesdk",
    image: "/projects/song-ads-2.jpg",
    metric: "Paid social",
    summary: "Mirror-shot product scene built for short-form retention.",
    title: "Mirror moment creative",
  },
  {
    accent: "#bca0ff",
    category: "AI Character",
    href: "https://drive.google.com/file/d/1Kl_1XuwjWjE2XIfb_699wLg8l2IcIp0z/view?usp=drivesdk",
    image: "/projects/talking-fruit-ads.jpg",
    metric: "Story format",
    summary: "Character-led concept for memorable product storytelling.",
    title: "Character story ad",
  },
];

export function ShowcasePanel() {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = adSamples[selectedIndex];
  const playerUrl = getDrivePreviewUrl(selected.href);

  useEffect(() => {
    if (!isPlayerOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsPlayerOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlayerOpen]);

  return (
    <>
      <motion.div
        id="projects"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full overflow-hidden border border-white/14 bg-[#171717] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)] sm:p-6"
      >
        <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative flex h-full min-h-[620px] flex-col gap-4">
          <div className="flex items-center justify-between border-b border-white/12 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                Live AI ad showcase
              </p>
              <h2 className="mt-2 text-2xl font-normal text-white sm:text-3xl">
                Hook-first creative samples
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsPlayerOpen(true)}
              className="hidden border px-3 py-2 text-xs uppercase tracking-[0.16em] transition hover:text-[#101010] sm:block"
              style={{
                borderColor: `${selected.accent}66`,
                color: selected.accent,
              }}
            >
              Open Reel
            </button>
          </div>

          <div className="grid flex-1 gap-4 lg:grid-cols-[minmax(275px,0.95fr)_1fr]">
            <motion.button
              type="button"
              onClick={() => setIsPlayerOpen(true)}
              whileHover={{ scale: 1.012 }}
              transition={{ duration: 0.25 }}
              className="group relative mx-auto aspect-[9/16] h-full min-h-[440px] w-full max-w-[410px] overflow-hidden border border-white/16 bg-[#0f0f0f] text-left"
              aria-label="Open selected AI ad reel"
            >
              <Image
                key={selected.image}
                src={selected.image}
                alt={`${selected.category} preview`}
                fill
                priority={selectedIndex === 0}
                sizes="(min-width: 1024px) 28vw, 90vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/22 to-black/5" />
              <div className="absolute inset-x-5 top-5 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/72">
                <span>{selected.category}</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p
                  className="mb-3 text-xs uppercase tracking-[0.18em]"
                  style={{ color: selected.accent }}
                >
                  Selected work
                </p>
                <p className="text-base leading-7 text-white/78">
                  {selected.summary}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/44">
                  Click preview to play reel
                </p>
              </div>
            </motion.button>

            <div className="grid max-h-[580px] gap-3 overflow-y-auto pr-1">
              {adSamples.map((item, index) => {
                const isSelected = index === selectedIndex;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.2 + index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group overflow-hidden border bg-[#111111]/88 transition duration-300 hover:bg-[#191919]"
                    style={{
                      borderColor: isSelected
                        ? item.accent
                        : "rgba(255,255,255,0.14)",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedIndex(index)}
                      className="grid w-full grid-cols-[94px_1fr] text-left sm:grid-cols-[118px_1fr]"
                      aria-pressed={isSelected}
                    >
                      <div className="relative min-h-[126px] overflow-hidden bg-black">
                        <Image
                          src={item.image}
                          alt={`${item.category} preview`}
                          fill
                          sizes="140px"
                          className="object-cover transition duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex min-w-0 items-center justify-between gap-4 p-4">
                        <div className="min-w-0">
                          <p
                            className="text-xs uppercase tracking-[0.18em]"
                            style={{ color: item.accent }}
                          >
                            {item.category}
                          </p>
                          <h3 className="mt-2 truncate text-lg font-normal text-white">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-5 text-white/52">
                            {item.metric}
                          </p>
                        </div>
                        <p className="shrink-0 text-sm text-white/45">
                          0{index + 1}
                        </p>
                      </div>
                    </button>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isPlayerOpen ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="AI ad reel player"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] grid place-items-center bg-black/82 px-4 py-8 backdrop-blur-md"
            onClick={() => setIsPlayerOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-[460px] border border-white/16 bg-[#101010] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.65)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsPlayerOpen(false)}
                className="absolute right-3 top-3 z-10 grid size-9 place-items-center border border-white/14 bg-black/70 text-sm text-white transition hover:bg-white hover:text-[#101010]"
                aria-label="Close video player"
              >
                X
              </button>
              <div className="aspect-[9/16] overflow-hidden border border-white/10 bg-black">
                <iframe
                  key={playerUrl}
                  src={playerUrl}
                  title="AI ad reel player"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="size-full"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function getDrivePreviewUrl(href: string) {
  const fileId = href.match(/\/d\/([^/]+)/)?.[1];

  return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : href;
}
