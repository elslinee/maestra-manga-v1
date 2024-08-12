"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addChapterToManga, handleUpload } from "../_utils/addChaptersApi";
import mangaListApis from "../_utils/mangaListApis";
import axios from "axios";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";

function AddChapterForm() {
  const cookies = parseCookies();
  const token = cookies.token;
  const [fileSelected, setFileSelected] = useState(false);
  const router = useRouter();
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [pageImgs, setPagesImgs] = useState([]);
  const handleFileChange = (e) => {
    setFiles(e.target.files);
    if (e.target.files.length > 0) {
      setFileSelected(true);
    } else {
      setFileSelected(false);
    }
  };
  const handleUpload = async (callback) => {
    if (files.length === 0) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    try {
      setUploading(true);
      const response = await axios.post(
        "https://maestra-manga-strapi.onrender.com/api/upload",

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // Add the token to the Authorization header
          },
        }
      );

      const uploadedFiles = response.data;
      setPagesImgs(uploadedFiles);
      // Call the callback function and pass the uploaded files
      if (callback) callback(uploadedFiles);
    } catch (error) {
      console.error(
        "Error uploading file(s):",
        error.response?.data || error.message
      );
    } finally {
      setUploading(false);
    }
  };
  const getMangaList_ = () => {
    mangaListApis.getMangaListSort().then((res) => {
      setMangaList(res?.data?.data);
    });
  };

  const [mangaList, setMangaList] = useState([]);
  const [manga, setManga] = useState(null);

  const getMangaByTitle_ = (title, callback) => {
    mangaListApis.getMangaByTitle(title).then((res) => {
      const mangaData = res?.data?.data[0] || [];
      setManga(mangaData);
      if (callback) callback(mangaData);
    });
  };
  useEffect(() => {
    getMangaList_();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await handleUpload((uploadedFiles) => {
        getMangaByTitle_(data.title, (mangaData) => {
          const mangaId = mangaData?.id;

          const newChapter = {
            chapter_name: `chapter_${Number(data.chapter_number)}`,
            chapter_number: data.chapter_number,
            colored: false,
            pages: uploadedFiles,
            manga_lists: mangaId,
          };
          addChapterToManga(newChapter, mangaId);
          router.push("/");
        });
      });
    } catch (error) {
      console.error("Error in onSubmit:", error.message);
    }
  };
  return (
    <div className=" text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 lg:w-[70%] mx-auto  bg-background rounded-lg p-8 "
      >
        <div className="col-span-6 ">
          <label
            htmlFor="manga_name"
            className="block text-sm font-medium text-gray-200"
          >
            اختر العمل
          </label>
          <select
            {...register("title", {
              required: true,
              value: " ",
            })}
            id="manga_name"
            className={`mt-1  appearance-none     w-full py-3 px-2 rounded-md   text-sm  focus-visible:outline-none ${
              errors.title ? " border-red-700  border border-solid" : ""
            }  bg-gray-800 text-gray-200`}
          >
            {mangaList.map((manga) => {
              const title = manga?.attributes?.title;

              return (
                <option key={manga?.id} value={title} className="">
                  {title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-span-6 mt-4">
          <label
            htmlFor="chapter_number"
            className="block text-sm font-medium  text-gray-200"
          >
            رقم الفصل
          </label>
          <input
            {...register("chapter_number", {
              required: true,
              maxLength: 3,
              max: 999,
            })}
            className={`mt-1  appearance-none    line-clamp-2  w-full py-3 px-2 rounded-md   text-sm  focus-visible:outline-none ${
              errors.chapter_number
                ? " border-red-700  border border-solid"
                : ""
            }  bg-gray-800 text-gray-200`}
            type="number"
            id="chapter_number"
          />
        </div>
        <div className="col-span-6 mt-4">
          <label
            htmlFor="chapter_pages"
            className={`mt-8   appearance-none  flex  gap-2  font-bold justify-center   line-clamp-2  w-full py-3 px-2 rounded-md   text-md cursor-pointer hover:bg-[#4a1779] tr-4  focus-visible:outline-none ${
              errors.chapter_number
                ? " border-red-700  border border-solid"
                : ""
            }  bg-gray-900 text-gray-200 ${
              fileSelected ? `bg-green-800 hover:bg-green-800` : `bg-gray-900`
            } tr-4`}
          >
            رفع صفحات الفصل
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`size-6  absolute  rotate-180 tr-4 ${
                  fileSelected ? `opacity-0` : `opacity-100`
                }  `}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-6 absolute ${
                  fileSelected ? `opacity-100` : `opacity-0`
                } `}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>
          </label>
          <input
            {...register("pages", {
              required: true,
            })}
            className="hidden"
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            id="chapter_pages"
            multiple
          />
        </div>
        {uploading ? (
          <button
            type="button"
            className="lg:py-2  opacity-40 flex justify-center items-center mt-4 lg:px-4 tr-4 py-1 px-2 lg:text-xl text-[16px] font-semibold rounded-lg  bg-primary"
          >
            جاري الرفع
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="mr-2 animate-spin"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
            </svg>
          </button>
        ) : (
          <button
            type="submit"
            disabled={uploading}
            className={` lg:py-2 mt-4 lg:px-4 tr-4 py-1 px-2 lg:text-xl text-[16px] font-semibold rounded-lg  bg-primary`}
          >
            رفع الفصل
          </button>
        )}
      </form>
    </div>
  );
}

export default AddChapterForm;
