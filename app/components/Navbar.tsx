'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          {/* Left - Logo */}
          <div className="flex items-center space-x-2 w-1/4">
            <div className="w-48">
              <Image
                src="/logo.png"
                alt="RE-24 Plus Logo"
                width={240}
                height={90}
                className="w-auto h-auto"
              />
            </div>
          </div>

          {/* Center - Navigation Items */}
          <div className="hidden lg:flex items-center justify-center gap-12 flex-1">
            <button className="text-white hover:text-gray-200 text-2xl font-medium whitespace-nowrap">Home</button>
            <button className="text-white hover:text-gray-200 text-2xl font-medium whitespace-nowrap">24 Stunden Betreuung</button>
            <button className="text-white hover:text-gray-200 text-2xl font-medium whitespace-nowrap">Kosten & Überblick</button>
            <button className="text-white hover:text-gray-200 text-2xl font-medium whitespace-nowrap">Über uns</button>
          </div>

          {/* Right - Contact Button */}
          <div className="w-1/4 flex justify-end">
            <button className="bg-[#e8f2eb] text-black px-10 py-4 rounded-full hover:bg-white transition-colors text-2xl whitespace-nowrap">
              Anfrage
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg 
              className="w-8 h-8" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <div className="flex flex-col space-y-8">
              <button className="text-white hover:text-gray-200 text-center text-2xl font-medium">Home</button>
              <button className="text-white hover:text-gray-200 text-center text-2xl font-medium">24 Stunden Betreuung</button>
              <button className="text-white hover:text-gray-200 text-center text-2xl font-medium">Kosten & Überblick</button>
              <button className="text-white hover:text-gray-200 text-center text-2xl font-medium">Über uns</button>
              <button className="bg-[#e8f2eb] text-black px-10 py-4 rounded-full hover:bg-white transition-colors text-center text-2xl">
                Anfrage
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 