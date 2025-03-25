import Hero from './components/sections/Hero';
import Mission from './components/sections/Mission';
import Services from './components/sections/Services';
import Stats from './components/sections/Stats';
import Testimonials from './components/sections/Testimonials';
import WhatWeOffer from './components/sections/WhatWeOffer';


export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Services />
      <Stats />
      <Testimonials />
      <WhatWeOffer />
      
    </main>
  );
}
