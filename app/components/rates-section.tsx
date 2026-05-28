import { PricingSlider } from "./pricing-slider";

const packages = [
  {
    accent: "#d6ff6b",
    label: "FAST TESTING",
    title: "30 Second Ads",
    description:
      "Short-form AI ads optimized for hooks, paid testing, and quick iterations.",
    features: [
      "1 AI ad creative",
      "Vertical format",
      "Caption-ready pacing",
      "Hook-first editing",
      "48h turnaround",
    ],
    price: "$50-$80",
    productionTime: "48h production window",
    scriptFee: "+ $30",
  },
  {
    accent: "#87f7ff",
    label: "CORE CREATIVE",
    title: "60 Second Ads",
    description:
      "More developed ad storytelling with stronger pacing and audience retention.",
    features: [
      "Extended ad structure",
      "Product-focused storytelling",
      "Voiceover timing",
      "Advanced transitions",
      "Multi-scene editing",
    ],
    price: "$90-$150",
    productionTime: "48-72h production window",
    scriptFee: "+ $50",
    mostRequested: true,
  },
  {
    accent: "#ff7a59",
    label: "FULL COMMERCIAL",
    title: "120 Second Ads",
    description:
      "Long-form cinematic AI commercial production for launches and hero campaigns.",
    features: [
      "Cinematic pacing",
      "Full narrative structure",
      "Multiple scenes",
      "Enhanced visual polish",
      "Platform optimization",
    ],
    price: "$180-$300",
    productionTime: "3-5 day production window",
    scriptFee: "+ $100",
  },
  {
    accent: "#ffffff",
    label: "SCALE SYSTEM",
    title: "Custom Campaign",
    description:
      "Creative systems for scaling brands, media buying teams, and ongoing campaigns.",
    features: [
      "Multi-ad batches",
      "Creative direction",
      "Hook testing systems",
      "Multiple formats",
      "Long-term collaboration",
    ],
    price: "Custom Quote",
    productionTime: "Timeline scoped by campaign",
    scriptFee: "Based on length",
  },
];

export function RatesSection() {
  return (
    <section
      id="rates"
      className="relative flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center overflow-hidden border-b border-white/12 bg-[#101010] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-8"
      aria-labelledby="rates-heading"
    >
      <div className="pointer-events-none absolute left-[-12rem] top-20 size-[34rem] rounded-full bg-[#d6ff6b]/7 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-16rem] right-[-10rem] size-[36rem] rounded-full bg-[#87f7ff]/6 blur-3xl" />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#d6ff6b]">
              Pricing
            </p>
            <h2
              id="rates-heading"
              className="mt-3 max-w-[12ch] text-4xl font-normal leading-none tracking-normal text-white sm:text-5xl lg:text-[3.4rem]"
            >
              Creative systems for scalable ads.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-6 text-white/62 sm:text-base">
              Flexible production systems for brands that need fast,
              high-performing AI creative.
            </p>

            <div className="relative mt-6 overflow-hidden border border-white/12 bg-white/[0.035] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,255,107,0.12),transparent_36%)]" />
              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/52">
                  Scripting fee notice
                </p>
                <p className="mt-2 text-sm leading-5 text-white/66">
                  If client does not provide script: +$30 for 30 sec, +$50 for
                  60 sec, +$100 for 120 sec. Custom lengths are priced based on
                  duration.
                </p>
              </div>
            </div>
          </div>

          <PricingSlider packages={packages} />
        </div>
      </div>
    </section>
  );
}
