import React from "react";
import { Alata } from "next/font/google";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
const alata = Alata({ subsets: ["latin"], weight: "400" });
function MangaList() {
  return (
    <section className="manga-list  ">
      <SectionTitle title={"آخـر الإصــدارات"} />
      <div className="container lg:w-[75%]">
        <div className="cards-list grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="manga-card flex flex-col ">
            <Image src={"/img1.jpg"} alt="img" width={290} height={400} />
            <h2
              className={` ${alata.className}  text-white text-left text-[16px] lg:text-[22px]`}
            >
              The Genius Actor’s Aura
            </h2>
          </div>
          <div className="manga-card flex flex-col ">
            <Image src={"/img1.jpg"} alt="img" width={290} height={400} />
            <h2
              className={` ${alata.className}  text-white text-left text-[16px] lg:text-[22px]`}
            >
              The Genius Actor’s Aura
            </h2>
          </div>
          <div className="manga-card flex flex-col ">
            <Image src={"/img1.jpg"} alt="img" width={290} height={400} />
            <h2
              className={` ${alata.className}  text-white text-left text-[16px] lg:text-[22px]`}
            >
              The Genius Actor’s Aura
            </h2>
          </div>
          <div className="manga-card flex flex-col ">
            <Image src={"/img1.jpg"} alt="img" width={290} height={400} />
            <h2
              className={` ${alata.className}  text-white text-left text-[16px] lg:text-[22px]`}
            >
              The Genius Actor’s Aura
            </h2>
          </div>
          <div className="manga-card flex flex-col ">
            <Image src={"/img1.jpg"} alt="img" width={290} height={400} />
            <h2
              className={` ${alata.className}  text-white text-left text-[16px] lg:text-[22px]`}
            >
              The Genius Actor’s Aura
            </h2>
          </div>
          <div className="manga-card flex flex-col ">
            <Image src={"/img1.jpg"} alt="img" width={290} height={400} />
            <h2
              className={` ${alata.className}  text-white text-left text-[16px] lg:text-[22px]`}
            >
              The Genius Actor’s Aura
            </h2>
          </div>
          <div className="manga-card flex flex-col ">
            <Image src={"/img1.jpg"} alt="img" width={290} height={400} />
            <h2
              className={` ${alata.className}  text-white text-left text-[16px] lg:text-[22px]`}
            >
              The Genius Actor’s Aura
            </h2>
          </div>
          <div className="manga-card flex flex-col ">
            <Image src={"/img1.jpg"} alt="img" width={290} height={400} />
            <h2
              className={` ${alata.className}  text-white text-left text-[16px] lg:text-[22px]`}
            >
              The Genius Actor’s Aura
            </h2>
          </div>
          <div className="manga-card flex flex-col ">
            <Image src={"/img1.jpg"} alt="img" width={290} height={400} />
            <h2
              className={` ${alata.className}  text-white text-left text-[16px] lg:text-[22px]`}
            >
              The Genius Actor’s Aura
            </h2>
          </div>
          <div className="manga-card flex flex-col ">
            <Image src={"/img1.jpg"} alt="img" width={290} height={400} />
            <h2
              className={` ${alata.className}  text-white text-left text-[16px] lg:text-[22px]`}
            >
              The Genius Actor’s Aura
            </h2>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default MangaList;
