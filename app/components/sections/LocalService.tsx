import React from 'react';
import Image from 'next/image';

const cities = [
  "Stuttgart",
  "Mannheim",
  "Karlsruhe",
  "Speyer"
];

export default function LocalService() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-full">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#008080]/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#4CAF50]/5 rounded-full blur-2xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  RE-24 Plus
                </h2>
                <h3 className="text-2xl md:text-3xl text-[#008080] font-semibold mb-6">
                  Der Betreuungsdienst in Ihrer Nähe
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Als fachkundiger Betreuungsdienst führen Erstberatungen und Bedarfsanalysen auch online mit Ihnen durch. Dadurch können wir unsere Angebote auf viele verschiedene Städte ausweiten und unsere Seniorenbetreuung unter anderem auch in Stuttgart, Mannheim, Karlsruhe und Speyer anbieten. Je nachdem, ob Sie eine stundenweise Seniorenbetreuung oder eine 24-Stunden-Betreuung benötigen, wir sind für Sie da.
                </p>
              </div>

              {/* City badges */}
              <div className="flex flex-wrap gap-4">
                {cities.map((city, index) => (
                  <div 
                    key={index}
                    className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-100 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium text-gray-900">{city}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="bg-[#008080] text-white px-8 py-4 rounded-lg hover:bg-[#006666] transition-colors flex items-center gap-2 group">
                <span>Termin vereinbaren</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Right side - Image */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/MA3.jpg"
                alt="RE-24 Plus Betreuungsdienst"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#008080]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Verfügbar</h4>
                    <p className="text-sm text-gray-600">Immer für Sie da</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 