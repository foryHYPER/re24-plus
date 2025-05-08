import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

import Navbar3 from './components/Navbar-2';  

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RE-24 Plus - Häusliche Betreuung",
  description: "Ihr zuverlässiger Partner für häusliche Pflege und Betreuung in Speyer und Umgebung.",
  icons: {
    icon: [
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ]
  }
};
  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Navbar3 />
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
