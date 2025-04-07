import React from 'react';
import Link from 'next/link';

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

export default function HomeCare() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#4CAF50] font-semibold mb-4 tracking-wide block">
              UNSER ANGEBOT FÜR DIE BETREUUNG ZU HAUSE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Leistungen unserer häuslichen Betreuung<br />
              individuell auf Sie angepasst
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex flex-col items-center text-center flex-grow">
                  <div className="bg-[#4CAF50]/10 p-6 rounded-full mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link 
                    href={service.link}
                    className="inline-flex items-center justify-center w-full text-[#4CAF50] hover:text-[#43A047] transition-colors"
                  >
                    {service.title === "24 Stunden Betreuung" ? "Zur 24 Stunden Betreuung" : "Anfrage"}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 