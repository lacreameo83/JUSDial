import React from "react";
import { CiHeart } from "react-icons/ci";
import { BsArrowDownLeft } from "react-icons/bs";

import house1 from "../../../../public/houseimages/house1.png";
import house2 from "../../../../public/houseimages/house2.png";
import house3 from "../../../../public/houseimages/house3.png";
import house4 from "../../../../public/houseimages/house4.png";
import house5 from "../../../../public/houseimages/house5.png";
import house6 from "../../../../public/houseimages/house6.png";

function FeaturedListing() {
  const data = [
    {
      id: 1,
      title: "AED 2,930,000",
      model: "Modern Family Home",
      values:
        "Spacious 3-bedroom house with a pool, modern kitchen, large backyard, and located in a quiet, friendly neighborhood.",
      image: house6,
    },
    {
      id: 2,
      title: "AED 2,930,000",
      model: "Modern Family Home",
      values:
        "Spacious 3-bedroom house with a pool, modern kitchen, large backyard, and located in a quiet, friendly neighborhood.",
      image: house2,
    },
    {
      id: 3,
      title: "AED 2,930,000",
      model: "Modern Family Home",
      values:
        "Spacious 3-bedroom house with a pool, modern kitchen, large backyard, and located in a quiet, friendly neighborhood.",
      image: house3,
    },
    {
      id: 4,
      title: "AED 2,930,000",
      model: "Modern Family Home",
      values:
        "Spacious 3-bedroom house with a pool, modern kitchen, large backyard, and located in a quiet, friendly neighborhood.",
      image: house4,
    },
    {
      id: 5,
      title: "AED 2,930,000",
      model: "Modern Family Home",
      values:
        "Spacious 3-bedroom house with a pool, modern kitchen, large backyard, and located in a quiet, friendly neighborhood.",
      image: house5,
    },
    {
      id: 6,
      title: "AED 2,930,000",
      model: "Modern Family Home",
      values:
        "Spacious 3-bedroom house with a pool, modern kitchen, large backyard, and located in a quiet, friendly neighborhood.",
      image: house1,
    },
  ];

  return (
    <div className="sm:h-[1849px] w-full flex flex-col items-center justify-center">
      <div className="w-[373px] mb-[29.82px] h-[102px] flex flex-col items-center justify-center mt-[16px]">
        <p className="font-[400] text-[14px] leading-[20px] w-[239px] h-[28px] PlusJakarta sm:font-[500] sm:text-[18px] sm:leading-[28px] text-center text-[#364436]">
          Featured Listing
        </p>
        <p className="w-[196px] h-[32px] font-[700] text-[24px] leading-[32px] sm:w-[473px] sm:h-[60px] mt-[18px] PlusJakarta sm:font-[600] sm:text-[48px] sm:leading-[60px] text-center text-[#282828]">
          Top Picks for You
        </p>
      </div>
      {/* The listing */}
      <div className="h-[615.6px] gap-[40px] sm:gap-[12px] sm:h-[1454px] w-[327px] sm:w-[1184px] mt-[20px] grid grid-cols-1 sm:grid-cols-3">
        {data.map((el) => (
          <div
            key={el.id}
            className="h-[615.6px] w-[327px] gap-[24.48px] sm:h-[704px] sm:w-[374px] flex flex-col sm:gap-[28px]"
          >
            {/* Image container */}
            <div
              style={{
                backgroundImage: `url(${el.image.src})`,
              }}
              className="h-[437.17px] w-[327px] sm:h-[500px] cardcontainer rounded-[30px] sm:w-[375px] bg-center bg-cover bg-no-repeat relative bg-white"
            >
              <div className="bg-transparent absolute m-4 h-[90%] flex flex-col justify-between items-start w-[90%] left-0">
                <div className="w-[46px] h-[46px] rounded-full border-[1px] bg-white border-[#364436] flex items-center justify-center">
                  <CiHeart className="w-[29.93px] h-[27.94px] text-[#364436]" />
                </div>
                <div className="bg-[#DADADA] flex items-center justify-center text-[14px] font-[700] leading-[20px] w-[95px] h-[34px] rounded-[8px] py-[5px] px-[15px] PlusJakarta">
                  <p className="h-[20px]">For Sale</p>
                </div>
              </div>
              <div className="absolute bg-white h-[100px] w-[100px] right-0 main">
                <div className="absolute bg-transparent mainicon1 left-[-30px] mainboxtop top-0 w-[30px] h-[30px]"></div>
                <div className="absolute bg-transparent right-0 bottom-[-30px] w-[30px] mainboxbottom h-[30px]"></div>
                <div className="w-[67.76px] h-[67.76px] absolute arrowparent z-40 flex items-center justify-center left-[10%] bottom-[-10px] bg-white border-[2px] border-[#364436] sm:w-[77.5px] rounded-full sm:h-[77.5px]">
                  <BsArrowDownLeft className="w-[35.24px] h-[35.24px] sm:w-[21.83px] sm:h-[21.83px] text-[#364436]" />
                  <div className="arrowcontainer z-10 absolute h-[77.5px] w-[77.5px] rounded-full flex items-center justify-center"></div>
                </div>
              </div>
            </div>
            {/* Contents */}
            <div className="h-[153.95px] w-[327px] gap-[1.75px] sm:h-[176px] flex flex-col items-center justify-center sm:gap-2 sm:w-[374px]">
              <div className="text-[31.48px] font-[700] leading-[38.47px] h-[59.45px] w-[327px] sm:h-[68px] sm:w-[374px] PlusJakarta sm:text-[36px] sm:leading-[44px]">
                {el.title}
              </div>
              <div>
                <div className="w-[327px] h-[28px] leading-[27.98px] text-[20.8px] sm:w-[374px] sm:h-[32px] PlusJakarta font-[600] sm:text-[24px] sm:leading-[32px]">
                  {el.model}
                </div>
                <div className="w-[327px] h-[63px] text-[13.99px] leading-[20.8px] PlusJakarta sm:w-[374px] sm;h-[72px] font-[400] sm:text-[16px] sm:leading-[24px]">
                  {el.values}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedListing;
