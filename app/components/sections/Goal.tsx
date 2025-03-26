import Image from 'next/image';
import React from 'react';

export default function Goal() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#4CAF50] font-semibold mb-4 tracking-wide block">
              UNSER ZIEL
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mit privater Betreuung für Senioren<br />
              eine vertrauensvolle Verbindung schaffen
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left side - Text content */}
            <div className="flex flex-col space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                Unser Ziel ist es, hoch qualifizierte Altenpflegekräfte zu vermitteln und so älteren Menschen ein würdevolles und erfülltes Leben in ihrer vertrauten Umgebung zu ermöglichen. Uns liegt es am Herzen, dass unsere Seniorenbetreuer nicht nur fachlich, sondern auch menschlich überzeugen und den Bedürfnissen Ihres Angehörigen gerecht werden.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Um dies bei der privaten Betreuung älterer Menschen zu gewährleisten, suchen wir jede Betreuungperson in einem strengen Auswahlprozess sorgfältig aus und lernen sie persönlich kennen. Dabei nehmen wir ihre fachlichen Kompetenzen ebenso in den Blick wie zwischenmenschliche Qualitäten.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Damit möchten wir sicherstellen, dass die ausgewählte Person die richtigen Voraussetzungen für Ihre individuelle Situation mitbringt. Schließlich muss auch die Chemie stimmen. Und sollte es dennoch einmal nicht harmonieren, sorgen wir schnell und unbürokratisch für passendes Ersatzpersonal, damit Sie sich stets in guten Händen fühlen.
              </p>

              {/* Statistics Box */}
              <div className="bg-[#4CAF50]/10 rounded-xl p-8 mt-8">
                <div className="text-center">
                  <span className="text-[#4CAF50] text-5xl font-bold block mb-2">100+</span>
                  <span className="text-gray-800 text-xl font-medium">Glückliche Kunden</span>
                </div>
              </div>
            </div>

            {/* Right side - Images */}
            <div className="grid grid-cols-1 gap-8">
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/MA2.jpg"
                  alt="Seniorenbetreuung Impression 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
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