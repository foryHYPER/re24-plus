import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '../components/sections/home/Hero';
import Mission from '../components/sections/home/Mission';
import Services from '../components/sections/home/Services';
import Stats from '../components/sections/home/Stats';
import Testimonials from '../components/sections/home/Testimonials';
import WhatWeOffer from '../components/sections/home/WhatWeOffer';
import Goal from '../components/sections/home/Goal';
import Support from '../components/sections/home/Support';
import HowWeWork from '../components/sections/home/HowWeWork';
import ComprehensiveCare from '../components/sections/home/ComprehensiveCare';
import OurServices from '../components/sections/home/OurServices';
import ServiceHighlights from '../components/sections/home/ServiceHighlights';
import DementiaCare from '../components/sections/home/DementiaCare';
import LocalService from '../components/sections/home/LocalService';
import TeamSection from '../components/sections/home/TeamSection';
import ContactSection from '../components/sections/home/ContactSection';

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
