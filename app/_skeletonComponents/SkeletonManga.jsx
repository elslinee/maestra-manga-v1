import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonManga({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div
        key={index}
        className="w-full max-w-full flex  lg:flex-row flex-col gap-4 "
      >
        <div className="div_one  flex flex-wrap flex-col  lg:items-start items-center  ">
          <div className="h-[350px] w-[270px] rounded-lg mb-4">
            <Skeleton height={"100%"} />
          </div>
          <div className="lg:block hidden items-center  rounded-lg w-full">
            <Skeleton className="my-2 py-2" />
            <Skeleton className="py-2" />
          </div>
        </div>
        <div className="div_two w-full  flex flex-col ">
          <div className="max-w-full">
            <Skeleton width={"90%"} height={30} />
            <Skeleton width={"50%"} height={30} />
          </div>

          <ul className="flex  lg:justify-start justify-center gap-2  my-4">
            <Skeleton width={60} />
            <Skeleton width={60} />
            <Skeleton width={60} />
          </ul>
          <ul className="flex lg:items-start items-center  flex-col gap-4  mb-4">
            <Skeleton width={200} />
            <Skeleton width={200} />
            <Skeleton width={200} />
            <Skeleton width={200} />
          </ul>

          <ul className="flex  flex-col gap-1    w-full">
            <Skeleton width={"20%"} className="lg:block  hidden" />
            <Skeleton width={"100%"} />
            <Skeleton width={"100%"} />
            <Skeleton width={"70%"} />
          </ul>
        </div>
      </div>
    ));
}

export default SkeletonManga;
