import React from "react";
import MyPhoto from "../../Assets/images/MyPhoto.png";

export default function RightBanner() {
  return (
    <div className="w-full md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
      <div className="absolute bottom-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne "></div>
      <img
        src={MyPhoto}
        alt="My Photo"
        className="relative z-10 w-[250px] md:w-auto"
      />
    </div>
  );
}
