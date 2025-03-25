import Image from 'next/image';
import React from 'react';

const services = [
  {
    title: "Personal Care",
    description: "Professional assistance with daily living activities and personal hygiene."
  },
  {
    title: "Medical Care",
    description: "Skilled nursing and medical support in the comfort of your home."
  },
  {
    title: "Companion Care",
    description: "Emotional support and social interaction for better mental well-being."
  }
];

export default function Services() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#FF5F4C] font-semibold mb-4 tracking-wide block">
            SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Most Important Thing<br />
            For Us Is Love And Care
          </h2>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[#FF5F4C] w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-[#FF5F4C] hover:text-white transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[#FF5F4C] w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-[#FF5F4C] hover:text-white transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <div className="relative h-[400px]">
                  <Image
                    src={`/service-${index + 1}.jpg`}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 