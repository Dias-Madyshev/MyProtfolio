import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'

export default function Banner() {
  return (
    <section
      id="home"
      className="w-full min-h-screen pt-20 pb-10 sm:pt-10 sm:pb-20 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0 border-b border-b-black font-titleFont px-4 sm:px-6 lg:px-10">
      <LeftBanner />
      <RightBanner />
    </section>
  )
}
