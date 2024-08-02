import Image from "next/image";
import React from "react";

function PageComponent({ title, desc, linkTitle, linkImg, mainImg }) {
  return (
    <div className="flex bg-black/40 relative  p-14 justify-between w-full items-center rounded-[40px]">
      <div className="text ">
        <h1 className="text-[38px] font-bold ">{title}</h1>
        <p className="text-[28px] font-semibold my-8   leading-[50px] max-w-[880px]">
          {desc}
        </p>
        <div className="flex  gap-8">
          <span className="text-[#6471FB] h-[54px]  flex  items-center">
            {linkTitle}
          </span>
          <a href="https://discord.gg/9GPk8HX3Ek">
            <Image
              src={linkImg}
              alt="discord"
              height={44}
              width={196}
              className="h-[54px]"
            />
          </a>
        </div>
      </div>
      <div className="img  absolute left-0">
        <div className="img-holder">
          <Image
            src={mainImg}
            alt="join_image"
            height={828}
            width={500}
            className="h-[828px]"
          />
        </div>
      </div>
    </div>
  );
}

export default PageComponent;
