import React from 'react'
import { motion } from "motion/react"
import { animationForText, animationForButton } from '../helper/animation'

const TextHero = () => {
  return (
    <>
    <div>
        <motion.div 
            className='mt-7'
            variants={animationForText()}
            initial='initial'
            animate={['animationEntry']}
        >
            <div className=' md:w-110 lg:w-150 xl:w-200'>
            <h1 className='text-white font-black text-4xl sm:text-5xl md:text-6xl'>EL PLACER MAS DULCE DEL VERANO</h1>
            <p className='text-white font-medium py-2 pl-2 mt-0 md:mt-5 md:text-xl md:bg-transparent'>Cada sabor cuenta una historia: desde la frescura de la fruta 
                natural hasta la intensidad del chocolate artesanal. 
                Disfrutá de la experiencia más cremosa y auténtica, 
                hecha con ingredientes seleccionados para sorprender tu paladar</p>
            <motion.div 
            className=''
            variants={animationForButton()}
            initial='initial'
            animate={['animationEntry']}
        >
        <button className='text-white bg-red-400/80 px-2 py-3 rounded-2xl hover:bg-white hover:text-red-400 transition-all duration-300 cursor-pointer ml-2 mt-3 font-medium hover:outline hover:outline-red-400'>CONOCER MÁS</button>
        </motion.div>
            
            </div>   
        </motion.div>
    </div>


    </>
  )
}

export default TextHero