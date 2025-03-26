import React from 'react';
import Image from 'next/image';

export default function DementiaCare() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#008080]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#4CAF50]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* First Column - Dementia Care */}
            <div className="space-y-8">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Spezielle Anforderungen für Senioren mit Demenz
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Die Betreuung von Senioren mit Demenz erfordert ein besonderes Maß an Wissen und Einfühlungsvermögen. Für diese Fälle haben wir von RE-24 Plus individuelle Betreuungskonzepte entwickelt, die auf die Bedürfnisse dieser Menschen zugeschnitten sind.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mt-4">
                  Denn gerade bei demenzerkrankten Menschen ist es wichtig, eine stabile und sichere Umgebung zu schaffen, die Vertrauen und Geborgenheit vermittelt. Wir sorgen dafür, dass sich Ihre Angehörigen stets gut aufgehoben und verstanden wissen.
                </p>
              </div>

              {/* Image for first column */}
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/MA2.jpg"
                  alt="Dementia Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#008080]/10"></div>
              </div>
            </div>

            {/* Second Column - Quality Standards */}
            <div className="space-y-8">
              <div className="max-w-xl">
                <div className="flex items-center gap-4 mb-6">
                  <svg className="w-12 h-12 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Qualität und Sicherheit bei RE-24 Plus
                  </h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Bei RE-24 Plus legen wir großen Wert auf Qualität und Zuverlässigkeit. Unsere Dienstleistungen erfüllen alle gesetzlichen Vorgaben und sind TÜV-Rheinland-zertifiziert. Wir möchten, dass Sie sich sicher fühlen und gut informiert sind.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mt-4">
                  Deshalb beraten wir Sie umfassend über die rechtlichen Rahmenbedingungen der Pflege zu Hause. Egal ob es um den Anspruch auf Leistungen nach dem SGB oder die Einstufung in Pflegegrade geht, wir schaffen Transparenz und geben Ihnen die nötigen Informationen, um fundierte Entscheidungen zu treffen. So können Sie entspannt und sorgenfrei planen.
                </p>
              </div>

              {/* Quality badges */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#008080]/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">TÜV-Zertifiziert</h3>
                      <p className="text-sm text-gray-600">Geprüfte Qualität</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#008080]/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Experten-Team</h3>
                      <p className="text-sm text-gray-600">Qualifizierte Betreuung</p>
                    </div>
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