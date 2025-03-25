import Image from 'next/image';
import React from 'react';

export default function WhatWeOffer() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative h-[600px] rounded-lg overflow-hidden group">
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <Image
              src="/what-we-offer.jpg"
              alt="Senior care - What we offer"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
          </div>
          
          {/* Content */}
          <div className="relative h-full flex flex-col justify-center">
            <div className="max-w-3xl text-white">
              <span className="text-[#FF5F4C] font-semibold mb-4 tracking-wide block uppercase">
                What We Offer
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive Care<br />
                For Your Loved Ones
              </h2>
              <p className="text-lg mb-8">
                Our team of experienced professionals provides personalized care plans tailored to meet the unique needs of each patient.
              </p>
              <button className="bg-[#FF5F4C] text-white px-8 py-3 rounded-lg hover:bg-[#ff4a34] hover:scale-105 transition-all duration-300">
                Learn More About Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 