import React, { useState } from 'react'
import logo from '../assets/helado_logo.png'
import { navbarLinks, navbarRedes } from '../utils/navbarLinks'




const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const cambiarEstado = () =>{
    setIsOpen(!isOpen);
    }

  return (
    <>
      <nav className='w-full fixed p-1 bg-transparent backdrop-blur-xs'>
        
        {/*VISTA DESKTOP*/}
        <div className='flex justify-between items-center md:px-5 lg:px-10 sm:py-3 px-4 py-2'>
            <div className='flex items-center justify-center gap-2 cursor-pointer'>
                 <img src={logo} alt="" className='w-15 '/>
                 <p className='text-white font-medium text-xl  px-2 py-1 rounded-xl bg-[rgb(236,72,55)]'>GelatoHelados</p>
            </div>
           

            <button className='md:hidden text-white p-2 cursor-pointer'
             onClick={cambiarEstado}>
                {!isOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>}
             </button>


            <div className='hidden md:block'>
                <ul className='flex space-x-4 px-4'>
                    
                    {navbarLinks.map((link)=>{
                        return (
                            <li key={link.id}>
                                <a href={link.link} className=' hover:text-red-400 duration-200 font-medium text-white'>{link.title}</a>
                            </li>                            
                        )
                    })}

                    
                </ul>
            </div>


            <div className='hidden md:block'>
                <ul className='flex space-x-4 px-4'>
                    
                    {navbarRedes.map((red)=>{
                        return (
                            <li key={red.id}>
                                <a href={red.link} className=' hover:text-red-400 duration-200 font-medium text-2xl text-white'><i className={red.title}></i></a>
                            </li>                            
                        )
                    })}

                    
                </ul>
            </div>


        </div>

      {/*VISTA MOBILE*/}
            <div className={`md:hidden absolute left-0 mt-1 w-full bg-red-400/80  transition-all duration-200 flex flex-col items-center z-100 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                <ul className='p-2 pt-5 pb-3 text-white text-center'>
                    {navbarLinks.map((link)=>{
                        return (
                            <li key={link.id}>
                                <a href={link.link} className=' hover:text-red-100 duration-200 font-medium'>{link.title}</a>
                            </li>                            
                        )
                    })}
                </ul>


                <ul className='flex space-x-4 px-4 py-2 border-t border-red-100'>
                    {navbarRedes.map((red)=>{
                        return (
                            <li key={red.id}>
                                <a href={red.link} className=' hover:text-red-100 duration-300 font-medium text-2xl text-white'><i className={red.title}></i></a>
                            </li>                            
                        )
                    })}
                </ul>

            </div>
    </nav>

    </>
  )
}

export default NavBar