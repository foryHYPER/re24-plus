import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#008080] text-white py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="w-40">
              <Image
                src="/logo.png"
                alt="RE-24 Plus Logo"
                width={160}
                height={60}
                className="w-auto h-auto"
              />
            </div>
            <p className="text-gray-200">
              Ihr zuverlässiger Partner für häusliche Pflege und Betreuung in Speyer und Umgebung.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Schnellzugriff</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-200 hover:text-white transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/24-stunden-betreuung" className="text-gray-200 hover:text-white transition-colors">
                  24 Stunden Betreuung
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="text-gray-200 hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/kosten" className="text-gray-200 hover:text-white transition-colors">
                  Kosten & Überblick
                </Link>
              </li>
              <li>
                <Link href="/anfrage" className="text-gray-200 hover:text-white transition-colors">
                  Anfrage
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Obere Langgasse 11, 67346 Speyer</span>
              </li>
              <li>
                <a href="tel:062329007763" className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  06232 9007763
                </a>
              </li>
              <li>
                <a href="mailto:info@re24plus.com" className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@re24plus.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Öffnungszeiten</h3>
            <ul className="space-y-4">
              <li>
                <span className="block text-gray-200">Montag - Freitag</span>
                <span className="font-medium">08:30 - 15:00 Uhr</span>
              </li>
              <li>
                <span className="block text-gray-200">24/7 Rufbereitschaft</span>
                <a href="tel:01718325157" className="font-medium hover:text-gray-200 transition-colors">
                  0171 8325157
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-200">
              © {currentYear} RE-24 Plus. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-6">
              <Link href="/impressum" className="text-gray-200 hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-gray-200 hover:text-white transition-colors">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-gray-200 hover:text-white transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 