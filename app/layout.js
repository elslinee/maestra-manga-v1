"use client";

import "swiper/css";
import "swiper/css/navigation";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { SkeletonTheme } from "react-loading-skeleton";
import { AnimatePresence } from "framer-motion";
import SearchPage from "./_components/SearchPage";

const metadata = {
  title: "مايسترا مانجا",
  description: "مايسترا مانجا",
};

export default function RootLayout({ children }) {
  return (
    <AnimatePresence mode="wait">
      <SkeletonTheme baseColor="#252525" highlightColor="#2f2f2f">
        <html lang="ar">
          <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <link rel="icon" type="image/svg" sizes="32x32" href="/ico.svg" />
          </head>
          <body>
            <SearchPage />
            <Header />
            <div className="overlayBlur">
              {children}
              <Footer />
            </div>
          </body>
        </html>
      </SkeletonTheme>
    </AnimatePresence>
  );
}
