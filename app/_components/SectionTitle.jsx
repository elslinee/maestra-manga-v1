import React from "react";


function SectionTitle({ title }) {
  return (
    <div className="section-title mb-8  relative md:text-[28px] text-[24px] lg:text-[32px] font-bold text-center text-white">
      {title}
    </div>
  );
}

export default SectionTitle;
