import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/Hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative container mx-auto px-4 sm:px-6 h-screen flex flex-col justify-center items-center">
        <div className="max-w-[95%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl text-white mt-10 sm:mt-16 md:mt-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            Seniorenbetreuung zu Hause{" "}
            <br className="hidden sm:block" />
            liebevoll und persönlich
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8">
            RE-24 Plus Bundesweit- Ihr Betreuungsdienst in der Nähe
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <button className="bg-[#4CAF50] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-[#43A047] transition-colors">
              Anfrage
            </button>
            <button className="p-3 sm:p-4 rounded-full border border-[#4CAF50] hover:bg-white/10 transition-all">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 