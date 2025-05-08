import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from './components/sections/Hero';
import Mission from './components/sections/Mission';
import Services from './components/sections/Services';
import Stats from './components/sections/Stats';
import Testimonials from './components/sections/Testimonials';
import WhatWeOffer from './components/sections/WhatWeOffer';
import Goal from './components/sections/Goal';
import Support from './components/sections/Support';
import HowWeWork from './components/sections/HowWeWork';
import ComprehensiveCare from './components/sections/ComprehensiveCare';
import OurServices from './components/sections/OurServices';
import ServiceHighlights from './components/sections/ServiceHighlights';
import DementiaCare from './components/sections/DementiaCare';
import LocalService from './components/sections/LocalService';
import TeamSection from './components/sections/TeamSection';
import ContactSection from './components/sections/ContactSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Services />
      <Stats />
      <Testimonials />
      <WhatWeOffer />
      <Goal />
      <Support />
      <HowWeWork />
      <ComprehensiveCare />
      <OurServices />
      <ServiceHighlights/>
      <DementiaCare />
      <LocalService />
      <TeamSection />
      <ContactSection />
      
    </main>
  );
}
