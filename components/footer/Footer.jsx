"use client";

import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { SiPiapro } from "react-icons/si";
import { TfiInstagram } from "react-icons/tfi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import paypalloogo from "../../public/bank-cards-logo/PayPalCard.png";
import amex from "../../public/bank-cards-logo/amexcard.png";
import visa from "../../public/bank-cards-logo/visa card.png";
import Image from "next/image";
import IconButton from "@/components/iconbutton/IconButton";
import { AiOutlineMail } from "react-icons/ai";
import { PiHouseLine } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import ActionButton from "@/components/actionbutton/ActionButton";

function Footer() {
  return (
    <div className="border-t sm:h-[440px] gap-8 w-full xl:flex xl:flex-col items-center justify-center p-6 md:p-12 text-[#2e2b2a]">
      {/* --- Desktop and Tablet Layout --- */}
      <div className="w-full hidden Poppinsfonts sm:gap-3 sm:grid sm:grid-cols-2 max-w-7xl xl:flex xl:items-start xl:justify-between">
        {/* Quick Links Section */}
        <div className="flex flex-col ">
          <h2 className="text-xl font-[500] text-[16px] sm:text-[18px] leading-[30px] mb-2">
            Quick Links
          </h2>
          <ul className="space-y-2">
            {[
              "About us",
              "Faq",
              "Help",
              "My account",
              "Create account",
              "Contacts",
            ].map((link) => (
              <li
                key={link}
                className="text-[14px] hover-arrow Poppinsfonts sm:text-[16px] hover:cursor-pointer hover:text-[#1755c2] transition-colors duration-300"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h2 className="text-xl font-[500] text-[16px] sm:text-[18px] leading-[30px] mb-2">
            Categories
          </h2>
          <ul className="space-y-2">
            {[
              "Shops",
              "Hotels",
              "Restaurants",
              "Bars",
              "Events",
              "Fitness",
            ].map((category) => (
              <li
                key={category}
                className="hover:text-[#1755c2] hover-arrow hover:cursor-pointer text-[14px] Poppinsfonts sm:text-[16px] transition-colors duration-300"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts Section */}
        <div>
          <h2 className="text-xl font-[500] text-[16px] sm:text-[18px] leading-[30px] mb-2">
            Contacts
          </h2>
          <div className="flex flex-col gap-3">
            <IconButton
              icone={<PiHouseLine className="text-[#2b5fc0]" />}
              text1="97845 Baker st. 567"
              text2="Los Angeles - US"
            />
            <IconButton
              icone={<TfiHeadphoneAlt className="text-[#2b5fc0]" />}
              text1="+39 06 97240120"
            />
            <IconButton
              icone={<AiOutlineMail className="text-[#2b5fc0]" />}
              text1="info@sparker.com"
            />
          </div>
        </div>

        {/* Keep in Touch Section */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-xl font-[500] text-[16px] sm:text-[18px] leading-[30px] mb-2">
              Keep in touch
            </h2>
            <div className="flex items-center">
              {/* Email Input */}
              <input
                className="p-3 bg-stone-100 outline-none w-[260px] text-[14px] focus:border-[#1755c2] border transition-colors duration-300"
                type="email"
                placeholder="your email"
              />
              {/* Submit Button with Hover Effect */}
              <button className="p-3 w-[90px] text-[14px] bg-[#1755c2] text-white hover:bg-[#143d8a] transition-colors duration-300">
                Submit
              </button>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col gap-2">
            <p>Follow Us</p>
            <div className="flex items-center gap-1">
              {[ImFacebook, FaTwitter, TfiGoogle, SiPiapro, TfiInstagram].map(
                (Icon, index) => (
                  <Icon
                    key={index}
                    className="w-[40px] h-[30px] hover:text-[#1755c2] hover:cursor-pointer transition-colors duration-300 text-[#8d9a9e]"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* --- Mobile Layout --- */}
      <div className="flex w-[90%] flex-col gap-3 sm:hidden">
        {["Quick Links", "Categories", "Contacts", "Keep in touch"].map(
          (section) => (
            <ActionButton key={section} text={section} />
          )
        )}
      </div>

      {/* --- Footer Bottom Section --- */}
      <div className="sm:items-center items-start w-[90%] border-t sm:p-5 text-[14px] sm:justify-between text-[#5B5B5B] sm:gap-3 sm:mt-10 flex flex-col xl:flex-row">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-2 sm:mt-0 sm:gap-2">
          {/* Language and Currency */}
          <div className="flex gap-2 items-center">
            <div className="flex p-2 bg-stone-100 w-[120px] items-center justify-between hover:shadow-md transition-shadow duration-300">
              <p>English</p>
              <BiWorld />
            </div>
            <div className="flex p-2 bg-stone-100 w-[120px] items-center justify-between hover:shadow-md transition-shadow duration-300">
              <p>Us Dollars</p>
              <RiArrowDropDownLine />
            </div>
          </div>

          {/* Payment Icons */}
          <div className="flex items-start sm:items-center gap-2">
            {[visa, paypalloogo, amex].map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt="payment logo"
                width={50}
                height={50}
                priority
              />
            ))}
          </div>
        </div>

        {/* Terms and Privacy */}
        <div className="flex text-[10px] sm:text:[16px] items-center gap-3">
          <p>Terms and conditions</p>
          <p className="border-x px-1 sm:px-3">Privacy</p>
          <p>© 2022 sparker</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
