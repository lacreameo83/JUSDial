
import React from "react";
import Navbar from "../../app/(home)/_components/nav/Navbar.jsx";

function Sidedetais({ imageOutput,Icon,Icon2,text }) {


    
  return (
    <div className="w-full flex items-center justify-center ">
      <div
        // style={{ backgroundImage: `url(${imageOutput})` }}
        style={{ backgroundImage: `url(${imageOutput})` }}
        className="w-full md:w-[800px] bg-[length:1250px] sm:bg-[length:1750px] sm:hover:bg-[length:2100px]  hover:bg-[length:1350px] transition-all  ease-in duration-500  xl:w-[1000px] 2xl:w-[1184px] bg-no-repeat bg-center    relative h-[674px] bg-black sm:rounded-[30px] "
      >
        <div className="block sm:hidden ">
          <Navbar />
        </div>

        {/* white boxes */}
        <div className="w-[300px]  mainfeaturedcategory-maincontainer bottom-3 flex items-center bg-transparent left-[10%]  h-[90px] sm:bg-[#FAFAFA] sm:left-0 absolute sm:bottom-0 ">
          <div className=" absolute hidden sm:block mainslideproductcategory-container bg-transparent h-[30px] bottom-0 right-[-30px] w-[30px]"></div>
          <div className=" absolute hidden sm:block mainslideproductcategory-container2 bg-transparent h-[30px] top-[-30px] w-[30px]"></div>
          {/* contects ---------------------- */}
          <div className="h-[68px] flex items-center justify-around   w-[90%] ml-6 ">
            {Icon} {text} {Icon2}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidedetais;
