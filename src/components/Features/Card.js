import React from "react";
import { HiArrowRight } from "react-icons/hi";

export default function Card({ title, des, icon }) {
  return (
    <div className="gap-2 flex-col w-full px-12 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-300 h-100">
      {/* Поднимаем иконку на 20px */}
      <div className="relative top-[-30px] translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-6xl text-designColor">{icon}</span>
      </div>

      <div className="h-[220px] overflow-y-hidden">
        <div className="flex h-full flex-col gap-6 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <h2 className="text-2xl font-bold font-titleFont text-gray-300">
            {title}
          </h2>
          <p className="base">{des}</p>
          <span className="text-2xl text-designColor">
            <HiArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
}
