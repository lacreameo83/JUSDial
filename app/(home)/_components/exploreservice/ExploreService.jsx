import React from 'react'
import data from '../../../lib/data.js';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
function ExploreService() {
  return (
    <div>
      <div className="block h-[2971px]  sm:flex  sm:h-[4231px]    sm:flex-col sm:items-center   w-full  bg-white   ">
        <div className="w-full h-[120px] sm:w-[576px] pt-[46px] sm:mt-[106px]  sm:h-[102px] flex flex-col items-center ">
          <p className="font-[400] text-[14px] leading-[20px]  w-[239px]  h-[28px] PlusJakarta sm:font-[500] sm:text-[18px] sm:leading-[28px] text-center text-[#364436]">
            Featured Categories
          </p>
          <p className="w-[576px] h-[60px] font-[700]  text-[24px] leading-[32px] sm:w-[606px] sm:h-[60px] mt-[18px] PlusJakarta sm:font-[600] sm:text-[48px] sm:leading-[60px] text-center text-[#282828]">
            Explore Property Services
          </p>
        </div>
        {/* images */}
        <div className="flex gap-[180px] mt-[100px] flex-col w-full items-center sm:gap-[30px] ">
          {data.slice(0, 6).map((el) => (
            <div key={el.id}>
              <div
                style={{ backgroundImage: `url(${el.image2.src})` }}
                className="w-[327px] h-[264px] transition-all duration-500 ease-in md:w-[800px] xl:w-[1199px] bg-[length:500px] hover:bg-[length:700px]  sm:bg-[length:1750px] sm:hover:bg-[length:2750px]   2xl:w-[1184px] cardcontainerbox   bg-no-repeat bg-center  rounded-[30px] sm:h-[600px] relative bg-black  "
              >
                <div className="absolute text-[30px] leading-[28px] text-white z-50 font-[400] sm:leading-[72px] md:text-[45px]  2xl:text-[60px] PlusJakarta p-5 sm:p-10 bottom-1 left-0">
                  {el.units}
                </div>
                {/* green shadow */}
                <div className=" hidden  sm:block absolute shadowdisplaygren h-[250px]  z-20  rounded-b-[30px] md:w-[340px]  xl:w-[669px]  2xl:w-[655px] bottom-0 left-0 "></div>
                {/* white box */}
                <div className=" block w-[327px] h-[147px]  bg-white  bottom-[-150px]   sm:h-[220px]  md:w-[460px]  xl:w-[529px] mainfeaturedcategory-container  absolute sm:bottom-0 rounded-br-[30px] right-1 sm:right-0 ">
                  <div className=" hidden sm:block w-[30px] absolute h-[30px] bg-transparent top-[-30px] mainboxtop-featuredcategory-container right-0 "></div>
                  <div className=" hidden sm:block   w-[30px] absolute h-[30px] mainboxbottom-featuredcategory-container  bg-transparent bottom-0 left-[-30px] "></div>

                  {/* side box */}
                  <div className="  flex flex-col  items-start md:w-[307px] h-[142px]  justify-between     xl:w-[509px] sm:h-[180px] absolute left-0 top-[10%] sm:left-3    ">
                    <div>
                      <div
                        className="w-[299px] 
PlusJakarta text-[18px]    sm:w-[360px]  leading-[28px] sm:h-[30px] PlusJakarta font-[700] sm:text-[20px] sm:leading-[30px]  "
                      >
                        <p>{el.purpose}</p>
                      </div>
                      <div className="w-[327px] text-[12px]  primarycolor h-[54px] PlusJakarta leading-[18px]   sm:w-[435px] sm:h-[72px] PlusJakarta font-[400] sm:leading-[24px] sm:text-[16px] text-justify  ">
                        <p>{el.desciption}</p>
                      </div>
                    </div>
                    <div className="flex text-[#364436] mt-4 sm:mt-0 font-[500] items-center primarycolor text-justify PlusJakarta gap-[8px] w-[109px] h-[48px] rounded-[8px] pt-[12px] pb-[12px]  ">
                      <p className="text-[14px] sm:text-[16px] leading-[24px]">
                        see More
                      </p>
                      <p className="w-[15px] h-[15px]  sm:w-[20px] sm:h-[20px] ">
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
