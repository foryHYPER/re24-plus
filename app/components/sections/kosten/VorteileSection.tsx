import React from 'react';
import Image from 'next/image';

export default function VorteileSection() {
  const vorteile = [
    {
      title: "Individueller Tagesablauf",
      description: "Bei der häuslichen Betreuung kann der Tagesablauf flexibel und individuell gestaltet werden, was zur persönlichen Freiheit beiträgt.",
      image: "/images/daily-routine.jpg"
    },
    {
      title: "Geringere Kosten",
      description: "Im Vergleich zur stationären Pflege können die Kosten häufig reduziert werden, insbesondere wenn Familienmitglieder einen Teil der Betreuung übernehmen.",
      image: "/images/cost-saving.jpg"
    },
    {
      title: "Kein stressiger Umzug",
      description: "Insbesondere im Alter kann ein Umzug eine große Herausforderung darstellen. Die häusliche Betreuung ermöglichtes, in der gewohnten Umgebung zu bleiben.",
      image: "/images/home-comfort.jpg"
    },
    {
      title: "Sicherheitsgefühl",
      description: "Das eigene Zuhause bietet ein hohes Maß an Sicherheit, insbesondere für Menschen mit Handicaps oder Demenz. Bekannte Wege und Erinnerungen können dazu beitragen, ein weitestgehend selbstständiges Leben zu führen.",
      image: "/images/safety.jpg"
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Die Vorteile der häuslichen Betreuung
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vorteile.map((vorteil, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#4CAF50]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{vorteil.title}</h3>
                      <p className="text-gray-600">{vorteil.description}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                  <Image
                    src={vorteil.image}
                    alt={vorteil.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 