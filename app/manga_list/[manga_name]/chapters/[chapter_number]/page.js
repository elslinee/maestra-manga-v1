"use client";
import { Baloo_2 } from "next/font/google";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import mangaListApis from "../../../../_utils/mangaListApis";
import Link from "next/link";
import Image from "next/image";
const baloo_2 = Baloo_2({ subsets: ["latin"] });

function chapter_page() {
  const [manga, setManga] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { manga_name } = useParams();
  const { chapter_number } = useParams();

  const chapterNumber = Number(chapter_number);
  const [isActive, setIsActive] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const getMangaByTitle_ = (title) => {
    mangaListApis.getMangaByTitle(title).then((res) => {
      setManga(res?.data?.data[0] || []);
      const newChapter = res?.data?.data[0]?.attributes?.chapters.filter(
        (chapter) => chapter?.chapter_number === chapterNumber
      );
      setChapter(newChapter[0]);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    getMangaByTitle_(manga_name);
  }, []);
  const title = manga?.attributes?.title;
  const chapters = manga?.attributes?.chapters;
  const chapterNumber_ = chapter?.chapter_number;
  const chapterPages_ = chapter?.pages?.data;

  const handleFullScreen = () => {
    if (!isFullScreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        /* Firefox */
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        /* IE/Edge */
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  const router = useRouter();
  const nextChapter = () => {
    router.push(`/manga_list/${title}/chapters/${chapterNumber + 1}`);
  };
  const prevChapter = () => {
    router.push(`/manga_list/${title}/chapters/${chapterNumber - 1}`);
  };

  console.log(chapters);
  return (
    <div className="chapter-page lg:pt-[9.5rem] pt-[7.5rem] text-white">
      <div className="container">
        <div className=" text-center mb-6 ">
          <Link
            href={`/manga_list/${title}`}
            className={`${baloo_2.className} text-white text-3xl font-semibold`}
          >
            {" "}
            Dragon Ball Kakumei
          </Link>
        </div>
        <div className="relative dropDown mb-4 flex sm:hidden items-center  justify-center">
          <div
            onClick={() => setIsActive(!isActive)}
            className="text-white   items-center w-[200px] flex justify-center flex-row-reverse lg:text-xl text-[16px]  font-medium bg-primary py-2 px-5 cursor-pointer hover:bg-[#481775] tr-4 rounded-[60px] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
            الفصل {chapterNumber_}
          </div>
          <div
            className={
              isActive
                ? "active absolute block top-[40px] overflow-y-scroll max-h-[300px]  right-[50%] translate-x-[50%] z-10 mt-2 w-56 rounded-md  bg-primary "
                : "absolute hidden  right-[50%] translate-x-[50%] z-10 mt-2 w-56 rounded-md  bg-primary "
            }
            role="menu"
          >
            {chapters?.map((ch) => (
              <div key={ch?.chapter_number} className="p-2">
                <Link
                  href={`/manga_list/${title}/chapters/${ch?.chapter_number}`}
                  className="block rounded-lg px-4 py-2  text-center cursor-pointer hover:bg-[#481775] tr-4"
                  role="menuitem"
                >
                  الفصل {ch?.chapter_number}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <div
            onClick={() => nextChapter()}
            className="text-white flex items-center lg:w-[200px] justify-center  lg:text-xl  text-[16px] font-medium border-[1px] border-solid border-primary cursor-pointer bg-black hover:bg-primary tr-4  py-2  px-5 rounded-[60px] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            الفصل التالي
          </div>

          <div className="relative dropDown hidden   sm:flex">
            <div
              onClick={() => setIsActive(!isActive)}
              className="text-white flex items-center lg:w-[200px] justify-center flex-row-reverse lg:text-xl text-[16px]  font-medium bg-primary py-2 px-5 cursor-pointer hover:bg-[#481775] tr-4 rounded-[60px] "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              الفصل {chapterNumber_}
            </div>
            <div
              className={
                isActive
                  ? "active absolute block top-[50px] overflow-y-scroll max-h-[300px] right-[50%] translate-x-[50%] z-10 mt-2 w-56 rounded-md  bg-primary "
                  : "absolute hidden  right-[50%] translate-x-[50%] z-10 mt-2 w-56 rounded-md  bg-primary "
              }
              role="menu"
            >
              {chapters?.map((ch) => (
                <div key={ch?.chapter_number} className="p-2">
                  <Link
                    href={`/manga_list/${title}/chapters/${ch?.chapter_number}`}
                    className="block rounded-lg px-4 py-2  text-center cursor-pointer hover:bg-[#481775] tr-4"
                    role="menuitem"
                  >
                    الفصل {ch?.chapter_number}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div
            onClick={() => prevChapter()}
            className="text-white  flex items-center lg:w-[200px]  justify-center flex-row-reverse lg:text-xl text-[16px] font-medium border-[1px] border-solid cursor-pointer border-primary hover:bg-primary tr-4  bg-black py-2 px-5 rounded-[60px] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            الفصل السابق
          </div>
        </div>

        <section className="chapter-pages flex flex-col justify-center container items-center   my-14">
          {chapterPages_?.map((page) => {
            return (
              <img
                key={page?.attributes?.url}
                onClick={() => handleFullScreen()}
                src={page?.attributes?.url}
                alt="page"
              />
            );
          })}
        </section>
        <div className="relative dropDown mb-4 flex sm:hidden items-center  justify-center">
          <div
            onClick={() => setIsActive(!isActive)}
            className="text-white   items-center w-[200px] flex justify-center flex-row-reverse lg:text-xl text-[16px]  font-medium bg-primary py-2 px-5 cursor-pointer hover:bg-[#481775] tr-4 rounded-[60px] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
            الفصل {chapterNumber_}
          </div>
          <div
            className={
              isActive
                ? "active absolute block top-[40px] overflow-y-scroll max-h-[300px]  right-[50%] translate-x-[50%] z-10 mt-2 w-56 rounded-md  bg-primary "
                : "absolute hidden  right-[50%] translate-x-[50%] z-10 mt-2 w-56 rounded-md  bg-primary "
            }
            role="menu"
          >
            {chapters?.map((ch) => (
              <div key={ch?.chapter_number} className="p-2">
                <Link
                  href={`/manga_list/${title}/chapters/${ch?.chapter_number}`}
                  className="block rounded-lg px-4 py-2  text-center cursor-pointer hover:bg-[#481775] tr-4"
                  role="menuitem"
                >
                  الفصل {ch?.chapter_number}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <div
            onClick={() => nextChapter()}
            className="text-white flex items-center lg:w-[200px] justify-center  lg:text-xl  text-[16px] font-medium border-[1px] border-solid border-primary cursor-pointer bg-black hover:bg-primary tr-4  py-2  px-5 rounded-[60px] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            الفصل التالي
          </div>

          <div className="relative dropDown hidden   sm:flex">
            <div
              onClick={() => setIsActive(!isActive)}
              className="text-white flex items-center lg:w-[200px] justify-center flex-row-reverse lg:text-xl text-[16px]  font-medium bg-primary py-2 px-5 cursor-pointer hover:bg-[#481775] tr-4 rounded-[60px] "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              الفصل {chapterNumber_}
            </div>
            <div
              className={
                isActive
                  ? "active absolute block top-[50px] overflow-y-scroll max-h-[300px] right-[50%] translate-x-[50%] z-10 mt-2 w-56 rounded-md  bg-primary "
                  : "absolute hidden  right-[50%] translate-x-[50%] z-10 mt-2 w-56 rounded-md  bg-primary "
              }
              role="menu"
            >
              {chapters?.map((ch) => (
                <div key={ch?.chapter_number} className="p-2">
                  <Link
                    href={`/manga_list/${title}/chapters/${ch?.chapter_number}`}
                    className="block rounded-lg px-4 py-2  text-center cursor-pointer hover:bg-[#481775] tr-4"
                    role="menuitem"
                  >
                    الفصل {ch?.chapter_number}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div
            onClick={() => prevChapter()}
            className="text-white  flex items-center lg:w-[200px]  justify-center flex-row-reverse lg:text-xl text-[16px] font-medium border-[1px] border-solid cursor-pointer border-primary hover:bg-primary tr-4  bg-black py-2 px-5 rounded-[60px] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            الفصل السابق
          </div>
        </div>
      </div>
    </div>
  );
}

export default chapter_page;
