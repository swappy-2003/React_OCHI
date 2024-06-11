import React from 'react'

function About() {
  return (
    <div className='w-full py-20 px-20 bg-[#cdea68] rounded-tl-3xl text-black'>
        <h1 className='font-[secondary] text-[55px] leading-[59px] tracking-normal'> Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className="w-full border-t-2 mt-20 border-[#abc35a] flex"> 
          <div className="w-1/2 ">
          <h1 className='pt-10 text-[55px]'> Our approach:</h1>
          <button className='px-10 py-6 bg-[#212121] rounded-full text-white flex gap-10 items-center uppercase '>Read More <div className=' w-3  h-3 bg-white rounded-full '></div></button>
          </div>
        <div className='w-1/2 h-[70vh] rounded-mdpt-3 mt-[15px]'><img src='https://images.unsplash.com/photo-1583156340160-7867f31285d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhdG1hbnxlbnwwfHwwfHx8MA%3D%3D' alt="" className='w-full h-[70vh]' /></div>
        </div>
    </div>
  )
}

export default About
