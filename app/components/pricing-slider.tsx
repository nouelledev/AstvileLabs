"use client";

import { useRef, useState } from "react";
import { PricingCard } from "./pricing-card";

type PricingPackage = {
  accent: string;
  description: string;
  features: string[];
  label: string;
  mostRequested?: boolean;
  price: string;
  productionTime: string;
  scriptFee: string;
  title: string;
};

type PricingSliderProps = {
  packages: PricingPackage[];
};

export function PricingSlider({ packages }: PricingSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  function scrollToCard(index: number) {
    const nextIndex = Math.min(Math.max(index, 0), packages.length - 1);
    const slider = sliderRef.current;
    const targetCard = cardRefs.current[nextIndex];

    if (!slider || !targetCard) {
      return;
    }

    setActiveIndex(nextIndex);
    slider.scrollTo({
      behavior: "smooth",
      left: targetCard.offsetLeft - slider.offsetLeft,
    });
  }

  function handleScroll() {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const closestIndex = cardRefs.current.reduce((closest, card, index) => {
      if (!card) {
        return closest;
      }

      const currentDistance = Math.abs(card.offsetLeft - slider.scrollLeft);
      const closestCard = cardRefs.current[closest];
      const closestDistance = closestCard
        ? Math.abs(closestCard.offsetLeft - slider.scrollLeft)
        : Number.POSITIVE_INFINITY;

      return currentDistance < closestDistance ? index : closest;
    }, 0);

    setActiveIndex(closestIndex);
  }

  return (
    <div className="mx-auto mt-6 flex max-w-7xl justify-center lg:mt-0">
      <div className="relative">
        <button
          type="button"
          aria-label="Previous pricing package"
          disabled={activeIndex === 0}
          onClick={() => scrollToCard(activeIndex - 1)}
          className="absolute left-0 top-1/2 z-10 grid size-10 -translate-x-3 -translate-y-1/2 place-items-center border border-white/14 bg-[#101010]/90 text-lg leading-none text-white backdrop-blur transition hover:border-white/35 hover:bg-white hover:text-[#101010] disabled:cursor-not-allowed disabled:border-white/8 disabled:text-white/25 disabled:hover:bg-[#101010]/90 disabled:hover:text-white/25 sm:-translate-x-14"
        >
          <span aria-hidden="true">&lt;</span>
        </button>

        <div className="mx-auto w-[min(88vw,430px)]">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {packages.map((item, index) => (
              <div
                key={item.title}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                className="w-full min-w-full snap-start px-1"
              >
                <PricingCard compact index={index} {...item} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Next pricing package"
          disabled={activeIndex === packages.length - 1}
          onClick={() => scrollToCard(activeIndex + 1)}
          className="absolute right-0 top-1/2 z-10 grid size-10 translate-x-3 -translate-y-1/2 place-items-center border border-white/14 bg-[#101010]/90 text-lg leading-none text-white backdrop-blur transition hover:border-white/35 hover:bg-white hover:text-[#101010] disabled:cursor-not-allowed disabled:border-white/8 disabled:text-white/25 disabled:hover:bg-[#101010]/90 disabled:hover:text-white/25 sm:translate-x-14"
        >
          <span aria-hidden="true">&gt;</span>
        </button>
      </div>
    </div>
  );
}
