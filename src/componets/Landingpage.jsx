import { motion } from "framer-motion";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

function landingpage() {
  return (
    <div data-scroll data-scroll-speed="-0.3" className="w-full h-screen bg-[#f1f1f1] pt-1">
      <div className="textsturtur  mt-48 px-20 ">
        {["We Create", "Eye-Opening", "presentations"].map((item, index) => {
          return (
            <div className="masker  ">
              <div className="w-fit flex  items-end overflow-hidden ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.3, 0, 0.17, 1] }}
                    className="w-[9vw] h-[6vw] relative bg-[url('C:\Users\dubey\occhi\src\assets\content-image01.jpg')] mt-[12px] mr-[8px] rounded-lg"
                  ></motion.div>
                )}
                <h1 className="uppercase text-[138.45px]  text-[#212121] leading-[103.833px]  tracking-[-1.3845px] font-['primary']  font-semibold ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between">
        {["For Public and Private company", "From first pitch to IPO"].map(
          (item, index) => {
            return (
              <p className="text-md font-light tracking-tight leading-none  flex-row py-5 px-20 font-[secondary] text-[#212121]  ">
                {" "}
                {item}
              </p>
            );
          }
        )}

        <div className="start flex items-center gap-2 mr-8 group">
          <div className="px-6 py-3 border-[2px] border-[#3b3b3b] font-normal hover:bg-zinc-800 hover:text-white ease-in-out duration-500 tracking-tight text-md uppercase rounded-full mt-2 text-[#212121] group-hover:bg-zinc-800 group-hover:text-white">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-[#3b3b3b] mr-2 ease-in-out duration-500 group-hover:bg-[#212121]">
            <span className="rotate-45 text-[#212121] ease-in-out duration-500 group-hover:text-white">
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default landingpage;
