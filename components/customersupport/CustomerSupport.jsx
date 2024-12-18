import React from 'react'
import IconButton from '../iconbutton/IconButton';
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

function CustomerSupport() {
  return (
    <div>
      <div className="w-[327.84px]  sm:w-[443px] flex items-center justify-center h-[191px] py-[25px] px-[14.05px] rounded-[9.37px] bg-[#EEEEEE] ">
        <div className=" w-[293.84px]  sm:w-[415px] h-[141px] flex justify-between  sm:gap-[18px] items-center ">
          <div className="w-[90px] h-[90px] rounded-[50%]   sm:h-[141px] sm:w-[141px] bg-black  ">
            
          </div>
          <div className=" sm:w-[256px] h-[141px] flex flex-col justify-between ">
            <div className="w-[188px] h-[91px] ">
              <div className="font-[600] text-[15.92px] leading-[21.23px] PlusJakarta sm:text-[20px] text-black sm:leading-[32px] ">
                Patricia Leonard{" "}
              </div>
              <div className="text-[#616161] sm:text-[10.6px] sm:leading-[15.92px] font-[500] text-[16px] leading-[24px] PlusJakarta">
                Property Consultant{" "}
              </div>
              <div className="text-[#616161] text-[9.29px] leading-[13.27px] font-[500] sm:text-[16px] sm:leading-[24px] PlusJakarta">
                <IconButton icone={<IoMdCall />} text1="+62 8123 667 7890" />
              </div>
            </div>
            <div className="w-[154px]   h-[30px] flex items-center justify-center ">
              <div>
                <IconButton
                  icone={
                    <div className=" h-[30px] w-[30px] text-white bg-[#364436] flex rounded-full ml-12 items-center justify-center">
                      <MdOutlineMailOutline />
                    </div>
                  }
                  text1="Email"
                />{" "}
              </div>
              <div>
                {" "}
                <IconButton
                  icone={
                    <div className="  h-[30px] w-[30px] text-white bg-[#364436] flex rounded-full items-center justify-center">
                      {" "}
                      <FaWhatsapp />
                    </div>
                  }
                  text1="Whatsapp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerSupport
