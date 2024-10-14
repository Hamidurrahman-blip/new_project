import React, { useEffect, useState } from 'react'
import project02 from '../assest/project02.png'
import project03 from '../assest/project03.png'



function DarkMode() {
    const [thememode,setthememode]=useState(localStorage.getItem("thememode")?localStorage.getItem("thememode"):"light")

    const element=document.documentElement

    useEffect(()=>{
        if(thememode=="dark"){
            element.classList.add("dark")
            localStorage.setItem("thememode","dark")
        }
        else{
            element.classList.remove("dark")
            localStorage.setItem("thememode","light")
        }
    },[thememode])

  return (
    <div className='relative'>

              <img src={project02} alt='botton' onClick={()=>{setthememode(thememode=="light"?"dark" : "light")}} className={`w-14 absolute  transition-all duration-300 ${thememode=="dark" ? "opacity-0" : "opacity-100"}`}  />
              <img src={project03} alt='botton' className='w-14 transition-all duration-300' />
            </div>
  )
}

export default DarkMode