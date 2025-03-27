import Image from 'next/image';
import React from 'react';

export default function Goal() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16">
            <span className="text-[#4CAF50] text-sm sm:text-base font-semibold mb-2 sm:mb-3 md:mb-4 tracking-wide block uppercase">
              UNSER ZIEL
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-4 sm:mb-6">
              <span className="block">Mit privater Betreuung für Senioren</span>
              <span className="block">eine vertrauensvolle Verbindung schaffen</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-8 sm:mb-12 md:mb-14 lg:mb-16">
            {/* Left side - Text content */}
            <div className="flex flex-col space-y-4 sm:space-y-6">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Unser Ziel ist es, hoch qualifizierte Altenpflegekräfte zu vermitteln und so älteren Menschen ein würdevolles und erfülltes Leben in ihrer vertrauten Umgebung zu ermöglichen. Uns liegt es am Herzen, dass unsere Seniorenbetreuer nicht nur fachlich, sondern auch menschlich überzeugen und den Bedürfnissen Ihres Angehörigen gerecht werden.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Um dies bei der privaten Betreuung älterer Menschen zu gewährleisten, suchen wir jede Betreuungperson in einem strengen Auswahlprozess sorgfältig aus und lernen sie persönlich kennen. Dabei nehmen wir ihre fachlichen Kompetenzen ebenso in den Blick wie zwischenmenschliche Qualitäten.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Damit möchten wir sicherstellen, dass die ausgewählte Person die richtigen Voraussetzungen für Ihre individuelle Situation mitbringt. Schließlich muss auch die Chemie stimmen. Und sollte es dennoch einmal nicht harmonieren, sorgen wir schnell und unbürokratisch für passendes Ersatzpersonal, damit Sie sich stets in guten Händen fühlen.
              </p>

              {/* Statistics Box */}
              <div className="bg-[#4CAF50]/10 rounded-xl p-6 sm:p-7 md:p-8 mt-6 sm:mt-8">
                <div className="text-center">
                  <span className="text-[#4CAF50] text-4xl sm:text-5xl font-bold block mb-2 sm:mb-3">100+</span>
                  <span className="text-gray-800 text-lg sm:text-xl font-medium">Glückliche Kunden</span>
                </div>
              </div>
            </div>

            {/* Right side - Images */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8">
              <div className="relative h-[250px] sm:h-[275px] md:h-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/MA2.jpg"
                  alt="Seniorenbetreuung Impression 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[250px] sm:h-[275px] md:h-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/MA3.jpg"
                  alt="Seniorenbetreuung Impression 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 