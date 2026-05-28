const proofItems = [
  "50+ AI ad creatives produced",
  "Fast creative delivery",
  "Hook-first creative workflow",
  "Built for paid social testing",
];

export function SocialProofStrip() {
  return (
    <section className="border-b border-white/12 bg-[#111111]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 border-x border-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {proofItems.map((item) => (
          <div
            key={item}
            className="border-b border-white/10 px-5 py-6 text-sm uppercase tracking-[0.16em] text-white/62 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
