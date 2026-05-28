import { SectionHeader } from "./section-header";
import { WorkCard } from "./work-card";

const workItems = [
  {
    accent: "#d6ff6b",
    category: "Beauty Ad",
    description: "A polished product-led spot built around fast visual trust.",
    gradient: "from-[#d6ff6b] via-[#f5f0d3] to-[#2a2a2a]",
    metric: "CTR winner",
    title: "Beauty AI Ad",
  },
  {
    accent: "#ff7a59",
    category: "UGC Hook",
    description: "Problem-first opener for quick paid social angle testing.",
    gradient: "from-[#ff7a59] via-[#ffd69a] to-[#171717]",
    metric: "3 hooks",
    title: "Supplements Hook",
  },
  {
    accent: "#87f7ff",
    category: "UGC Style",
    description: "Platform-native fashion creative with creator pacing.",
    gradient: "from-[#87f7ff] via-[#f7f7f7] to-[#2c2c2c]",
    metric: "Reels ready",
    title: "Fashion UGC",
  },
  {
    accent: "#bca0ff",
    category: "Product Demo",
    description: "A short app value prop translated into scroll-friendly motion.",
    gradient: "from-[#bca0ff] via-[#e7ddff] to-[#151515]",
    metric: "48h draft",
    title: "App Promo",
  },
  {
    accent: "#f8c572",
    category: "Beauty Ad",
    description: "Skincare story arc with a clear before, tension, and payoff.",
    gradient: "from-[#f8c572] via-[#f3d6b3] to-[#30251b]",
    metric: "Hook-first",
    title: "Skincare Reel",
  },
  {
    accent: "#b9ff9b",
    category: "Offer Ad",
    description: "Direct-response fitness offer structured for paid testing.",
    gradient: "from-[#b9ff9b] via-[#e9ffd7] to-[#172117]",
    metric: "Paid social",
    title: "Fitness Offer",
  },
];

export function SelectedWork() {
  return (
    <section
      id="work"
      className="relative scroll-mt-16 overflow-hidden border-b border-white/12 bg-[#101010] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      aria-labelledby="work-heading"
    >
      <div className="pointer-events-none absolute right-[-14rem] top-16 size-[34rem] rounded-full bg-[#d6ff6b]/8 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          accent="#d6ff6b"
          eyebrow="Selected Work"
          headingId="work-heading"
          title="Selected AI ad work."
          subtitle="Short-form creative designed for fast testing, strong hooks, and platform-native storytelling."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workItems.map((item, index) => (
            <WorkCard key={item.title} index={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
