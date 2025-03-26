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
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#008080]/10"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-[#FF7F50]/10"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-[#008080]/5"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              These services aim to enhance<br />
              the quality of <span className="text-[#008080]">Life of Seniors</span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Image container */}
                <div className="relative h-64 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  {/* Decorative circles */}
                  <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-[#008080]/20"></div>
                  {index % 2 === 0 && (
                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[#FF7F50]/20"></div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[#008080] text-sm font-semibold tracking-wider">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 