"use client";

import React from "react";
import IconButton from "../iconbutton/IconButton";
import { FacebookRounded, Instagram } from "@mui/icons-material"; // Correct icon imports
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { SlSocialTwitter } from "react-icons/sl";
export default function Footer() {
  return (
    <div className="w-full bg-[#364436] text-white flex flex-col items-center py-8">
      {/* Main Footer Section */}
      <div className="w-full max-w-7xl px-4 sm:px-8 flex flex-col sm:flex-row justify-between gap-8">
        {/* Build Estate Section */}
        <div className="flex flex-col gap-4">
          <p className="PlusJakarta text-2xl font-bold leading-[23px]">
            BUILD ESTATE
          </p>
          <p className="PlusJakarta text-sm leading-6 max-w-xs">
            Your trusted platform for buying, selling, renting, or leasing
            properties. We connect you with opportunities to achieve your real
            estate goals.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col gap-4">
          <p className="PlusJakarta text-lg font-bold leading-7">Quick Links</p>
          <ul className="space-y-2">
            {["Construction", "Renovation", "Buy", "Sell", "Rent", "Lease"].map(
              (el) => (
                <li
                  key={el}
                  className="PlusJakarta text-base font-medium leading-6 hover:text-gray-300 cursor-pointer"
                >
                  {el}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Trust & Legal Section */}
        <div className="flex flex-col gap-4">
          <p className="PlusJakarta text-lg font-bold leading-7">
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
                className="PlusJakarta text-base font-medium leading-6 hover:text-gray-300 cursor-pointer"
              >
                {el}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-4">
          <p className="PlusJakarta text-lg font-bold leading-7">Contact</p>
          <div className="space-y-4">
            <IconButton
              icone={<CallOutlinedIcon />}
              text1="infobuiliesestate@gmail.com"
            />
            <IconButton
              icone={<EmailOutlinedIcon />}
              text1="(62) 812345678900"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t flex items-center justify-center border-gray-500 mt-8 w-full">
        <div className="w-full  max-w-7xl px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center py-4">
          <p className="PlusJakarta text-sm">
            &copy; 2025 Build Estate. All rights reserved.
          </p>
          <div className="flex space-x-4 items-center sm:mt-0">
            <FacebookRounded className="text-white hover:text-gray-400 cursor-pointer" />
            <Instagram className="text-white hover:text-gray-400 cursor-pointer" />
            <SlSocialTwitter className="text-white hover:text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
