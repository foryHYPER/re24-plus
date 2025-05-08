import React from 'react';
import Image from 'next/image';

export default function InformationSection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                RE-24 Plus steht Ihnen bei der häuslichen Betreuung zur Seite
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Als Ihr verlässlicher Partner spezialisiert sich RE-24 Plus auf die Bereitstellung der häuslichen Betreuung. Unser Fokus liegt dabei auf der Vermittlung von hochqualitativen, individuell zugeschnittenen Betreuungsleistungen, die in den Alltag der pflegebedürftigen Person nahtlos integriert werden.
                </p>
                <p className="text-gray-600 mb-6">
                  Dank der ständigen Anwesenheit unserer Betreuungskraft im Rahmender 24-Stunden-Betreuung ist im Bedarfsfall immer jemand erreichbar – auch nachts. Diese Form der häuslichen Betreuung bietet ein Maximum an Sicherheit und entlastet Angehörige erheblich.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/care-team.jpg"
                alt="RE-24 Plus Betreuungsteam"
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