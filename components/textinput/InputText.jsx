import React from 'react'

function InputText({placeholder,icon}) {
  return (
    <div className="flex items-center justify-between w-[270px] md:w-[160px] py-7 rounded-[12px] bg-white sm:bg-transparent px-2  xl:w-[170.8px] h-[24px] ">
      <div>
        <input
          className="w-[150px] md:w-[100px] bg-transparent outline-none "
          type="text"
          placeholder={placeholder}
        />
      </div>
      <div className="text-[#9d9da0] ">{icon}</div>
    </div>
  );
}

export default InputText
