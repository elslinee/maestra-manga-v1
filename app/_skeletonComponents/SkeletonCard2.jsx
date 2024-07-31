import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonCard2({ cards, height }) {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div key={index} className=" flex gap-4    ">
        <div className=" flex-1       ">
          <div className="SkeletonCard2">
            <Skeleton height={20} width={"100%"} />
            <Skeleton height={20} width={"70%"} />
          </div>

          <div className="flex flex-col gap-2">
            <div className="h-3 w-full">
              <Skeleton height={"100%"} width={"100%"} />
            </div>
            <div className="h-3 w-full">
              <Skeleton height={"100%"} width={"100%"} />
            </div>
            <div className="h-3 w-full">
              <Skeleton height={"100%"} width={"100%"} />
            </div>
            <div className="h-3 w-full">
              <Skeleton height={"100%"} width={"100%"} />
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-[8px] sm:h-[500px] h-[320px] lg:h-[330px]">
          <Skeleton height={"100%"} width={"100%"} />
        </div>
      </div>
    ));
}

export default SkeletonCard2;
