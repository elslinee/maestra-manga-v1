"use client";

import axios from "axios";
import React, { Children, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import addMangaApi from "../_utils/addMangaApi";
import Select from "react-select";
import { useRouter } from "next/navigation";

function AddMangaForm() {
  const [titleWithoutSpace1, setTitleWithoutSpace1] = useState("");
  const [titleWithoutSpace2, setTitleWithoutSpace2] = useState("");
  const [titleWithoutSpace3, setTitleWithoutSpace3] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [files, setFiles] = useState([]);
  const [fileSelected, setFileSelected] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [coverImg, setCoverImg] = useState([]);
  const [jpnTitle, setJpnTitle] = useState("");
  const [krTitle, setKrTitle] = useState("");
  const [chTitle, setChTitle] = useState("");
  const token = localStorage.getItem("token");

  const router = useRouter();
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
      setCoverImg(uploadedFiles);
      if (selectedType === "مانجا") {
        setJpnTitle(titleWithoutSpace3);
      } else if (selectedType === "مانهوا") {
        setKrTitle(titleWithoutSpace3);
      } else if (selectedType === "مانها") {
        setChTitle(titleWithoutSpace3);
      }
      console.log("File(s) uploaded successfully:", uploadedFiles);

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
  const categories = [
    { value: "shonen", label: "شونين" },
    { value: "shojo", label: "شوجو" },
    { value: "seinen", label: "سينين" },
    { value: "action", label: "أكشن" },
    { value: "mystery", label: "غموض" },
    { value: "thriller", label: "اثارة" },
    { value: "adventure", label: "مغامرة" },
    { value: "comedy", label: "كوميدي" },
    { value: "crime", label: "جريمة" },
    { value: "sci-fi", label: "خيال علمي" },
    { value: "horror", label: "رعب" },
    { value: "slice-of-life", label: "شريحة من الحياة" },
    { value: "sports", label: "رياضي" },
    { value: "supernatural", label: "قوة خارقة" },
    { value: "magic", label: "سحري" },
    { value: "historical", label: "تاريخي" },
    { value: "mecha", label: "ميكا" },
    { value: "monsters", label: "وحوش" },
    { value: "space", label: "فضاء" },
    { value: "martial-arts", label: "فنون قتالية" },
    { value: "cooking", label: "طبخ" },
    { value: "demons", label: "شياطين" },
    { value: "mafia", label: "مافيا" },
    { value: "school-life", label: "حياة مدرسية" },
    { value: "drama", label: "دراما" },
    { value: "supernatural", label: "خارق للطبيعة" },
    { value: "military", label: "عسكري" },
    { value: "fantasy", label: "خيالي" },
    { value: "vampires", label: "مصاصي دماء" },
    { value: "romance", label: "رومانسي" },
    { value: "music", label: "موسيقي" },
    { value: "psychological", label: "نفسي" },
  ];
  const handleChange1 = (event) => {
    setTitleWithoutSpace1(event.target.value.trim());
  };
  const handleChange2 = (event) => {
    setTitleWithoutSpace2(event.target.value.trim());
  };
  const handleChange3 = (event) => {
    setTitleWithoutSpace3(event.target.value.trim());
  };
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#202936", // Background color for the control
      borderColor: "#202936", // Border color for the control
      boxShadow: "none", // Remove the default box-shadow
      "&:hover": {
        borderColor: "#202936", // Border color on hover
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#202936", // Background color for the dropdown menu
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#202936" : "#202936", // Background color for options
      color: "#fff", // Text color for options
      "&:hover": {
        backgroundColor: "#611f9b", // Background color on hover
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#611f9b", // Background color for selected items
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#fff", // Text color for selected items
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "#888", // Color for remove icon
      ":hover": {
        backgroundColor: "#f00", // Background color on hover
        color: "#fff", // Color for remove icon on hover
      },
    }),
  };

  const addManga_ = (mangaData) => {
    addMangaApi.addManga(mangaData).then((res) => {
      console.log(res.data);
    });
  };
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const selectedType = watch("type");

  const onSubmit = async (data) => {
    const categories_ = data.categories.map((cat) => cat.label);

    try {
      await handleUpload((uploadedFiles) => {
        const mangaData = {
          title: titleWithoutSpace1,
          title_ar: titleWithoutSpace2,
          title_jpn: "",
          title_kr: "",
          title_ch: "",
          state: data.state,
          type: data.type,
          color: data.color,
          categories: categories_,
          draw_by: data.draw_by,
          Written_by: data.written_by,
          story: [
            {
              type: "paragraph",
              children: [
                {
                  text: data.story,
                  type: "text",
                },
              ],
            },
          ],
          cover: uploadedFiles,
        };
        if (selectedType === "مانجا") {
          mangaData.title_jpn = titleWithoutSpace3;
        } else if (selectedType === "مانهوا") {
          mangaData.title_kr = titleWithoutSpace3;
        } else if (selectedType === "مانها") {
          mangaData.title_ch = titleWithoutSpace3;
        }
        console.log(mangaData);
        addManga_(mangaData);
        router.push("/manga_list");
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
        <div className="title-eng col-span-6 ">
          <label
            htmlFor="manga_name"
            className="flex gap-4 text-sm font-medium  text-gray-200"
          >
            اسم العمل - English
            {errors.title ? (
              <span className="  text-red-700">
                لا تضع مسافة قبل او بعد الاسم
              </span>
            ) : (
              ""
            )}
          </label>
          <input
            {...register("title", {
              required: true,
              onChange: handleChange1,
              value: titleWithoutSpace1,
            })}
            className={`mt-1  appearance-none    line-clamp-2  w-full py-3 px-2 rounded-md   text-sm  focus-visible:outline-none ${
              errors.title ? " border-red-700  border border-solid" : ""
            }  bg-gray-800 text-gray-200`}
            type="text"
            id="manga_name"
          />
        </div>
        <div className="title-ar col-span-6 mt-4">
          <label
            htmlFor="manga_name2"
            className="flex gap-4 text-sm font-medium  text-gray-200"
          >
            اسم العمل - عربى
            {errors.title ? (
              <span className="  text-red-700">
                لا تضع مسافة قبل او بعد الاسم
              </span>
            ) : (
              ""
            )}
          </label>
          <input
            {...register("title_ar", {
              required: true,
              onChange: handleChange2,
              value: titleWithoutSpace2,
            })}
            className={`mt-1  appearance-none    line-clamp-2  w-full py-3 px-2 rounded-md   text-sm  focus-visible:outline-none ${
              errors.title ? " border-red-700  border border-solid" : ""
            }  bg-gray-800 text-gray-200`}
            type="text"
            id="manga_name2"
          />
        </div>
        <div className="title-other col-span-6 mt-4">
          <label
            htmlFor="manga_name3"
            className="flex gap-4 text-sm font-medium  text-gray-200"
          >
            اسم العمل - لغة اخري
            {errors.title ? (
              <span className="  text-red-700">
                لا تضع مسافة قبل او بعد الاسم
              </span>
            ) : (
              ""
            )}
          </label>
          <input
            {...register("title_other", {
              required: true,
              onChange: handleChange3,
              value: titleWithoutSpace3,
            })}
            className={`mt-1  appearance-none    line-clamp-2  w-full py-3 px-2 rounded-md   text-sm  focus-visible:outline-none ${
              errors.title ? " border-red-700  border border-solid" : ""
            }  bg-gray-800 text-gray-200`}
            type="text"
            id="manga_name3"
          />
        </div>
        <div className="flex w-full  gap-4">
          <div className="state  w-full  mt-4">
            <label
              htmlFor="manga_state"
              className="flex gap-4 text-sm font-medium  text-gray-200"
            >
              حالة العمل
            </label>
            <select
              {...register("state", {
                required: true,
                value: "",
              })}
              className={`mt-1  appearance-none    line-clamp-2  w-full py-3 px-2 rounded-md   text-sm  focus-visible:outline-none ${
                errors.color ? " border-red-700  border border-solid" : ""
              }  bg-gray-800 text-gray-200`}
              id="manga_state"
            >
              <option value={"مستمر"} className="">
                مستمر
              </option>
              <option value={"مكتمل"} className="">
                مكتمل
              </option>
              <option value={"متوقف"} className="">
                متوقف
              </option>
            </select>
          </div>
          <div className="type  w-full  mt-4">
            <label
              htmlFor="manga_type"
              className="flex gap-4 text-sm font-medium  text-gray-200"
            >
              النوع
            </label>
            <select
              {...register("type", {
                required: true,
                value: "",
              })}
              className={`mt-1  appearance-none    line-clamp-2  w-full py-3 px-2 rounded-md   text-sm  focus-visible:outline-none ${
                errors.type ? " border-red-700  border border-solid" : ""
              }  bg-gray-800 text-gray-200`}
              id="manga_type"
            >
              <option value={"مانجا"} className="">
                مانجا
              </option>
              <option value={"مانهوا"} className="">
                مانهوا
              </option>
              <option value={"مانها"} className="">
                مانها
              </option>
              <option value={"ون شوت"} className="">
                ون شوت
              </option>
            </select>
          </div>
          <div className="color  w-full  mt-4">
            <label
              htmlFor="manga_color"
              className="flex gap-4 text-sm font-medium  text-gray-200"
            >
              اللون
            </label>
            <select
              {...register("color", {
                required: true,
                value: "",
              })}
              className={`mt-1  appearance-none    line-clamp-2  w-full py-3 px-2 rounded-md   text-sm  focus-visible:outline-none ${
                errors.color ? " border-red-700  border border-solid" : ""
              }  bg-gray-800 text-gray-200`}
              id="manga_color"
            >
              <option value={"ملون"} className="">
                ملون
              </option>
              <option value={"غير ملون"} className="">
                غير ملون
              </option>
            </select>
          </div>
        </div>
        <div className="categories col-span-6 mt-4">
          <label
            htmlFor="manga_categories"
            className="flex gap-4 text-sm font-medium  text-gray-200"
          >
            التصنيفات
          </label>
          <Controller
            name="categories"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="اختر ..."
                isMulti
                options={categories}
                styles={customStyles}
                onChange={(selected) => field.onChange(selected)}
                value={field.label}
              />
            )}
          />
        </div>
        <div className="flex w-full  gap-4">
          <div className="draw_by w-full mt-4">
            <label
              htmlFor="draw_by"
              className="flex gap-4 text-sm font-medium  text-gray-200"
            >
              رسم
            </label>
            <input
              {...register("draw_by", {
                required: true,
                onChange: handleChange2,
                value: titleWithoutSpace2,
              })}
              className={`mt-1  appearance-none    line-clamp-2  w-full py-3 px-2 rounded-md   text-sm  focus-visible:outline-none ${
                errors.title ? " border-red-700  border border-solid" : ""
              }  bg-gray-800 text-gray-200`}
              type="text"
              id="draw_by"
            />
          </div>
          <div className="written_by w-full mt-4">
            <label
              htmlFor="written_by"
              className="flex gap-4 text-sm font-medium  text-gray-200"
            >
              تأليف
            </label>
            <input
              {...register("written_by", {
                required: true,
                onChange: handleChange2,
                value: titleWithoutSpace2,
              })}
              className={`mt-1  appearance-none    line-clamp-2  w-full py-3 px-2 rounded-md   text-sm  focus-visible:outline-none ${
                errors.title ? " border-red-700  border border-solid" : ""
              }  bg-gray-800 text-gray-200`}
              type="text"
              id="written_by"
            />
          </div>
        </div>
        <div className="story col-span-6 mt-4">
          <label
            htmlFor="manga_story"
            className="flex gap-4 text-sm font-medium  text-gray-200"
          >
            القصة
          </label>
          <textarea
            {...register("story", {
              required: true,
            })}
            className={`mt-1 h-40   appearance-none    line-clamp-2  w-full py-3 px-2 rounded-md   text-sm  focus-visible:outline-none ${
              errors.title ? " border-red-700  border border-solid" : ""
            }  bg-gray-800 text-gray-200`}
            type="text"
            id="manga_story"
          />
        </div>
        <div className="cover col-span-6 mt-4">
          <label
            htmlFor="manga_cover"
            className={`mt-8   appearance-none  flex  gap-2  font-bold justify-center   line-clamp-2  w-full py-3 px-2 rounded-md   text-md cursor-pointer hover:bg-[#4a1779] tr-4  focus-visible:outline-none ${
              errors.chapter_number
                ? " border-red-700  border border-solid"
                : ""
            }  bg-gray-900 text-gray-200 ${
              fileSelected ? `bg-green-800 hover:bg-green-800` : `bg-gray-900`
            } tr-4`}
          >
            رفع غلاف العمل
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
            {...register("cover", {
              required: true,
            })}
            className="hidden"
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            id="manga_cover"
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
            اضافة العمل
          </button>
        )}
      </form>
    </div>
  );
}

export default AddMangaForm;
