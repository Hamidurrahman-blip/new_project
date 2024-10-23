import React from 'react'
import project04 from "../../assest/project04.png"
import project05 from "../../assest/project05.png"
import project06 from "../../assest/project06.png"
import Slider from 'react-slick'

const ImageList=[
    {
        id:1,
        img:project04,
        title:"70% off on all Product Sale",
        description:"Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
        id:2,
        img:project05,
        title:"Upto 50% off on all Women's Wear",
        description:"Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id:3,
        img:project06,
        title:"Upto 30% off on all Men's Wear",
        description:"Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
]

var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:4000,
    cssEase:"ease-in-out",

  };

function Hero() {
  return (
    <div className='relative min-h-[600px] overflow-hidden bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
        {/* bg-pattern */}
<div className='w-[700px] h-[700px] bg-primary/40 rotate-45 z-9 absolute -top-1/2 right-0  rounded-3xl'>

</div>
{/* slider */}
<div className='container pb-8 sm:pb-0'>
<Slider {...settings}>

{ImageList.map((data)=>(<div>
   
    <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
   <div className='flex flex-col justify-center gap-4 pt-12'>
    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold' >{data.title}</h1>
    <p className='text-sm'>{data.description}</p>
    <div>
        <button className='bg-gradient-to-r from-primary to-secondary transition-all duration-300 rounded-full py-2 px-4 hover:scale-105 text-white'>Order Now

        </button>
    </div>
   </div>
   
<div className='pt-[100px]'>

        <img src={data.img} alt='' className=' w-[400px] h-[400px] object-contain mx-auto scale-125'/>

    
   </div>
    </div>
    </div>    ))}
</Slider>

</div>
    </div>
  )
}

export default Hero