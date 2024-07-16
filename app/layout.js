import { Cairo, Alata } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const cairo = Cairo({ subsets: ["arabic"] });
const alata = Alata({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "مايسترا مانجا",
  description: "مايسترا مانجا",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head>
        <link rel="icon" type="image/svg" sizes="32x32" href="/ico.svg" />
      </head>
      <body className={cairo.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
