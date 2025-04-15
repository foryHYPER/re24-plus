import React from 'react';
import Link from 'next/link';

const services = [
  {
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Häusliche Pflege",
    description: "Persönliche Betreuung im Komfort des eigenen Zuhauses, einschließlich Unterstützung bei täglichen Aktivitäten, Medikamentenmanagement und Gesellschaft."
  },
  {
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Betreutes Wohnen",
    description: "Eine sichere und unterstützende Umgebung für Senioren, die Hilfe im Alltag benötigen, aber ihre Unabhängigkeit bewahren möchten."
  },
  {
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Demenzbetreuung",
    description: "Spezialisierte Betreuung für Senioren mit Alzheimer oder anderen Demenzformen, ausgerichtet auf die Förderung kognitiver Funktionen sowie Sicherheit und Komfort."
  },
  {
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Verhinderungspflege",
    description: "Kurzzeitpflege zur Entlastung pflegender Angehöriger, damit diese sich erholen können, während Ihre Liebsten hochwertige Betreuung erhalten."
  },
  {
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Hospizpflege",
    description: "Mitfühlende Sterbebegleitung, die darauf abzielt, Komfort und Würde zu bieten und sowohl den Senior als auch die Familie in dieser schweren Zeit zu unterstützen."
  },
  {
    icon: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Palliativpflege",
    description: "Fokussiert auf die Linderung von Symptomen und Stress bei schweren Erkrankungen, verbessert die Palliativpflege die Lebensqualität durch Berücksichtigung körperlicher, emotionaler und spiritueller Bedürfnisse."
  }
];

export default function OurServices() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header - Custom layout, not the standard centered one */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 md:mb-16">
          <div className="mb-6 sm:mb-0">
            <h2 className="text-gray-900">
              Unsere Leistungen
            </h2>
            <p className="body-text mt-3 sm:mt-4 max-w-3xl">
              Bei RE-24 Plus bieten wir ein umfassendes Leistungsspektrum, das auf die besonderen Bedürfnisse von Senioren zugeschnitten ist, um sicherzustellen, dass sie die Pflege und Unterstützung erhalten, die sie verdienen.
            </p>
          </div>
          <button className="bg-[#1B2A3B] text-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-full hover:bg-[#2C3E50] transition-colors shadow-lg hover:shadow-xl">
            Alle Leistungen
          </button>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 sm:p-7 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 sm:mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="body-text text-sm sm:text-base mb-4 sm:mb-6">
                {service.description}
              </p>
              <Link 
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[#4CAF50] text-sm sm:text-base font-medium hover:text-[#43A047] transition-colors"
              >
                Mehr erfahren
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 