"use client";

import React from "react";
import { BsList } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
// material ui implamentation

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

function Page() {
   const [age, setAge] = useState("");

   const handleChange = (event) => {
     setAge(event.target.value);
   };
  return (
    <div className="h-[572px] flex-col gap-[18px] px-[40px] sm:px-[70px] text-black flex justify-center">
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
      <div>
        <div className=" border-r  sm:w-[686px]  w-[325px] sm:h-[52.65px]   h-[283.76px] flex flex-col sm:flex-row rounded-[14.73px] items-center sm:px-0 py-[22.58px] sm:py-0 px-[11.78px] justify-between  sm:rounded-[7.52px] bg-[#FFFFFF]">
          <div className=" w-[201.44px] flex flex-col sm:flex-row items-center  justify-around sm:justify-normal  h-[283.76px] sm:w-[444.42px] sm:h-[22.57px] sm:flex sm:items-center sm:gap-[26.33px] ">
            <div className=" px-3  sm:border-black sm:border-r sm:rounded-none  sm:h-[22.57px] bg-[#F3F3F3] sm:bg-white flex    items-center justify-between w-[301.44px] h-[50.08px] rounded-[9.82px] text-[12px] ">
              <input
                type="text"
                className="outline-none bg-transparent "
                placeholder="What are you looking for? "
              />
            </div>
            {/* -----------drop down ----------------------------------------- */}
            {/* <div> */}
            <div>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 120,
                  width: { xs: "60%", sm: "auto" }, // Full width on small screens
                  height: { xs: "52.65px", sm: 0 }, // Adjust height for small and large screens

                  borderRadius: { xs: "9.82px", sm: 0 }, // Rounded corners on small screens
                  backgroundColor: { xs: "#F3F3F3", sm: "transparent" }, // Background color on small screens
                  outline: "none",
                  borderLeft: { xs: "none", sm: "2px solid black" },
                  borderRight: { xs: "none", sm: "2px solid black" },
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
                    width: { xs: "301.24px", sm: "auto" },

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
                    <span className="font-[400]">Type</span>{" "}
                  </MenuItem>
                  <MenuItem value={10}>Construction</MenuItem>
                  <MenuItem value={20}>Renovation</MenuItem>
                  <MenuItem value={30}>Buy</MenuItem>
                  <MenuItem value={40}>Sell</MenuItem>
                  <MenuItem value={50}>Rent</MenuItem>
                  <MenuItem value={60}>Lease</MenuItem>
                </Select>
              </FormControl>
              {/* </div> */}
            </div>

            {/* drop down */}
            <div className=" px-3 sm:border-black sm:border-l sm:h-[22.57px] sm:rounded-none  bg-[#F3F3F3] sm:bg-white flex   items-center justify-between w-[301.44px] h-[50.08px] rounded-[9.82px] text-[12px] ">
              <input
                type="text"
                className="outline-none bg-transparent "
                placeholder="Location "
              />
              <CiLocationOn />
            </div>
          </div>
          {/* last btn */}
          <div className="bg-[#EB3951] w-[301.44px] gap-1 text-[#FFFFFF] px-[36.93px] sm:rounded-[3.76px] Nunito text-[12.48px] font-[500] h-[47.13px] leading-[17.01px] sm:w-[135.28px] rounded-[3.69px] sm:h-[39.57px] sm:py-[11.28px] py-[11.08px] sm:px-[37.61px] flex items-center justify-center  cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#d33b51]">
            <CiSearch />
            <p>Search</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
