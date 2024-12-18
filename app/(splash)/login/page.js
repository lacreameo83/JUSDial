import React from 'react'
import image from "../../../public/logo/Logo-WordMark-Green.svg";
import Image from 'next/image';
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { TbLockPassword } from "react-icons/tb";
import { ImEyeBlocked } from "react-icons/im";

function page() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center ">
      <div className="flex flex-col gap-[24px] ">
        <div className="w-[327px]  h-[280px] flex flex-col gap-3 ">
          <p
            className="
PlusJakarta w-[209px] h-[32px] font-[700] leading-[32px] text-[24px] "
          >
            Welcome back to
          </p>
          <div>
            <Image width={150} height={150} src={image.src} alt='logo' />
          </div>
          <p
            className="
PlusJakarta w-[326px] h-[36px]  font-[400] leading-[18px] text-[12px] "
          >
         {  ` Access your agent dashboard, manage listings, track inquiries, and
            grow your business.`}
          </p>
        </div>
        {/* bottom */}
        <div className="w-[327px] flex flex-col gap-7 h-[280px] ">
          <div className="h-[156px] w-[327px] flex flex-col gap-[12px] ">
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
            <p className="text-end PlusJakarta font-[400] text-[14px] text-[#364436] leading-[20px]  ">
              Forgot Password
            </p>
          </div>
          <div>
            <div className="w-[327px] mb-4 h-[56px] rounded-[15px] flex items-center justify-center bg-[#364436] ">
              {" "}
              <p className="text-[14px] text-white PlusJakarta leading-[20px] text-center font-[500] ">
                Log In
              </p>
            </div>
            <div className=" flex justify-end items-center gap-2">
              <p className="text-[14px] text-[#0D0D0D] PlusJakarta leading-[20px] text-center  font-[400] ">
              {`  Dont't have an account?`}
              </p>
              <Link href="/register">
                <p className="text-[14px] text-[#364436] PlusJakarta leading-[20px] text-center font-[400] ">
                  Sign up Now
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
