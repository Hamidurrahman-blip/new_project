import React from 'react'
import project01 from '../assest/project01.png'
import { IoMdSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import DarkMode from './DarkMode';
import { IoMdArrowDropdown } from "react-icons/io";


function Navbar() {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
    <div className='bg-primary/40 py-2'>
        <div  className='container flex justify-between items-center'>
            <div> 
<a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2'><img src={project01} alt='logo' className='w-10 uppercase'/> shopsy</a>
            </div>
            <div className=' flex justify-between items-center gap-3'>
              <div className='group relative hidden sm:block'>
                <input className=' w-[200px] sm:w-[200px] border rounded-full border-gray-300 group-hover:w-[300px] transition-all duration-300 focus:outline-none focus:border-1 focus:border-primary px-2 py-2' placeholder='Serch' type='text'/>
          <IoMdSearch className='absolute top-1/3 right-4 group-hover:text-primary text-gray-300'/>
         

              </div>
              <button className=' bg-gradient-to-r from-primary to-secondary transition-all duration-300 rounded-full group px-4 py-2 gap-8 items-center flex'><span className='hidden group-hover:block text-white '>Order</span> <IoMdCart className='text-xl text-white' /></button>
            <DarkMode/>

            </div>
        </div>
    </div>
    <div className='flex justify-center'>
            <ul className='flex items-center gap-4'>
            <li><a href='#' className='px-4 inline-block hover:text-primary duration-200 py-2'  >Home</a></li>
            <li><a href='#' className='px-4 inline-block hover:text-primary duration-200 py-2' >Top Rated</a></li>
                <li><a href='#' className='px-4 inline-block hover:text-primary duration-200 py-2' > Kids wear</a></li>
                <li><a href='#' className='px-4 inline-block hover:text-primary duration-200 py-2' >Mens wear </a></li>
                <li><a href='#' className='px-4 inline-block hover:text-primary duration-200 py-2' >Electronics</a></li>
                <li className='group relative cursor-pointer'><a href='#' className='  hover:text-primary duration-200 flex items-center gap-[2px] py-2' >Trending Products <span className=' group-hover:rotate-180 transition-all duration-200'><IoMdArrowDropdown /></span></a>
                <div className='hidden absolute z-[9999]  group-hover:block w-40 px-2 bg-white text-black rounded-md shadow-md '>
                  <ul className='py-2'>
                    <li><a href='#' className='py-2 w-full rounded-md inline-block hover:bg-primary/80' >Trending Products</a></li>
                    <li><a href='#' className='py-2 w-full rounded-md inline-block hover:bg-primary/80' >Best Selling</a></li>
                    <li><a href='#' className='py-2 w-full rounded-md inline-block hover:bg-primary/80' >Top Rated</a></li>
                  </ul>
                </div>
                </li>

            </ul>
        </div>
    
  </div>
  )
}

export default Navbar