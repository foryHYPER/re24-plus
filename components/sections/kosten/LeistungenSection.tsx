import React from 'react';
import Image from 'next/image';

export default function LeistungenSection() {
  const leistungen = {
    grundversorgung: [
      "Sorgfältige Unterstützung bei der täglichen Körperpflege und Hygiene",
      "Assistenz beim Toilettengang und anderen persönlichen Bedürfnissen",
      "Hilfe bei der Ernährung, einschließlich Zubereitung gesunder Mahlzeiten und Unterstützung beim Essen",
      "Begleitung zu Arztterminen und anderen Außer-Haus-Aktivitäten",
      "Hilfe beim an- und auskleiden, aufstehen, hinlegen und Spazierengehen"
    ],
    haushalt: [
      "Übernahme alltäglicher Haushaltsaufgaben wie einkaufen und kochen",
      "Sorgfältige Reinigung der Wohnräume",
      "Pflege der Kleidung, einschließlich Waschen und Bügeln"
    ],
    soziales: [
      "Gesellschaft leisten durch Gespräche, gemeinsame Spiele, Lesen oder Basteln",
      "Begleitung bei Spaziergängen und anderen Freizeitaktivitäten, die Freude bereiten und das geistige und körperliche Wohlbefinden fördern",
      "Hilfe beim aufstehen, hinlegen und Spazierengehen",
      "Tagesstruktur aufrecht erhalten"
    ]
  };

  return (
    <section className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Die Leistungen unsere Betreuungskräfte im Rahmen der häuslichen Betreuung
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Unsere engagierten Betreuungskräfte aus der EU leisten weit mehr als nur Grundversorgung. Sie bieten eine umfassende Betreuung und kümmern sich um eine Vielzahl von Aufgaben, um das Wohlbefinden und die Lebensqualität der pflegebedürftigen Person zu verbessern:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Grundversorgung */}
            <div className="bg-white p-6 rounded-xl shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Grundversorgung</h3>
                <ul className="space-y-3">
                  {leistungen.grundversorgung.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#4CAF50] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                <Image
                  src="/images/basic-care.jpg"
                  alt="Grundversorgung"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Haushalt */}
            <div className="bg-white p-6 rounded-xl shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Haushalt</h3>
                <ul className="space-y-3">
                  {leistungen.haushalt.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#4CAF50] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                <Image
                  src="/images/household.jpg"
                  alt="Haushalt"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Soziales */}
            <div className="bg-white p-6 rounded-xl shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Soziales</h3>
                <ul className="space-y-3">
                  {leistungen.soziales.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#4CAF50] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                <Image
                  src="/images/social-activities.jpg"
                  alt="Soziales"
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