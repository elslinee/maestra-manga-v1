"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Cairo, Alata } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import LoadingScreen from "./_components/LoadingScreen";
import { useEffect, useState } from "react";

const cairo = Cairo({ subsets: ["arabic"] });
const alata = Alata({ subsets: ["latin"], weight: "400" });

const metadata = {
  title: "مايسترا مانجا",
  description: "مايسترا مانجا",
};

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleWindowLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleWindowLoad);
    }

    return () => {
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);
  return (
    <html lang="ar">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/svg" sizes="32x32" href="/ico.svg" />
      </head>
      <body className={cairo.className}>
        {loading && <LoadingScreen />}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
