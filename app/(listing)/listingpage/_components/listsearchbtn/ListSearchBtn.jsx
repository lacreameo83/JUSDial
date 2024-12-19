'use client'



import RestartAltIcon from "@mui/icons-material/RestartAlt";
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

import DropdownMenu from '../../../../../components/dropdownmenu/DropDownMenu';
import SearchButton from '../../../../../components/searchbutton/SearchButton';
import InputText from "../../../../../components/textinput/InputText";

export default function ListSearchBtn() {
  return (
    <div className="w-full  smallscreen h-[547px]     sm:h-[273px]  flex flex-col items-center  pt-10  ">
      <div className=" md:w-[800.51px]  xl:w-[1185.51px]   gap-[10px] sm:gap-[60px]  w-[327px]  sm:px-0 sm:py-0 h-[347.58px] sm:h-[82.07px] flex flex-col  ">
        <div className=" w-[327px]   bg-[#FAFAFA] sm:h-[82.07px]  md:w-[820.51px]  h-[347.58px] px-[11.7px] py-[22.58px] sm:px-0 sm:py-0    xl:w-[1185.51px]  rounded-[12.02px]  flex items-center justify-center  ">
          <div className="w-[301.44pxpx] bg-red- h-[320.08px]     sm:w-[1600px] rounded-[9.82px] flex flex-col sm:flex-row gap-[13.75px] sm:gap-0 items-center sm:justify-around sm:h-[60.07px] ">
            {/* contents in the search button */}

            <div>
              <InputText placeholder="Keyword" icon={<SearchIcon />} />
            </div>
            {/* diverer */}
            <div className="hidden sm:block border-[1px] h-[30px] border-[#808080] "></div>
            <div>
              <DropdownMenu
                title="Type"
                options={[
                  "Contruction",
                  "Renovation",
                  "Buy",
                  "Sell",
                  "Rent",
                  "Lease",
                ]}
              />
            </div>
            {/* divider */}
            <div className=" hidden sm:block border-[1px]  h-[30px] border-[#808080] "></div>
            <div>
              <DropdownMenu title="Category" options={["Apartment", "Villa"]} />
            </div>
            {/* divider */}
            <div className="hidden sm:block border-[1px]  h-[30px] border-[#808080] "></div>
            <div>
              <DropdownMenu
                title="Location"
                options={[
                  "Dubai",
                  "Indonesia",
                  "Malaysia",
                  "south korea",
                  "inggris",
                ]}
              />
            </div>
            <div>
              <SearchButton icon={<RestartAltIcon />} text="Reset Filters" />
            </div>
          </div>
        </div>

        {/* dowm part */}
        <div className="self-start w-full xl:w-[1185.51px] md:w-[800px] ">
          <p>There are currently 1-9 of 41 properties</p>
          <div className="w-full flex flex-col sm:flex-row items-center justify-between ">
            <div>
              <p className="text-[40px] font-[700]">Construction</p>
            </div>
            <div>
              <DropdownMenu
                title="Most Recent"
                options={[
                  "Sort by title (Z-A)",
                  "sort by title (A - Z)",
                  "Sort by newest",
                  "sort by oldest",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}
