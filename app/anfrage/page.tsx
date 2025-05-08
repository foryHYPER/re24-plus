import React from 'react';
import RequestForm from '@/app/components/forms/RequestForm';

export default function AnfragePage() {
  return (
    <section className="relative min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#4CAF50]/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#4CAF50]/10 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-slow" />
      
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 relative">
          <span className="section-subtitle relative inline-block">
            ANFRAGE
            <div className="absolute h-1 w-12 bg-[#4CAF50] rounded-full left-1/2 -translate-x-1/2 -bottom-1"></div>
          </span>
          <h2>
            <span className="block">Ihre Anfrage für die Seniorenbetreuung</span>
          </h2>
          <p className="body-text mt-4 max-w-2xl mx-auto">
            Bitte füllen Sie das Formular aus, damit wir Ihnen ein maßgeschneidertes Angebot unterbreiten können. Wir werden uns schnellstmöglich bei Ihnen melden.
          </p>
        </div>

        {/* Form Component */}
        <div className="bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden">
          <RequestForm />
        </div>
      </div>
    </section>
  );
} 