import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../Assets/images/photoHeader1.jpg";
import { navLinkData } from "../../constants";

export const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinkData.map(({ link }) => link);
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top >= 0 && top < 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-20 mx-auto sticky top-0 z-50 bg-bodyColor flex justify-between items-center border-b-[1px] border-b-gray-600 px-6 md:px-10">
      <nav className="flex items-center h-20">
        <img
          src={Logo}
          alt="Мой аватар"
          className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full border-2 border-gray-300"
        />
        <span className="font-montserrat text-gradient ml-3 text-lg md:text-xl font-semibold">
          Madyshev
        </span>
      </nav>
      <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <FiX size={28} className="text-white" />
        ) : (
          <FiMenu size={28} className="text-white" />
        )}
      </div>
      <div
        className={`absolute md:static top-20 left-0 w-full md:w-auto bg-bodyColor md:bg-transparent transition-transform duration-300 ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-10 py-4 md:py-0">
          {navLinkData.map(({ id, title, link }) => (
            <li key={id}>
              <Link
                to={link}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-normal tracking-wide cursor-pointer duration-300 ${
                  activeSection === link
                    ? "text-white"
                    : "text-gray-400 hover:text-designColor"
                }`}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
