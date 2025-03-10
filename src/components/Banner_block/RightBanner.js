import React from 'react'
import MyPhoto from '../../Assets/images/MyPhoto.png'

export default function RightBanner() {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center relative">
      <div className="absolute bottom-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne rounded-2xl"></div>
      <img src={MyPhoto} alt="My Photo" className="relative z-10 w-[200px] sm:w-[250px] lg:w-[400px] rounded-2xl" />
    </div>
  )
}
