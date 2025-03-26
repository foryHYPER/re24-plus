import Image from 'next/image';
import React from 'react';

const advantages = [
  {
    title: "Alles aus einer Hand",
    description: "Kein zusätzlicher Vermittler notwendig!"
  },
  {
    title: "24 Stunden",
    description: "Rund um die Uhr für Sie erreichbar!"
  },
  {
    title: "Legale Dienstleistungen",
    description: "Mit Zertifizierung vom TÜV-Rheinland!"
  }
];

export default function HowWeWork() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#4CAF50] font-semibold mb-4 tracking-wide block">
              WIE WIR ARBEITEN
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ein Ansprechpartner - viele Vorteile!
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                Alles aus einer Hand – so lautet unsere Philosophie! Von der Erstberatung über die individuelle Bedarfsanalyse bis hin zur Ankunft der ausgewählten Betreuungskraft für die Seniorenbetreuung zu Hause bieten wir Ihnen ein individuelles und maßgeschneidertes Angebot sowie natürlich den vollen rundum Service!
              </p>

              {/* Advantages Grid */}
              <div className="grid grid-cols-1 gap-6 mt-8">
                {advantages.map((advantage, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#4CAF50]/10 p-3 rounded-full">
                        <svg className="w-6 h-6 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{advantage.title}</h3>
                        <p className="text-gray-600">{advantage.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-[#4CAF50]/0 group-hover:bg-[#4CAF50]/10 transition-colors duration-300 z-10"></div>
              <Image
                src="/Mission.jpg"
                alt="Wie wir arbeiten - Seniorenbetreuung"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 