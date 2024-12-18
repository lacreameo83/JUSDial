import React from 'react'
import logo from "../../../public/logo/Logo-WordMark-Green.svg";
import Image from 'next/image';
import Link from 'next/link';

function page() {
  return (
    <div className="flex flex-col py-10 w-full items-center h-[100vh] justify-between">
      <div>
        <div className="flex flex-col justify-between items-center  ">
          <div className="mb-6">
            <Image width={200} height={200} src={logo.src} alt='logo' />
          </div>

          <p className="PlusJakarta text-center mb-3 w-[253px] leading-[32px] text-[24px] font-[700] ">
            Start Your Property Journey Today
          </p>
          <p className="PlusJakarta text-[14px] leading-[20px] font-[400] w-[325px] text-center ">
          {`  Begin your journey to find your dream home. Sign up or log in for an
            unparalleled property search experience`}
          </p>
        </div>
      </div>

      {/* down part */}
      <div>
        <div className="bg-[#364436] mb-3 flex items-center justify-center w-[325px] h-[56px] rounded-[15px] text-white  ">
          <p
            className="
PlusJakarta text-[14px] font-[500] text-center leading-[20px] "
          >
            Get Started
          </p>
        </div>
        <div className="text-[#0D0D0D] PlusJakarta leading-[24px] text-[16px] font-[400]   h-[24px] w-[304px] flex items-center justify-between  ">
          <p>Already have an account?</p>
          <Link href="/login">
            <p>Login Here</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page
