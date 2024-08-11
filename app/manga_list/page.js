"use client";

import React, { useEffect, useState } from "react";
import SectionTitle from "../_components/SectionTitle";
import Image from "next/image";
import mangaListApis from "../_utils/mangaListApis";
import categoriesApis from "../_utils/categoriesApis";
import SkeletonCard2 from "../_skeletonComponents/SkeletonCard2";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function manga_list() {
  const [isLoading, setIsLoading] = useState(true);
  const [mangaList, setMangaList] = useState([]);
  //
  const categories = [
    "الكل",
    "شونين",
    "شوجو",
    "سينين",
    "أكشن",
    "غموض",
    "اثارة",
    "مغامرة",
    "كوميدي",
    "جريمة",
    "خيال علمي",
    "رعب",
    "شريحة من الحياة",
    "رياضي",
    "قوة خارقة",
    "سحري",
    "تاريخي",
    "ميكا",
    "وحوش",
    "فضاء",
    "فنون قتالية",
    "طبخ",
    "شياطين",
    "مافيا",
    "حياة مدرسية",
    "دراما",
    "خارق للطبيعة",
    "عسكري",
    "خيالي",
    "مصاصي دماء",
    "رومانسي",
    "موسيقي",
    "نفسي",
  ];
  const colors = ["الكل", "ملون", "غير ملون"];
  const types = ["الكل", "مانهوا", "مانجا", "مانها", "ون شوت"];
  const [selectedCategories, setSelectedCategories] = useState(categories[0]);
  const [selectedType, setSelectedType] = useState(types[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  //
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  //

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };
  const handleChange2 = (event) => {
    setSelectedColor(event.target.value);
  };
  const handleChange3 = (event) => {
    setSelectedCategories(event.target.value);
  };
  /// Fetch the initial manga list
  const mangaList_ = mangaList.map((card) => {
    const Cover = card?.attributes?.cover?.data?.attributes?.url;
    const title = card?.attributes?.title;
    const type = card?.attributes?.type;
    const state = card?.attributes?.state;
    const story = card?.attributes?.story[0]?.children[0]?.text;
    const chapter = 3;
    return (
      <Link
        href={`/manga_list/${title}`}
        key={card?.id}
        className="card w-full cursor-pointer group  relative  hover:grayscale-[1] tr-4 flex   items-start gap-4 "
      >
        <div className="overlay2 content-[''] rounded-[8px] absolute opacity-100 group-hover:opacity-0  w-[50%] h-full left-[0] top-[0]  [transition:0.4s_ease] z-10 p-[12px] ">
          <div className="flex    justify-start items-start">
            <span className=" text-white  rounded-[8px]  px-3 bg-primary text-[12px]">
              {state}
            </span>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-ltr mb-2 font-semibold text-white  lg:text-[24px] text-[20px]  line-clamp-2">
            {title}
          </h2>
          <p className="font-medium text-white  lg:text-[16px] text-[14px]  line-clamp-[8]">
            {story}
          </p>
        </div>
        <div className="flex-1  relative img-card sm:h-[500px] h-[320px] lg:h-[330px] 2xl:h-full rounded-[8px] overflow-hidden">
          <Image
            src={Cover}
            alt="cover"
            width={200}
            height={300}
            className="object-cover w-full h-full bg-[#252525]  rounded-[8px] "
          />
        </div>
      </Link>
    );
  });
  const getMangaList_ = () => {
    mangaListApis.getMangaList().then((res) => {
      setMangaList(res?.data?.data || []);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    getMangaList_();
  }, []);

  const getAllMangaList_ = (typesApi, colorsApi, categoriesApi) => {
    setMangaList([]);
    setIsLoading(true);
    categoriesApis
      .getAllMangaList(typesApi, colorsApi, categoriesApi)
      .then((res) => {
        setMangaList([]);
        setMangaList(res?.data?.data || []);
        setIsLoading(false);
      });
  };

  const handleCategoriesList = (type, color, category) => {
    let typesApi = `&filters[type][$eq]=${type}`;
    let colorsApi = `&filters[color][$eq]=${color}`;
    let categoriesApi = `&filters[categories][$containsi]=${category}`;
    type === "" || type === "الكل" ? (typesApi = "") : typesApi;
    color === "" || color === "الكل" ? (colorsApi = "") : colorsApi;
    category === "" || category === "الكل"
      ? (categoriesApi = "")
      : categoriesApi;
    getAllMangaList_(typesApi, colorsApi, categoriesApi);
  };

  useGSAP(() => {
    gsap.from(".manga-list-page .mangaList_ .cards ", {
      delay: 1.5,
      opacity: 0,
      y: 100,
    });
  });

  return (
    <div className="manga-list-page lg:pt-[9.5rem] pt-[7.5rem] text-white text-2xl">
      <SectionTitle title={"قائمـة الأعمال"} />

      <div className="flex flex-col-reverse justify-center 2xl:flex-row 2xl:justify-start 2xl:pt-4  ">
        <div className="mangaList_  2xl:w-[75%]    col-span-8 px-8 m-0 ">
          <div className="cards  hidden md:grid lg:grid  lg:grid-cols-2 2xl:grid-cols-3    lg:gap-10 gap-5 ">
            {isLoading && <SkeletonCard2 cards={15} />}
            {mangaList_}
          </div>
          <div className="cards  grid grid-cols-1 md:hidden lg:hidden  gap-5 ">
            {isLoading && <SkeletonCard2 cards={1} />}
            {mangaList_}
          </div>
        </div>
        <div className="categories_list    text-[16px]   2xl:max-w-[430px]  2xl:fixed px-8 left-0">
          <h3 className="text-white  font-semibold text-2xl text-center mb-4">
            التصنيفات
          </h3>
          <div className="flex gap-5 flex-col justify-center items-center">
            <form className="flex gap-2 ">
              {types.map((type, index) => (
                <div
                  key={index}
                  className={` flex py-1 px-2 rounded-[8px] cursor-pointer  tr-4 select-none ${
                    selectedType === type ? "bg-primary" : "bg-black"
                  }`}
                >
                  <input
                    type="radio"
                    id={`type${index}`}
                    name="type"
                    value={type}
                    checked={selectedType === type}
                    onChange={handleChange}
                    className="hidden "
                    onClick={() => setType(type)}
                  />
                  <label htmlFor={`type${index}`} className="cursor-pointer">
                    {type}
                  </label>
                </div>
              ))}
            </form>
            <hr className="bg-white w-10" />
            <form className="flex gap-2   ">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={` flex py-1 px-2 rounded-[8px] cursor-pointer tr-4 select-none ${
                    selectedColor === color ? "bg-primary" : "bg-black"
                  }`}
                >
                  <input
                    type="radio"
                    id={`color${index}`}
                    name="color"
                    value={color}
                    checked={selectedColor === color}
                    onChange={handleChange2}
                    onClick={() => setColor(color)}
                    className="hidden "
                  />
                  <label htmlFor={`color${index}`} className="cursor-pointer">
                    {color}
                  </label>
                </div>
              ))}
            </form>
            <hr className="bg-white w-10" />
            <form className="flex gap-2 flex-wrap justify-center">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={` flex py-1 px-2 rounded-[8px] cursor-pointer tr-4 select-none ${
                    selectedCategories === category ? "bg-primary" : "bg-black"
                  }`}
                >
                  <input
                    type="radio"
                    id={`category${index}`}
                    name="category"
                    value={category}
                    checked={selectedCategories === category}
                    onChange={handleChange3}
                    className="hidden "
                    onClick={() => setCategory(category)}
                  />
                  <label
                    htmlFor={`category${index}`}
                    className="cursor-pointer"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </form>
          </div>
          <div className=" flex justify-center py-4">
            <button
              className=" py-1 px-2  my-4 w-full  tr-4 bg-primary  hover:bg-[#4e1881] rounded-[8px] cursor-pointer   select-none"
              onClick={() => handleCategoriesList(type, color, category)}
            >
              تصنيف
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default manga_list;
