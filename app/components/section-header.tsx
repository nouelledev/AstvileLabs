type SectionHeaderProps = {
  accent?: string;
  align?: "left" | "center";
  eyebrow: string;
  headingId?: string;
  subtitle?: string;
  title: string;
};

export function SectionHeader({
  accent = "#d6ff6b",
  align = "left",
  eyebrow,
  headingId,
  subtitle,
  title,
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className="text-sm uppercase tracking-[0.24em]"
        style={{ color: accent }}
      >
        {eyebrow}
      </p>
      <h2
        id={headingId}
        className="mt-4 text-4xl font-normal leading-none tracking-normal text-white sm:text-5xl lg:text-6xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/58 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
