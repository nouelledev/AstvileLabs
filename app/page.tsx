import { ContactSection } from "./components/contact-section";
import { FAQSection } from "./components/faq-section";
import { HeroSection } from "./components/hero-section";
import { Navbar } from "./components/navbar";
import { ProcessSection } from "./components/process-section";
import { RatesSection } from "./components/rates-section";
import { SocialProofStrip } from "./components/social-proof-strip";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SocialProofStrip />
      <ProcessSection />
      <RatesSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
