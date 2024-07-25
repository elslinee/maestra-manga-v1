"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { Alata } from "next/font/google";
import { useContext } from "react";
import { MangaListContext } from "../_context/MangaListContext";

const alata = Alata({ subsets: ["latin"], weight: "400" });

function Slider() {
  const { mangaList, setMangaList } = useContext(MangaListContext);
  const mangaList_ = mangaList.map((card) => {
    const Cover = card?.attributes?.cover?.data?.attributes?.url;
    const title = card?.attributes?.title;
    const type = card?.attributes?.type;
    const state = card?.attributes?.state;
    const chapter = 3;

    return (
      <SwiperSlide key={card?.id}>
        <div className="card relative w-full cursor-pointer  group">
          <div className="overlay content-[''] absolute opacity-0 group-hover:opacity-100  bg-[rgba(0,_0,_0,_0.5)] w-full h-full left-[0] top-[0]  [transition:0.4s_ease] z-10 p-[16px] ">
            <div className="flex flex-col h-full  justify-between items-center">
              <span className=" text-black  rounded-[8px] py-1 px-2 bg-white text-[12px]">
                {type}{" "}
              </span>
              <h3
                className={`${alata.className}  text-ltr  text-white  text-[16px] line-clamp-3`}
              >
                {title}
              </h3>
            </div>
          </div>
          <div className="overlay2 content-[''] absolute opacity-100 group-hover:opacity-0  w-full h-full left-[0] top-[0]  [transition:0.4s_ease] z-10 p-[16px] ">
            <div className="flex  h-full  justify-start items-start">
              <span className=" text-white  rounded-[8px] py-1 px-3 bg-primary text-[12px]">
                {state}
              </span>
            </div>
          </div>
          <div className=" rounded-[8px]    relative img-card sm:h-[290px] h-[320px] lg:h-[350px]  overflow-hidden">
            <Image
              src={Cover}
              width={200}
              height={300}
              alt=""
              className="object-cover w-full h-full "
            />
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <section className=" py-14 lg:py-28">
      <SectionTitle title={"الأعمال الرائجة"} />
      <div className="container">
        <div className="slider relative">
          <Swiper
            slidesPerView={6}
            spaceBetween={15}
            navigation={{
              nextEl: ".swiper-nextBTN",
              prevEl: ".swiper-prevBTN",
            }}
            autoplay={{
              delay: 7000,
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
            <div className="   swiper-Btns opacity-0 tr-4 flex justify-between absolute z-10 w-full lg:top-[50%] lg:translate-y-[-50%]">
              <button className="  swiper-nextBTN absolute right-[0] cursor-pointer bg-black/60 p-2  rounded-[100%] mr-2">
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
              <button className="swiper-prevBTN absolute left-0 cursor-pointer bg-black/60 p-2  rounded-[100%] ml-2">
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
