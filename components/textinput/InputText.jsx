import React from 'react'

function InputText({placeholder,icon}) {
  return (
    <div className="flex rounded-[9.82px] items-center h-[50.08px] justify-between w-[301.44px] md:w-[120px] py-7  bg-[#EEEEEE] sm:bg-transparent px-2  xl:w-[170.8px]  ">
      <div>
        <input
          className="w-[150px] md:w-[80px] bg-transparent outline-none "
          type="text"
          placeholder={placeholder}
        />
      </div>
      <div className="text-[#9d9da0] ">{icon}</div>
    </div>
  );
}

export default InputText
