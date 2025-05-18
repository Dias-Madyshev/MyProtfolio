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

  // Закрываем меню при скролле
  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('scroll', closeMenu)
    return () => window.removeEventListener('scroll', closeMenu)
  }, [])

  // Блокируем скролл когда меню открыто
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  return (
    <>
      <div className="w-full h-16 sm:h-18 lg:h-20 mx-auto sticky top-0 z-50 bg-bodyColor/95 backdrop-blur-sm flex justify-between items-center border-b-[1px] border-b-gray-600/50 px-4 sm:px-6 lg:px-10 transition-all duration-300">
        <nav className="flex items-center h-full">
          <div className="relative w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] lg:w-[55px] lg:h-[55px]">
            <img
              src={Logo}
              alt="Мой аватар"
              className="w-full h-full rounded-full border-2 border-gray-300 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <span className="font-montserrat text-gradient ml-2 sm:ml-3 text-sm sm:text-base lg:text-lg font-semibold">
            Madyshev
          </span>
        </nav>

        {/* Гамбургер меню */}
        <button
          className="lg:hidden z-50 p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}>
          {menuOpen ? (
            <FiX size={24} className="text-white" />
          ) : (
            <FiMenu size={24} className="text-white" />
          )}
        </button>

        {/* Backdrop для мобильного меню */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Навигационные ссылки */}
        <div
          className={`fixed lg:static inset-y-0 right-0 w-[250px] sm:w-[300px] lg:w-auto h-full lg:h-auto
          bg-bodyColor lg:bg-transparent flex flex-col lg:flex-row items-center justify-center
          transition-all duration-300 ease-in-out transform
          ${menuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
          lg:shadow-none z-40`}>
          <ul className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            {navLinkData.map(({ id, title, link }) => (
              <li key={id} className="w-full lg:w-auto">
                <Link
                  to={link}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base font-normal tracking-wide cursor-pointer
                    duration-300 block text-center py-3 px-6 lg:px-2 lg:py-1
                    hover:bg-gray-800/50 lg:hover:bg-transparent rounded-lg
                    ${
                      activeSection === link
                        ? 'text-white lg:text-designColor'
                        : 'text-gray-400 hover:text-white lg:hover:text-designColor'
                    }`}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
