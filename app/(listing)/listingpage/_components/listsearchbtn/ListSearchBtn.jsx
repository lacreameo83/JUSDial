'use client'
import DropDownMenu from '@/components/dropdownmenu/DropDownMenu';
import SearchButton from '@/components/searchbutton/SearchButton';
import InputText from '@/components/textinput/InputText';
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function ListSearchBtn() {
  return (
    <div className="w-full smallscreen h-[82vh]  md:h-[28vh]  xl:h-[33vh] flex flex-col items-center pt-10  ">
      <div className=" xl:w-[1185.51px] md:w-[800px] gap-8 h-[1500px] sm:h-[82.07px] flex flex-col  ">
        <div className=" w-[300px] md:w-[800px] h-[50vh] xl:w-[1185.51px] sm:h-[82.07px] rounded-[12.02px] bg-[#F9F9FB] py-[11px] flex items-center justify-center px-[53px] ">
          <div className="w-[1915.51px] h-[43vh] flex flex-col sm:flex-row justify-between items-center sm:justify-around sm:h-[60.07px] ">
            {/* contents in the search button */}
            <div>
              <InputText placeholder="Keyword" icon={<SearchIcon />} />
            </div>
            {/* diverer */}
            <div className="hidden sm:block border-[1px] h-[30px] border-[#808080] "></div>
            <div>
              <DropDownMenu title="Type" />
            </div>
            {/* divider */}
            <div className=" hidden sm:block border-[1px]  h-[30px] border-[#808080] "></div>
            <div>
              <DropDownMenu title="Category" />
            </div>
            {/* divider */}
            <div className="hidden sm:block border-[1px]  h-[30px] border-[#808080] "></div>
            <div>
              <DropDownMenu title="Location" />
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
              <DropDownMenu title="Most Recent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}