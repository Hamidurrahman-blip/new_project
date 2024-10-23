import React from 'react'
import project10 from "../../assest/project10.png"
import project11 from "../../assest/project11.png"
import project12 from "../../assest/project12.png"




import { IoMdStar } from "react-icons/io";

const ProductList=[
    {
        id:1,
        img:project10,
        head:"Casual Wear",
        para:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        star:5,
    },
    {
        id:2,
        img:project11,
        head:"Printed shirt",
        para:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        star:4.5,
    },
    {
        id:3,
        img:project12,
        head:"Women shirt ",
        para:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        star:4.7,
    },

]

function TopProduct() {
  return (
    <div className='mt-14 mb-12 '>
        <div className='container'>
<div className=' text-left mb-24'>
    <p className='text-sm text-primary'>Top Rated Products for you</p>
<h1 className='text-3xl font-bold'>Best Products</h1>
<p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
</div>
<div>
<div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-3 gap-5 place-items-center'>
{ProductList.map((data)=>(<div class="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
    <div className='h-[100px]'>
    <img src={data.img} className='w-[150px] block object-cover rounded-md transform -translate-y-20 mx-auto group-hover:scale-105 duration-200'/>
    </div>
    <div className='p-4 text-center'>
    <div className='flex gap-1 items-center justify-center'>
        <IoMdStar className='text-yellow-400 h-5 w-5'  />
        <IoMdStar className='text-yellow-400 h-5 w-5'  />
        <IoMdStar className='text-yellow-400 h-5 w-5'  />
        <IoMdStar className='text-yellow-400 h-5 w-5'  />
        </div>
        <h3 className='font-semibold'>{data.head}</h3>
        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{data.para}</p>
        <div className='flex justify-center'><button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">Order Now</button></div>

    </div>
    </div>))}
    </div>

    </div>

        </div>
    </div>
  )
}

export default TopProduct