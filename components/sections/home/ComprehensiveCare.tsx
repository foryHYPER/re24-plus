import Image from 'next/image';
import React from 'react';

export default function ComprehensiveCare() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 min-h-[600px] sm:min-h-[700px] md:min-h-[750px] lg:min-h-[800px] w-full">
      {/* Full-width background image */}
      <div className="absolute inset-0 bg-black/40">
        <Image
          src="/mission.jpg"
          alt="Ganzheitliche Pflege zu Hause"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 className="text-white">
            Ganzheitliche Pflege zu Hause
          </h2>
        </div>
        
        {/* Main Content Area */}
        <div className="mx-auto max-w-4xl text-center text-lg">
          <p className="text-white">
            Bei RE-24 Plus dreht sich alles um eine umfassende Betreuung für Senioren, die den Alltag Ihrer Liebsten erleichtert und bereichert. Unsere Betreuungskräfte kümmern sich einfühlsam um die Grundpflege, helfen bei der Körperpflege, bereiten Mahlzeiten zu und unterstützen im Haushalt.
          </p>
          <p className="text-white mt-4 sm:mt-6">
            Sie führen zudem unter Anleitung von Therapeuten und Ärzten bestimmte Aktivitäten durch. Medizinische Aufgaben und Krankenpflege wie Injektionen oder spezielle Wundversorgung, fallen in den Bereich der häuslichen Pflege und müssen von examinierten Pflegekräften oder medizinischem Fachpersonal durchgeführt werden.
          </p>
          <p className="text-white mt-4 sm:mt-6">
            Dafür vermitteln wir Sie gerne an einen Pflegedienst in Ihrer Nähe.
          </p>

          {/* CTA button */}
          <button className="mt-8 sm:mt-10 md:mt-12 bg-white text-[#4CAF50] px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg hover:shadow-xl">
            Kontaktieren Sie uns
          </button>
        </div>
      </div>
    </section>
  );
} 