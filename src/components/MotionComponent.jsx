import React from 'react'
import { motion } from "motion/react"
import { animationForIceCream } from '../helper/animation'
import helado from '../assets/helado.png'


const MotionComponent = () => {
  return (
            <div className='mt-10'>
                <motion.div 
                    className='w-[150px] sm:w-[170px] h-[200px] md:w-[250px] xl:w-[300px] flex md:items-center items-start justify-center lg:ml-10 md:mr-5 rounded-xl'
                    variants={animationForIceCream()}
                    initial='initial'
                    animate={['animationEntry', 'animationFloating']}
                >
                    <img src={helado} className='w-100' alt="imagen de helado"  />
                </motion.div>
                

            </div>

  )
}


export default MotionComponent