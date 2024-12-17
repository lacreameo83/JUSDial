'use client'



import RestartAltIcon from "@mui/icons-material/RestartAlt";
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

import DropdownMenu from '../../../../../components/dropdownmenu/DropDownMenu';
import SearchButton from '../../../../../components/searchbutton/SearchButton';
import InputText from "../../../../../components/textinput/InputText";

export default function ListSearchBtn() {
  return (
    <div className="w-full  smallscreen h-[90vh]   md:h-[38vh] xl:h-[45vh]  2xl:h-[40vh]  flex flex-col items-center pt-10  ">
      <div className=" xl:w-[68rem] 2xl:w-[1185.51px] md:w-[700px] gap-[60px] h-[1500px] sm:h-[82.07px] flex flex-col  ">
        <div className=" w-[305px] py-4 md:w-[800px] bg-[#F9F9FB]  h-[369.76px] sm:w-[80%]   xl:w-[1185.51px] sm:h-[82.07px] rounded-[12.02px]  flex items-center justify-center px-[53px] ">
          <div className="w-[301.44pxpx] h-[320.08px]   md:w-[800px] xl:w-[1700px] 2xl:w-[1600px] rounded-[9.82px] flex flex-col sm:flex-row justify-between items-center sm:justify-around sm:h-[60.07px] ">
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

    // <div>
    //   <Form
    //     placeholder="search"
    //     dropdownMenu1={<DropDownMenu title="Type" />}
    //     dropdownMenu2={<DropDownMenu title="Category" />}
    //     dropdownMenu3={<DropDownMenu title="Location" />}
    //     buttontext="Regenarate"
    //     icon={<RestartAltIcon />}
    //   />
    // </div>
  );
}
