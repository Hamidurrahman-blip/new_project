import React from 'react'
import project05 from "../../assest/project05.png"
import project07 from "../../assest/project07.jpg"
import project08 from "../../assest/project08.jpg"
import project09 from "../../assest/project09.jpg"



import { IoMdStar } from "react-icons/io";

const ProductList=[
    {
        id:1,
        img:project05,
        head:"Women Ethnic",
        para:"White",
        star:5,
    },
    {
        id:2,
        img:project07,
        head:"Women western",
        para:"Red",
        star:4.5,
    },
    {
        id:3,
        img:project08,
        head:"Goggles ",
        para:"Brown",
        star:4.7,
    },
    {
        id:4,
        img:project09,
        head:"Printed T-Shirt",
        para:"Yellow",
        star:4.4,
    },
    {
        id:5,
        img:project07,
        head:"Fashin T-Shirt",
        para:"Pink",
        star:4.5,
    },
]

function Products() {
  return (
    <div className='mt-14 mb-12 '>
        <div className='container'>
<div className='max-w-[600px] text-center mb-10 mx-auto'>
    <p className='text-sm text-primary'>Top Selling Products for you</p>
<h1 className='text-3xl font-bold'>Products</h1>
<p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
</div>
<div>
<div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-center'>
{ProductList.map((data)=>(<div className='space-y-3'>
    <img src={data.img} className='w-[150px] h-[220px] object-cover rounded-md'/>
    <div>
        <h3 className='font-semibold'>{data.head}</h3>
        <p className='text-sm text-gray-600'>{data.para}</p>
        <div className='flex gap-1 items-center'>
        <IoMdStar className='text-yellow-400 h-5 w-5'  />
        <span>{data.star}</span>
        </div>
    </div>
    </div>))}
    </div>
    <div className='flex justify-center'><button class="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">View All Button</button></div>
    </div>

        </div>
    </div>
  )
}

export default Products