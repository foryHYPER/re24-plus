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
              src="/Mission.jpg"
              alt="Senior care professional with patient"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col">
            <span className="text-[#4CAF50] font-semibold mb-4 tracking-wide">
              UNSER ZIEL
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Wir machen einen Unterschied<br />
              im Leben von Senioren
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
            Durch unsere jahrelange Erfahrung wissen wir, wie wichtig die eigene Umgebung für ältere Menschen ist. Vertraute Geräusche, bekannte Gerüche, geübte Handgriffe, aber auch besondere Erinnerungen im Haus sind für sie fester Bestandteil des Lebens geworden - und sollen es auch bleiben. Unsere <span className="font-bold text-black">private Seniorenbetreuung zu Hause</span> ermöglicht es Senioren in ihren eigenen vier Wänden zu leben, während sie umfassende Unterstützung und Pflege von uns erhalten. Gleichzeitig entlasten wir die Angehörigen, die sich darauf verlassen können, dass ihre Lieben in guten Händen sind und individuell betreut werden. Unsere Seniorenbetreuer legen großen Wert darauf, dass sich jeder bei ihnen aufgehoben fühlt. Wir bieten eine zuverlässige, würdevolle und persönliche Betreuung, die genau auf die Bedürfnisse und den Pflegegrad der pflegebedürftigen Person abgestimmt ist – <span className="font-bold text-black">damit Sie und Ihre Angehörigen sich jederzeit sicher und versorgt wissen</span>.
            </p>
            <button className="bg-[#4CAF50] text-white px-8 py-3 rounded-lg mt-8 self-start hover:bg-[#43A047] transition-colors">
              Unverbindliches Angebot anfordern
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 