"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { Alata, Baloo_2 } from "next/font/google";
import { useContext, useEffect, useState } from "react";
import { MangaListContext } from "../_context/MangaListContext";
import MangaCard from "./MangaCard";
import SkeletonSlider from "../_skeletonComponents/SkeletonSlider";
import mangaListApis from "../_utils/mangaListApis";
const baloo_2 = Baloo_2({ subsets: ["latin"] });

function Slider() {
  const [isLoading, setIsLoading] = useState(true);
  const getMangaList_ = () => {
    mangaListApis.getMangaList().then((res) => {
      setMangaList(res?.data?.data), setIsLoading(false);
    });
  };
  const [mangaList, setMangaList] = useState([]);
  useEffect(() => {
    getMangaList_();
  }, []);
  const mangaList_ = mangaList.map((card) => {
    const Cover = card?.attributes?.cover?.data?.attributes?.url;
    const title = card?.attributes?.title;
    const type = card?.attributes?.type;
    const state = card?.attributes?.state;
    const key = card?.id;
    const chapter = 3;

    return (
      <SwiperSlide key={card?.id}>
        <MangaCard
          id={key}
          overly3={false}
          Cover={Cover}
          title={title}
          type={type}
          state={state}
          chapter={chapter}
        />
      </SwiperSlide>
    );
  });

  return (
    <section className=" py-14 lg:py-28 ">
      <SectionTitle title={"الأعمال الرائجة"} />
      <div className="container">
        <div className="slider relative ">
          {isLoading && (
            <div className="   sm:h-[290px] h-[320px] lg:h-[350px] overflow-hidden  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-4  ">
              <SkeletonSlider cards={6} />
            </div>
          )}
          <Swiper
            slidesPerView={6}
            spaceBetween={15}
            navigation={{
              nextEl: ".swiper-nextBTN",
              prevEl: ".swiper-prevBTN",
            }}
            autoplay={{
              delay: 2000,
            }}
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
            breakpoints={{
              340: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
              1540: {
                slidesPerView: 6,
              },
            }}
            className="mySwiper mySwiperSlider  "
          >
            {mangaList_}
            <div className="   swiper-Btns opacity-0 tr-4 flex justify-between absolute z-10 w-full top-[50%] ">
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

export default Slider;
