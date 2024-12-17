import React from "react";
import { CiHeart } from "react-icons/ci";
import { BsArrowDownLeft } from "react-icons/bs";
import data from "../../../lib/data.js";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import Link from "next/link";

function FeaturedListing() {
 

  return (
    <div className="h-[4100px] sm:h-[2400px] xl:h-[1799px] w-full sm:w-[100%]  flex flex-col   items-center  ">
      <div className="w-[373px] mb-[29.82px] h-[102px] flex flex-col items-center justify-center mt-[16px]">
        <p className="font-[400] text-[14px] leading-[20px] w-[239px] h-[28px] PlusJakarta sm:font-[500] sm:text-[18px] sm:leading-[28px] text-center text-[#364436]">
          Featured Listing
        </p>
        <p className="w-[196px] h-[32px] font-[700] text-[24px] leading-[32px] sm:w-[473px] sm:h-[60px] mt-[18px] PlusJakarta sm:font-[600] sm:text-[48px] sm:leading-[60px]  text-center text-[#282828]">
          Top Picks for You
        </p>
      </div>
      {/* The listing */}
      <div className="h-[2000px]   xl:h-[615.6px] z-50 xl:gap-[60px] 2xl:gap-[40px] sm:gap-[18px] sm:h-[1454px] w-[327px]  sm:w-[800px] xl:w-[57rem] 2xl:w-[1184px] mt-[20px] grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-3">
        {data.slice(0, 6).map((el) => (
          <div
            key={el.id}
            className="h-[615.6px] w-[327px] gap-[24.48px] md:h-[704px] xl:w-[23.4375rem]    2xl:w-[374px] flex flex-col justify-center sm:gap-[48px]"
          >
            {/* Image container */}
            <div
              style={{
                backgroundImage: `url(${el.image.src})`,
              }}
              className=" group transition-all duration-500 h-[437.17px] w-[327px] sm:h-[500px] cardcontainer rounded-[30px] xl:w-[18.4375rem] 2xl:w-[375px] bg-center bg-cover bg-no-repeat   relative bg-white"
            >
              {/* <p className="  "> */}
              <Link href="/listingpage">
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
                <Link href="/listingpage">
                  <div className="w-[67.76px] h-[67.76px] absolute arrowparent z-30 flex items-center justify-center left-[10%] bottom-[-10px] bg-white border-[2px] border-[#364436] sm:w-[77.5px] rounded-full sm:h-[77.5px]">
                    <div className="arrowcontainer z-0 absolute h-[77.5px] w-[77.5px] rounded-full flex items-center justify-center"></div>
                  </div>
                </Link>
              </div>
            </div>
            {/* Contents */}
            <div className="h-[153.95px] w-[327px] gap-[1.75px] sm:h-[176px] flex flex-col items-center justify-center sm:gap-2 sm:w-[374px]">
              <div className="text-[31.48px] font-[700] leading-[38.47px] h-[59.45px] w-[327px] sm:h-[68px] sm:w-[374px] PlusJakarta sm:text-[36px] sm:leading-[44px]">
                {el.title}
              </div>
              <div>
                <div className="w-[327px] h-[28px] leading-[27.98px] text-[20.8px] xl:w-[23.4375rem] 2xl:w-[374px] sm:h-[32px] PlusJakarta font-[600] sm:text-2xl sm:leading-[32px]">
                  {el.model}
                </div>
                <div className="w-[327px] h-[63px] text-[13.99px] leading-[20.8px] PlusJakarta xl:w-[19.4375rem] 2xl:w-[374px] sm:h-[72px] font-[400] sm:text-[16px] sm:leading-[24px]">
                  {el.values}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedListing;
