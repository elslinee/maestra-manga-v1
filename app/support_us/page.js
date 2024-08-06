"use client";

import Image from "next/image";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function page() {
  useGSAP(() => {
    const tl = gsap.timeline({});
    tl.from(".join_us-page  .container .text ", {
      delay: 1.5,
      opacity: 0,
      y: 100,
    })
      .from(".join_us-page  .container .link", {
        delay: 0,
        opacity: 0,
      })
      .from(".join_us-page  .container .img-holder", {
        delay: 0,
        opacity: 0,
      });
  });

  return (
    <div className="join_us-page lg:pt-[22rem] pt-[7.5rem] text-white text-2xl">
      <div className="container  ">
        <div className="flex   relative   justify-between w-full items-center ">
          <div className="img z-[4] absolute 2xl:block hidden right-0">
            <div className="img-holder z-[4]">
              <Image
                src="/support_image.png"
                alt="join_image"
                height={733}
                width={500}
                className="h-[733px] z-[4]"
              />
            </div>
          </div>
          <div className="text  w-full  items-end flex flex-col ">
            <div className="w-full mb-3 z-[-1] py-6 px-12 gap-8 flex   2xl:justify-end justify-end rounded-[16px] bg-black/40  ">
              <p className="xl:text-[32px]  text-[20px]     font-semibold    2xl:leading-[50px] leading-[40px] max-w-[880px]">
                يُسعدنا نحن فريق مايسترا أن نستمر في تقديم مُختلف الأعمال
                الآسيوية مُترجمة ومُجهزة خصيصًا لكم يا مُحبي مايسترا المُخلصين.
                سنبذل قصارى جهدنا لكي نستمر في تقديم الأفضل دائمًا، ويمكنك أن
                تُساعدنا في ضمان استمراريتنا واستمرارية أعمالنا.
              </p>
            </div>
            <div className="flex  relative  justify-end w-full 2xl:gap-4 items-center  bg-black/40  2xl:py-6 2xl:px-12 py-3  px-4 rounded-[16px] z-[1]">
              <div className="img  z-[4]  absolute 2xl:hidden block right-[-50px] bottom-[-250px]">
                <div className="img-holder z-[4] ">
                  <Image
                    src="/support_image.png"
                    alt="join_image"
                    height={350}
                    width={420}
                    className="xl:h-[650px] z-[4] xl:w-[420px] h-[350px] w-[220px]"
                  />
                </div>
              </div>
              <span className="text-[#fb5d63]   text-[14px] 2xl:text-[25px]  flex max-w-[170px]  leading-[25px] lg:max-w-[100%]  items-center">
                اي مساهمة منك ستصنع فرقًا مهمًا، يمكنك دعم الفريق من هنا :
              </span>
              <a href="https://Ko-fi.com/maestramanga" className=" ">
                <Image
                  src="/kofi.png"
                  alt="discord"
                  height={44}
                  width={170}
                  className="2xl:h-[61px]  h-[25px] 2xl:w-[170px] w-[60px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
