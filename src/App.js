import React from "react";
import { NavBar } from "./components/navBar_block/NavBar";
import Banner from "./components/Banner_block/Banner";
import Features from "./components/Features/Features_block";
import Projects from "./components/Proecty/Projects";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
        <NavBar />
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
