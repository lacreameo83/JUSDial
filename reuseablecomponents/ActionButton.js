import React from "react";
import { MdAdd } from "react-icons/md";

function ActionButton({ text }) {
  return (
    <div className="h-[13vh] border-black bg-slate-400   border-b-[2px] flex items-center ">
      <div
        className="flex    w-full items-center justify-between 
                   hover:bg-slate-600 hover:cursor-pointer transition-all duration-300 ease-in-out"
      >
        <p className="text-black Poppinsfonts text-[16px]">{text}</p>
        <MdAdd className="text-black transform hover:scale-110 transition-transform duration-300 ease-in-out" />
      </div>
    </div>
  );
}

export default ActionButton;
