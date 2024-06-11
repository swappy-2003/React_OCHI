import React, { useEffect, useRef, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let valx = e.clientX;
      let valy = e.clientY;
      let deltaX = valx - window.innerWidth / 2;
      let deltaY = valy - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="w-full h-screen overflow-hidden  hover:cursor-pointer ">
      <div data-scroll data-scroll-speed="-.8" className=" relative w-full h-screen bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]
)]">
        <div className="absolute  top-1/2  left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10 ">
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center ">
            <div className=" relative w-2/3 h-2/3 bg-[#212121]  rounded-full  ">
              <div
                style={{
                   transform: `translate(-50%,-50%) rotate(${rotate}deg`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]    w-full h-10 ">
                <div className="w-8 h-8 bg-zinc-100 rounded-full "> 
                  
                </div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
            <div  
            
            className=" relative w-2/3 h-2/3 bg-[#212121] rounded-full   ">
              <div  style={{
                 transform: `translate(-50%,-50%) rotate(${rotate}deg`
                }}
              
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]   w-full h-10 ">
                <div className="w-8 h-8 bg-zinc-100 rounded-full "> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
