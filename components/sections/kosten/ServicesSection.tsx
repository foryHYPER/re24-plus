import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 24h Betreuung */}
          <div className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#4CAF50]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">24 Stunden Betreuung</h2>
              <p className="text-gray-600 mb-6">
                Mit unserer 24-Stunden-Betreuung sorgen wir dafür, dass pflegebedürftige Personen rund um die Uhr die notwendige Unterstützung erhalten. Unsere individuell zugeschnittene und professionelle Betreuung gewährleistet ihre Sicherheit und ihr Wohlbefinden zu jeder Tages- und Nachtzeit.
              </p>
              <Link href="/24-stunden-betreuung" className="text-[#4CAF50] font-semibold hover:text-[#43A047] transition-colors">
                Mehr erfahren →
              </Link>
            </div>
            <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
              <Image
                src="/images/24h-care.jpg"
                alt="24 Stunden Betreuung"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Beratung */}
          <div className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#4CAF50]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Beratung</h2>
              <p className="text-gray-600 mb-6">
                Mit unserer professionellen Beratung unterstützen wir Sie dabei, die passenden Betreuungsleistungen für Ihre individuellen Bedürfnisse zu finden. Lassen Sie sich von unseren Experten zur häuslichen Betreuung beraten.
              </p>
              <Link href="/anfrage" className="text-[#4CAF50] font-semibold hover:text-[#43A047] transition-colors">
                Jetzt anfragen →
              </Link>
            </div>
            <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
              <Image
                src="/images/consultation.jpg"
                alt="Beratung"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 