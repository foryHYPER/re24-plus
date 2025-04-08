import React from 'react';
import Image from 'next/image';

export default function Support() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Verfügbarkeit",
      description: "Wir sind rund um die Uhr für Sie da und unterstützen Sie bei allen Fragen zur Pflege."
    },
    {
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Finanzierungshilfen",
      description: "Wir beraten Sie zu Pflegegeld und anderen Zuschüssen und rechnen direkt mit der Pflegekasse ab."
    },
    {
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Professionelle Beratung",
      description: "Unsere Experten beraten Sie umfassend und vermitteln bei Bedarf an einen Pflegedienst."
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#4CAF50]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#4CAF50]/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header with decorative line */}
        <div className="text-center mb-12 md:mb-16 relative">
          <span className="section-subtitle">
            UNTERSTÜTZUNG
          </span>
          <h2>
            <span className="block">Zuverlässige Hilfe für</span>
            <span className="block">pflegende Angehörige</span>
          </h2>
        </div>

        {/* Main Content Area */}
        <div>
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start mb-12 md:mb-16">
            {/* Left side - Main text with image */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white rounded-xl p-6 sm:p-7 md:p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <p className="body-text">
                  Die häusliche Pflege eines Familienmitglieds bringt einige Herausforderungen mit sich. Die ständige Verfügbarkeit und die Notwendigkeit, zu jeder Stunde präsent zu sein, kann große Kraft kosten und viel Zeit in Anspruch nehmen. Hinzu kommt oft eine emotionale Belastung und das Gefühl von Überforderung, denn häufig stehen Angehörige mit dieser verantwortungsvollen Aufgabe alleine da. Auch finanzielle Sorgen kennen wir nur zu gut, denn der Betrag für die häusliche Pflege kann erheblich sein.
                </p>
              </div>
              <div className="relative h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/caregiver.jpg"
                  alt="Pflegende Angehörige"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right side - Features */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 sm:p-7 md:p-8 shadow-lg flex items-start space-x-4 sm:space-x-6 transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex-shrink-0 bg-[#4CAF50]/10 p-3 sm:p-4 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">{feature.title}</h3>
                    <p className="body-text text-sm sm:text-base">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section with gradient and pattern */}
          <div className="relative">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
            <div className="bg-gradient-to-r from-[#4CAF50]/10 to-[#4CAF50]/20 rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 relative">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#4CAF50]/10 rounded-full translate-x-1/2 -translate-y-1/2" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center">
                Rundum sorglos: Finanzierungshilfen für die Seniorenbetreuung
              </h3>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 shadow-lg">
                <p className="body-text">
                  Mit unserem umfassenden Angebot der Seniorenbetreuung zu Hause stehen wir Ihnen zur Seite. Wir bieten Ihnen die nötige Entlastung, sodass Sie einmal durchatmen können. Dazu beraten wir Sie eingehend zu den verschiedenen Finanzierungsmöglichkeiten und unterstützen Sie bei der Beantragung von Pflegegeld und anderen Zuschüssen. Da wir direkt mit der Pflegekasse abrechnen können, erleichtern wir Ihnen den gesamten Prozess und helfen dabei, die finanzielle Belastung so gering wie möglich zu halten. Darüber hinaus beraten wir Sie bei allen Fragen rund um die häusliche Pflege und vermitteln Sie bei Bedarf an einen Pflegedienst.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 