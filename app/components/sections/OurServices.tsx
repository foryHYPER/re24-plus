import React from 'react';
import Link from 'next/link';

const services = [
  {
    icon: (
      <svg className="w-12 h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "In-Home Care",
    description: "Personalized care in the comfort of your loved one's home, including assistance with daily activities, medication management, and companionship."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Assisted Living",
    description: "A safe and supportive environment for seniors who require assistance with daily living but still wish to maintain their independence."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Memory Care",
    description: "Specialized care for seniors with Alzheimer's or other forms of dementia, focused on promoting cognitive function and ensuring safety and comfort."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Respite Care",
    description: "Short-term care to provide relief for family caregivers, allowing them to rest while ensuring your loved one receives high-quality care."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Hospice Care",
    description: "Compassionate end-of-life care that focuses on providing comfort and dignity, supporting both the senior and their family during this difficult time."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Palliative Care",
    description: "Focused on providing relief from the symptoms and stress of serious illness, palliative care enhances quality of life by addressing physical, emotional, and spiritual needs."
  }
];

export default function OurServices() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Our services</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl">
                At The ElderWell, we offer a comprehensive range of services designed to meet the unique needs of seniors, ensuring they receive the care and support they deserve.
              </p>
            </div>
            <button className="bg-[#1B2A3B] text-white px-6 py-3 rounded-full hover:bg-[#2C3E50] transition-colors">
              All services
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <Link 
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-[#4CAF50] font-medium hover:text-[#43A047] transition-colors"
                >
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 