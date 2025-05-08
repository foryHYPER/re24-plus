import React from 'react';
import Image from 'next/image';

export default function UeberUnsPage() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Menschlichkeit",
      description: "Wir behandeln jeden Menschen mit Respekt und Würde. Unsere Betreuung ist geprägt von Empathie und Verständnis."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Verlässlichkeit",
      description: "Sie können sich auf uns verlassen. Wir garantieren eine kontinuierliche und qualitativ hochwertige Betreuung."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Professionalität",
      description: "Unsere Mitarbeiter sind qualifiziert und erfahren. Wir setzen auf kontinuierliche Weiterbildung und höchste Standards."
    }
  ];

  const team = [
    {
      name: "Maria Schmidt",
      position: "Geschäftsführung",
      image: "/MA2.jpg"
    },
    {
      name: "Thomas Weber",
      position: "Pflegedienstleitung",
      image: "/MA3.jpg"
    },
    {
      name: "Sarah Müller",
      position: "Betreuungskoordinatorin",
      image: "/MA4.jpg"
    }
  ];

  return (
    <section className="relative min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#4CAF50]/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#4CAF50]/10 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-slow" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 relative">
          <span className="section-subtitle relative inline-block">
            ÜBER UNS
            <div className="absolute h-1 w-12 bg-[#4CAF50] rounded-full left-1/2 -translate-x-1/2 -bottom-1"></div>
          </span>
          <h2>
            <span className="block">Ihre vertrauenswürdige Partnerin für</span>
            <span className="block">professionelle Seniorenbetreuung</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left side - Image */}
          <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/2.jpg"
              alt="Unser Team bei der Arbeit"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          {/* Right side - Text */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Unsere Geschichte
            </h3>
            <p className="body-text">
              Seit über 15 Jahren sind wir Ihr verlässlicher Partner in der Seniorenbetreuung. Was als kleine Initiative begann, hat sich zu einem der führenden Anbieter für häusliche Pflege entwickelt. Unser Erfolg basiert auf der Überzeugung, dass jeder Mensch ein Recht auf ein würdevolles und selbstbestimmtes Leben hat.
            </p>
            <p className="body-text">
              Wir verstehen die Herausforderungen, die mit der Pflege eines Angehörigen einhergehen. Deshalb bieten wir maßgeschneiderte Lösungen, die sowohl die Bedürfnisse der zu betreuenden Person als auch die der Angehörigen berücksichtigen.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                <div className="text-[#4CAF50] text-3xl font-bold mb-2">15+</div>
                <div className="text-gray-600">Jahre Erfahrung</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                <div className="text-[#4CAF50] text-3xl font-bold mb-2">500+</div>
                <div className="text-gray-600">Zufriedene Kunden</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
            Unsere Werte
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-[#4CAF50]/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
            Unser Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                  <p className="text-[#4CAF50]">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#4CAF50]/10 to-[#4CAF50]/20 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4CAF50]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Lassen Sie uns gemeinsam Ihr Leben erleichtern
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Gespräch. Wir beraten Sie gerne und finden gemeinsam die beste Lösung für Ihre Situation.
            </p>
            <a
              href="/anfrage"
              className="inline-block px-8 py-3 bg-[#4CAF50] text-white rounded-lg hover:bg-[#43A047] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Jetzt Beratungsgespräch vereinbaren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 