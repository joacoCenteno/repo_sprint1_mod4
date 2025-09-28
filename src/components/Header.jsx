import React from 'react'
import imgBg from '../assets/background.jpg'
import TextHero from './TextHero'
import MotionComponent from './MotionComponent'

const Header = () => {
  return (
   <>
    <main style={{ backgroundImage: `url(${imgBg})` }} className={`bg-cover bg-center bg-no-repeat w-full h-screen flex flex-col items-center justify-center px-10 md:flex-row-reverse md:justify-around`}>
      <TextHero/>
      <MotionComponent/>
    </main>
   </>
  )
}

export default Header