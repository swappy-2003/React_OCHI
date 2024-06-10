import { motion } from "framer-motion";
import { Power4} from "gsap";
import React, { useState } from "react";


const handlehover = () => {
    
    alert("hover");
}


function Featured() {
    const [isHoveringCard1, setIsHoveringCard1] = useState(false);
    const [isHoveringCard2, setIsHoveringCard2] = useState(false);
    
    return (
        <div className="w-full pt-20     bg-[#f1f1f1] ">
            <div className="px-12 w-full text-black  ">
                <h1 className="text-7xl font-[secondary] tracking-tight font-normal pb-20  border-b-2 border-[#c9c9c9]">
                    Featured Projects
                </h1>
                <div className="cards w-full flex gap-10 mt-20 px-10">
                    <div onMouseEnter={() => setIsHoveringCard1(true)} onMouseLeave={() => setIsHoveringCard1(false)} className="cardcontianer relative w-1/2  h-[80vh] ">
                        <h1 className=" overflow-hidden absolute  flex left-full top-1/2 -translate-x-1/2 z-[9] text-9xl font-[primary] text-[#cdea68] font-semibold">
                            {"FYDE".split("").map((item, index) => (
                                <motion.span initial={{ y: "100%" }} animate={isHoveringCard1 ? { y: "0" } : {y:"100%"}} 
                                transition={{ease:Power4.easeInOut,delay:index*.1}}
                                className="inline-block">{item}</motion.span>
              ))}
                    </h1>
                    <div className="card w-full h-full bg-green-600   rounded-xl overflow-hidden ">
                        <img
                            className="w-full h-full bg-cover "
                            src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                            alt=""
                        />
                    </div>
                </div>
                <div  onMouseEnter={() => setIsHoveringCard2(true)} onMouseLeave={() => setIsHoveringCard2(false)} className="  relative cardcontianer w-1/2  h-[80vh] ">
                    <h1 className="  overflow-hidden absolute flex right-full top-1/2 translate-x-1/2  z-[9] text-9xl font-[primary] text-[#cdea68] font-semibold">
                        {"VISE".split("").map((item, index) => (
                           <motion.span initial={{ y: "100%" }} animate={isHoveringCard2 ? { y: "0" } : {y:"100%"}} 
                           transition={{ease:Power4.easeInOut,delay:index*.1}}
                           className="inline-block ">{item}</motion.span>
                        ))}
                    </h1>
                    <div className="card w-full h-full bg-green-600   rounded-xl overflow-hidden ">
                        <img
                            className="w-full h-full bg-cover "
                            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </div >
  );
}

export default Featured;
