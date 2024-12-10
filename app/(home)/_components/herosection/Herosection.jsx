


"use client";
import { useState } from "react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";

import { FaLocationDot } from "react-icons/fa6";




function Herosection() {
  

const [isSelectButton,setIsSelectButton]=useState(false)
const [selectbuttonvale,setselecebuttonvalue] =useState("Type")
const data = [
  { item: "construction", id: 1 },
  { item: "Renovation", id: 2 },
  { item: "Buy", id: 3 },
  { item: "Sell", id: 4 },
  { item: "Rent", id: 5 },
  { item: "Lease", id: 6 },
];
  
  return (
    <div className=" sm:gap-[18px] w-full  text-black flex flex-col justify-center mt-[-30px] sm:mt-0 items-center ">
      <div className="sm:h-[176px] h-[192px] w-[325px] sm:w-[727px] gap-[12px] flex items-center justify-center flex-col ">
        <div
          className="sm:w-[800px]  
PlusJakarta  w-[326px]   text-[24px] font-[700] h-[96px] text-[#1F1F1F] text-center  sm:h-[120px] leading-[32px]   sm:text-[48px] sm:leading-[60px]"
        >
          <p>
            {`Your Gateway to Smart Living: Build, Buy, Rent, or Sell with Ease!`}
          </p>
        </div>
        <div
          className="sm:w-[826px] sm:h-[56px] 
PlusJakarta  h-[80x] w-[327px] text-center  font-[400] textcolor leading-[20px]  sm:text-[18px] text-[14px] sm:leading-[28px]  "
        >
          <p>{`From dream homes to lucrative investments, we've got you covered. Explore top listings for construction, renovation, buying, selling, renting, or leasing – all in one place!`}</p>
        </div>
      </div>
      {/* input sides */}
      {/* search */}
      <div>
        <div className="w-[325px] inputcontainer mt-[13.75px]   sm:mt-[45px] h-[283.76px] rounded-[14.73px] flex flex-col sm:flex-row xl:flex-row justify-center items-center  px-[11.78px] py-[22.58px] xl:py-0 xl:px-0 buttonbackgroundcolor m-auto  md:w-[926.66px]   xl:w-[1096.66px]  sm:h-[84.17px] sm:rounded-[12.02px]   ">
          <div className="sm:w-[1024.59px] px-[11.78px]  sm:px-0 sm:py-0  sm:h-[60.07px] h-[283.76px] justify-around sm:justify-between items-center flex flex-col sm:flex-row  ">
            <div
              className="inputbutton  sm:w-[178.44px]  sm:h-[17px] text-[12.24px] px-4 sm:px-0   flex items-center text-black 
Nunito font-[400]  sm:text-[12.47px] sm:leading-[17.01px] sm:text-center w-[301.44px] h-[50.08px] sm:bg-transparent rounded-[9.8px] sm:rounded-none bg-[#F3F3F3]  "
            >
              <div className=" ">
                <input
                  type="text"
                  className="w-[169px] h-[20px] md:px-2 xl:px-0 text-[14px] leading-[20px] sm:w-[194px] sm:h-[24px] font-[400] sm:text-[16px] sm:leading-[24px]   outline-none bg-transparent
PlusJakarta  "
                  placeholder="what are you looking for? "
                />
              </div>
            </div>
            {/* the divider */}
            <div className="h-[36.07px]  hidden sm:block md:mx-3 border-[1.2px] border-[#808080] text-center "></div>
            {/* select button */}
            <div className="inputbutton w-[301.44px] buttonbackgroundcolor  sm:bg-transparent  sm:w-[148.42px] relative sm:flex sm:items-center sm:justify-center">
              {/* Button to toggle dropdown */}
              <div
                onClick={() => setIsSelectButton((prev) => !prev)}
                className="w-full  h-[50.08px] px-4 sm:px-0 sm:bg-transparent rounded-[9.8px] sm:rounded-none bg-[#F3F3F3]  flex items-center justify-between cursor-pointer"
              >
                <button className="text-[14px] leading-[20px] font-[400]  placehoderscolors  sm:text-[16px] sm:leading-[24px] textcolor">
                  {selectbuttonvale}
                </button>
                {isSelectButton ? (
                  <MdKeyboardArrowUp className="font-[800] w-[12.19px] h-[14.89px] text-[#818181] sm:w-[22.94px] sm:h-[22.94px]   transition-transform duration-300 ease-in" />
                ) : (
                  <IoIosArrowDown className="font-[800] w-[12.19px] h-[14.89px] text-[#818181] sm:w-[22.94px] sm:h-[22.94px]   transition-transform duration-300 ease-in" />
                )}
              </div>

              {/* Dropdown Menu */}
              <div
                className={`absolute  rounded-2xl px-3 py-3 top-14 sm:top-11 left-0 w-full sm:right-[5rem] sm:w-[200px] bg-white textcolor  shadow-md z-10 transition-all duration-500 ease-in-out ${
                  isSelectButton
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }`}
                style={{
                  visibility: isSelectButton ? "visible" : "hidden", // Prevents flicker when closing
                }}
              >
                {data.map((el) => (
                  <div key={el.id}>
                    <p
                      onClick={() => {
                        setselecebuttonvalue(el.item);
                        setIsSelectButton(false); // Close the dropdown after selection
                      }}
                      className=" p-2 cursor-pointer hover:text-black"
                    >
                      {el.item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* location */}

            <div className=" h-[36.07px] hidden md:mx-3 sm:block border-[1.2px] border-[#808080] text-start "></div>
            <div
              className="sm:w-[148px] inputbutton  flex text-[12.24px] px-4 sm:h-[17px] text-black
Nunito font-[400] sm:text-[12.47px] sm:leading-[17.01px] items-center  w-[301.44px] h-[50.08px] sm:bg-transparent rounded-[9.8px] sm:rounded-none bg-[#F3F3F3]  "
            >
              <div className=" flex w-[301.44px] h-[26.35]  sm:w-[154.93px] items-center justify-between ">
                <input
                  type="text"
                  className="w-[59px] h-[20px] text-[14px] leading-[20px] sm:w-[67px]  outline-none bg-transparent placehoderscolors 
PlusJakarta font-[400] sm:text-[16px] sm:leading-[24px]  "
                  placeholder="Location "
                />
                <p>
                  <FaLocationDot className="font-[800] w-[12.19px] h-[14.89px] text-[#818181] sm:w-[22.94px] sm:h-[22.94px] " />
                </p>
              </div>
            </div>

            {/* for button */}
            <div className=" ">
              <div className="inputbutton  backgroundcolor w-[301.44px]  gap-[7.39px] sm:gap-[12.02px] text-[#FFFFFF] px-[36.93px] sm:rounded-[6.01px] Nunito text-[12.48px] font-[500] h-[47.13px] leading-[17.01px] sm:w-[204.07px] rounded-[3.69px] sm:h-[60.07px] sm:py-[18.04px] py-[11.08px] sm:px-[60.12px] flex items-center justify-center  cursor-pointer transition-colors duration-300 ease-in-out ">
                <CiSearch className="w-[10.08px] h-[9.84px]  sm:w-[17.8px] sm:h-[17.8px] " />
                <p
                  className="w-[48px] font-[500] h-[20px] text-[14px]  leading-[20px] text-white    sm:w-[54px] sm:h-[24px] 
PlusJakarta  sm:font-[400] sm:text-[16px] sm:leading-[24px] text-center"
                >
                  Search
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
