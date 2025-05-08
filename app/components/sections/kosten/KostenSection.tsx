import React from 'react';
import Image from 'next/image';

export default function KostenSection() {
  const kostenfaktoren = [
    "Die spezifische Situation vor Ort: Die Umgebung und Infrastruktur, in der die Betreuung stattfindet, kann die Kosten beeinflussen.",
    "Die Anzahl der pflegebedürftigen Personen im Haushalt: Wenn mehr als eine Person Betreuung benötigt, steigen die Kosten entsprechend.",
    "Der zugewiesene Pflegegrad: Je höher der Pflegegrad, desto intensiver ist in der Regel die benötigte Betreuung, was sich auf die Kosten auswirkt.",
    "Mobilitätslevel: Die Mobilität der pflegebedürftigen Person kann die Art und den Umfang der benötigten Unterstützung beeinflussen.",
    "Deutschkenntnisse der Betreuungskraft: Betreuungskräfte mit guten Deutschkenntnissen können höhere Kosten verursachen.",
    "Führerschein: Wenn die Betreuungskraft einen Führerschein benötigt, kann dies ebenfalls die Kosten erhöhen."
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/cost-transparency.jpg"
                alt="Kostentransparenz"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Kosten der 24-Stunden-Betreuung
              </h2>
              <p className="text-gray-600 mb-8">
                Eine 24-Stunden-Betreuung zu Hause ist eine bedeutende Entscheidung, die sowohl das Wohlbefinden Ihrer Lieben als auch Ihre Finanzen betrifft. Bei RE-24 Plus streben wir nach Transparenz und klaren Kommunikationswegen, um Ihnen zu helfen, die anfallenden Kosten und Finanzierungsmöglichkeiten besser zu verstehen.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Die Kostenfaktoren der 24-Stunden-Betreuung
              </h3>
              <ul className="space-y-4">
                {kostenfaktoren.map((faktor, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#4CAF50] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{faktor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 