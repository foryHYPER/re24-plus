import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    image: "/marcial.jpg",
    role: "Betreuung"
  },
  {
    image: "/MA3.jpg",
    role: "Pflege"
  },
  {
    image: "/Ellen.jpg",
    role: "Beratung"
  },
  {
    image: "/MA5.jpg",
    role: "Management"
  }
];

export default function TeamSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#008080]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#4CAF50]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-gray-900">
            UNSER TEAM
          </h2>
          <p className="body-text max-w-3xl mx-auto">
            Wir sind RE-24 Plus – Ihr erfahrener Partner für professionelle und individuelle häusliche Betreuung von pflegebedürftigen Personen im Rhein-Neckar-Kreis.
          </p>
        </div>

        {/* Main Content Area */}
        <div>
          {/* Team Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group relative"
              >
                {/* Image Container */}
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={`Team member - ${member.role}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                  
                  {/* Role Badge */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg">
                    <span className="text-[#008080] font-medium">{member.role}</span>
                  </div>

                  {/* Decorative circle */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#008080]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="inline-flex items-center gap-2 bg-[#008080] text-white px-8 py-4 rounded-lg hover:bg-[#006666] transition-colors group">
              <span>Lernen Sie uns kennen</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 