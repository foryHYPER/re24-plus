'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8">
        <div className="flex items-center justify-between relative">
          {/* Left - Logo */}
          <div className="hidden md:flex items-center w-auto md:w-1/4">
            <Link href="/" className="block">
              <div
                className={`w-40 md:w-48 transition-all duration-300 transform ${
                  mounted && isOpen
                    ? 'opacity-0 invisible -translate-y-4 lg:opacity-100 lg:visible lg:translate-y-0'
                    : 'opacity-100 visible translate-y-0'
                } hidden max-[1021px]:block max-[1021px]:opacity-0 max-[1021px]:invisible`}
              >
                <Image
                  src="/logo.png"
                  alt="RE-24 Plus Logo"
                  width={240}
                  height={90}
                  className="w-auto h-auto"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Center - Navigation Items */}
          <div className="flex items-center justify-center space-x-8 lg:space-x-12">
            <Link href="/" className="text-white hover:text-gray-200 text-lg xl:text-2xl font-medium whitespace-nowrap transition-colors">
              Home
            </Link>
            <Link href="/24-stunden-betreuung" className="text-white hover:text-gray-200 text-lg xl:text-2xl font-medium whitespace-nowrap transition-colors">
              24 Stunden Betreuung
            </Link>
            <Link href="/kosten" className="text-white hover:text-gray-200 text-lg xl:text-2xl font-medium whitespace-nowrap transition-colors">
              Kosten & Überblick
            </Link>
            <Link href="/ueber-uns" className="text-white hover:text-gray-200 text-lg xl:text-2xl font-medium whitespace-nowrap transition-colors">
              Über uns
            </Link>
          </div>

          {/* Right - Contact Button */}
          <div className="hidden md:flex w-auto md:w-1/4 justify-end">
            <div
              className={`transition-all duration-300 transform ${
                mounted && isOpen
                  ? 'opacity-0 invisible -translate-y-4 lg:opacity-100 lg:visible lg:translate-y-0'
                  : 'opacity-100 visible translate-y-0'
              } hidden max-[1021px]:block max-[1021px]:opacity-0 max-[1021px]:invisible`}
            >
              <Link href="/anfrage" className="inline-block">
                <button className="bg-[#e8f2eb] text-black px-6 md:px-8 lg:px-10 py-2 md:py-3 lg:py-4 rounded-full hover:bg-white transition-all text-base md:text-xl lg:text-2xl whitespace-nowrap shadow-lg hover:shadow-xl">
                  Anfrage
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors relative z-[60] ml-auto"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={mounted && isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/90 backdrop-blur-lg transition-all duration-300 z-[55] ${
            mounted && isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className={`flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8 transform transition-transform duration-300 ${
              mounted && isOpen ? 'translate-y-0' : '-translate-y-8'
            }`}
          >
            <Link href="/" className="text-white hover:text-gray-200 text-center text-2xl sm:text-3xl font-medium transition-colors">
              Home
            </Link>
            <Link href="/24-stunden-betreuung" className="text-white hover:text-gray-200 text-center text-2xl sm:text-3xl font-medium transition-colors">
              24 Stunden Betreuung
            </Link>
            <Link href="/kosten" className="text-white hover:text-gray-200 text-center text-2xl sm:text-3xl font-medium transition-colors">
              Kosten & Überblick
            </Link>
            <Link href="/ueber-uns" className="text-white hover:text-gray-200 text-center text-2xl sm:text-3xl font-medium transition-colors">
              Über uns
            </Link>
            <Link href="/anfrage" className="bg-[#e8f2eb] text-black px-8 py-3 rounded-full hover:bg-white transition-all text-xl sm:text-2xl shadow-lg hover:shadow-xl mt-4">
              Anfrage
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}