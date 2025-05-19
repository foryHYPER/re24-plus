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
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">   
        <div className="text-center mb-12 md:mb-16">
          <span className="section-subtitle">
            UNSER ANGEBOT FÜR SIE
          </span>
          <h2>
            Leistungen unserer häuslichen Betreuung individuell auf Sie angepasst
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
            <div className="group bg-gradient-to-br from-white to-green-50 p-6 sm:p-7 md:p-8 rounded-xl shadow-lg hover:shadow-2xl flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 border border-green-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4CAF50] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-[#4CAF50] text-2xl sm:text-2xl md:text-3xl font-semibold">24 Stunden Betreuung</div>
                </div>
                <p className="body-text">
                  Unsere 24-Stunden-Betreuung sorgt dafür, dass pflegebedürftige Personen rund um die Uhr die notwendige Unterstützung erhalten. Unsere personalisierte zugeschnittene und professionelle Betreuung gewährleistet ihre Sicherheit und ihr Wohlbefinden zu jeder Tages-und Nachtzeit.
                </p>
              </div>
              <a href="/24-stunden-betreuung" className="relative z-10 text-[#4CAF50] font-semibold mt-auto pt-4 inline-flex items-center group-hover:underline">
                Zur 24 Stunden Betreuung <span className="inline-block ml-1 transform group-hover:translate-x-1 transition-transform duration-200 ease-in-out">→</span>
              </a>
            </div>
            
            <div className="group bg-gradient-to-br from-white to-green-50 p-6 sm:p-7 md:p-8 rounded-xl shadow-lg hover:shadow-2xl flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 border border-green-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4CAF50] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div className="text-[#4CAF50] text-2xl sm:text-2xl md:text-3xl font-semibold">Beratung</div>
                </div>
                <p className="body-text">
                  Mit unserer professionellen Beratung unterstützen wir Sie dabei, die passenden Betreuungsdienstleistungen für Ihre speziellen Bedürfnisse zu finden. Lassen Sie sich von unseren Experten zur häuslichen Pflege beraten.
                </p>
              </div>
              <a href="/beratung" className="relative z-10 text-[#4CAF50] font-semibold mt-auto pt-4 inline-flex items-center group-hover:underline">
                Anfrage <span className="inline-block ml-1 transform group-hover:translate-x-1 transition-transform duration-200 ease-in-out">→</span>
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 border border-green-50 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#4CAF50] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="text-[#4CAF50] text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 relative z-10 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium relative z-10">
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