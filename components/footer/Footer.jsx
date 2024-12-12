"use client";

import React from "react";
import IconButton from "../iconbutton/IconButton";
import { FacebookRounded, Instagram } from "@mui/icons-material";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { SlSocialTwitter } from "react-icons/sl";

export default function Footer() {
  return (
    <div className="w-full bg-[#364436] px-12 text-white flex flex-col items-center py-8">
      {/* Main Footer Section */}
      <div className="w-full max-w-7xl px-4 sm:px-8 flex flex-col sm:flex-row justify-between gap-8">
        {/* Build Estate Section */}
        <div className="flex flex-col gap-4">
          <p
            className="PlusJakarta text-[24px]  
  font-[700]  leading-[10px]  "
          >
            BUILD ESTATE
          </p>
          <p className="PlusJakarta w-[328px] text-[12px] h-[54px] font-[400] leading-[18px] sm:text-[14px] sm:leading-[20px] sm:w-[232px] sm:h-[100px]  ">
            Your trusted platform for buying, selling, renting, or leasing
            properties. We connect you with opportunities to achieve your real
            estate goals.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col gap-4">
          <p className="PlusJakarta text-[16px]  font-[700] leading-[24px] sm:text-[18px] sm:leading-[28px] ">
            Quick Links
          </p>
          <ul className="space-y-2">
            {["Construction", "Renovation", "Buy", "Sell", "Rent", "Lease"].map(
              (el) => (
                <li
                  key={el}
                  className="PlusJakarta text-[14px] leading-[20px] sm:text-[16px] font-[500] sm:leading-[24px] hover:text-gray-300 cursor-pointer"
                >
                  {el}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Trust & Legal Section */}
        <div className="flex flex-col gap-4">
          <p className="PlusJakarta text-[16px]  font-[700] leading-[24px] sm:text-[18px] sm:leading-[28px] ">
            Trust & Legal
          </p>
          <ul className="space-y-2">
            {[
              "Terms & Conditions",
              "Privacy Notice",
              "Cookie Notice",
              "Trust Center",
              "Cookie Preference",
            ].map((el) => (
              <li
                key={el}
                className="PlusJakarta text-[14px] leading-[20px] sm:text-[16px] font-[500] sm:leading-[24px] hover:text-gray-300 cursor-pointer"
              >
                {el}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-4">
          <p className="PlusJakarta text-[16px]  font-[700] leading-[24px] sm:text-[18px] sm:leading-[28px] ">
            Contact
          </p>
          <div className="space-y-4">
            <IconButton
              icone={<CallOutlinedIcon />}
              text1="(62) 812345678900"
            />
            <IconButton
              icone={<EmailOutlinedIcon />}
              text1="infobuiliesestate@gmail.com"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t text-[#FFFFFF] flex items-center justify-center border-[#4F4F4F] mt-8 w-full">
        <div className="w-full  max-w-7xl px-4 sm:px-8 flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between items-center py-4">
          <p className="PlusJakarta text-[12px] leading-[18px] sm:text-[16px] sm:leading-[24px] font-[500]  ">
            &copy; 2025 Build Estate. All rights reserved.
          </p>
          <div className="flex space-x-4 items-center sm:mt-0">
            <FacebookRounded className="text-white hover:text-gray-400 w-[30.11px] h-[30.11px] cursor-pointer" />
            <Instagram className="text-white hover:text-gray-400 w-[30.11px] h-[30.11px] cursor-pointer" />
            <SlSocialTwitter className="text-white hover:text-gray-400 w-[30.11px] h-[30.11px] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
