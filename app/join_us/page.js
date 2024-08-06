"use client";

import Image from "next/image";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function join_us() {
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
    <div className="join_us-page lg:pt-[14rem] pt-[7.5rem]  text-white text-2xl">
      <div className="container  ">
        <div className="flex  relative   justify-between w-full items-center ">
          <div className="text w-full ">
            <div className="bg-black/40 py-8 px-12 mb-3 rounded-[16px]">
              <h1 className="xl:text-[38px] text-[28px]  font-bold ">
                هل تريد الإنضمام لعائلة مايسترا مانجا؟
              </h1>
              <p className="xl:text-[28px]  text-[18px] font-semibold my-8   lg:leading-[50px] max-w-[870px]">
                تشكل فريق مايسترا مُنذ زمن سحيق، حيث إجتمعنا لنبحث عن أعظم ما
                صنعت اليابان وكوريا والصين من أعمال وقصص مُصورة.
                <br /> قام فريقنا المُتميز بترجمة هذه الأعمال للغة العربية بأفضل
                جودة وأدق ترجمة لكي ننشرها لكم وللعالم ونشارككم شغفنا وحبنا لهذه
                العوالم. شاركونا حبكم بمتابعتكم لنا والإنضمام للعائلة، عائلة
                مايسترا.
              </p>
            </div>
            <div className="w-full  relative flex  flex-col gap-[12px] ">
              <div className="flex link bg-black/40 lg:py-6 lg:px-12  py-3 px-5 xl:gap-8 gap-2 rounded-[16px] w-full   xl:flex-row flex-col  items-start">
                <span className="text-[#6471FB] xl:h-[54px] md:max-w-[100%] max-w-[190px] xl:text-[28px] text-[16px] flex   items-center">
                  إنضم لفريق مايسترا بكل سهولة من خلال سيرفر
                </span>
                <a href="https://discord.gg/9GPk8HX3Ek" target="_blank">
                  <Image
                    src="/discord.png"
                    alt="discord"
                    height={58}
                    width={196}
                    className="xl:h-[58px] xl:w-[196px] h-[25px] w-[90px] "
                  />
                </a>
              </div>
              <div className="flex link bg-black/40 lg:py-6 lg:px-12  py-3 px-5 xl:gap-8 gap-2 rounded-[16px] w-full   xl:flex-row flex-col  items-start">
                <span className="text-[#F901CE] xl:h-[54px] xl:text-[28px] text-[16px] flex  md:max-w-[100%] max-w-[190px]  items-center">
                  تابع حساب فريق مايسترا الرسمي من خلال منصة{" "}
                </span>
                <a
                  href="https://instagram.com/maestramanga"
                  target="_blank"
                  className=" "
                >
                  <Image
                    src="/insta.png"
                    alt="discord"
                    height={58}
                    width={196}
                    className="xl:h-[58px] xl:w-[196px] h-[25px] w-[90px] "
                  />
                </a>
              </div>
              <div className="img  absolute block xl:hidden left-[-25px] top-[-100px]">
                <div className="img-holder ">
                  <Image
                    src="/join_image.png"
                    alt="join_image"
                    height={828}
                    width={380}
                    className="md:h-[628px] h-[370px] w-[200px]  md:w-[380px] "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="img  absolute hidden xl:block left-0">
            <div className="img-holder">
              <Image
                src="/join_image.png"
                alt="join_image"
                height={828}
                width={480}
                className="h-[828px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default join_us;
