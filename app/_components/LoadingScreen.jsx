import Image from "next/image";
import React from "react";

function LoadingScreen() {
  return (
    <div className="loading-screen h-screen w-screen flex justify-center items-center bg-background  z-[10000]  fixed">
      <Image className=" flex justify-center items-center" src={"/logo.svg"} alt={"logo"} width={200} height={200}/>
    </div>
  );
}

export default LoadingScreen;
