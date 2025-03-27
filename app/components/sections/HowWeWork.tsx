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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16">
            <span className="text-[#4CAF50] text-sm sm:text-base font-semibold mb-2 sm:mb-3 md:mb-4 tracking-wide block uppercase">
              WIE WIR ARBEITEN
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-4 sm:mb-6">
              Ein Ansprechpartner - viele Vorteile!
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6 sm:space-y-8">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Alles aus einer Hand – so lautet unsere Philosophie! Von der Erstberatung über die individuelle Bedarfsanalyse bis hin zur Ankunft der ausgewählten Betreuungskraft für die Seniorenbetreuung zu Hause bieten wir Ihnen ein individuelles und maßgeschneidertes Angebot sowie natürlich den vollen rundum Service!
              </p>

              {/* Advantages Grid */}
              <div className="grid grid-cols-1 gap-4 sm:gap-6 mt-6 sm:mt-8">
                {advantages.map((advantage, index) => (
                  <div 
                    key={index}
                    className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="bg-[#4CAF50]/10 p-2.5 sm:p-3 rounded-full">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{advantage.title}</h3>
                        <p className="text-gray-600 text-sm sm:text-base">{advantage.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-[#4CAF50]/0 group-hover:bg-[#4CAF50]/10 transition-colors duration-300 z-10"></div>
              <Image
                src="/Mission.jpg"
                alt="Wie wir arbeiten - Seniorenbetreuung"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 