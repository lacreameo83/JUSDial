'use client'
import React from 'react'
import { CiHeart } from "react-icons/ci";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import Link from "next/link";
function ProductDisplay({ image, title, model, values }) {
  return (
    <div>

       
          <div
            
            className="h-[615.6px] w-[327px] gap-[24.48px] sm:h-[704px] sm:w-[270px]    xl:w-[374px] flex flex-col justify-center sm:gap-[48px]"
          >
            {/* Image container */}
            <div
              style={{
                backgroundImage: `url(${image})`,
              }}
              className=" group transition-all duration-500 h-[437.17px] w-[327px] sm:h-[500px] cardcontainer rounded-[30px] sm:w-[375px] bg-center bg-cover bg-no-repeat   relative bg-white"
            >
              {/* <p className="  "> */}

              <ArrowOutwardIcon
                className="absolute right-7 top-9 z-50 w-[40px] h-[40px] opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all duration-500 delay-100 ease-in-out"
                style={{
                  color: "white",
                }}
              />

              {/* BsArrowDownLeft */}
              <CallReceivedIcon
                className="absolute right-7 top-7 z-50 w-[40px] h-[40px] opacity-100 group-hover:opacity-0 group-hover:translate-y-[10px] transition-all duration-500 ease-in-out"
                style={{
                  color: "black",
                }}
              />
              {/* </p> */}
              <div className="bg-transparent absolute m-4 h-[90%] flex flex-col justify-between items-start w-[90%] left-0">
                <div className="w-[46px] h-[46px] rounded-full border-[1px] bg-white border-[#364436] flex items-center justify-center">
                  <CiHeart className="w-[29.93px] h-[27.94px] text-[#364436]" />
                </div>
                <div className="bg-[#DADADA] flex items-center justify-center text-[14px] font-[700] leading-[20px] w-[95px] h-[34px] rounded-[8px] py-[5px] px-[15px] PlusJakarta">
                  <p className="h-[20px]">For Sale</p>
                </div>
              </div>
              <div className="absolute bg-white h-[100px] w-[100px] right-0 main">
                <div className="absolute bg-transparent mainicon1 left-[-30px] mainboxtop top-0 w-[30px] h-[30px]"></div>
                <div className="absolute bg-transparent right-0 bottom-[-30px] w-[30px] mainboxbottom h-[30px]"></div>

                {/* arrow container */}
                {/* <Link> */}
                  <div className="w-[67.76px] h-[67.76px] absolute arrowparent z-30 flex items-center justify-center left-[10%] bottom-[-10px] bg-white border-[2px] border-[#364436] sm:w-[77.5px] rounded-full sm:h-[77.5px]">
                    <div className="arrowcontainer z-0 absolute h-[77.5px] w-[77.5px] rounded-full flex items-center justify-center"></div>
                  </div>
                {/* </Link> */}
              </div>
            </div>
            {/* Contents */}
            <div className="h-[153.95px] w-[327px] gap-[1.75px] sm:h-[176px] flex flex-col items-center justify-center sm:gap-2 sm:w-[374px]">
              <div className="text-[31.48px] font-[700] leading-[38.47px] h-[59.45px] w-[327px] sm:h-[68px] sm:w-[374px] PlusJakarta sm:text-[36px] sm:leading-[44px]">
                {title}
              </div>
              <div>
                <div className="w-[327px] h-[28px] leading-[27.98px] text-[20.8px] sm:w-[374px] sm:h-[32px] PlusJakarta font-[600] sm:text-[24px] sm:leading-[32px]">
                  {model}
                </div>
                <div className="w-[327px] h-[63px] text-[13.99px] leading-[20.8px] PlusJakarta sm:w-[374px] sm;h-[72px] font-[400] sm:text-[16px] sm:leading-[24px]">
                  {values}
                </div>
              </div>
            </div>
          </div>
       
      </div>
    
  );
}

export default ProductDisplay
