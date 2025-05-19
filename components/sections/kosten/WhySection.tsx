import React from 'react';
import Image from 'next/image';

export default function WhySection() {
  const reasons = [
    "Langjährige Fachkenntnis in der häuslichen Betreuung",
    "Ganzheitliche Versorgung, abgestimmt auf individuelle Bedürfnisse",
    "Flexible Lösungen nach Ihren spezifischen Anforderungen",
    "Diskrete und verantwortungsvolle Versorgung in vertrauter Umgebung",
    "Kompetente Betreuungskräfte aus Europa"
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/quality-care.jpg"
                alt="Qualität in der Pflege"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Darum ist RE-24 Plus Ihr perfekter Partner für die häusliche Betreuung
              </h2>
              <p className="text-gray-600 mb-8">
                RE-24 Plus steht für eine erstklassige, individuelle und empathische häusliche Betreuung, die wir auf die einzigartigen Bedürfnisse und Lebensumstände jeder pflegebedürftigen Person abstimmen.
              </p>
              <ul className="space-y-4">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 