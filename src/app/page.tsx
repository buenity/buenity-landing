import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { WhyBuenitySection } from "@/components/sections/WhyBuenitySection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FutureSection } from "@/components/sections/FutureSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <WhyBuenitySection />
      <HowItWorksSection />
      <FutureSection />
      <CTASection />
    </>
  );
}
