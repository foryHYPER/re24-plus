import Image from 'next/image';
import React from 'react';

export default function Goal() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="section-subtitle">
            UNSER ZIEL
          </span>
          <h2>
            <span className="block">Mit privater Betreuung für Senioren</span>
            <span className="block">eine vertrauensvolle Verbindung schaffen</span>
          </h2>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 md:mb-16">
          {/* Left side - Text content */}
          <div className="flex flex-col space-y-4 sm:space-y-6">
            <p className="body-text">
              Unser Ziel ist es, hoch qualifizierte Altenpflegekräfte zu vermitteln und so älteren Menschen ein würdevolles und erfülltes Leben in ihrer vertrauten Umgebung zu ermöglichen. Uns liegt es am Herzen, dass unsere Seniorenbetreuer nicht nur fachlich, sondern auch menschlich überzeugen und den Bedürfnissen Ihres Angehörigen gerecht werden.
            </p>
            <p className="body-text">
              Um dies bei der privaten Betreuung älterer Menschen zu gewährleisten, suchen wir jede Betreuungperson in einem strengen Auswahlprozess sorgfältig aus und lernen sie persönlich kennen. Dabei nehmen wir ihre fachlichen Kompetenzen ebenso in den Blick wie zwischenmenschliche Qualitäten.
            </p>
            <p className="body-text">
              Damit möchten wir sicherstellen, dass die ausgewählte Person die richtigen Voraussetzungen für Ihre individuelle Situation mitbringt. Schließlich muss auch die Chemie stimmen. Und sollte es dennoch einmal nicht harmonieren, sorgen wir schnell und unbürokratisch für passendes Ersatzpersonal, damit Sie sich stets in guten Händen fühlen.
            </p>

            {/* Statistics Box */}
            <div className="bg-gradient-to-br from-white to-green-50 rounded-xl p-6 sm:p-7 md:p-8 mt-6 sm:mt-8 border border-green-100 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-100 rounded-full -mr-20 -mt-20 opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-100 rounded-full -ml-12 -mb-12 opacity-30 group-hover:opacity-50 transition-opacity"></div>
              
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-[#4CAF50] text-5xl sm:text-6xl font-bold block mb-1 group-hover:scale-105 transition-transform duration-300">100+</span>
                  <div className="h-1 w-16 bg-[#4CAF50] rounded-full mb-2 group-hover:w-20 transition-all duration-300"></div>
                </div>
                
                <span className="text-gray-800 text-xl sm:text-2xl font-medium text-center sm:text-left">
                  Glückliche <br className="hidden sm:block" />
                  <span className="text-[#4CAF50] font-semibold">Betreute Personen</span>
                </span>
              </div>
              
              <div className="absolute right-6 bottom-6 opacity-70 group-hover:opacity-100 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#4CAF50]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right side - Images */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8">
            <div className="relative h-[250px] sm:h-[275px] md:h-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/2.jpg"
                alt="Seniorenbetreuung Impression 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[250px] sm:h-[275px] md:h-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/9.jpg"
                alt="Seniorenbetreuung Impression 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 