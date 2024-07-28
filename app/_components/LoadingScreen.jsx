import Image from "next/image";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
function LoadingScreen() {
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.to(".loading-screen .logo_white", {
        opacity: 1,
      })
        .from(".loading-screen img", {
          y: 100,
        })
        .to(".loading-screen .logo_purple", {
          opacity: 1,
        })
        .to(".loading-screen", {
          opacity: 0,
          zIndex: 0,
          delay: 0.5,
        });
    },
    {},
    []
  );
  return (
    <div className="loading-screen bg-background h-screen w-screen flex justify-center items-center   z-[10000]  fixed">
      <Image
        className="logo_purple flex justify-center items-center  opacity-0 absolute z-10"
        src={"/logo.svg"}
        alt={"logo"}
        width={200}
        height={200}
      />
      <Image
        className=" logo_white flex justify-center items-center opacity-0 absolute "
        src={"/logo-white.svg"}
        alt={"logo"}
        width={200}
        height={200}
      />
    </div>
  );
}

export default LoadingScreen;
