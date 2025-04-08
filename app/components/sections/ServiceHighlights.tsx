import React from 'react';
import Image from 'next/image';

const services = [
  {
    category: "ASSISTED LIVING",
    title: "Social activities",
    description: "Organizing social events, group outings, and recreational activities tailored",
    image: "/MA2.jpg"
  },
  {
    category: "PRIVATE NURSING",
    title: "Transportation services",
    description: "Assisting seniors with transportation to medical appointments, social outings",
    image: "/MA3.jpg"
  },
  {
    category: "PHYSICAL THERAPY",
    title: "Health monitoring",
    description: "Utilizing technology and remote monitoring systems to track vital signs, medication",
    image: "/MA4.jpg"
  },
  {
    category: "PHYSICAL THERAPY",
    title: "Caregiver support",
    description: "Assisting seniors with transportation to medical appointments, social outings",
    image: "/MA5.jpg"
  },
  {
    category: "PRIVATE NURSING",
    title: "Memory care",
    description: "Assisting seniors with transportation to medical appointments, social outings",
    image: "/MA2.jpg"
  },
  {
    category: "ASSISTED LIVING",
    title: "In-home care",
    description: "Utilizing technology and remote monitoring systems to track vital signs, medication",
    image: "/MA2.jpg"
  }
];

export default function ServiceHighlights() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full bg-[#008080]/10"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-full bg-[#FF7F50]/10"></div>
      <div className="absolute top-1/2 left-1/2 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 rounded-full bg-[#008080]/5"></div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2>
            <span className="block">These services aim to enhance</span>
            <span className="block">the quality of <span className="text-[#008080]">Life of Seniors</span></span>
          </h2>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image container */}
              <div className="relative h-48 sm:h-56 md:h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Decorative circles */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-[#008080]/20"></div>
                {index % 2 === 0 && (
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full bg-[#FF7F50]/20"></div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <span className="text-[#008080] text-xs sm:text-sm font-semibold tracking-wider">
                  {service.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-2 mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="body-text text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 