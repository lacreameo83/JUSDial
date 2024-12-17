"use client";

import Sidedetais from "@/components/slidedetailListin/Sidedetais";
import React, { useState } from "react";
import data from "@/app/lib/data";
import IndivialDescriptionPages from "@/components/IndivialDescriptionPages/IndivialDescriptionPages";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ProductDisplay from "@/components/products/ProductDisplay";
import Navbar from "@/app/(home)/_components/nav/Navbar";

function Products({ id }) {
  // State for managing current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const res = data.find((el) => el.id == id);
  if (!res) {
    return <div>Product not found.</div>;
  }

  // Function to go to the next image
  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % res.groupimages.length
    );
  };

  // Function to go to the previous image
  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + res.groupimages.length) % res.groupimages.length
    );
  };

  return (
    <div className="h-[470vh] sm:h-[370vh] bg-[#FAFAFA]">
      <div className="hidden sm:block sm:mb-6">
        <Navbar />
      </div>

      <Sidedetais
        imageOutput={res.groupimages[currentImageIndex].src}
        Icon={
          <div className="h-[30px] flex items-center justify-center w-[30px] bg-[#364436] text-white rounded-full ">
            <ArrowBackIcon
              onClick={handlePrevImage}
              style={{ cursor: "pointer" }}
            />
          </div>
        }
        text={
          <div className="flex justify-center gap-2 mt-4">
            {res.groupimages.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)} // Optional: Allow user to click a dot to navigate
                className={`w-3 h-3 rounded-full ${
                  currentImageIndex === index ? "bg-[#364436]" : "bg-gray-300"
                }`}
                style={{ cursor: "pointer" }}
              ></div>
            ))}
          </div>
        }
        Icon2={
          <div className="h-[30px] flex items-center justify-center w-[30px] bg-[#364436] text-white rounded-full ">
            <ArrowForwardIcon
              onClick={handleNextImage}
              style={{ cursor: "pointer" }}
            />
          </div>
        }
      />
      {/* Navigation Dots */}
      <div>
        {" "}
        <IndivialDescriptionPages modern1={res.values} modern2={res.title} />
      </div>
      <div>
        <p
          className=" text-[18px] h-[28px] m-5 sm:h-[32px] leading-[24px]
PlusJakarta sm:text-[24px] sm:leading-[32px] font-[600]  "
        >
          Recent Listing
        </p>
        <div className=" sm:h-[120vh] flex gap-3  max-w-full overflow-x-auto whitespace-nowrap ">
          {/* <div className="h-auto md:h-[3900px] xl:h-[2515.6px] z-50 gap-[40px] sm:gap-[12px] sm:h-[1454px] w-[327px] sm:w-[800px] xl:w-[68rem] 2xl:w-[1184px] mt-[20px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"> */}
          {data.map((el, i) => (
            <div key={i}>
              <ProductDisplay
                id={el.id}
                image={el.image.src}
                // values={<div className="flex flex-col w-[300px] bg-slate-500 ">{el.values}</div>}
                model={el.model}
                title={el.title}
              />
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Products;
