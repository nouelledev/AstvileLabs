import { ContactSection } from "./components/contact-section";
import { FAQSection } from "./components/faq-section";
import { HeroSection } from "./components/hero-section";
import { Navbar } from "./components/navbar";
import { ProcessSection } from "./components/process-section";
import { RatesSection } from "./components/rates-section";
import { SocialProofStrip } from "./components/social-proof-strip";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#101010] text-white">
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:4px_4px]" />
      <Navbar />
      <div className="h-16" aria-hidden="true" />
      <HeroSection />
      <SocialProofStrip />
      <ProcessSection />
      <RatesSection />
      <ContactSection />
      <FAQSection />
    </main>
  );
}
