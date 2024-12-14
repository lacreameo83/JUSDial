import React from 'react'
import data from '@/app/lib/data.js';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
function ExploreService() {
  return (
    <div>
      <div className="block pb-[220px] sm:flex h-fit sm:py-2   flex-col items-center   w-full    ">
        <div className="w-full h-[120px] sm:w-[678px] mb-[29.82px] sm:h-[102px] flex flex-col items-center ">
          <p className="font-[400] text-[14px] leading-[20px] w-[239px] h-[28px] PlusJakarta sm:font-[500] sm:text-[18px] sm:leading-[28px] text-center text-[#364436]">
            Featured Categories
          </p>
          <p className="w-[576px] h-[60px] font-[600]  text-[28px] leading-[32px] sm:w-[673px] sm:h-[60px] mt-[18px] PlusJakarta sm:font-[600] sm:text-[48px] sm:leading-[60px] text-center text-[#282828]">
            Explore Property Services
          </p>
        </div>
        {/* images */}
        <div className="flex gap-[180px] flex-col w-full items-center sm:gap-[40px] ">
          {data.slice(0, 6).map((el) => (
            <div key={el.id}>
              <div
                style={{ backgroundImage: `url(${el.image2.src})` }}
                className="w-[327px] h-[264px]  md:w-[800px] xl:w-[64rem]    2xl:w-[1184px] cardcontainerbox bg-cover  bg-no-repeat bg-center  rounded-[30px] sm:h-[600px] relative bg-black  "
              >
                <div className="absolute text-[30px] leading-[28px] text-white z-50 font-[400] sm:leading-[72px] md:text-[45px]  2xl:text-[60px] PlusJakarta p-5 sm:p-10 bottom-0 left-0">
                  {el.units}
                </div>
                {/* green shadow */}
                <div className=" hidden  sm:block absolute shadowdisplaygren h-[250px]  z-30  rounded-b-[30px] md:w-[55%] xl:w-[58%]  2xl:w-[750px] bottom-0 left-0 "></div>
                {/* white box */}
                <div className=" block w-[327px] h-[160px] bg-white  top-[280px]   2xl:h-[320px] md:h-[320px] md:w-[360px] xl:w-[430px] 2xl:w-[435px] mainfeaturedcategory-container  absolute sm:bottom-0 right-1 sm:right-0 ">
                  <div className=" hidden sm:block w-[30px] absolute h-[30px] bg-transparent top-[-30px] mainboxtop-featuredcategory-container right-0 "></div>
                  <div className=" hidden sm:block   w-[30px] absolute h-[30px] mainboxbottom-featuredcategory-container  bg-transparent bottom-0 left-[-30px] "></div>

                  {/* side box */}
                  <div className="  flex flex-col bg-white  items-start md:w-[307px] h-[142px]  justify-between xl:w-[259px]   2xl:w-[399px] sm:h-[250px] absolute left-0 top-[10%] sm:left-3    ">
                    <div>
                      <div
                        className="w-[327px] 
PlusJakarta text-[18px]    sm:w-[360px] leading-[28px] sm:h-[30px] PlusJakarta font-[700] sm:text-[20px] sm:leading-[30px]  "
                      >
                        <p>{el.purpose}</p>
                      </div>
                      <div className="w-[325px]  primarycolor h-[54px] PlusJakarta leading-[18px] md:w-[300px] xl:w-[360px] 2xl:w-[385px] sm:h-[72px] PlusJakarta font-[400] sm:leading-[24px] text-[16px] sm:text-justify  ">
                        <p>{el.desciption}</p>
                      </div>
                    </div>
                    <div className="flex mt-4 sm:mt-0 items-center primarycolor text-justify PlusJakarta gap-[8px] w-[109px] h-[48px] rounded-[8px] pt-[12px] pb-[12px]  ">
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
