import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative py-32 bg-gray-50">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/public/hero.jpg"
          alt="Hintergrund"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Unsere Leistungen für die häusliche Betreuung
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Jeder Mensch ist einzigartig. Unsere umfassenden Leistungen für die häusliche Betreuung sind auf Ihre individuellen Bedürfnisse und Wünsche angepasst!
          </p>
          <Link 
            href="/anfrage" 
            className="inline-block bg-[#4CAF50] hover:bg-[#43A047] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Unverbindliches Angebot anfordern
          </Link>
        </div>
      </div>
    </section>
  );
} 