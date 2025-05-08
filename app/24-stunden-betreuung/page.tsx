import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Betreuung24Page() {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Grundpflege",
      description: "Unterstützung bei der Körperpflege, An- und Auskleiden, Hilfe beim Toilettengang und bei der Mobilität im Alltag."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Haushaltshilfe",
      description: "Unterstützung bei der Haushaltsführung, Einkaufen, Kochen, Wäschepflege und Aufräumen."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Medizinische Betreuung",
      description: "Unterstützung bei der Medikamenteneinnahme, Blutdruckmessung, Blutzuckerkontrolle und Dokumentation."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Soziale Betreuung",
      description: "Gespräche führen, Spaziergänge begleiten, gemeinsame Aktivitäten und Freizeitgestaltung."
    }
  ];

  const detailedServices = [
    {
      title: "Grundpflege im Detail",
      items: [
        "Unterstützung bei der Körperpflege (Waschen, Duschen, Baden)",
        "Hilfe beim An- und Auskleiden",
        "Unterstützung beim Toilettengang",
        "Hilfe bei der Mund- und Zahnpflege",
        "Unterstützung bei der Haarpflege",
        "Hilfe beim Eincremen und Pflege der Haut",
        "Unterstützung bei der Nagelpflege",
        "Hilfe bei der Prothesenpflege"
      ]
    },
    {
      title: "Haushaltshilfe im Detail",
      items: [
        "Regelmäßige Reinigung der Wohnung",
        "Wäsche waschen, bügeln und zusammenlegen",
        "Einkaufen und Vorratshaltung",
        "Zubereitung von Mahlzeiten",
        "Spülen und Aufräumen",
        "Müllentsorgung",
        "Betten machen und Zimmer lüften",
        "Pflanzenpflege"
      ]
    },
    {
      title: "Medizinische Betreuung im Detail",
      items: [
        "Unterstützung bei der Medikamenteneinnahme",
        "Blutdruck- und Blutzuckermessung",
        "Dokumentation der Vitalwerte",
        "Begleitung zu Arztterminen",
        "Unterstützung bei der Wundversorgung",
        "Hilfe bei der Verwendung von Hilfsmitteln",
        "Überwachung des Gesundheitszustands",
        "Kommunikation mit Ärzten und Pflegediensten"
      ]
    },
    {
      title: "Soziale Betreuung im Detail",
      items: [
        "Gespräche und Zuhören",
        "Gemeinsame Spaziergänge",
        "Begleitung bei Freizeitaktivitäten",
        "Unterstützung bei Hobbys",
        "Gemeinsames Spielen und Lesen",
        "Begleitung zu kulturellen Veranstaltungen",
        "Unterstützung bei der Pflege sozialer Kontakte",
        "Hilfe bei der Nutzung moderner Kommunikationsmittel"
      ]
    }
  ];

  const advantages = [
    {
      title: "Rundum-Betreuung",
      description: "Ihr Angehöriger wird 24 Stunden am Tag, 7 Tage die Woche professionell betreut und unterstützt."
    },
    {
      title: "Vertraute Umgebung",
      description: "Die Betreuung findet in der gewohnten häuslichen Umgebung statt, was die Lebensqualität erheblich steigert."
    },
    {
      title: "Flexible Anpassung",
      description: "Die Betreuung wird individuell auf die Bedürfnisse und Wünsche Ihres Angehörigen abgestimmt."
    },
    {
      title: "Entlastung der Familie",
      description: "Sie als Angehörige werden entlastet und können sich auf die schönen Momente konzentrieren."
    },
    {
      title: "Kosteneffizient",
      description: "Die 24-Stunden-Betreuung ist oft günstiger als ein Pflegeheim und bietet mehr individuelle Zuwendung."
    },
    {
      title: "Qualifiziertes Personal",
      description: "Unsere Betreuerinnen sind erfahren, qualifiziert und sprechen Deutsch."
    }
  ];

  const requirements = [
    {
      title: "Für wen ist die 24-Stunden-Betreuung geeignet?",
      items: [
        "Senioren, die Unterstützung im Alltag benötigen",
        "Menschen mit Pflegebedürftigkeit",
        "Personen nach Operationen oder Krankenhausaufenthalten",
        "Menschen mit chronischen Erkrankungen",
        "Personen mit Demenz oder Alzheimer",
        "Menschen mit körperlichen Einschränkungen",
        "Senioren, die nicht mehr alleine leben möchten",
        "Personen, die eine Alternative zum Pflegeheim suchen"
      ]
    },
    {
      title: "Was wird benötigt?",
      items: [
        "Ein eigenes Zimmer für die Betreuungskraft",
        "Grundlegende Haushaltsausstattung",
        "Internetanschluss (für Kommunikation)",
        "Ausreichend Platz für zwei Personen",
        "Grundlegende Mobilität im Haushalt",
        "Klar definierte Erwartungen und Wünsche",
        "Offenheit für eine neue Bezugsperson",
        "Bereitschaft zur Zusammenarbeit"
      ]
    }
  ];

  const faqs = [
    {
      question: "Was kostet die 24-Stunden-Betreuung?",
      answer: "Die Kosten für die 24-Stunden-Betreuung variieren je nach individuellem Betreuungsbedarf. In der Regel liegen sie zwischen 2.500€ und 3.500€ monatlich. Wir beraten Sie gerne persönlich und erstellen ein maßgeschneidertes Angebot."
    },
    {
      question: "Wie lange dauert die Vermittlung einer Betreuungskraft?",
      answer: "Die Vermittlung einer passenden Betreuungskraft dauert in der Regel 2-4 Wochen. In dringenden Fällen können wir auch schneller vermitteln."
    },
    {
      question: "Was passiert bei Krankheit oder Urlaub der Betreuungskraft?",
      answer: "Wir stellen sicher, dass immer eine Vertretung zur Verfügung steht. Bei Krankheit oder Urlaub der Betreuungskraft wird diese umgehend durch eine qualifizierte Vertretung ersetzt."
    },
    {
      question: "Welche Qualifikationen haben die Betreuungskräfte?",
      answer: "Unsere Betreuungskräfte verfügen über eine fundierte Ausbildung im Pflegebereich und mehrjährige Berufserfahrung. Sie sprechen Deutsch und werden regelmäßig weitergebildet."
    },
    {
      question: "Kann ich die Betreuungskraft selbst auswählen?",
      answer: "Ja, Sie haben die Möglichkeit, die vorgeschlagene Betreuungskraft kennenzulernen und sich für oder gegen sie zu entscheiden. Wir legen großen Wert auf eine gute Passung zwischen Betreuer und Betreutem."
    },
    {
      question: "Wie wird die Betreuung finanziert?",
      answer: "Die Finanzierung kann über verschiedene Wege erfolgen: Pflegeversicherung, Pflegegeld, Pflegesachleistungen, private Zuzahlungen oder eine Kombination dieser Möglichkeiten. Wir beraten Sie gerne zu den verschiedenen Finanzierungsmöglichkeiten."
    },
    {
      question: "Was passiert bei einem Notfall?",
      answer: "Unsere Betreuungskräfte sind in Erster Hilfe geschult und wissen, wie sie in Notfällen reagieren müssen. Sie haben direkten Kontakt zu uns und können bei Bedarf schnell weitere Hilfe organisieren."
    },
    {
      question: "Wie oft wechseln die Betreuungskräfte?",
      answer: "In der Regel bleibt eine Betreuungskraft für mindestens 3 Monate. Der Wechsel erfolgt dann meist aufgrund von Urlaub oder persönlichen Gründen. Wir bemühen uns um Kontinuität in der Betreuung."
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
            24-STUNDEN-BETREUUNG
            <div className="absolute h-1 w-12 bg-[#4CAF50] rounded-full left-1/2 -translate-x-1/2 -bottom-1"></div>
          </span>
          <h2>
            <span className="block">Professionelle Rundum-Betreuung</span>
            <span className="block">in den eigenen vier Wänden</span>
          </h2>
          <p className="body-text mt-4 max-w-3xl mx-auto">
            Wir bieten Ihnen eine umfassende 24-Stunden-Betreuung, die Ihren Angehörigen ein selbstbestimmtes Leben in der gewohnten Umgebung ermöglicht. Unsere erfahrenen Betreuerinnen stehen rund um die Uhr zur Verfügung.
          </p>
        </div>

        {/* Main Image */}
        <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-xl mb-16">
          <Image
            src="/2.jpg"
            alt="24-Stunden-Betreuung"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
            Unsere Leistungen im Überblick
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-[#4CAF50]/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Services */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
            Unsere Leistungen im Detail
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailedServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-green-100"
              >
                <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-[#4CAF50] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
            Voraussetzungen und Anforderungen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((requirement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-green-100"
              >
                <h4 className="text-xl font-semibold mb-4">{requirement.title}</h4>
                <ul className="space-y-3">
                  {requirement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-[#4CAF50] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Advantages Section */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
            Vorteile der 24-Stunden-Betreuung
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold mb-3">{advantage.title}</h4>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
            So funktioniert die Vermittlung
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
              <div className="text-[#4CAF50] text-3xl font-bold mb-4">1</div>
              <h4 className="text-xl font-semibold mb-3">Erstes Gespräch</h4>
              <p className="text-gray-600">
                Wir lernen Sie und Ihre Situation kennen und besprechen Ihre individuellen Anforderungen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
              <div className="text-[#4CAF50] text-3xl font-bold mb-4">2</div>
              <h4 className="text-xl font-semibold mb-3">Passende Betreuungskraft</h4>
              <p className="text-gray-600">
                Wir suchen eine passende Betreuungskraft und stellen Ihnen diese vor.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
              <div className="text-[#4CAF50] text-3xl font-bold mb-4">3</div>
              <h4 className="text-xl font-semibold mb-3">Start der Betreuung</h4>
              <p className="text-gray-600">
                Nach Ihrer Zustimmung beginnt die Betreuung. Wir bleiben Ihr Ansprechpartner.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
            Häufig gestellte Fragen
          </h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-green-100"
              >
                <h4 className="text-xl font-semibold mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#4CAF50]/10 to-[#4CAF50]/20 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4CAF50]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Lassen Sie uns gemeinsam Ihr Leben erleichtern
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Gespräch. Wir beraten Sie gerne und finden gemeinsam die beste Lösung für Ihre Situation.
            </p>
            <Link
              href="/anfrage"
              className="inline-block px-8 py-3 bg-[#4CAF50] text-white rounded-lg hover:bg-[#43A047] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Jetzt Beratungsgespräch vereinbaren
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 