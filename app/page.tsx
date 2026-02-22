import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import HowItWorksSection from "@/components/how-it-works-section";
import Navbar from "@/components/navbar";
import SocialProofSection from "@/components/social-proof-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <SocialProofSection />
      <CTASection />
      <Footer />
    </main>
  );
}
