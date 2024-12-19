'use client'
import React from 'react'
import { CiHeart } from "react-icons/ci";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import Link from "next/link";
function ProductDisplay({ image, title, model, values ,id}) {
  return (
    <div>
      <div className="h-[615.6px]  w-[327px] gap-[24.48px] md:h-[704px]  xl:w-[400px] md:w-[374px] md:gap-0    2xl:w-[374px] flex flex-col justify-center xl:gap-[28px]">
        {/* Image container */}
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className=" group  bg-cover z-10 h-[437.17px] w-[327px] sm:h-[500px]  cardcontainer rounded-[30px]  bg-slate-500 sm:w-[374px] bg-center   bg-no-repeat   relative "
        >
          {/* <p className="  "> */}
          <Link href={`/listingpage/${id} `}>
            <ArrowOutwardIcon
              className="absolute right-7 top-9 z-20 w-[40px] h-[40px] opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all duration-500 delay-100 ease-in-out"
              style={{
                color: "white",
              }}
            />

            {/* BsArrowDownLeft */}
            <CallReceivedIcon
              className="absolute right-7 top-7 z-20 w-[40px] h-[40px] opacity-100 group-hover:opacity-0 group-hover:translate-y-[10px] transition-all duration-500 ease-in-out"
              style={{
                color: "black",
              }}
            />
          </Link>
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
            <Link href={`/listingpage/${id} `}>
              <div className="w-[67.76px] h-[67.76px] absolute arrowparent z-10 flex items-center justify-center left-[10%] bottom-[-10px] bg-white border-[2px] border-[#364436] sm:w-[77.5px] rounded-full sm:h-[77.5px]">
                <div className="arrowcontainer z-0 absolute h-[77.5px] w-[77.5px] rounded-full flex items-center justify-center"></div>
              </div>
            </Link>
          </div>
        </div>
        {/* Contents */}
        <div className="h-[176px]  w-[327px] gap-[2px] sm:h-[176px] flex flex-col  sm:gap-2 ">
          <div className="text-[31.48px] font-[700] leading-[38.47px] text-[#000000] h-[59.45px] w-[327px] sm:h-[68px] sm:w-[374px] PlusJakarta sm:text-[36px]  sm:leading-[44px]">
            {title}
          </div>
          <div>
            <div className="w-[327px] h-[28px] leading-[27.98px] text-[20.8px] xl:w-[23.4375rem] 2xl:w-[374px] sm:h-[32px] PlusJakarta font-[600] sm:text-2xl sm:leading-[32px]">
              {model}
            </div>
            <div className="w-[327px]   h-[63px] font-[400] text-[13.99px] leading-[20.8px] PlusJakarta   text-justify sm:h-[72px]  sm:text-[16px] sm:leading-[24px]">
              {values}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default ProductDisplay
