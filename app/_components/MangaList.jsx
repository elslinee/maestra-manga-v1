"use client";

import React, { useContext, useEffect, useState } from "react";
import { Baloo_2 } from "next/font/google";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import mangaListApis from "../_utils/mangaListApis";
import { MangaListContext } from "../_context/MangaListContext";
import MangaCard from "./MangaCard";
const baloo_2 = Baloo_2({ subsets: ["latin"] });

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
      <MangaCard
        overly3={true}
        Cover={Cover}
        title={title}
        type={type}
        state={state}
        chapter={chapter}
      />
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
