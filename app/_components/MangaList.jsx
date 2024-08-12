"use client";

import React, { useContext, useEffect, useState } from "react";
import { Baloo_2 } from "next/font/google";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import mangaListApis from "../_utils/mangaListApis";
import { MangaListContext } from "../_context/MangaListContext";
import MangaCard from "./MangaCard";
import ChapterCard from "./ChapterCard";
import SkeletonCard from "../_skeletonComponents/SkeletonCard";
const baloo_2 = Baloo_2({ subsets: ["latin"] });

function MangaList() {
  const [isLoading, setIsLoading] = useState(true);
  const getMangaChapters_ = () => {
    mangaListApis.getMangaChapters().then((res) => {
      setMangaList(res?.data?.data), setIsLoading(false);
    });
  };
  const [mangaList, setMangaList] = useState([]);
  useEffect(() => {
    getMangaChapters_();
  }, []);

  const chaptersList_ = mangaList.map(
    (manga) => manga?.attributes?.chapters || []
  );
  const chapters = chaptersList_.flat();
  const sortedChapters = chapters.sort((a, b) => b.id - a.id);
  const chaptersList = sortedChapters.map((chapter) => {
    const main = chapter?.manga_lists?.data[0]?.attributes;
    const cover = main?.cover?.data?.attributes?.url;
    const title = main?.title;
    const type = main?.type;
    const state = main?.state;
    const chapterNumber = chapter?.chapter_number;
    return (
      <div key={chapter?.id}>
        <ChapterCard
          id={chapter?.id}
          overly3={true}
          Cover={cover}
          title={title}
          type={type}
          state={state}
          chapter={chapterNumber}
        />
      </div>
    );
  });
  return (
    <section className="manga-list-section  ">
      <SectionTitle title={"آخـر الإصــدارات"} />
      <div className="container">
        <div className="cards grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-4 ">
          {isLoading && <SkeletonCard cards={18} />}
          {chaptersList}
        </div>
      </div>
    </section>
  );
}

export default MangaList;
