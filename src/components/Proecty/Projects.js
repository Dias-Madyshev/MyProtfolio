import React from 'react'
import Title from '../layauts/Title'
import ProjectCard from './ProjectCard'
import projectOne from '../../Assets/images/projects/projectOne.jpg'
import projectTwo from '../../Assets/images/projects/projectTwo.jpg'
import projectThree from '../../Assets/images/projects/projectThree.jpg'

const Projects = () => {
  const projects = [
    {
      title: 'Snake Game',
      des: 'A classic Snake Game where you control a snake to eat food and grow longer while avoiding collisions with walls and yourself.',
      src: projectOne,
      projectLink: 'https://snake-game-nu-mauve.vercel.app/',
      githubLink: 'https://github.com/Dias-Madyshev/Snake-game',
      webLink: 'https://snake-game-nu-mauve.vercel.app/',
    },
    {
      title: 'Pizza Dream',
      des: 'Pizzalicious is a web app for pizza lovers, offering menu browsing, custom orders, and a favorites list.',
      src: projectTwo,
      projectLink: 'https://pizza-dream-rrbl.vercel.app/',
      githubLink: 'https://github.com/Dias-Madyshev/PizzaDream',
      webLink: 'https://pizza-dream-rrbl.vercel.app/',
    },
    {
      title: 'Dogiverse',
      des: 'Dogiverse is a web app for dog lovers, featuring breed info, fun facts, and a favorites list.',
      src: projectThree,
      projectLink: 'https://dogiverse-j5zw.vercel.app/',
      githubLink: 'https://github.com/Dias-Madyshev/Dogiverse',
      webLink: 'https://dogiverse-j5zw.vercel.app/',
    },
  ]

  return (
    <section
      id="project"
      className="w-full py-10 sm:py-20 border-b border-black px-4 sm:px-6 lg:px-10">
      <div className="flex justify-center items-center text-center mb-10 sm:mb-16">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      {/* Грид для адаптива */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
