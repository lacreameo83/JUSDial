import React from 'react'
import data from '@/app/lib/data.js';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
function ExploreService() {
  return (
    <div>
      <div className="hidden sm:flex h-fit py-4  flex-col items-center  w-full    ">
        <div className="w-[678px] mb-[29.82px] h-[102px] flex flex-col items-center ">
          <p className="font-[400] text-[14px] leading-[20px] w-[239px] h-[28px] PlusJakarta sm:font-[500] sm:text-[18px] sm:leading-[28px] text-center text-[#364436]">
            Featured Categories
          </p>
          <p className="w-[576px] h-[60px] font-[600] text-[24px] leading-[32px] sm:w-[673px] sm:h-[60px] mt-[18px] PlusJakarta sm:font-[600] sm:text-[48px] sm:leading-[60px] text-center text-[#282828]">
            Explore Property Services
          </p>
        </div>
        {/* images */}
        <div className="flex flex-col gap-[40px] ">
          {data.slice(0, 6).map((el, index) => (
            <div>
              <div
                key={index}
                style={{ backgroundImage: `url(${el.image2.src})` }}
                className="w-[800px]   xl:w-[1184px] cardcontainerbox bg-cover  bg-no-repeat bg-center  rounded-[30px] h-[600px] relative bg-black  "
              >
                <div className="absolute text-white z-50 font-[400] leading-[72px] text-[60px] PlusJakarta p-10 bottom-0 left-0">
                  Contruction
                </div>
                <div className=" hidden  sm:block absolute shadowdisplaygren h-[250px]  z-30  rounded-b-[30px] w-[370px] 2xl:w-[750px] bottom-0 left-0 "></div>
                <div className="h-[250px] w-[435px] mainfeaturedcategory-container bg-white absolute bottom-0 right-0 ">
                  <div className="w-[30px] absolute h-[30px] bg-transparent top-[-30px] mainboxtop-featuredcategory-container right-0 "></div>
                  <div className="w-[30px] absolute h-[30px] mainboxbottom-featuredcategory-container  bg-transparent bottom-0 left-[-30px] "></div>

                  {/* side box */}
                  <div className="  flex flex-col items-start   justify-between w-[399px] h-[230px] absolute left-[10%] top-[10%] ">
                    <div>
                      <div className="w-[264px] h-[30px] PlusJakarta font-[700] text-20px] leading-[30px]  ">
                        <p>{el.purpose}</p>
                      </div>
                      <div className="w-[385px] h-[72px] PlusJakarta font-[400] leading-[24px] text-[16px] text-justify  ">
                        <p>{el.desciption}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-justify PlusJakarta gap-[8px] w-[109px] h-[48px] rounded-[8px] pt-[12px] pb-[12px]  ">
                      <p className="text-[16px]">see More</p>
                      <p>
                        <ArrowOutwardIcon />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
}

export default ExploreService
