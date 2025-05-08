'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// @layout.md beachten: Nav-Items zentriert, großes Logo rechts, Topbar zentriert, nur CTA
export default function NavbarV3() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full shadow-md border-b border-gray-100 bg-white">
      {/* Topbar mittig */}
      <div className="hidden md:flex justify-center items-center px-8 h-10 text-sm bg-gray-50 border-b border-gray-200">
        <div className="flex items-center gap-8 text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>info@re24plus.de</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+49 (0) 123 456 789</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
              </svg>
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Hauptnavigation */}
      <div className="flex items-center justify-between px-4 md:px-12 h-24 relative">
        {/* Mobile Burger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menü öffnen"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Nav-Items mittig */}
        <nav className="hidden md:flex gap-10 items-center flex-1 justify-center">
          <Link href="/" className="text-lg font-medium text-gray-700 hover:text-[#4CAF50] transition-colors">Home</Link>
          <Link href="/about" className="text-lg font-medium text-gray-700 hover:text-[#4CAF50] transition-colors">Über Uns</Link>
          <Link href="/services" className="text-lg font-medium text-gray-700 hover:text-[#4CAF50] transition-colors">Leistungen</Link>
          <Link href="/pricing" className="text-lg font-medium text-gray-700 hover:text-[#4CAF50] transition-colors">Preise</Link>
        </nav>

        {/* CTA rechts neben Nav-Items */}
        <div className="hidden md:flex items-center gap-6 ml-8">
          <Link href="/contact" className="bg-[#4CAF50] hover:bg-[#43A047] text-white px-8 py-3 rounded-full font-semibold shadow transition-colors text-lg">Anfrage</Link>
        </div>

        {/* Großes Logo ganz rechts */}
        <Link href="/" className="ml-8 flex-shrink-0 flex items-center justify-center">
          <div className="relative w-16 h-16 md:w-32 md:h-32">
            <Image src="/logo.png" alt="RE-24 Plus Logo" fill className="object-contain" priority />
          </div>
        </Link>
      </div>

      {/* Mobile Menü */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center pt-24 gap-8 text-lg font-semibold animate-fade-in">
          <Link href="/" className="hover:text-[#4CAF50] transition-colors" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-[#4CAF50] transition-colors" onClick={() => setMobileOpen(false)}>Über Uns</Link>
          <Link href="/services" className="hover:text-[#4CAF50] transition-colors" onClick={() => setMobileOpen(false)}>Leistungen</Link>
          <Link href="/pricing" className="hover:text-[#4CAF50] transition-colors" onClick={() => setMobileOpen(false)}>Preise</Link>
          <Link href="/contact" className="bg-[#4CAF50] hover:bg-[#43A047] text-white px-8 py-2 rounded-full shadow transition-colors" onClick={() => setMobileOpen(false)}>Anfrage</Link>
          <div className="flex gap-4 mt-2">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
              </svg>
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 