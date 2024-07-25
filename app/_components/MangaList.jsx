"use client";

import React, { useContext, useEffect, useState } from "react";
import { Alata } from "next/font/google";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import mangaListApis from "../_utils/mangaListApis";
import { MangaListContext } from "../_context/MangaListContext";
const alata = Alata({ subsets: ["latin"], weight: "400" });
function MangaList() {
  const { mangaList, setMangaList } = useContext(MangaListContext);

  // const mangaList = [
  //   {
  //     name: "The Genius Actor’s Aura",
  //     lastChapter: "16",
  //     imageUrl: "/img1.jpg",
  //   },
  //   {
  //     name: "The Genius Actor’s Aura",
  //     lastChapter: "16",
  //     imageUrl: "/img1.jpg",
  //   },
  //   {
  //     name: "The Genius Actor’s Aura",
  //     lastChapter: "16",
  //     imageUrl: "/img1.jpg",
  //   },
  //   {
  //     name: "The Genius Actor’s Aura",
  //     lastChapter: "16",
  //     imageUrl: "/img1.jpg",
  //   },
  //   {
  //     name: "The Genius Actor’s Aura",
  //     lastChapter: "16",
  //     imageUrl: "/img1.jpg",
  //   },
  //   {
  //     name: "The Genius Actor’s Aura",
  //     lastChapter: "16",
  //     imageUrl: "/img1.jpg",
  //   },
  //   {
  //     name: "The Genius Actor’s Aura",
  //     lastChapter: "16",
  //     imageUrl: "/img1.jpg",
  //   },
  //   {
  //     name: "The Genius Actor’s Aura",
  //     lastChapter: "16",
  //     imageUrl: "/img1.jpg",
  //   },
  //   {
  //     name: "The Genius Actor’s Aura",
  //     lastChapter: "16",
  //     imageUrl: "/img1.jpg",
  //   },
  //   {
  //     name: "The Genius Actor’s Aura",
  //     lastChapter: "16",
  //     imageUrl: "/img1.jpg",
  //   },
  //   {
  //     name: "The Genius Actor’s Aura",
  //     lastChapter: "16",
  //     imageUrl: "/img1.jpg",
  //   },
  //   {
  //     name: "The Genius Actor’s Aura",
  //     lastChapter: "16",
  //     imageUrl: "/img1.jpg",
  //   },
  //   {
  //     name: "The Genius Actor’s Aura",
  //     lastChapter: "16",
  //     imageUrl: "/img1.jpg",
  //   },
  //   {
  //     name: "The Genius Actor’s Aura",
  //     lastChapter: "16",
  //     imageUrl: "/img1.jpg",
  //   },
  //   {
  //     name: "The Genius Actor’s Aura",
  //     lastChapter: "16",
  //     imageUrl: "/img1.jpg",
  //   },
  // ];
  console.log(mangaList);
  const mangaList_ = mangaList.map((card) => {
    const Cover = card?.attributes?.cover?.data?.attributes?.url;
    const title = card?.attributes?.title;
    const type = card?.attributes?.type;
    const state = card?.attributes?.state;
    const chapter = 3;

    return (
      <div className="card relative cursor-pointer  group">
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
        <div className="overlay3 content-[''] absolute opacity-100 group-hover:opacity-0  w-full h-full left-[0] top-[0]  [transition:0.4s_ease] z-10  ">
          <div className="flex  h-full  justify-start items-end">
            <div className="flex flex-col items-center">
              <span className=" text-white px-3 py-[2px]  font-bold bg-red-900 text-[18px]">
                الفصل
              </span>
              <span className="block text-white  mb-4 px-3 text-[20px]">
                {chapter}
              </span>
            </div>
          </div>
        </div>
        <div className=" rounded-[8px]  relative img-card sm:h-[290px] h-[320px] lg:h-[350px] w-[auto] overflow-hidden">
          <Image
            src={Cover}
            width={200}
            height={300}
            alt=""
            className="object-cover w-full h-full "
          />
        </div>
      </div>
    );
  });
  return (
    <section className="manga-list-section  ">
      <SectionTitle title={"آخـر الإصــدارات"} />
      <div className="container">
        <div className="cards grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-4 ">
          {mangaList_}
        </div>
      </div>
    </section>
  );
}

export default MangaList;
