import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SwiperSlide } from "swiper/react";

function SkeletonSlider({ cards, height }) {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div key={index} className="sm:h-[290px] h-[320px] lg:h-[350px]">
        <Skeleton height={"100%"} />
      </div>
    ));
}

export default SkeletonSlider;
