import React from "react";

function IconButton({ icone, text1 }) {
  return (
    <div className="flex items-center  gap-2 p-2 rounded-md transition duration-300 ease-in-out">
      <div className="text-lg">{icone}</div>
      <div className="space-y-1 font-[400]">
        <p className="hover:cursor-pointer hover:text-blue-500 text-[14px] Poppinsfonts transition-colors duration-300">
          {text1}
        </p>
        
      </div>
    </div>
  );
}

export default IconButton;
