"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import adsApis from "../_utils/adsApis";
import SkeletonAD from "../_skeletonComponents/SkeletonAD";

function Ad() {
  const [isLoading, setIsLoading] = useState(true);
  const [adsList, setAdsList] = useState([]);
  const getADS_ = () => {
    adsApis.getADS().then((res) => {
      setAdsList(res.data.data), setIsLoading(false);
    });
  };
  useEffect(() => {
    getADS_();
  }, []);

  const adsList_ = adsList.map((ad) => {
    const img = ad?.attributes?.image?.data[0]?.attributes?.url;

    return (
      <SwiperSlide key={ad?.id} width={1300} height={460}>
        <Image
          src={img}
          alt="ad-wall"
          width={1300}
          height={460}
          className="bg-[#252525]"
        />
      </SwiperSlide>
    );
  });
  return (
    <section className="ad-wall  lg:pt-[9.5rem] pt-[7.5rem]  ">
      <div className="container ">
        <div className="main-slider relative ">
          <Swiper
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-nextBTN2",
              prevEl: ".swiper-prevBTN2",
            }}
            autoplay={{
              delay: 14000,
            }}
            loop={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper mySwiper2 w-[100%]  rounded-[8px] relative "
          >
            {isLoading && <SkeletonAD cards={1} />}
            {adsList_}
            <div className="swiper-Btns opacity-0 tr-4 flex justify-between absolute z-10 w-full top-[50%] ">
              <button className="  swiper-nextBTN absolute right-[0] cursor-pointer bg-black/60 p-2  rounded-[100%] mr-2 translate-y-[-50%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
              <button className="swiper-prevBTN absolute left-0 cursor-pointer bg-black/60 p-2  rounded-[100%] ml-2 translate-y-[-50%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                  />
                </svg>
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Ad;
