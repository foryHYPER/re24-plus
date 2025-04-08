import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Sarah Müller",
    role: "Tochter einer Patientin",
    image: "/MA2.jpg",
    content: "Die Pflege und Aufmerksamkeit, die meine Mutter erhält, ist außergewöhnlich. Das Personal ist professionell, fürsorglich und geht immer weit über das Übliche hinaus."
  },
  {
    name: "Michael Schmidt",
    role: "Patient",
    image: "/MA3.jpg",
    content: "Ich werde seit über einem Jahr betreut und könnte nicht glücklicher sein. Das Team ist wie eine Familie für mich."
  },
  {
    name: "Emilie Becker",
    role: "Familienmitglied",
    image: "/MA4.jpg",
    content: "Die Qualität der Pflege und das Engagement des Personals haben einen bedeutenden Unterschied im Leben unserer Familie gemacht."
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 min-h-[80vh]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="section-subtitle">
            Kundenstimmen
          </span>
          <h2>
            <span className="block">Was unsere Patienten sagen</span>
            <span className="block">über unsere Pflege</span>
          </h2>
          <p className="body-text">
            Echte Geschichten von Familien, die unser Engagement für herausragende Betreuungsleistungen erlebt haben.
          </p>
        </div>

        {/* Main Content Area */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 sm:p-7 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden relative mr-3 sm:mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="relative">
                  <svg 
                    className="absolute -top-3 -left-2 w-6 h-6 sm:w-8 sm:h-8 text-[#E8F5E9]" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed relative z-10">
                    {testimonial.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center space-x-2 mt-8 sm:mt-10 md:mt-12">
            <button className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#4CAF50]"></button>
            <button className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-300 hover:bg-[#4CAF50]/50 transition-colors"></button>
            <button className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-300 hover:bg-[#4CAF50]/50 transition-colors"></button>
          </div>
        </div>
      </div>
    </section>
  );
} 