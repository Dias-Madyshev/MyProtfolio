import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

export default function Banner() {
  return (
    <section
      id="home"
      className="w-full h-auto pt-10 pb-20 flex flex-col md:flex-row items-center border-b border-b-black font-titleFont"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
}
