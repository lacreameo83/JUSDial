import React from "react";
import { MdAdd } from "react-icons/md";
import { BsList } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";

function Navbar() {
  return (
    <div className="h-[48pxpx]  pt-[37px] mb-[58px] sm:mb-[127px] xl:mb-[40px]  flex items-center justify-between  ">
      {/* Logo Section */}
      <div className="PlusJakarta font-[800]  leading-[22.62px] w-[57px]  sm:w-[85px] h-[30px] sm:h-[44px]  flex items-center  flex-col gap-1  primarycolor">
        <p className="sm:h-[18.06px] h-[17.81px] font-[700] text-[16.09px] sm:text-[24px] leading-[6.71px]  sm:leading-[10px] ">
          BUILD
        </p>
        <p className="sm:h-[18.06px] h-[17.81px] font-[700] text-[16.09px] sm:text-[24px] leading-[6.71px]  sm:leading-[10px] ">
          ESTATE
        </p>
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
      <div className="block sm:hidden">
        <BsList className="cursor-pointer text-black  transition-all h-[20px] w-[28px] duration-300" />
      </div>
    </div>
  );
}

export default Navbar;
