"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addChapterToManga, handleUpload } from "../_utils/addChaptersApi";
import mangaListApis from "../_utils/mangaListApis";
import axios from "axios";
import { useRouter } from "next/navigation";
import AddChapterForm from "../_components/AddChapterForm.jsx";
import AddMangaForm from "../_components/AddMangaForm";
import withAuth from "../_components/withAuth.jsx";
import userApi from "../_utils/userApi";
function addManga() {

  useEffect(() => {}, []);
  const [activeButton, setActiveButton] = useState(1);
  return (
    <div className="add-manga-page lg:pt-[14rem] pt-[7.5rem] text-white">
      <div className="container">
        <h2 className="text-3xl text-center font-semibold lg:mb-12 mb-8">
          رفع الفصول و الاعمال
        </h2>
        <div className="select-form flex w-full justify-center gap-8 items-center">
          <button
            onClick={() => setActiveButton(1)}
            className={` lg:py-2 lg:px-4 tr-4 py-1 px-2 lg:text-xl text-[16px] font-semibold rounded-lg ${
              activeButton === 1 ? "bg-primary" : "bg-black"
            }`}
          >
            رفع فصل جديد
          </button>
          <button
            onClick={() => setActiveButton(2)}
            className={` lg:py-2 lg:px-4 tr-4 py-1 px-2 lg:text-xl text-[16px] font-semibold rounded-lg ${
              activeButton === 2 ? "bg-primary" : "bg-black"
            }`}
          >
            اضافة عمل جديد
          </button>
        </div>
        {activeButton === 1 ? <AddChapterForm /> : <AddMangaForm />}
      </div>
    </div>
  );
}

export default withAuth(addManga);
