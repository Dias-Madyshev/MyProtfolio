import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import { FaTelegram, FaLinkedin, FaGithub, FaReact } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiGit } from 'react-icons/si'

export default function LeftBanner() {
  const [text] = useTypewriter({
    words: ['Professional Coder.', 'Frontend Developer.'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  })
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-10 lg:mt-0">
      <div className="flex flex-col gap-3 lg:gap-5">
        <h4 className="text-sm sm:text-base lg:text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">
          Hi, I'm
          <span className="text-designColor capitalize"> Dias</span>
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white">
          a <span className="text-designColor">{text}</span>
        </h2>
        <p className="text-xs sm:text-sm lg:text-base font-light text-gray-400 leading-6">
          Aspiring to the position of frontend developer, where I can apply my skills and knowledge to create innovative
          and user-oriented web applications, participating in exciting projects and interacting in a dynamic team
          environment.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-6 lg:gap-10">
        <div>
          <h2 className="text-sm lg:text-base uppercase font-titleFont mb-4">Find me</h2>
          <div className="flex gap-3 sm:gap-4">
            <a href="https://t.me/DiasMadyshev" className="bannerIcon">
              <FaTelegram />
            </a>
            <span className="bannerIcon">
              <FaLinkedin />
            </span>
            <a href="https://github.com/Dias-Madyshev" className="bannerIcon">
              <FaGithub />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-sm lg:text-base uppercase font-titleFont mb-4">BEST SKILL ON</h2>
          <div className="flex gap-3 sm:gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTypescript />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiGit />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
