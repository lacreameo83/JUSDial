

import React from "react";
import SearchBtn from '../../(search)/page.js'

function page() {
  
  return (
    <div className="h-[572px] flex-col gap-[18px] px-[40px] sm:px-[70px] text-black flex justify-center">
      <div className="sm:h-[176px] h-[192px] w-[325px] sm:w-[727px] gap-[18px] flex flex-col ">
        <div className="sm:w-[757px] Nunito w-[325px]  text-[28px] font-[800] h-[114px] text-[#1F1F1F] text-center sm:text-start sm:h-[120px] leading-[38.19px] text-[800] sm:text-[44.31px] sm:leading-[60.44px]">
          <p>
            {`Your Gateway to Smart Living: Build, Buy, Rent, or Sell with Ease!`}
          </p>
        </div>
        <div className="sm:w-[720px] sm:h-[38px] h-[60x] w-[325px] text-center sm:text-start font-[400] text-[#1F1F1F] leading-[14.52px]  sm:text-[16px] text-[12px] sm:leading-[19.36px]  ">
          <p>{`From dream homes to lucrative investments, we've got you covered. Explore top listings for construction, renovation, buying, selling, renting, or leasing – all in one place!`}</p>
        </div>
      </div>
      {/* input sides */}
      <div>
        <SearchBtn />
      </div>
    </div>
  );
}

export default page;
