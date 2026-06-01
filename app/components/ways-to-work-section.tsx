import { EngagementCard } from "./engagement-card";

const engagements = [
  {
    accent: "#d6ff6b",
    label: "FOCUSED BUILD",
    title: "Creative Sprint",
    description:
      "A sharp, fast-moving engagement for turning one offer or campaign moment into scroll-stopping AI creative.",
    scope: "A launch, a product push, or a focused paid-social test.",
    features: [
      "One clear campaign brief",
      "Hook-first creative direction",
      "Platform-ready ad assets",
      "Fast review and delivery loop",
    ],
    timeline: "Short project window",
  },
  {
    accent: "#87f7ff",
    label: "CAMPAIGN BUILD",
    title: "Ad Creative System",
    description:
      "A broader campaign engagement built to give your team more concepts, formats, and room to test what lands.",
    scope: "Brands ready to test multiple angles across a campaign.",
    features: [
      "Multiple creative routes",
      "Reusable hooks and concepts",
      "Format and length variations",
      "Iteration around campaign goals",
    ],
    timeline: "Scoped campaign rollout",
    mostRequested: true,
  },
  {
    accent: "#ff7a59",
    label: "ONGOING SUPPORT",
    title: "Creative Partner",
    description:
      "An ongoing collaboration for teams that need a steady creative arm for launches, experiments, and fresh ads.",
    scope: "Recurring campaigns and teams building a repeatable ad rhythm.",
    features: [
      "Ongoing creative direction",
      "Priority production planning",
      "Regular testing batches",
      "A system that learns your brand",
    ],
    timeline: "Ongoing collaboration",
  },
];

const scopeFactors = [
  {
    label: "01 / Brief",
    detail: "Offer, audience, and goal",
  },
  {
    label: "02 / Output",
    detail: "Concepts, formats, and volume",
  },
  {
    label: "03 / Rhythm",
    detail: "One launch or ongoing testing",
  },
];

export function WaysToWorkSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-white/12 bg-[#101010] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      aria-labelledby="services-heading"
    >
      <div className="pointer-events-none absolute left-[-12rem] top-20 size-[34rem] rounded-full bg-[#d6ff6b]/7 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-16rem] right-[-10rem] size-[36rem] rounded-full bg-[#87f7ff]/6 blur-3xl" />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#d6ff6b]">
              Ways to work together
            </p>
            <h2
              id="services-heading"
              className="mt-3 max-w-[13ch] text-4xl font-normal leading-none tracking-normal text-white sm:text-5xl lg:text-[3.4rem]"
            >
              The right creative setup depends on the job.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-sm leading-6 text-white/62 sm:text-base">
              Start with the outcome, not a fixed package. Every engagement is
              shaped around your brief, campaign goals, and the creative volume
              your team actually needs.
            </p>
            <div className="mt-6 grid gap-px border border-white/12 bg-white/12 sm:grid-cols-3">
              {scopeFactors.map((factor) => (
                <div key={factor.label} className="bg-[#151515] p-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/42">
                    {factor.label}
                  </p>
                  <p className="mt-2 text-sm leading-5 text-white/72">
                    {factor.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {engagements.map((engagement, index) => (
            <EngagementCard
              key={engagement.title}
              index={index}
              {...engagement}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
