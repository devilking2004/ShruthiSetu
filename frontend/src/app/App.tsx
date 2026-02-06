import { useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { KnowledgeCategories } from "./components/KnowledgeCategories";
import { HowItWorks } from "./components/HowItWorks";
import { RegionalMap } from "./components/RegionalMap";
import { Testimonials } from "./components/Testimonials";
import { CommunitySection } from "./components/CommunitySection";
import { ImpactSection } from "./components/ImpactSection";
import { Footer } from "./components/Footer";
import ContributeSection from "./components/ContributeSection";


export default function App() {
  useEffect(() => {
    document.title =
      "Shruthi Sethu (ಶ್ರುತಿ ಸೇತು) - Bridging Traditional Wisdom & Digital Preservation";
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
      <Header />

      <HeroSection />
      <AboutSection />
      <KnowledgeCategories />
      <HowItWorks />
      <RegionalMap />
      <Testimonials />
      <CommunitySection />

      {/* 🌿 SAME contribute form for Header, Hero & Community */}
      <ContributeSection />

      <ImpactSection />
      <Footer />
    </div>
  );
}
