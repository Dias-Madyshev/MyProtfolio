import React from "react";

const Resume = () => {
  return (
    <div className="flex justify-center items-center py-20" id="resume">
      <a
        href="/resume.pdf"
        download="My_Resume.pdf"
        className="w-full max-w-[300px] h-[50px] rounded-xl text-gray-400 hover:text-white 
        flex justify-center items-center font-semibold text-lg relative 
        shadow-lg shadow-gray-200 cursor-pointer
        transition-all duration-300 ease-in-out
        before:absolute before:inset-0 before:rounded-xl before:bg-white/10 
        before:blur-md before:opacity-0 hover:before:opacity-75 
        active:scale-95 active:shadow-sm bg-gradient-to-r from-designColor to-gray-800"
        aria-label="Download Resume"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
