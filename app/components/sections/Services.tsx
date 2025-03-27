import Image from 'next/image';
import React from 'react';

const services = [
  {
    title: "Haushalt",
    description: "Unsere Betreuer kümmern sich um alltägliche Aufgaben im Haushalt wie das Reinigen der Wohnung oder das Einkaufen. Wir möchten sicherstellen, dass die zu pflegende Person in einem sauberen und ordentlichen Zuhause leben kann, ohne sich um die Mühen der Hausarbeit sorgen zu müssen.",
    image: "/haushalt.jpg"
  },
  {
    title: "Sozial",
    description: "Der Aufbau einer vertrauensvollen Beziehung steht bei uns im Mittelpunkt. Unsere Betreuungskräfte führen Gespräche und planen gemeinsame Aktivitäten. Wir wissen, wie wichtig zwischenmenschlicher Kontakt und soziale Interaktion für ein glückliches Leben sind.",
    image: "/sozial.jpg"
  },
  {
    title: "Genesung",
    description: "Wir überwachen sorgfältig die medizinische Versorgung und unterstützen bei der Einhaltung von Therapieplänen und der Einnahme von Medikamenten. Unsere Betreuungskräfte haben die Bedürfnisse Ihres Angehörigen stetig im Blick und geben ihm die nötige Sicherheit.",
    image: "/genesung.jpg"
  },
  {
    title: "Betreuung",
    description: "Unsere umfassende Betreuung beinhaltet Unterstützung bei der täglichen Versorgung, wie Körperpflege, Ernährung und Mobilität. Im Rahmen der Seniorenbetreuung zu Hause helfen wir den pflegebedürftigen Personen, ihren Alltag zu bewältigen, und stehen ihnen stets unterstützend zur Seite.",
    image: "/betreuung.jpg"
  }
];

export default function Services() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16">
          <span className="text-[#4CAF50] text-sm sm:text-base font-semibold mb-2 sm:mb-3 md:mb-4 tracking-wide block">
            UNSERE LEISTUNGEN
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-4">
            <span className="block">Unterstützungsangebote unserer</span>
            <span className="block">häuslichen Betreuung im Überblick</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-7 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-[180px] sm:h-[200px] md:h-[220px] lg:h-[200px] xl:h-[220px] 2xl:h-[240px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 