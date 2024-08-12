"use client";

import { Baloo_2 } from "next/font/google";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import mangaListApis from "../../_utils/mangaListApis";
import SkeletonManga from "../../_skeletonComponents/SkeletonManga";
import Link from "next/link";
const baloo_2 = Baloo_2({ subsets: ["latin"] });

function manga_page() {
  const [manga, setManga] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getMangaByTitle_ = (title) => {
    mangaListApis.getMangaByTitle(title).then((res) => {
      setManga(res?.data?.data[0] || []);
      setIsLoading(false);
    });
  };
  const cover = manga?.attributes?.cover?.data?.attributes?.url;
  const title = manga?.attributes?.title;
  const title_ar = manga?.attributes?.title_ar;
  const title_eng = manga?.attributes?.title_eng;
  const title_jpn = manga?.attributes?.title_jpn;
  const title_kr = manga?.attributes?.title_kr;
  const title_ch = manga?.attributes?.title_ch;
  const Written_by = manga?.attributes?.Written_by;
  const draw_by = manga?.attributes?.draw_by;
  const type = manga?.attributes?.type;
  const categories = manga?.attributes?.categories;
  const state = manga?.attributes?.state;
  const story = manga?.attributes?.story[0]?.children[0]?.text;
  // /  const story = manga?.attributes?.chapters.chapter_number/
  const chapters = manga?.attributes?.chapters;
  useEffect(() => {
    getMangaByTitle_(manga_name);
  }, []);
  const { manga_name } = useParams();

  return (
    <div className="manga-page lg:pt-[9.5rem] pt-[7.5rem] text-white text-2xl">
      <div className="container">
        <div className="mainDiv bg-black/50 rounded-lg p-10 flex lg:flex-row flex-col  gap-4">
          {!isLoading ? (
            <>
              <div className="div_one flex flex-col  items-center">
                <div className="image_holder h-[400px] w-[270px] rounded-lg mb-4">
                  <Image
                    src={cover}
                    alt="cover"
                    width={250}
                    height={340}
                    className="rounded-lg w-full h-full bg-[#252525]"
                  />
                </div>

                <div className="links lg:flex hidden flex-col  items-center w-full">
                  <a
                    target="_blank"
                    href="https://Ko-fi.com/maestramanga"
                    className="bg-[#823237] text-nowrap font-semibold text-[20px] py-2 px-6 rounded-lg w-full "
                  >
                    قدم كوب قهوة للمُترجمين
                  </a>
                  <span className="text-[12px] font-medium">{`(الرجاء كتابة اسم العمل مع الهدية لضمان ايصالها)`}</span>
                  <a
                    target="_blank"
                    href="https://discord.gg/9GPk8HX3Ek"
                    className="bg-[#5a67ed] font-semibold text-[20px] py-2 px-6 rounded-lg w-full"
                  >
                    تواصل مع مترجمي العمل
                  </a>
                </div>
              </div>
              <div className="div_two">
                <h1 className=" font-bold lg:text-4xl text-3xl lg:text-start text-center ">
                  {title}
                </h1>
                <ul className="flex text-[14px] flex-wrap lg:text-[18px] gap-2 font-light  lg:justify-start  justify-center items-center my-4">
                  {categories?.map((li, index) => {
                    const active = index < 3 ? "bg-[#371756]" : "bg-black";
                    return (
                      <li
                        key={index}
                        className={`${active} rounded-lg lg:py-1 px-2  lg:px-4 cursor-pointer`}
                      >
                        {li}
                      </li>
                    );
                  })}
                </ul>

                <ul className="flex flex-wrap  lg:justify-start justify-center text-[18px] gap-2 font-light  items-center my-4">
                  <li>
                    <div className="flex items-center gap-1">
                      <Image
                        src={"/eg.svg"}
                        alt="flag"
                        width={25}
                        height={20}
                      />
                      <span className="text-[13px] font-normal">
                        {title_ar}
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-1">
                      <Image
                        src={"/us.png"}
                        alt="flag"
                        width={25}
                        height={20}
                      />
                      <span
                        className={`${baloo_2.className} text-[13px] font-normal`}
                      >
                        {title}
                      </span>
                    </div>
                  </li>
                  <li>
                    {title_jpn && (
                      <div className="flex items-center gap-1">
                        <Image
                          src={"/jp.png"}
                          alt="flag"
                          width={25}
                          height={20}
                        />
                        <span className="text-[13px] font-normal">
                          {title_jpn}
                        </span>
                      </div>
                    )}
                    {title_kr && (
                      <div className="flex items-center gap-1">
                        <Image
                          src={"/kr.png"}
                          alt="flag"
                          width={25}
                          height={20}
                        />
                        <span className="text-[13px] font-normal">
                          {title_jpn}
                        </span>
                      </div>
                    )}
                    {title_ch && (
                      <div className="flex items-center gap-1">
                        <Image
                          src={"/ch.png"}
                          alt="flag"
                          width={25}
                          height={20}
                        />
                        <span className="text-[13px] font-normal">
                          {title_jpn}
                        </span>
                      </div>
                    )}
                  </li>
                </ul>

                <ul className="flex flex-col gap-2">
                  <li className=" font-bold text-[20px]">
                    تأليف :{" "}
                    <span
                      className={`${baloo_2.className} font-normal text-[18px]`}
                    >
                      {Written_by}
                    </span>
                  </li>

                  <li className=" font-bold text-[20px]">
                    رسم :{" "}
                    <span
                      className={`${baloo_2.className} font-normal text-[18px]`}
                    >
                      {draw_by}
                    </span>
                  </li>
                  <li className=" font-bold text-[20px]">
                    فريق الترجمة :{" "}
                    <span className="font-normal text-[18px]">
                      {" "}
                      مايسترا مانجا
                    </span>
                  </li>
                  <li className=" font-bold text-[20px]">
                    حالة العمل :{" "}
                    {state === "مستمر" && (
                      <span className=" font-bold  text-[12px] bg-[#3DB230] px-2 py-1 rounded-lg ">
                        {state}
                      </span>
                    )}
                    {state === "مكتمل" && (
                      <span className="font-bold text-[12px] bg-[#2B77C0] px-2 py-1 rounded-lg">
                        {state}
                      </span>
                    )}
                    {state === "متوقف" && (
                      <span className="font-bold text-[12px] bg-[#A40C1C] px-2 py-1 rounded-lg">
                        {state}
                      </span>
                    )}
                  </li>
                  <li className=" font-bold text-[20px]">
                    قصة العمل :
                    <p className="max-w-[90%] font-normal text-[18px]">
                      {story}
                    </p>
                  </li>
                </ul>
                <div className="links lg:hidden flex mt-6 flex-col  items-center w-full">
                  <a
                    href=""
                    className="bg-[#823237] text-nowrap flex justify-center font-semibold text-[20px] py-2 px-6 rounded-lg w-full "
                  >
                    قدم كوب قهوة للمُترجمين
                  </a>
                  <span className="text-[12px] font-medium">{`(الرجاء كتابة اسم العمل مع الهدية لضمان ايصالها)`}</span>
                  <a
                    href=" "
                    className="bg-[#5a67ed] font-semibold flex justify-center text-[20px] py-2 px-6 rounded-lg w-full"
                  >
                    تواصل مع مترجمي العمل
                  </a>
                </div>
              </div>
            </>
          ) : (
            <SkeletonManga />
          )}
        </div>
        <div className="secDiv mt-4 bg-black/50 rounded-lg p-10  flex   flex-wrap lg:justify-start justify-center gap-4 ">
          {chapters?.length === 0 ? (
            <div className=" text-gray-300 text-center w-full text-[18px]">
              لا يوجد فصول حتى الان
            </div>
          ) : (
            chapters?.map((chapter) => (
              <Link
                href={`/manga_list/${title}/chapters/${chapter?.chapter_number}`}
                className="py-2 px-4 hover:bg-primary  tr-4 flex items-center justify-center gap-2 text-[18px] text-center  rounded-lg  bg-black text-white border-[1px] border-primary"
              >
                الفصل{" "}
                <span
                  className={`${baloo_2.className}  font-normal text-[24px]`}
                >
                  {chapter.chapter_number}
                </span>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default manga_page;
