


"use client";
import { useState } from "react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

// material ui implamentation

import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Search } from "@mui/icons-material";
import { FaLocationDot } from "react-icons/fa6";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";



function Herosection() {
  
const [age, setAge] = useState("");

const handleChange = (event) => {
  setAge(event?.target?.value);
};

  
  return (
    <div className=" gap-[18px]  text-black flex flex-col justify-center items-center ">
      <div className="sm:h-[176px] h-[192px] w-[325px] sm:w-[727px] gap-[18px] flex flex-col ">
        <div
          className="sm:w-[790px] 
PlusJakarta  w-[326px]  text-[24px] font-[700] h-[96px] text-[#1F1F1F] text-center  sm:h-[120px] leading-[32px]   sm:text-[48px] sm:leading-[60px]"
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
        <div className="w-[325px] mt-[13.75px]  sm:mt-[45px] h-[283.76px] rounded-[14.73px] flex flex-col sm:flex-row justify-center items-center  px-[11.78px] py-[22.58px] sm:py-0 sm:px-0 buttonbackgroundcolor  sm:w-[1096.66px] sm:h-[84.17px] sm:rounded-[12.02px]   ">
          <div className="sm:w-[1024.59px] px-[11.78px]  sm:px-0 sm:py-0 sm:h-[60.07px] h-[283.76px] justify-around sm:justify-between items-center flex flex-col sm:flex-row  ">
            <div
              className="sm:w-[178.44px]  sm:h-[17px] text-[12.24px] px-4 sm:px-0   flex items-center text-black 
Nunito font-[400]  sm:text-[12.47px] sm:leading-[17.01px] sm:text-center w-[301.44px] h-[50.08px] sm:bg-transparent rounded-[9.8px] sm:rounded-none bg-[#F3F3F3]  "
            >
              <div className=" ">
                <input
                  type="text"
                  className="w-[169px] h-[20px] text-[14px] leading-[20px] sm:w-[194px] sm:h-[24px] font-[400] sm:text-[16px] sm:leading-[24px]   outline-none bg-transparent placehoderscolors 
PlusJakarta  "
                  placeholder="what are you looking for ? "
                />
              </div>
            </div>
            {/* the divider */}
            <div className="h-[36.07px] hidden sm:block border-[1.2px] border-[#808080] text-center "></div>
            {/* select button */}
            <div className="sm:w-[148.42px] sm:flex sm:items-center sm:justify-center">
              <FormControl
                sx={{
                  width: { xs: "100%", sm: "91.07px" }, // Full width on small screens
                  height: { xs: "52.65px", sm: "84.17px" }, // Adjust height for small and large screens
                  color: "#A1A1A1",
                  borderRadius: { xs: "9.82px", sm: 0 }, // Rounded corners on small screens
                  backgroundColor: { xs: "#F3F3F3", sm: "transparent" }, // Background color on small screens
                  outline: "none",
                  boxShadow: "none",
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" }, // Remove borders for outlined variant
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  }, // Remove hover border
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  }, // Focus border
                }}
                className="w-full sm:w-auto"
              >
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  IconComponent={KeyboardArrowDownIcon}
                  sx={{
                    width: { xs: "301.24px", sm: "141.58px" },
                    height: { xs: "100%", sm: "84.17px" },
                    fontSize: "12px",
                    fontStyle: "normal",
                    border: "none",
                    outline: "none",
                    fontWeight: "400",
                    color: "#535050",
                    boxShadow: "none",
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        width: { xs: "301.24px", sm: "260px" }, // Set the dropdown menu width
                        maxHeight: "400px", // Set the dropdown menu height
                        overflow: "auto", // Add scrolling for overflow
                        marginLeft: { xs: "0", sm: "-60px" },
                      },
                    },
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left",
                    },
                  }}
                >
                  <MenuItem value="">
                    <span className="sm:w-[37px] active:bg-transparent hover:text-black hover:bg-transparent focus:bg-transparent text-[14px] leading-[20px] placehoderscolors sm:h-[24px] PlusJakarta font-[400] sm:text-[16px] sm:leading-[24px] text-center">
                      Type
                    </span>
                  </MenuItem>
                  <MenuItem
                    className="hover:text-black text-[14px] sm:text-[16px] active:bg-transparent placehoderscolors hover:bg-transparent focus:bg-transparent"
                    value={10}
                  >
                    <span className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[400] PlusJakarta placehoderscolors">
                      Construction
                    </span>
                  </MenuItem>
                  <MenuItem
                    className="hover:text-black text-[14px] sm:text-[16px] active:bg-transparent placehoderscolors hover:bg-transparent focus:bg-transparent"
                    value={20}
                  >
                    <span className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[400] PlusJakarta placehoderscolors">
                      Renovation
                    </span>
                  </MenuItem>
                  <MenuItem
                    className="hover:text-black text-[14px] sm:text-[16px] active:bg-transparent placehoderscolors hover:bg-transparent focus:bg-transparent"
                    value={30}
                  >
                    <span className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[400] PlusJakarta placehoderscolors">
                      Buy
                    </span>
                  </MenuItem>
                  <MenuItem
                    className="hover:text-black text-[14px] sm:text-[16px] active:bg-transparent placehoderscolors hover:bg-transparent focus:bg-transparent"
                    value={40}
                  >
                    <span className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[400] PlusJakarta placehoderscolors">
                      Sell
                    </span>
                  </MenuItem>
                  <MenuItem
                    className="hover:text-black text-[14px] sm:text-[16px] active:bg-transparent placehoderscolors hover:bg-transparent focus:bg-transparent"
                    value={50}
                  >
                    <span className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[400] PlusJakarta placehoderscolors">
                      Rent
                    </span>
                  </MenuItem>
                  <MenuItem
                    className="hover:text-black text-[14px] sm:text-[16px] active:bg-transparent placehoderscolors hover:bg-transparent focus:bg-transparent"
                    value={60}
                  >
                    <span className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-[400] PlusJakarta placehoderscolors">
                      Lease
                    </span>
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* location */}

            <div className="h-[36.07px] hidden sm:block border-[1.2px] border-[#808080] text-center "></div>
            <div
              className="sm:w-[148px]   flex text-[12.24px] px-4 sm:h-[17px] text-black
Nunito font-[400] sm:text-[12.47px] sm:leading-[17.01px] items-center text-center w-[301.44px] h-[50.08px] sm:bg-transparent rounded-[9.8px] sm:rounded-none bg-[#F3F3F3]  "
            >
              <div className=" flex w-[301.44px] h-[26.35]  sm:w-[154.93px] items-center justify-between ">
                <input
                  type="text"
                  className="w-[59px] h-[20px] text-[14px] leading-[20px] sm:w-[67px]  outline-none bg-transparent placehoderscolors 
PlusJakarta font-[400] sm:text-[16px] sm:leading-[24px] text-center "
                  placeholder="Location "
                />
                <p>
                  <FaLocationDot className="font-[800] w-[12.19px] h-[14.89px] text-[#818181] sm:w-[22.94px] sm:h-[22.94px] " />
                </p>
              </div>
            </div>

            {/* for button */}
            <div>
              <div className="backgroundcolor w-[301.44px] gap-[7.39px] sm:gap-[12.02px] text-[#FFFFFF] px-[36.93px] sm:rounded-[6.01px] Nunito text-[12.48px] font-[500] h-[47.13px] leading-[17.01px] sm:w-[204.07px] rounded-[3.69px] sm:h-[60.07px] sm:py-[18.04px] py-[11.08px] sm:px-[60.12px] flex items-center justify-center  cursor-pointer transition-colors duration-300 ease-in-out ">
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
