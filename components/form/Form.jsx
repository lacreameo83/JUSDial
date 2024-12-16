import React from 'react'
import DropdownMenu from '../dropdownmenu/DropDownMenu'

function Form({icon,placeholder,buttontext,dropdownMenu1,dropdownMenu2,dropdownMenu3}) {
  return (
        <div className='bg-red-200 h-[500px]'>
          <div className="w-[325px]  inputcontainer   md:w-[800px]   sm:mt-[45px] h-[383.76px] rounded-[14.73px] flex flex-col sm:flex-row xl:flex-row justify-around items-center  px-[11.78px] py-[22.58px] xl:py-0 xl:px-0 buttonbackgroundcolor m-auto     xl:w-[1096.66px]  sm:h-[84.17px] sm:rounded-[12.02px]   ">
            <div
              className="inputbutton  sm:w-[178.44px]  sm:h-[17px] text-[12.24px] px-4 sm:px-0   flex items-center text-black
       Nunito font-[400]  sm:text-[12.47px] sm:leading-[17.01px] sm:text-center w-[301.44px] h-[50.08px] sm:bg-transparent rounded-[9.8px] sm:rounded-none bg-[#541f80]  "
            >
              <div className=" ">
                <input
                  type="text"
                  className="w-[169px] h-[20px] md:px-2 xl:px-0 text-[14px] leading-[20px] sm:w-[194px] sm:h-[24px] font-[400] sm:text-[16px] sm:leading-[24px]   outline-none bg-transparent
       PlusJakarta  "
                  placeholder={placeholder}
                />
              </div>
            </div>
            {/* the divider */}
            <div className=" hidden sm:block h-[36.07px]    md:mx-3 border-[1.2px] border-[#808080] text-center "></div>
            {/* select button */}
            <div
              className="inputbutton  sm:w-[178.44px]  sm:h-[17px] text-[12.24px] px-4 sm:px-0   flex items-center text-black
       Nunito font-[400]  sm:text-[12.47px] sm:leading-[17.01px] sm:text-center w-[301.44px] h-[50.08px] sm:bg-transparent rounded-[9.8px] sm:rounded-none bg-[#F3F3F3]  "
            >
              {dropdownMenu1}
            </div>

            {/* location */}

            <div className=" hidden sm:block h-[36.07px]  md:mx-3  border-[1.2px] border-[#a83737] text-start "></div>
            <div
              className="inputbutton  sm:w-[178.44px]  sm:h-[17px] text-[12.24px] px-4 sm:px-0   flex items-center text-black
       Nunito font-[400]  sm:text-[12.47px] sm:leading-[17.01px] sm:text-center w-[301.44px] h-[50.08px] sm:bg-transparent rounded-[9.8px] sm:rounded-none bg-[#F3F3F3]  "
            >
              {dropdownMenu2}
            </div>
            <div className="  hidden sm:block h-[36.07px] md:mx-3  border-[1.2px] border-[#eb3c3c] text-start "></div>
            <div
              className="inputbutton  sm:w-[178.44px]  sm:h-[17px] text-[12.24px] px-4 sm:px-0   flex items-center text-black
       Nunito font-[400]  sm:text-[12.47px] sm:leading-[17.01px] sm:text-center w-[301.44px] h-[50.08px] sm:bg-transparent rounded-[9.8px] sm:rounded-none bg-[#F3F3F3]  "
            >
              {dropdownMenu3}
            </div>

            {/* for button */}
            <div className=" ">
              <div className="inputbutton  backgroundcolor w-[301.44px]  gap-[7.39px] sm:gap-[12.02px] text-[#FFFFFF] px-[36.93px] sm:rounded-[6.01px] Nunito text-[12.48px] font-[500] h-[47.13px] leading-[17.01px] sm:w-[204.07px] rounded-[3.69px] sm:h-[60.07px] sm:py-[18.04px] py-[11.08px] sm:px-[60.12px] flex items-center justify-center  cursor-pointer transition-colors duration-300 ease-in-out ">
                <div className="w-[10.08px] h-[9.84px]  sm:w-[17.8px] sm:h-[17.8px] ">
                  {icon}
                </div>
                <p
                  className="w-[48px] font-[500] h-[20px] text-[14px]  leading-[20px] text-white    sm:w-[54px] sm:h-[24px]
       PlusJakarta  sm:font-[400] sm:text-[16px] sm:leading-[24px] text-center"
                >
                  {buttontext}
                </p>
              </div>
            </div>
          </div>
        </div>
    // </div>
    // the main container
    // <div className="w-full flex items-center justify-center">
    //   <div className="w-[1185.51px] h-[82.07px] rounded-[12.02px] bg-[#F9F9FB] px-[35px] py-[11px] ">
    //     {/* the middle section */}
    //     <div className=" w-[1115.51px] h-[60.07px] flex flex-col sm:flex-row items-center justify-between">
    //       <div className="w-[141.58px] h-[25.24px] "></div>
    //       {/* divider ------------------------------------------------- */}
    //       <div className="bg-[#808080] h-[36.07px] w-[1px] hidden sm:block"></div>
    //       {/* divider -------------------------------------------- */}
    //       <div className="w-[141.58px] h-[25.24px] ">{dropdownMenu1}</div>
    //       {/* divider -------------------------------------------- */}
    //       <div className="bg-[#808080] h-[36.07px] w-[1px] hidden sm:block"></div>
    //       {/* divider -------------------------------------------- */}
    //       <div className="w-[141.58px] h-[25.24px] ">{dropdownMenu2}</div>
    //       {/* divider -------------------------------------------- */}
    //       <div className="bg-[#808080] h-[36.07px] w-[1px] hidden sm:block"></div>
    //       {/* divider -------------------------------------------- */}
    //       <div className="w-[141.58px] h-[25.24px] ">{dropdownMenu1}</div>
    //       <div className="w-[141.58px] h-[25.24px] "></div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Form
