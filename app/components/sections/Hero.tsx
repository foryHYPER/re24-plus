import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative container mx-auto px-6 h-screen flex flex-col justify-center items-center">
        <div className="max-w-3xl text-white mt-20 text-center">
          <h1 className="text-6xl font-bold mb-6">
            We Are Committed To Your Health And Well-Being
          </h1>
          <p className="text-xl mb-8">
            Explore our website today and discover how we can partner with you on your journey to better health.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-[#FF5F4C] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#ff4a34] transition-colors">
              Learn More
            </button>
            <button className="p-4 rounded-full border border-white/30 hover:bg-white/10 transition-all">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 