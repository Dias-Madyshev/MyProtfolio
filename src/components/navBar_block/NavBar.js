import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'
import Logo from '../../Assets/images/photoHeader1.jpg'
import { navLinkData } from '../../constants'

export const NavBar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinkData.map(({ link }) => link)
      for (let id of sections) {
        const section = document.getElementById(id)
        if (section) {
          const { top } = section.getBoundingClientRect()
          if (top >= 0 && top < 200) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="w-full h-20 mx-auto sticky top-0 z-50 bg-bodyColor flex justify-between items-center border-b-[1px] border-b-gray-600 px-4 sm:px-6 lg:px-10">
      <nav className="flex items-center h-20">
        <img
          src={Logo}
          alt="Мой аватар"
          className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px] rounded-full border-2 border-gray-300"
        />
        <span className="font-montserrat text-gradient ml-2 sm:ml-3 text-base sm:text-lg lg:text-xl font-semibold">
          Madyshev
        </span>
      </nav>
      <div className="lg:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={24} className="text-white" /> : <FiMenu size={24} className="text-white" />}
      </div>
      <div
        className={`absolute lg:static top-20 left-0 w-full lg:w-auto bg-bodyColor lg:bg-transparent transition-all duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        } shadow-lg lg:shadow-none`}>
        <ul className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-10 py-4 lg:py-0">
          {navLinkData.map(({ id, title, link }) => (
            <li key={id}>
              <Link
                to={link}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className={`text-sm sm:text-base font-normal tracking-wide cursor-pointer duration-300 block py-2 lg:py-0 ${
                  activeSection === link ? 'text-white' : 'text-gray-400 hover:text-designColor'
                }`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
