import Image from 'next/image';
import React from 'react';

export default function Mission() {
  return (
    <section className="section-container-white">
      <div className="section-container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="max-w-xl">
            <span className="section-subtitle">
              UNSER ZIEL
            </span>
            <h2>
              <span className="block">Mit privater Betreuung für Senioren</span>
              <span className="block">eine vertrauensvolle Verbindung schaffen</span>
            </h2>
            <p className="body-text mt-4 sm:mt-6">
            Unser Ziel ist es, hoch qualifizierte Altenpflegekräfte zu vermitteln und so älteren Menschen ein würdevolles und erfülltes Leben in ihrer vertrauten Umgebung zu ermöglichen. Uns liegt es am Herzen, dass unsere Seniorenbetreuer nicht nur fachlich, sondern auch menschlich überzeugen und den Bedürfnissen Ihres Angehörigen gerecht werden. Um dies bei der privaten Betreuung älterer Menschen zu gewährleisten, suchen wir jede Betreuungperson in einem strengen Auswahlprozess sorgfältig aus und lernen sie persönlich kennen
            </p>
            <p className="body-text mt-3 sm:mt-4">
            Dabei nehmen wir ihre fachlichen Kompetenzen ebenso in den Blick wie zwischenmenschliche Qualitäten. Damit möchten wir sicherstellen, dass die ausgewählte Person die richtigen Voraussetzungen für Ihre individuelle Situation mitbringt. Schließlich muss auch die Chemie stimmen. Und sollte es dennoch einmal nicht harmonieren, sorgen wir schnell und unbürokratisch für passendes Ersatzpersonal, damit Sie sich stets in guten Händen fühlen.
            </p>
            <button className="mt-6 sm:mt-8 inline-flex items-center gap-2 bg-[#4CAF50] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#43A047] transition-colors text-sm sm:text-base font-medium">
              <span>Mehr über uns</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right side - Image */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/Mission.jpg"
              alt="Unser Ziel"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
