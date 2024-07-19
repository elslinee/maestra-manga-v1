"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

function Ad() {
  return (
    <section className="ad-wall  lg:pt-14">
      <div className="container ">
        <div className="main-slider   relative">
          <Swiper
            navigation={{
              nextEl: ".swiper-nextBTN2",
              prevEl: ".swiper-prevBTN2",
            }}
            autoplay={{
                delay: 4000,
              }}
              loop={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper mySwiper2 w-[!80%]"
          >
            <SwiperSlide>
              <Image
                src={"/wall.png"}
                alt="ad-wall"
                width={1300}
                height={460}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={"/wall.png"}
                alt="ad-wall"
                width={1300}
                height={460}
              />
            </SwiperSlide>
          </Swiper>
          <div className="swiper-Btns flex justify-between absolute z-10 w-full lg:top-[50%] lg:translate-y-[-50%]">
            <button className="swiper-nextBTN2 absolute right-[0] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
            <button className="swiper-prevBTN2 absolute left-[0] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ad;
