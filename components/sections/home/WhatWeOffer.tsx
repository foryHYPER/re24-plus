import Image from 'next/image';
import React from 'react';

export default function WhatWeOffer() {
  return (
    <section className="relative min-h-[80vh] w-full flex flex-col items-center justify-center text-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/cta.jpg"
          alt="Senior care - What we offer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content - Now wrapped in standard container for consistency, but centering is handled by section */}
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header (simplified) */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-white">
            <span className="block">Jetzt unverbindliches Angebot für die</span>
            <span className="block">private Betreuung älterer Menschen anfordern</span>
          </h2>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl text-center">
          {/* Contact Elements */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            <a 
              href="tel:+49123456789" 
              className="flex items-center justify-center text-white hover:text-[#4CAF50] transition-colors text-base sm:text-lg"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +49 123 456 789
            </a>
            <a 
              href="mailto:info@re24-plus.de" 
              className="flex items-center justify-center text-white hover:text-[#4CAF50] transition-colors text-base sm:text-lg"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@re24-plus.de
            </a>
          </div>
          
          <button className="bg-[#4CAF50] text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-[#43A047] transition-colors shadow-lg hover:shadow-xl">
            Jetzt Angebot anfordern
          </button>
        </div>
      </div>
    </section>
  );
} 