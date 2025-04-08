import Image from 'next/image';
import React from 'react';

const stats = [
  { number: "24/7", label: "Betreuung" },
  { number: "500+", label: "Zufriedene Kunden" },
  { number: "50+", label: "Experten" },
  { number: "15+", label: "Jahre Erfahrung" }
];

const profileImages = [
  '/MA2.jpg',
  '/MA3.jpg',
  '/MA4.jpg',
  '/MA5.jpg',
  '/marcial.jpg'
];

export default function Stats() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="section-subtitle">
            UNSER ANGEBOT FÜR SIE
          </span>
          <h2>
            <span className="block">Leistungen unserer häuslichen</span>
            <span className="block">Betreuung individuell auf Sie angepasst</span>
          </h2>
          <p className="body-text">
            Wir bieten Ihnen maßgeschneiderte Betreuungslösungen für ein selbstbestimmtes Leben zu Hause.
          </p>
        </div>

        {/* Main Content Area */}
        <div>
          {/* Profile Images */}
          <div className="flex flex-col sm:flex-row justify-center items-center mb-12 md:mb-16">
            <div className="flex -space-x-6 mb-4 sm:mb-0">
              {profileImages.map((src, index) => (
                <div 
                  key={index} 
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 border-white overflow-hidden relative group hover:z-10 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-[#4CAF50]/0 group-hover:bg-[#4CAF50]/20 transition-colors duration-300"></div>
                  <Image
                    src={src}
                    alt={`Team Mitglied ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="sm:ml-4 flex items-center text-center sm:text-left">
              <span className="text-base sm:text-lg">Über</span>
              <span className="text-[#4CAF50] font-bold text-xl sm:text-2xl mx-1">2K</span>
              <span className="text-base sm:text-lg">zufriedene Kunden</span>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto mb-12 md:mb-16">
            <div className="bg-white p-6 sm:p-7 md:p-8 rounded-lg shadow-lg flex flex-col h-full">
              <div>
                <div className="text-[#4CAF50] text-2xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">24 Stunden Betreuung</div>
                <p className="body-text">
                  Unsere 24-Stunden-Betreuung sorgt dafür, dass pflegebedürftige Personen rund um die Uhr die notwendige Unterstützung erhalten. Unsere personalisierte zugeschnittene und professionelle Betreuung gewährleistet ihre Sicherheit und ihr Wohlbefinden zu jeder Tages-und Nachtzeit.
                </p>
              </div>
              <a href="/24-stunden-betreuung" className="text-[#4CAF50] font-semibold mt-auto pt-4 inline-block hover:underline">
                Zur 24 Stunden Betreuung →
              </a>
            </div>
            <div className="bg-white p-6 sm:p-7 md:p-8 rounded-lg shadow-lg flex flex-col h-full">
              <div>
                <div className="text-[#4CAF50] text-2xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">Beratung</div>
                <p className="body-text">
                  Mit unserer professionellen Beratung unterstützen wir Sie dabei, die passenden Betreuungsdienstleistungen für Ihre speziellen Bedürfnisse zu finden. Lassen Sie sich von unseren Experten zur häuslichen Pflege beraten.
                </p>
              </div>
              <a href="/beratung" className="text-[#4CAF50] font-semibold mt-auto pt-4 inline-block hover:underline">
                Anfrage →
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4 sm:p-5">
                <div className="text-[#4CAF50] text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 