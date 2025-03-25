'use client';

import { useState } from 'react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          {/* Left - Logo */}
          <div className="flex items-center space-x-2 w-1/4">
            <svg 
              className="w-8 h-8 text-white" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
            </svg>
            <span className="text-white text-xl font-medium">Healthcare Institution</span>
          </div>

          {/* Center - Navigation Items */}
          <div className="hidden lg:flex items-center justify-center space-x-8 flex-1">
            <div className="group relative">
              <button className="text-white hover:text-gray-200 flex items-center space-x-1">
                <span>Demos</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="group relative">
              <button className="text-white hover:text-gray-200 flex items-center space-x-1">
                <span>About Us</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <button className="text-white hover:text-gray-200">Departments</button>
            <button className="text-white hover:text-gray-200">Services</button>
            <div className="group relative">
              <button className="text-white hover:text-gray-200 flex items-center space-x-1">
                <span>All Pages</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right - Contact Button */}
          <div className="w-1/4 flex justify-end">
            <button className="bg-[#e8f2eb] text-black px-6 py-2.5 rounded-full hover:bg-white transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg 
              className="w-6 h-6" 
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
          <div className="lg:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <button className="text-white hover:text-gray-200 text-center">Demos</button>
              <button className="text-white hover:text-gray-200 text-center">About Us</button>
              <button className="text-white hover:text-gray-200 text-center">Departments</button>
              <button className="text-white hover:text-gray-200 text-center">Services</button>
              <button className="text-white hover:text-gray-200 text-center">All Pages</button>
              <button className="bg-[#e8f2eb] text-black px-6 py-2.5 rounded-full hover:bg-white transition-colors text-center">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 