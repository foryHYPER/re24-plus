import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

import Navbar2 from './components/Navbar-2';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RE-24 Plus - Häusliche Pflege und Betreuung",
  description: "Ihr zuverlässiger Partner für häusliche Pflege und Betreuung in Speyer und Umgebung.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Navbar2 />
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
