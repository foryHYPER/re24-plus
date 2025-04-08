import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    icon: (
      <svg className="w-12 h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24 Stunden Betreuung",
    description: "Unsere 24-Stunden-Betreuung sorgt dafür, dass pflegebedürftige Personen rund um die Uhr die notwendige Unterstützung erhalten. Unsere personalisierte zugeschnittene und professionelle Betreuung gewährleistet ihre Sicherheit und ihr Wohlbefinden zu jeder Tages-und Nachtzeit.",
    link: "/24-stunden-betreuung"
  },
  {
    icon: (
      <svg className="w-12 h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Beratung",
    description: "Mit unserer professionellen Beratung unterstützen wir Sie dabei, die passenden Betreuungsdienstleistungen für Ihre speziellen Bedürfnisse zu finden. Lassen Sie sich von unseren Experten zur häuslichen Pflege beraten.",
    link: "/beratung"
  }
];

const carePoints = [
  {
    title: "Professionelle Betreuung",
    description: "Wir bieten eine umfassende Versorgung, die auf die individuellen Bedürfnisse Ihrer Liebsten zugeschnitten ist."
  },
  {
    title: "Kompetente Pflegekräfte",
    description: "Unsere erfahrenen und zertifizierten Pflegekräfte gewährleisten höchste Qualitätsstandards."
  },
  {
    title: "Vertrauensvolle Beziehung",
    description: "Wir legen Wert auf eine persönliche Bindung und schaffen ein Umfeld des Vertrauens und der Geborgenheit."
  }
];

export default function HomeCare() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="section-subtitle">HÄUSLICHE PFLEGE</span>
          <h2>
            <span className="block">Hochwertige Betreuung</span>
            <span className="block">im vertrauten Zuhause</span>
          </h2>
          <p className="body-text">
            Sichern Sie Ihren Liebsten ein würdevolles Leben in gewohnter Umgebung mit unserer professionellen häuslichen Pflege.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg group">
            <div className="absolute inset-0 bg-[#4CAF50]/0 group-hover:bg-[#4CAF50]/10 transition-colors duration-300 z-10"></div>
            <Image
              src="/Hero.jpg"
              alt="Häusliche Pflege"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>

          {/* Right side - Content Points */}
          <div className="space-y-6 sm:space-y-8">
            {carePoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex-shrink-0 bg-[#4CAF50]/10 p-3 sm:p-4 rounded-full mt-1">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{point.title}</h3>
                  <p className="body-text text-sm sm:text-base">{point.description}</p>
                </div>
              </div>
            ))}
            
            <button className="mt-6 sm:mt-8 inline-flex items-center gap-2 bg-[#4CAF50] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#43A047] transition-colors text-sm sm:text-base font-medium">
              <span>Kontakt aufnehmen</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 