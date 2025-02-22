import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({ des, title, src }) => {
  return (
    <div
      className="w-full px-6 md:px-12 h-auto py-8 md:py-10 rounded-lg shadow-shadowOne flex
  flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b
  hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000"
    >
      <div className="w-full h-[250px] sm:h-[300px] overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg md:text-xl uppercase text-designColor font-semibold">
            {title}
          </h3>
          <div className="flex gap-2">
            <a
              href="#"
              className="text-lg w-10 h-10 rounded-full bg-black flex 
            justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
            >
              <BsGithub />
            </a>
            <a
              href="#"
              className="text-lg w-10 h-10 rounded-full bg-black flex 
            justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
            >
              <FaGlobe />
            </a>
          </div>
        </div>
        <p className="text-sm md:text-base tracking-wide mt-3 text-gray-300 hover:text-gray-100 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
