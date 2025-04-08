import Image from 'next/image';
import React from 'react';

export default function Mission() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="max-w-xl">
            <span className="section-subtitle">
              UNSER ZIEL
            </span>
            <h2 className="text-gray-900">
              <span className="block">Mit privater Betreuung für Senioren</span>
              <span className="block">eine vertrauensvolle Verbindung schaffen</span>
            </h2>
            <p className="body-text mt-4 sm:mt-6">
              Wir haben es uns zur Aufgabe gemacht, eine liebevolle und professionelle Pflege für ältere Menschen zu gewährleisten.
            </p>
            <p className="body-text mt-3 sm:mt-4">
              Unser Ziel ist es, nicht nur die physischen, sondern auch die emotionalen Bedürfnisse unserer Klienten zu erfüllen und ihnen ein Gefühl von Sicherheit und Geborgenheit zu vermitteln.
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
