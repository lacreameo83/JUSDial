"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";

function DropdownMenu({ options = [], title = "Select Type" }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(title);

  return (
    <div className="relative ">
      {/* Button to toggle dropdown */}
      <div
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className="inputbutton w-full ml-[-25px] buttonbackgroundcolor sm:bg-transparent sm:w-[148.42px] xl:w-[188.42px] rounded-[20px]   relative sm:flex sm:items-center sm:justify-center"
      >
        <div className="w-[301.44px]  h-[50.08px] bg-[#EEEEEE] sm:bg-transparent px-2   rounded-[9.8px] relative z-20   flex items-center justify-between cursor-pointer">
          <button className="text-[14px] leading-[20px] font-[400] placehoderscolors sm:text-[16px] sm:leading-[24px] textcolor">
            {selectedValue}
          </button>
          {isDropdownOpen ? (
            <MdKeyboardArrowUp className="font-[800] w-[12.19px] h-[14.89px] text-[#818181] sm:w-[22.94px] sm:h-[22.94px] transition-transform duration-300 ease-in" />
          ) : (
            <IoIosArrowDown className="font-[800] w-[12.19px] h-[14.89px] text-[#818181] sm:w-[22.94px] sm:h-[22.94px] transition-transform duration-300 ease-in" />
          )}
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute  rounded-2xl px-3 py-3 top-14 sm:top-11 left-0 w-full  sm:w-full bg-white textcolor shadow-md z-50 transition-all duration-500 ease-in-out ${
          isDropdownOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4"
        }`}
        style={{
          visibility: isDropdownOpen ? "visible" : "hidden", // Prevents flicker when closing
        }}
      >
        {options.map((option, index) => (
          <div key={index}>
            <p
              onClick={() => {
                setSelectedValue(option); // Update selected value
                setIsDropdownOpen(false); // Close dropdown
              }}
              className="p-2 cursor-pointer hover:text-black"
            >
              {option}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropdownMenu;
