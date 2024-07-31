import Image from "next/image";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
function RouteScreen() {
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.to(".route-screen .logo_white", {
        opacity: 1,
      })
        .from(".route-screen img", {
          y: 100,
        })
        .to(".route-screen .logo_purple", {
          opacity: 1,
        })
        .to(".route-screen", {
          opacity: 0,
          zIndex: 0,
          display: "none",
        });
    },
    {},
    []
  );
  return (
    <div className="route-screen bg-background h-screen w-screen flex justify-center items-center   z-[10000] overflow-hidden  fixed">
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

export default RouteScreen;
