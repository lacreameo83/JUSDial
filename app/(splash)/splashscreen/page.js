"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image from "../../../public/logo/Logo-WordMark-Green.svg";

const Page = () => {
  const texts = [
    {
      title: "Find Your Dream Home",
      subtitle:
        "Explore top properties that match your needs, from cozy homes to perfect investment opportunities.",
    },
    {
      title: "Seamless Property Search",
      subtitle:
        "Discover your dream property with easy navigation, advanced filters, and accurate location tracking at your fingertips.",
    },
    {
      title: "Trusted and Secure",
      subtitle:
        "Access reliable information, secure transactions, and effortless processes for the best property-buying experience.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentIndex === texts.length - 1) {
      router.push("/welcomepage"); // Navigate to the home page
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="h-[100vh] py-7 justify-between items-center w-full flex flex-col">
      <div className="flex items-center justify-center">
        <Image width={300} height={400} src={image.src} alt="Logo" />
      </div>
      <div>
        <div className="flex space-x-2 mb-4 justify-center">
          {/* Loading indicators */}
          {texts.map((_, index) => (
            <div
              key={index}
              className={`h-[10px] w-[30px] rounded-md ${
                currentIndex === index ? "bg-[#364436]" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
        <div className="w-[325px] flex flex-col justify-between h-[104px]">
          <p className="PlusJakarta font-[700] text-[24px] text-center leading-[32px]">
            {texts[currentIndex].title}
          </p>
          <p className="PlusJakarta font-[400] text-[14px] text-center leading-[20px]">
            {texts[currentIndex].subtitle}
          </p>
        </div>
        <div className="flex justify-between mt-4">
          {/* Back Button */}
          {currentIndex > 0 && (
            <button
              onClick={handleBack}
              className="px-4 py-2  rounded text-sm font-medium text-[#364436] "
            >
              Back
            </button>
          )}

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="px-4 py-2   flex items-end justify-end text-sm font-medium text-[#364436] "
          >
            {currentIndex === texts.length - 1 ? "skip" : "Skip"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
