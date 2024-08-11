import Image from "next/image";
import Link from "next/link";
import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function MangaCard(props) {
  return (
    <Link href={`/manga_list/${props.title}`}>
      <div
        onClick={props.clickEvent}
        key={props.id}
        className="card relative w-full cursor-pointer  group"
      >
        <div className="overlay content-[''] rounded-[8px] absolute opacity-0 group-hover:opacity-100  bg-[rgba(0,_0,_0,_0.5)] w-full h-full left-[0] top-[0]  [transition:0.4s_ease] z-10 p-[16px] ">
          <div className="flex flex-col h-full  justify-between items-center">
            <span className=" text-black  rounded-[8px] py-1 px-2 bg-white text-[12px]">
              {props.type}
            </span>
            <h3
              className={`  font-baloo2 text-ltr font-bold text-white text-center  text-[16px] line-clamp-3`}
            >
              {props.title}
            </h3>
          </div>
        </div>
        <div className="overlay2  content-[''] rounded-[8px] absolute opacity-100 group-hover:opacity-0  w-full h-full left-[0] top-[0]  [transition:0.4s_ease] z-10 p-[16px] ">
          <div className="flex  h-full  justify-start items-start">
            <span className=" text-white  rounded-[8px] py-1 px-3 bg-primary text-[12px]">
              {props.state}
            </span>
          </div>
        </div>
        {props.overly3 && (
          <div className="overlay3 rounded-[8px] content-[''] absolute opacity-100 group-hover:opacity-0  w-full h-full left-[0] top-[0]  [transition:0.4s_ease] z-[20]  ">
            <div className="flex  h-full  justify-start items-end">
              <div className="flex flex-col items-center">
                <span className="z-[10]  text-white px-3 py-[2px]  rounded-e-[8px]  font-bold bg-red-900 text-[18px]">
                  الفصل
                </span>
                <span
                  className={`  block font-[500]  after:content-[''] after:absolute after:bg-primary after:w-[20%] z-[1] after:h-[50px] after:blur-[25px] after:z-[-1]  after:right-[-10px] text-white   px-3 text-[20px]`}
                >
                  {props.chapter}
                </span>
              </div>
            </div>
          </div>
        )}
        <div className=" rounded-[8px]    relative img-card sm:h-[290px] h-[320px] lg:h-[350px]  overflow-hidden">
          <Image
            src={props.Cover}
            width={200}
            height={300}
            alt=""
            className="object-cover w-full h-full bg-[#252525] "
          />
        </div>
      </div>
    </Link>
  );
}

export default MangaCard;
