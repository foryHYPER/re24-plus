import Image from 'next/image';
import React from 'react';

export default function Mission() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Image */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden group shadow-xl">
            <div className="absolute inset-0 bg-[#FF5F4C]/0 group-hover:bg-[#FF5F4C]/10 transition-colors duration-300 z-10"></div>
            <Image
              src="/Mission.jpg"
              alt="Senior care professional with patient"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col">
            <span className="text-[#4CAF50] font-semibold mb-2 sm:mb-4 tracking-wide uppercase text-sm sm:text-base">
              UNSER ZIEL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Wir machen einen Unterschied
              <br className="hidden sm:block" />
              im Leben von Senioren
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Durch unsere jahrelange Erfahrung wissen wir, wie wichtig die eigene Umgebung für ältere Menschen ist. Vertraute Geräusche, bekannte Gerüche, geübte Handgriffe, aber auch besondere Erinnerungen im Haus sind für sie fester Bestandteil des Lebens geworden - und sollen es auch bleiben.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Unsere <span className="font-semibold text-gray-900">private Seniorenbetreuung zu Hause</span> ermöglicht es Senioren in ihren eigenen vier Wänden zu leben, während sie umfassende Unterstützung und Pflege von uns erhalten. Gleichzeitig entlasten wir die Angehörigen, die sich darauf verlassen können, dass ihre Lieben in guten Händen sind und individuell betreut werden.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Unsere Seniorenbetreuer legen großen Wert darauf, dass sich jeder bei ihnen aufgehoben fühlt. Wir bieten eine zuverlässige, würdevolle und persönliche Betreuung, die genau auf die Bedürfnisse und den Pflegegrad der pflegebedürftigen Person abgestimmt ist – <span className="font-semibold text-gray-900">damit Sie und Ihre Angehörigen sich jederzeit sicher und versorgt wissen</span>.
              </p>
            </div>
            <button className="bg-[#4CAF50] text-white px-6 sm:px-8 py-3 rounded-full mt-6 sm:mt-8 self-center lg:self-start hover:bg-[#43A047] transition-all duration-300 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105">
              Unverbindliches Angebot anfordern
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
