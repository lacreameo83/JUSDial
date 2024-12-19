'use clinent'

import React from 'react'
import { CiSearch } from "react-icons/ci";
function SearchButton({text,icon}) {
  return (
    <div className="flex  w-[301.44px]  rounded-[8px]   sm:mt-0 items-center PlusJakarta text-[#FFFFFF] bg-[#364436]  justify-center gap-2 md:w-[150px]   xl:w-[244.03px] h-[47.13px] md:px-[10.9px]  xl:px-[60.12px] sm:py-[18.04px] ">
      <div className="w-[18.75px] h-[18.75px] ">{icon}</div>
      <div className=' text-[16px] xl:text-[16px] leading-[24px] font-[400]  '>{text}</div>
    </div>
  );
}

export default SearchButton
