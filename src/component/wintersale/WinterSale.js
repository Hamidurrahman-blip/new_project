import React from 'react'
import project07 from "../../assest/project07.jpg"
import { IoMdLock } from "react-icons/io";


function WinterSale() {
  return (
    <div className='py-12 sm:py-12 min-h-[550px]'>
<div className='container'>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
    <div>
<img src={project07} className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'/>
    </div>
<div className='flex flex-col gap-6 sm:pt-0 justify-center' >
    <h1 className='text-3xl sm:text-4xl  font-bold '>Winter Sale upto 50% Off    </h1>
    <p className='text-sm tracking-wide leading-5 text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>

<div className='flex flex-col gap-4 '>
    <div className='flex items-center gap-4 '><IoMdLock className=' text-4xl rounded-full bg-violet-100 dark:bg-violet-400 p-4 h-12 w-12' />
    <p>Quality Products</p>
    </div>
    <div className='flex items-center gap-4 '><IoMdLock className=' text-4xl rounded-full bg-violet-100 dark:bg-violet-400 p-4 h-12 w-12' />
    <p>Quality Products</p>
    </div>
    <div className='flex items-center gap-4 '><IoMdLock className=' text-4xl rounded-full bg-violet-100 dark:bg-violet-400 p-4 h-12 w-12' />
    <p>Quality Products</p>
    </div>
</div>

</div>


</div>
</div>
    </div>
  )
}

export default WinterSale