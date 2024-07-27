import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SwiperSlide } from "swiper/react";

function SkeletonAD({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div key={index}>
        <div>
          <Skeleton height={460} />
        </div>
      </div>
    ));
}

export default SkeletonAD;
