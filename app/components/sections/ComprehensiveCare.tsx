import Image from 'next/image';
import React from 'react';

export default function ComprehensiveCare() {
  return (
    <section className="relative min-h-[600px] sm:min-h-[700px] md:min-h-[750px] lg:min-h-[800px] w-full">
      {/* Full-width background image */}
      <div className="absolute inset-0 bg-black/40">
        <Image
          src="/Mission.jpg"
          alt="Ganzheitliche Pflege zu Hause"
          fill
          className="object-cover opacity-10"
          priority
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
              Ganzheitliche Pflege zu Hause
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-white text-base sm:text-lg leading-relaxed">
                Bei RE-24 Plus dreht sich alles um eine umfassende Betreuung für Senioren, die den Alltag Ihrer Liebsten erleichtert und bereichert. Unsere Betreuungskräfte kümmern sich einfühlsam um die Grundpflege, helfen bei der Körperpflege, bereiten Mahlzeiten zu und unterstützen im Haushalt.
              </p>
              <p className="text-white text-base sm:text-lg leading-relaxed mt-4 sm:mt-6">
                Sie führen zudem unter Anleitung von Therapeuten und Ärzten bestimmte Aktivitäten durch. Medizinische Aufgaben und Krankenpflege wie Injektionen oder spezielle Wundversorgung, fallen in den Bereich der häuslichen Pflege und müssen von examinierten Pflegekräften oder medizinischem Fachpersonal durchgeführt werden.
              </p>
              <p className="text-white text-base sm:text-lg leading-relaxed mt-4 sm:mt-6">
                Dafür vermitteln wir Sie gerne an einen Pflegedienst in Ihrer Nähe.
              </p>
            </div>

            {/* CTA button */}
            <button className="mt-8 sm:mt-10 md:mt-12 bg-white text-[#4CAF50] px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg hover:shadow-xl">
              Kontaktieren Sie uns
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 