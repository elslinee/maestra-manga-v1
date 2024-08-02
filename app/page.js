"use client";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Slider from "./_components/Slider";
import MangaList from "./_components/MangaList";
import Ad from "./_components/Ad";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  // The Animation
  useGSAP(() => {
    gsap.from(".ad-wall ", {
      delay: 1.5,
      opacity: 0,
      y: 100,
    });
    gsap.from(".slider-section .slider ", {
      scrollTrigger: {
        trigger: ".slider-section",
        start: "top center",
        end: "bottom center",
        markers: false,
        scrub: false,
      },
      opacity: 0,
      y: 100,
    });
    gsap.from(".manga-list-section .cards ", {
      scrollTrigger: {
        trigger: ".manga-list-section",
        start: "top center",
        end: "bottom center",
        markers: false,
        scrub: false,
      },
      opacity: 0,
      y: 100,
    });
  });
  return (
    <main>
      <Ad />
      <Slider />
      <MangaList />
    </main>
  );
}
