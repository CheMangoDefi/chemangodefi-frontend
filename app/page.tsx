import HeroSection from './components/sections/HeroSection';
import ValuePropositionSection from './components/sections/ValuePropositionSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import CoreFeaturesSection from './components/sections/CoreFeaturesSection';
import StrategiesSection from './components/sections/StrategiesSection';
import UseCasesSection from './components/sections/UseCasesSection';
import SecuritySection from './components/sections/SecuritySection';
import CTASection from './components/sections/CTASection';
import Footer from './components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ValuePropositionSection />
      <HowItWorksSection />
      <CoreFeaturesSection />
      <StrategiesSection />
      <UseCasesSection />
      <SecuritySection />
      <CTASection />
      <Footer />
    </div>
  );
}