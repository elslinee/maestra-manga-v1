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
  return (
    <section className="manga-list  ">
      <SectionTitle title={"آخـر الإصــدارات"} />
      <div className="container ]">
        <div className="cards-list gap-8 grid grid-cols-2  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5  ">
          {mangaList?.map((card) => (
            <div className="manga-card flex flex-col cursor-pointer  ">
              <div className="img-container max-w-[260px] lg:h-[385px] h-[280px]  overflow-hidden  ">
                <img
                  src={card?.attributes?.cover?.data?.attributes?.url}
                  alt="img"
                  className="w-full h-full "
                />
              </div>
              <h2
                className={` ${alata.className}  line-clamp-1 text-ltr text-white text-left text-[16px] lg:text-[22px]`}
              >
                {card?.attributes?.title}
              </h2>
              {/* <span
              className={` ${alata.className}  line-clamp-1 text-ltr text-white text-left text-[16px] lg:text-[20px]`}
            >
              Chapter: {""}
            </span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MangaList;
