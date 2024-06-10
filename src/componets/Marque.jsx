import React from 'react'
import { motion } from 'framer-motion';



function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-3xl bg-[#004d43]">
        <div className="text border-t-2 border-b-2 border-[#306e66] flex    overflow-hidden  whitespace-nowrap">
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}} className='text-[436.65px] leading-none font-[primary]  uppercase pt-10 -mb-10 -mt-20   pr-20 ' >We are ochi </motion.h1>
            <motion.h1  initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}} className='text-[436.65px] leading-none font-[primary]  uppercase pt-10  -mb-10 -mt-20 pr-20  ' >We are ochi </motion.h1>
            <motion.h1  initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}} className='text-[436.65px] leading-none font-[primary]  uppercase pt-10  -mb-10 -mt-20 pr-20 ' >We are ochi </motion.h1>
            <motion.h1  initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}} className='text-[436.65px] leading-none font-[primary]  uppercase pt-10  -mb-10 -mt-20 pr-20 ' >We are ochi </motion.h1>
        </div>




    </div>
  )
}

export default Marque