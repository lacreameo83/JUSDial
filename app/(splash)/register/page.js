import React from 'react'
import image from "../../../public/logo/Logo-WordMark-Green.svg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { TbLockPassword } from "react-icons/tb";
import { ImEyeBlocked } from "react-icons/im";
import { RiContactsLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

function page() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center ">
      <div className="flex flex-col gap-2 ">
        <div className="w-[327px]   h-[160px] flex flex-col gap-3 ">
          <div>
            <Image width={150} height={150} src={image.src} alt='logo' />
          </div>
          <p
            className="
PlusJakarta w-[409px] h-[32px] font-[700] leading-[32px] text-[24px] "
          >
            Join Our Agent Network!
          </p>

          <p
            className="
PlusJakarta w-[326px] h-[36px]  font-[400] leading-[18px] text-[12px] "
          >
          {`  Create your account to access a wide range of tools, exclusive
            listings, and opportunities tailored for real estate agents.`}
          </p>
        </div>
        {/* bottom */}
        <div className="w-[327px]  flex flex-col gap-1 h-[500px] ">
          <div className="h-[400px]  w-[327px] flex flex-col gap-[12px] ">
            <div className="bg-[#EEEEEE] items-center px-2 text-[14px] text-[#808080] leading-[20px] PlusJakarta flex gap-2 w-full rounded-[10px] h-[56px] ">
              <div>
                <AiOutlineMail />
              </div>
              <input
                type="email"
                className="text-[#808080] outline-none bg-transparent border-none "
                placeholder="Email"
              />
            </div>
            <div className="bg-[#EEEEEE] items-center px-2 text-[14px] text-[#808080] leading-[20px] PlusJakarta flex gap-2 w-full rounded-[10px] h-[56px] ">
              <div>
                <RiContactsLine />
              </div>
              <input
                type="email"
                className="text-[#808080] outline-none bg-transparent border-none "
                placeholder="First Name"
              />
            </div>
            {/* for email ------------------------------------------------ */}
            <div className="bg-[#EEEEEE] items-center px-2 text-[14px] text-[#808080] leading-[20px] PlusJakarta flex gap-2 w-full rounded-[10px] h-[56px] ">
              <div>
                <RiContactsLine />
              </div>
              <input
                type="email"
                className="text-[#808080] outline-none bg-transparent border-none "
                placeholder="Last Name"
              />
            </div>
            {/* contact infomation */}
            <div className="items-center  text-[14px] text-[#808080] leading-[20px] PlusJakarta flex justify-between w-full rounded-[10px] h-[56px] ">
              <div className="bg-[#EEEEEE] flex items-center justify-center px-2 w-[90px] h-[56px] rounded-[10px] ">
                <div class="relative w-64">
  
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    
    <MdKeyboardArrowDown />
  </div>
  <select
    class="block w-full pl-8 pr-4   bg-transparent  rounded-md appearance-none focus:outline-none transition ease-in-out duration-300"
  >
    <option value="">+62</option>
    <option value="option1">+234</option>
    <option value="option2">+222</option>
    <option value="option3">+456</option>
  </select>
</div>

              </div>
              <div className="bg-[#EEEEEE] px-2 w-[219px] flex items-center justify-start rounded-[10px] h-[56px] ">
                <input
                  type="number"
                  className="text-[#808080] outline-none bg-transparent border-none "
                  placeholder="80000000"
                />
              </div>
            </div>

            {/* for password ------------------------------------------- */}
            <div className="bg-[#EEEEEE] text-[14px] text-[#808080] leading-[20px] PlusJakarta flex items-center justify-between px-3 w-full rounded-[10px] h-[56px] ">
              <div className="flex items-center gap-2 ">
                <div>
                  <TbLockPassword />
                </div>
                <input
                  type="password"
                  className="text-[#808080] outline-none bg-transparent border-none "
                  placeholder="password"
                />
              </div>
              <div>
                <ImEyeBlocked />
              </div>
            </div>
            {/* comfirm pass word -------------------------------------- */}
            <div className="bg-[#EEEEEE] text-[14px] text-[#808080] leading-[20px] PlusJakarta flex items-center justify-between px-3 w-full rounded-[10px] h-[56px] ">
              <div className="flex items-center gap-2 ">
                <div>
                  <TbLockPassword />
                </div>
                <input
                  type="password"
                  className="text-[#808080] outline-none bg-transparent border-none "
                  placeholder="confirm password"
                />
              </div>
              <div>
                <ImEyeBlocked />
              </div>
            </div>
          </div>
          <div>
            <div className="w-[327px] mb-4 h-[56px] rounded-[15px] flex items-center justify-center bg-[#364436] ">
              {" "}
              <p className="text-[14px] text-white PlusJakarta leading-[20px] text-center font-[500] ">
                Sign Up
              </p>
            </div>
            <div className=" flex justify-end items-center gap-2">
              <p className="text-[14px] text-[#0D0D0D] PlusJakarta leading-[20px] text-center  font-[400] ">
                Already have an account?
              </p>
              <Link href="/login">
                <p className="text-[14px] text-[#364436] PlusJakarta leading-[20px] text-center font-[400] ">
                  Login Here
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page
