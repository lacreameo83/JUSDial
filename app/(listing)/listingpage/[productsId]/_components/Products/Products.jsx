"use client";

import Sidedetais from "@/components/slidedetailListin/Sidedetais";
import React, { useState } from "react";
import data from "@/app/lib/data";
import IndivialDescriptionPages from "@/components/IndivialDescriptionPages/IndivialDescriptionPages";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Products({ id }) {
  const res = data.find((el) => el.id == id);
  if (!res) {
    return <div>Product not found.</div>;
  }

  // State for managing current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <div className="h-[270vh] pt-6 bg-[#FAFAFA]">
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
        Icon2={ <div className="h-[30px] flex items-center justify-center w-[30px] bg-[#364436] text-white rounded-full ">
          <ArrowForwardIcon
            onClick={handleNextImage}
            style={{ cursor: "pointer" }}
          />
          </div>
        }
      />
      {/* Navigation Dots */}

      <IndivialDescriptionPages modern1={res.values} modern2={res.title} />
    </div>
  );
}

export default Products;
