import React from "react";
import { MdAdd } from "react-icons/md";
import { BsList } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";

function Page() {
  return (
    <div className="h-[80px]  flex items-center justify-between px-4 sm:px-[70px]">
      {/* Logo Section */}
      <div className="Nunito text-[18.58px] font-[900] leading-[22.62px] w-[110px] h-[25.91px]  flex items-center  text-black">
        <FaLayerGroup className="text-[#EB3951] w-[21.99px] h-[25.91px]" />
        <p>JUSDial</p>
      </div>

      {/* Navigation Menu (Visible on large screens) */}
      <div className="hidden sm:block">
        <ul className="flex items-center gap-4 w-full h-[23px] justify-between text-[16.58px] Nunito font-[700] text-black">
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
        <div className="bg-[#EB3951] Nunito text-[16.58px] font-[700] leading-[22.62px] w-[159px] h-[34px] rounded-[5px] flex items-center justify-around text-white cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#d33b51]">
          <MdAdd />
          <p>Add listing</p>
        </div>
      </div>

      {/* Mobile Menu Icon (Visible on small screens) */}
      <div className="block sm:hidden">
        <BsList className="cursor-pointer text-black hover:text-[#d33b51] transition-all duration-300" />
      </div>
    </div>
  );
}

export default Page;
