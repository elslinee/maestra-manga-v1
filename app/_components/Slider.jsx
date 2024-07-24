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

  return (
    <section className=" py-14 lg:py-28">
      <SectionTitle title={"الأعمال الرائجة"} />
      <div className="container">
        <div className="slider relative">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
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
            className="mySwiper mySwiperSlider"
          >
            {mangaList.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="manga-card flex flex-col cursor-pointer  ">
                  <div className="img-container lg:min-w-[200px] h-[280px]  ">
                    <img
                      src={slide?.attributes?.cover?.data?.attributes?.url}
                      alt="img"
                      className="w-full "
                    />
                  </div>
                  <h2
                    className={` ${alata.className}  line-clamp-1 text-ltr text-white text-left text-[16px] lg:text-[22px]`}
                  >
                    {slide?.attributes?.title}
                  </h2>
                  {/* <span
                className={` ${alata.className}  line-clamp-1 text-ltr text-white text-left text-[16px] lg:text-[20px]`}
              >
                Chapter: {""}
              </span> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-Btns flex justify-between absolute z-10 w-full lg:top-[50%] lg:translate-y-[-50%]">
            <button className="swiper-nextBTN absolute right-[0] cursor-pointer">
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
            <button className="swiper-prevBTN absolute left-0 cursor-pointer">
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

export default Slider;
