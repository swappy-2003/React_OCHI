import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen bg-[#f1f1f1] flex  item-center gap-5 py-40 px-32'>
            <div className='cardcontainer h-[50vh] w-1/2'>
                <div className=' relative cards w-full h-full bg-[#004d43] flex items-center  justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 text-[#80af59] border-[#80af59] '>&copy;2024-2023 </button>
                </div>
            </div>
            <div className='cardcontainer w-1/2   h-[50vh] flex gap-5'>
                <div className='cards relative w-1/2  h-full bg-[#212121] flex items-center justify-center'><img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute px-5 py-1 border-2  rounded-full left-10 bottom-10 text-white border-[#fff] uppercase '>Rating 5.0 on clutch </button></div>
                <div className='cards relative w-1/2 h-full bg-[#212121] flex items-center justify-center'><img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 text-[#fff] border-white uppercase '>Business Bootcamp Alumni     </button></div>
            </div>
        </div>
    )
}

export default Cards