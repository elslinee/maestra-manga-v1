"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Cairo, Baloo_2 } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import LoadingScreen from "./_components/LoadingScreen";
import { useEffect, useState } from "react";
import { MangaListContext } from "./_context/MangaListContext";
import mangaListApis from "./_utils/mangaListApis";
import { SkeletonTheme } from "react-loading-skeleton";
import { AnimatePresence } from "framer-motion";
import SearchPage from "./_components/SearchPage";
// import Transition from "./_components/";

const cairo = Cairo({ subsets: ["arabic"] });
const baloo_2 = Baloo_2({ subsets: ["latin"] });

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
          <body className={cairo.className}>
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
