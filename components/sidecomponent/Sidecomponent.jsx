import React from 'react'

function Sidecomponent({text1,text2}) {
  return (
    <div className=" w-[293.84px] ml-6   sm:w-[409px]  flex items-center   justify-between  ">
      <p
        className="text-[#000000] text-[11.94px] leading-[18.57px] PlusJakarta font-[500] sm:text-[18px] sm:leading-[28px] 
PlusJakarta "
      >
        {text1}
      </p>
      <p className="text-[#000000] text-[11.94px] leading-[18.57px] PlusJakarta w-[180px] font-[500] sm:text-[18px] sm:leading-[28px] ">
        {text2}
      </p>
    </div>
  );
}

export default Sidecomponent
