'use client'
import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { BsList } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import logo1 from "../../../../public/logo/Logo-WordMark-Green.svg";
import logo2 from "../../../../public/logo/Logo-Icon-Green.svg";
import Image from "next/image";

function Navbar() {
 const [menuclicked,setMenuClicked]=useState(false)
  const handleIsMenuclicked =()=>{
setMenuClicked(!menuclicked);
  }
  const handleMenuDelete = () => {
    setMenuClicked(false);
  };
  return (
    <div>
      <div className="h-[48pxpx] nav pt-[18px]  sm:pt-[37px]  flex items-center justify-between  ">
        {/* Logo Section */}
        <div className="PlusJakarta font-[800]  leading-[22.62px] w-[37px]  sm:w-[185px] h-[10px] sm:h-[44px]  flex items-center  flex-col gap-1  primarycolor">
          <Image
            className="hidden sm:block"
            src={logo1}
            alt="Logo"
            width={500}
            height={200}
          />
          <Image
            className="block sm:hidden"
            src={logo2}
            alt="Logo"
            width={50}
            height={50}
          />
        </div>

        {/* Navigation Menu (Visible on large screens) */}
        <div className="hidden sm:block">
          <ul className="flex items-center sm:leading-[24px] textcolor sm:h-[24px] w-full h-[23px] sm:w-[455px]   xl:w-[525px] justify-between text-[16px] PlusJakarta font-[500] text-center">
            <li className="hover:text-[#364436] cursor-pointer transition-colors duration-300 ease-in-out">
              Construction
            </li>
            <li className="hover:text-[#364436] cursor-pointer transition-colors duration-300 ease-in-out">
              Renovation
            </li>
            <li className="hover:text-[#364436] cursor-pointer transition-colors duration-300 ease-in-out">
              Buy
            </li>
            <li className="hover:text-[#364436] cursor-pointer transition-colors duration-300 ease-in-out">
              Sell
            </li>
            <li className="hover:text-[#364436] cursor-pointer transition-colors duration-300 ease-in-out">
              Rent
            </li>
            <li className="hover:text-[#364436] cursor-pointer transition-colors duration-300 ease-in-out">
              Lease
            </li>
          </ul>
        </div>

        {/* Add Listing Button (Visible on large screens) */}
        <div className="hidden sm:block">
          <div className="backgroundcolor text-[16.58px] px-[24px] py-[12px] font-[700] leading-[22.62px] w-[138px] h-[48px] rounded-[8px] flex items-center justify-around text-center text-[#FFFFFF] cursor-pointer transition-colors duration-300 ease-in-out ">
            <p>Add listing</p>
          </div>
        </div>

        {/* Mobile Menu Icon (Visible on small screens) */}
        <div onClick={handleIsMenuclicked} className="block  sm:hidden">
          <MenuIcon className="cursor-pointer text-[#0D0D0D]  transition-all h-[16px] w-[28px] duration-300" />
        </div>
      </div>
      {menuclicked && (
        <div className="absolute flex items-center justify-center top-0 menucontentscontainer z-50 w-full h-[90vh] transition duration-300 menucontentscontainer-deletebtn animation-slideOut">
          <div className="text-[30px] h-[50%] menucontents-container-child flex flex-col gap-[20px] w-[80%]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between w-full h-[5vh]">
                <div className="w-[57px] text-white   h-[61px]">
                  <Image
                    className="block sm:hidden"
                    src={logo2}
                    alt="Logo"
                    width={50}
                    height={50}
                  />
                </div>
                <p
                  onClick={handleMenuDelete}
                  className="menucontentscontainer-deletebtn cursor-pointer text-[20px] transition-transform duration-300 transform hover:rotate-90 hover:scale-125"
                  aria-label="Close menu"
                >
                  X
                </p>
              </div>
              <nav>
                {[
                  "Construction",
                  "Renovation",
                  "Buy",
                  "Sell",
                  "Rent",
                  "Lease",
                ].map((el, i) => (
                  <div key={i}>
                    <p className="p-3 text-[16px] border-white border-b-[1px]">
                      {el}
                    </p>
                  </div>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <button className="border px-[8px] rounded-lg py-[8px] text-white bg-transparent">
                Sign In
              </button>
              <button className="border px-[8px] rounded-lg py-[8px] text-white bg-transparent">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
