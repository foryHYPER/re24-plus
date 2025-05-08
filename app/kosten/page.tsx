import React from 'react';
import HeroSection from '../components/sections/kosten/HeroSection';
import ServicesSection from '../components/sections/kosten/ServicesSection';
import VorteileSection from '../components/sections/kosten/VorteileSection';
import InformationSection from '../components/sections/kosten/InformationSection';
import WhySection from '../components/sections/kosten/WhySection';
import LeistungenSection from '../components/sections/kosten/LeistungenSection';
import KostenSection from '../components/sections/kosten/KostenSection';

export default function KostenPage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <VorteileSection />
      <InformationSection />
      <WhySection />
      <LeistungenSection />
      <KostenSection />
    </main>
  );
} 