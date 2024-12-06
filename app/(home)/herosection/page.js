


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


function Page() {
  
const [age, setAge] = useState("");

const handleChange = (event) => {
  setAge(event?.target?.value);
};

  
  return (
    <div className="   gap-[18px]  text-black ">
      <div className="sm:h-[176px] h-[192px] w-[325px] sm:w-[727px] gap-[18px] flex flex-col ">
        <div className="sm:w-[757px] Nunito w-[325px]  text-[28px] font-[800] h-[114px] text-[#1F1F1F] text-center sm:text-start sm:h-[120px] leading-[38.19px] text-[800] sm:text-[44.31px] sm:leading-[60.44px]">
          <p>
            {`Your Gateway to Smart Living: Build, Buy, Rent, or Sell with Ease!`}
          </p>
        </div>
        <div className="sm:w-[720px] sm:h-[38px] h-[60x] w-[325px] text-center sm:text-start font-[400] text-[#1F1F1F] leading-[14.52px]  sm:text-[16px] text-[12px] sm:leading-[19.36px]  ">
          <p>{`From dream homes to lucrative investments, we've got you covered. Explore top listings for construction, renovation, buying, selling, renting, or leasing – all in one place!`}</p>
        </div>
      </div>
      {/* input sides */}
      {/* search */}
      <div>
        <div className="w-[325px] mt-[13.75px]  sm:mt-[45px] h-[283.76px] rounded-[14.73px] flex flex-col sm:flex-row justify-between  px-[11.78px] py-[22.58px] bg-white sm:w-[686px] sm:h-[52.65px] sm:rounded-[7.52px] items-center  ">
          <div className="sm:w-[444.42px] sm:h-[22.57px] h-[90%] justify-around sm:justify-between flex flex-col sm:flex-row  ">
            <div
              className="sm:w-[178.44px]  sm:h-[17px] text-[12.24px] px-4 sm:px-0 sm:border-[#A1A1A1] sm:border-r  flex items-center text-[#A1A1A1] 
Nunito font-[400]  sm:text-[12.47px] sm:leading-[17.01px] sm:text-center w-[301.44px] h-[50.08px] sm:bg-transparent rounded-[9.8px] sm:rounded-none bg-[#F3F3F3]  "
            >
              <div className=" flex items-center justify-between ">
                <input
                  type="text"
                  className="outline-none w-[148px] bg-transparent "
                  placeholder="what are you looking for ? "
                />
              </div>
            </div>
            {/* select button */}
            <div className="sm:w-[148.42px] sm:flex sm:items-center sm:justify-center">
              <FormControl
                sx={{
                  width: { xs: "100%", sm: "91.07px" }, // Full width on small screens
                  height: { xs: "52.65px", sm: "17px" }, // Adjust height for small and large screens
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
                  },
                }}
                className="w-full sm:w-auto"
              >
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  // inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    width: { xs: "301.24px", sm: "91.07px" },

                    fontSize: "12px",
                    fontStyle: "normal",
                    border: "none",
                    height: "100%",
                    outline: "none",
                    fontWeight: "400",
                    color: "#535050",
                    boxShadow: "none",
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                  }}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        marginTop: 3, // Ensures the menu starts directly below the control
                      },
                    },
                  }}
                >
                  <MenuItem value="">
                    <span className="font-[400]">Type</span>
                  </MenuItem>
                  <MenuItem value={10}>Construction</MenuItem>
                  <MenuItem value={20}>Renovation</MenuItem>
                  <MenuItem value={30}>Buy</MenuItem>
                  <MenuItem value={40}>Sell</MenuItem>
                  <MenuItem value={50}>Rent</MenuItem>
                  <MenuItem value={60}>Lease</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* location */}
            <div
              className="sm:w-[148px] sm:border-[#A1A1A1] sm:border-l  flex text-[12.24px] px-4 sm:h-[17px] text-[#A1A1A1] 
Nunito font-[400] sm:text-[12.47px] sm:leading-[17.01px] items-center text-center w-[301.44px] h-[50.08px] sm:bg-transparent rounded-[9.8px] sm:rounded-none bg-[#F3F3F3]  "
            >
              <div className=" flex w-[301.44px]  sm:w-[100.04px] items-center justify-between ">
                <input
                  type="text"
                  className="outline-none bg-transparent "
                  placeholder="Location "
                />
                <p>
                  <FaLocationDot className="font-[800] text-[black]" />
                </p>
              </div>
            </div>
          </div>
          {/* for button */}
          <div>
            <div className="bg-[#EB3951] w-[301.44px] gap-1 text-[#FFFFFF] px-[36.93px] sm:rounded-[3.76px] Nunito text-[12.48px] font-[500] h-[47.13px] leading-[17.01px] sm:w-[135.28px] rounded-[3.69px] sm:h-[39.57px] sm:py-[11.28px] py-[11.08px] sm:px-[37.61px] flex items-center justify-center  cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#d33b51]">
              <CiSearch />
              <p>Search</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
