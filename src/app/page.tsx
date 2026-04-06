import { HeroSection } from "@/components/sections/hero-section";
import { FounderMessage } from "@/components/sections/founder-message";
import { ProgramsOverview } from "@/components/sections/programs-overview";
import { ImpactMetrics } from "@/components/sections/impact-metrics";
import { Testimonials } from "@/components/sections/testimonials";
import { SecondaryCTA } from "@/components/sections/secondary-cta";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FounderMessage />
      <div className="bg-white">
        <ProgramsOverview />
      </div>
      <ImpactMetrics />
      <Testimonials />
      <SecondaryCTA />
    </div>
  );
}
