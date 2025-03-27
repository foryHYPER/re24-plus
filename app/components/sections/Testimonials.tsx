import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient's Daughter",
    image: "/MA2.jpg",
    content: "The care and attention my mother receives is exceptional. The staff is professional, caring, and always goes above and beyond."
  },
  {
    name: "Michael Chen",
    role: "Patient",
    image: "/MA3.jpg",
    content: "I've been receiving care for over a year now, and I couldn't be happier. The team is like family to me."
  },
  {
    name: "Emily Rodriguez",
    role: "Family Member",
    image: "/MA4.jpg",
    content: "The quality of care and the dedication of the staff have made a significant difference in our family's life."
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-14 lg:mb-16">
          <span className="text-[#4CAF50] text-sm sm:text-base font-semibold mb-2 sm:mb-3 md:mb-4 tracking-wide block uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-4 sm:mb-6">
            <span className="block">What Our Patients Say</span>
            <span className="block">About Our Care</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Real stories from families who experienced our dedication to exceptional healthcare services.
          </p>
        </div>

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
    </section>
  );
} 