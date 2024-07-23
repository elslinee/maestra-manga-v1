"use client";

import React, { useEffect, useState } from "react";
import { Alata } from "next/font/google";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import mangaListApis from "../_utils/mangaListApis";
const alata = Alata({ subsets: ["latin"], weight: "400" });
function MangaList() {
  const [mangaList, setMangaList] = useState();

  useEffect(() => {
    getMangaList_();
  }, []);
  const getMangaList_ = () => {
    mangaListApis.getMangaList().then((res) => {
      setMangaList(res?.data?.data);
    });
  };

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
      <div className="container lg:w-[75%]">
        <div className="cards-list grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {mangaList?.map((card) => (
            <div className="manga-card flex flex-col ">
              <Image
                src={card?.attributes?.cover?.data?.attributes?.url}
                alt="img"
                width={290}
                height={400}
                className="h-[280px] w-[200px]a"
              />
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
