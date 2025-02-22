import React from "react";
import Title from "../layauts/Title";
import ProjectCard from "./ProjectCard";
import projectOne from "../../Assets/images/projects/projectOne.jpg";
import projectTwo from "../../Assets/images/projects/projectTwo.jpg";
import projectThree from "../../Assets/images/projects/projectThree.jpeg";

const Projects = () => {
  return (
    <section id="project" className="w-full py-20 border-b border-black">
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      {/* Грид для адаптива */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard
          des="Dogiverse is a web app for dog lovers, featuring breed info, fun facts, and a favorites list."
          title="Dogiverse"
          src={projectOne}
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
  );
};

export default Projects;
