import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaGlobe } from 'react-icons/fa'

const ProjectCard = ({ des, title, src }) => {
  return (
    <div
      className="w-full p-4 sm:p-6 lg:p-8 rounded-lg shadow-shadowOne flex flex-col 
      bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b
      hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000">
      <div className="w-full h-[200px] sm:h-[250px] lg:h-[300px] overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>
      <div className="w-full mt-4 sm:mt-5 flex flex-col gap-3 sm:gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base sm:text-lg lg:text-xl uppercase text-designColor font-semibold">{title}</h3>
          <div className="flex gap-2">
            <a
              href="https://github.com/Dias-Madyshev/Snake-game"
              className="text-base sm:text-lg w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black flex 
              justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              <BsGithub />
            </a>
            <a
              href="https://snake-game-nu-mauve.vercel.app/"
              className="text-base sm:text-lg w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black flex 
              justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              <FaGlobe />
            </a>
          </div>
        </div>
        <p className="text-xs sm:text-sm lg:text-base tracking-wide mt-2 sm:mt-3 text-gray-300 hover:text-gray-100 duration-300">
          {des}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard
