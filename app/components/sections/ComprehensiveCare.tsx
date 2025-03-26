import Image from 'next/image';
import React from 'react';

export default function ComprehensiveCare() {
  return (
    <section className="relative min-h-[800px] w-full">
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
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            Ganzheitliche Pflege zu Hause
          </h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-white text-lg leading-relaxed">
              Bei RE-24 Plus dreht sich alles um eine umfassende Betreuung für Senioren, die den Alltag Ihrer Liebsten erleichtert und bereichert. Unsere Betreuungskräfte kümmern sich einfühlsam um die Grundpflege, helfen bei der Körperpflege, bereiten Mahlzeiten zu und unterstützen im Haushalt.
            </p>
            <p className="text-white text-lg leading-relaxed mt-6">
              Sie führen zudem unter Anleitung von Therapeuten und Ärzten bestimmte Aktivitäten durch. Medizinische Aufgaben und Krankenpflege wie Injektionen oder spezielle Wundversorgung, fallen in den Bereich der häuslichen Pflege und müssen von examinierten Pflegekräften oder medizinischem Fachpersonal durchgeführt werden.
            </p>
            <p className="text-white text-lg leading-relaxed mt-6">
              Dafür vermitteln wir Sie gerne an einen Pflegedienst in Ihrer Nähe.
            </p>
          </div>

          {/* CTA button */}
          <button className="mt-12 bg-white text-[#4CAF50] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            Kontaktieren Sie uns
          </button>
        </div>
      </div>
    </section>
  );
} 