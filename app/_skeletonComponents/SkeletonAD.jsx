import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SwiperSlide } from "swiper/react";

function SkeletonAD({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div key={index} className="">
        <div className="h-[150px] sm:h-[250px]  lg:h-[350px] xl:h-[450px] 2xl:h-[550px] ">
          <Skeleton height={"100%"} />
        </div>
      </div>
    ));
}

export default SkeletonAD;
