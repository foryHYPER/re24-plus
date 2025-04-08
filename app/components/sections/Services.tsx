import React from 'react';
import Link from 'next/link';

const services = [
  {
    icon: (
      <svg className="w-10 h-10 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Betreuung zu Hause",
    description: "Umfassende Unterstützung im Alltag, von der Grundpflege bis zur Begleitung."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Haushaltshilfe",
    description: "Hilfe bei der Hausarbeit, Einkaufen und weiteren organisatorischen Aufgaben."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Soziale Betreuung",
    description: "Förderung sozialer Kontakte und Teilnahme am gesellschaftlichen Leben."
  }
];

export default function Services() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-subtitle">LEISTUNGEN</span>
          <h2>
            Maßgeschneiderte Betreuung für Ihre Liebsten
          </h2>
          <p className="body-text max-w-3xl mx-auto">
            Wir bieten individuelle Lösungen, um den Alltag älterer Menschen zu erleichtern und ihre Lebensqualität zu steigern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4 sm:mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">{service.title}</h3>
              <p className="body-text text-sm sm:text-base mb-4 sm:mb-6">{service.description}</p>
              <Link href={`/leistungen/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#4CAF50] font-medium hover:text-[#43A047] transition-colors">
                Mehr erfahren
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 