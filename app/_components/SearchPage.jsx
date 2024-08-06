"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mangaListApis from "../_utils/mangaListApis";
import MangaCard from "./MangaCard";
import SkeletonCard from "../_skeletonComponents/SkeletonCard";
gsap.registerPlugin(useGSAP, ScrollTrigger);
function SearchPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchList, setSearchList] = useState([]);
  const [query, setQuery] = useState("");
  const getMangaBySearch_ = (query) => {
    setSearchList([]);
    if (query.trim() === "") {
      setSearchList([]);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    mangaListApis.getMangaBySearch(query).then((res) => {
      setSearchList(res?.data?.data || []);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    getMangaBySearch_(query);
  }, [query]);
  console.log(searchList);
  const closeSearch = () => {
    gsap.to(".search-page", {
      opacity: 0,
      zIndex: -1000,
      display: "none",
    });
    gsap.to(".overlayBlur", {
      filter: "blur(0px)",
    });
  };

  const searchList_ = searchList.map((card) => {
    const Cover = card?.attributes?.cover?.data?.attributes?.url;
    const title = card?.attributes?.title;
    const type = card?.attributes?.type;
    const state = card?.attributes?.state;
    const key = card?.id;
    return (
      <MangaCard
        clickEvent={() => closeSearch()}
        id={key}
        overly3={false}
        Cover={Cover}
        title={title}
        type={type}
        state={state}
      />
    );
  });
  return (
    <div className="search-page    hidden opacity-0 z-[-1000]  fixed   w-screen h-screen bottom-0 right-0">
      <div className="overlay absolute h-full w-full top-0 left-0 bg-black/50 "></div>
      <div className="container ">
        <form className="max-w-md mt-40 mx-auto relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.3"
            stroke="currentColor"
            onClick={() => closeSearch()}
            className="text-white closeIcon cursor-pointer   absolute w-[40px] h-[40px]  top-[-50px]  sm:right-[-50px]  sm:top-[50%] sm:translate-y-[-50%] "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            بحث
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="  white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              style={{}}
              type="search"
              id="default-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="block w-full p-4 ps-10 text-sm text-white  border-none rounded-lg bg-black"
              placeholder="ابحث عن اعمالك المفضلة ..."
              required
            />
          </div>
        </form>
        <div className="cards overflow-y-scroll mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-4 ">
          {isLoading && <SkeletonCard cards={16} />}
          {searchList_.length === 0
            ? !isLoading && (
                <div className="text-2xl text-[#ffffff] w-full flex   col-span-12  justify-center">
                  لا يوجد نتائج حتى الان
                </div>
              )
            : searchList_}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
