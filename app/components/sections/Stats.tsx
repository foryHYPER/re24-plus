import Image from 'next/image';
import React from 'react';

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "500+", label: "Happy Patients" },
  { number: "50+", label: "Expert Staff" },
  { number: "24/7", label: "Support Available" }
];

export default function Stats() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FF5F4C] font-semibold mb-4 tracking-wide block uppercase">
            We are always close
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We Deliver The Highest<br />
            Quality In-Home Care
          </h2>
          <p className="text-gray-600 text-lg">
            Choosing us means entrusting the care of your loved ones to a dedicated and experienced team.
          </p>
        </div>

        {/* Profile Images */}
        <div className="flex justify-center mb-8">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="w-16 h-16 rounded-full border-4 border-white overflow-hidden relative group hover:z-10 transition-all duration-300">
                <div className="absolute inset-0 bg-[#FF5F4C]/0 group-hover:bg-[#FF5F4C]/20 transition-colors duration-300"></div>
                <Image
                  src={`/profile-${num}.jpg`}
                  alt={`Team member ${num}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="ml-4 flex items-center">
            <span className="text-lg">More</span>
            <span className="text-[#FF5F4C] font-bold text-2xl mx-1">2K</span>
            <span className="text-lg">Happy Patients</span>
          </div>
        </div>

        {/* Large Image */}
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-16 max-w-4xl mx-auto">
          <Image
            src="/care-quality.jpg"
            alt="Senior care quality"
            fill
            className="object-cover"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-[#FF5F4C] text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 