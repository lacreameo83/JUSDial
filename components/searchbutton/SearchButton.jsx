'use clinent'

import React from 'react'
import { CiSearch } from "react-icons/ci";
function SearchButton({text,icon}) {
  return (
    <div className="flex  w-[270px] rounded-2xl mt-1 sm:mt-0 items-center PlusJakarta text-[#FFFFFF] bg-[#364436] 2xl:justify-center gap-2 md:w-[130px]  2xl:w-[244.03px] h-[60.00px] px-[60.12px] py-[18.04] ">
      <div className="w-[18.75px] h-[18.75px] ">{icon}</div>
      <div className=' text-[16px] xl:text-[16px] leading-[24px] font-[400]  '>{text}</div>
    </div>
  );
}

export default SearchButton
