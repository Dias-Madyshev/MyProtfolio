import React from "react";
import Title from "../layauts/Title";
import Card from "./Card";
import { FaReact } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { SiTailwindcss } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { FiCode } from "react-icons/fi";
import { MdAnimation } from "react-icons/md";

export default function Features() {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I do" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
        <Card
          icon={<FiSmartphone />}
          title="Responsive Design"
          des="I create fully responsive and adaptive web interfaces that provide a seamless experience across all devices, from desktops to smartphones."
        />
        <Card
          icon={<FaReact />}
          title="React Development"
          des="I build dynamic and high-performance single-page applications (SPAs) using React, ensuring smooth interactions and scalable architecture."
        />
        <Card
          icon={<SiTailwindcss />}
          title="Modern CSS Techniques"
          des="I implement the latest CSS methodologies, including CSS-in-JS, Tailwind CSS, and Flexbox/Grid, to craft visually appealing and maintainable styles."
        />
        <Card
          icon={<AiOutlineApi />}
          title="API Integration"
          des="I efficiently fetch, process, and display data from external APIs and backend services, ensuring seamless integration, enhanced functionality, and dynamic user interactions."
        />
        <Card
          icon={<FiCode />}
          title="Clean Code"
          des="I write well-structured, readable, and reusable code that enhances performance, ensures long-term scalability, and simplifies maintenance for future development."
        />
        <Card
          icon={<MdAnimation />}
          title="Interactive UI"
          des="I enhance user engagement by incorporating animations, transitions, and interactive elements to create smooth and immersive experiences."
        />
      </div>
    </section>
  );
}
