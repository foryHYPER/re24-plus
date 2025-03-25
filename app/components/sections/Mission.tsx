import Image from 'next/image';
import React from 'react';

export default function Mission() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Image */}
          <div className="relative h-[600px] rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-[#FF5F4C]/0 group-hover:bg-[#FF5F4C]/10 transition-colors duration-300 z-10"></div>
            <Image
              src="/mission.jpg"
              alt="Senior care professional with patient"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col">
            <span className="text-[#FF5F4C] font-semibold mb-4 tracking-wide">
              OUR MISSION
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We Make A Difference<br />
              In Senior Lives
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We start by making the patient assessment and follow through. Directing the Home Care program every step of the way, until the patient is discharged.
            </p>
            <button className="bg-[#FF5F4C] text-white px-8 py-3 rounded-lg mt-8 self-start hover:bg-[#ff4a34] transition-colors">
              Learn About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 