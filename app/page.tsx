import { ContactSection } from "./components/contact-section";
import { FAQSection } from "./components/faq-section";
import { HeroSection } from "./components/hero-section";
import { Navbar } from "./components/navbar";
import { ProcessSection } from "./components/process-section";
import { SocialProofStrip } from "./components/social-proof-strip";
import { WaysToWorkSection } from "./components/ways-to-work-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SocialProofStrip />
      <ProcessSection />
      <WaysToWorkSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
