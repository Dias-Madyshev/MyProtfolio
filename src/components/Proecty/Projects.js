import React from 'react'
import Title from '../layauts/Title'
import ProjectCard from './ProjectCard'
import projectOne from '../../Assets/images/projects/projectOne.jpg'
import projectTwo from '../../Assets/images/projects/projectTwo.jpg'
import projectThree from '../../Assets/images/projects/projectThree.jpeg'

const Projects = () => {
  return (
    <section id="project" className="w-full py-10 sm:py-20 border-b border-black px-4 sm:px-6 lg:px-10">
      <div className="flex justify-center items-center text-center mb-10 sm:mb-16">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      {/* Грид для адаптива */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        <ProjectCard
          des="A classic Snake Game where you control a snake to eat food and grow longer while avoiding collisions with walls and yourself."
          title="Snake Game"
          src={projectOne}
          projectLink="https://snake-game-nu-mauve.vercel.app/"
        />
        <ProjectCard
          des="Dogiverse is a web app for dog lovers, featuring breed info, fun facts, and a favorites list."
          title="Dogiverse"
          src={projectTwo}
        />
        <ProjectCard
          des="Dogiverse is a web app for dog lovers, featuring breed info, fun facts, and a favorites list."
          title="Dogiverse"
          src={projectThree}
        />
        <ProjectCard
          des="Dogiverse is a web app for dog lovers, featuring breed info, fun facts, and a favorites list."
          title="Dogiverse"
          src={projectTwo}
        />
        <ProjectCard
          des="Dogiverse is a web app for dog lovers, featuring breed info, fun facts, and a favorites list."
          title="Dogiverse"
          src={projectTwo}
        />
        <ProjectCard
          src={projectTwo}
          title="Dogiverse"
          des="Dogiverse is a web app for dog lovers, featuring breed info, fun facts, and a favorites list."
        />
      </div>
    </section>
  )
}

export default Projects
