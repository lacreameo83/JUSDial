import React from "react";
import { MdAdd } from "react-icons/md";
import { BsList } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";

function Page() {
  return (
    <div className="h-[34px] pt-[28px] mb-[58px] sm:mb-[214px]  flex items-center justify-between  ">
      {/* Logo Section */}
      <div className="Nunito  font-[800] leading-[22.62px] w-[110px] h-[25.91px]  flex items-center gap-1  text-black">
        <FaLayerGroup className="text-[#EB3951] w-[21.99px] h-[25.91px]" />
        <p className="sm:h-[18.06px] h-[17.81px]  text-[16.55px] sm:text-[18.58px] w-[84.06px] text-[#000000] ">
          JUSDial
        </p>
      </div>

      {/* Navigation Menu (Visible on large screens) */}
      <div className="hidden sm:block">
        <ul className="flex items-center sm:leading-[22.62px] text-[#1F1F1F]  w-full h-[23px] sm:w-[575px] justify-between text-[16.58px] Nunito font-[700] text-center">
          <li className="hover:text-[#EB3951] cursor-pointer transition-colors duration-300 ease-in-out">
            Construction
          </li>
          <li className="hover:text-[#EB3951] cursor-pointer transition-colors duration-300 ease-in-out">
            Renovation
          </li>
          <li className="hover:text-[#EB3951] cursor-pointer transition-colors duration-300 ease-in-out">
            Buy
          </li>
          <li className="hover:text-[#EB3951] cursor-pointer transition-colors duration-300 ease-in-out">
            Sell
          </li>
          <li className="hover:text-[#EB3951] cursor-pointer transition-colors duration-300 ease-in-out">
            Rent
          </li>
          <li className="hover:text-[#EB3951] cursor-pointer transition-colors duration-300 ease-in-out">
            Lease
          </li>
        </ul>
      </div>

      {/* Add Listing Button (Visible on large screens) */}
      <div className="hidden sm:block">
        <div className="bg-[#EB3951] Nunito text-[16.58px] px-[20px] py-[5px] font-[700] leading-[22.62px] w-[159px] h-[34px] rounded-[5px] flex items-center justify-around text-center text-[#FFFFFF] cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#d33b51]">
          <MdAdd />
          <p>Add listing</p>
        </div>
      </div>

      {/* Mobile Menu Icon (Visible on small screens) */}
      <div className="block sm:hidden">
        <BsList className="cursor-pointer text-black hover:text-[#d33b51] transition-all h-[14.15px] w-[21.23px] duration-300" />
      </div>
    </div>
  );
}

export default Page;
