import React from 'react'

function Sidecomponent({text1,text2}) {
  return (
    <div className="w-[409px]  flex items-center   justify-between  ">
      <p
        className="text-[#000000] PlusJakarta font-[500] text-[18px] leading-[28px] 
PlusJakarta "
      >
        {text1}
      </p>
      <p className="text-[#000000] PlusJakarta w-[180px] font-[500] text-[18px] leading-[28px] ">
        {text2}
      </p>
    </div>
  );
}

export default Sidecomponent
