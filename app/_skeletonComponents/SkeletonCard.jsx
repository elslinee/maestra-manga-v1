import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonCard({ cards, height }) {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div className="sm:h-[290px] h-[320px] lg:h-[350px] " key={index}>
        <Skeleton height={"100%"} borderRadius={"8px"} />
      </div>
    ));
}

export default SkeletonCard;
