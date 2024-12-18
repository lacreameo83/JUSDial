'use client'
import React from 'react'
import Sidedetais from '../slidedetailListin/Sidedetais';
import Sidecomponent from '../sidecomponent/Sidecomponent';
  import dynamic from "next/dynamic";
// import WorldMap from '';
import CustomerSupport from '../customersupport/CustomerSupport';

function IndivialDescriptionPages({modern1,modern2}) {



  // Dynamically import the WorldMap component without SSR
  // const DynamicWorldMap = dynamic(() => import("../googlemap/Map"), {
  //   ssr: false,
  // });
  return (
    <div className="w-full flex mt-10 items-center sm:justify-center ">
      <div className="w-full md:w-[800px]  xl:w-[1000px] 2xl:w-[1184px]  flex flex-col items-center sm:items-start sm:flex-row  h-[265vh] md:h-[1599px] xl:h-[1198.14px] 2xl:h-[1138.14px]  ">
        {/* description */}
        <div className="w-[327px]    flex items-center flex-col gap-5 md:gap-[450px] xl:gap-[95px] 2xl:gap-0 order-2 sm:order-1 md:w-[350px] xl:w-[500px] 2xl:w-[659px]  ">
          <div className=" h-[700px]  mt-5 sm:mt-0  sm:h-[672px] w-[327px] md:w-[350px] xl:w-[500px]  2xl:w-[659px]  flex flex-col sm:justify-between ">
            <p className="font-[600] text-[18px] leading-[28px] flex flex-col justify-between sm:text-[24px] sm:leading-[32px] PlusJakarta ">
              Description
            </p>
            <div className=" w-[327px] md:w-[350px] xl:w-[500px] 2xl:w-[659px]  h-[620px] sm:h-[616px]  ">
              <p className="PlusJakarta text-[12px] leading-[18px] font-[400] sm:text-[16px] sm:leading-[24px] text-justify text-[#000000]  ">
                {`Dacha Real Estate proudly presents this stunning modern/classic
                family home, perfectly positioned in the heart of a highly
                sought-after European cluster. This fully renovated property,
                offered vacant on transfer, combines elegant design with
                practicality, featuring clean and sophisticated fixtures,
                fittings, and furniture throughout. Upon entering, the ground
                floor offers an open-plan living and dining area, allowing for a
                seamless flow that is perfect for family gatherings or
                entertaining guests. A guest bedroom with an en-suite bathroom
                is conveniently located on the same level, ensuring comfort and
                privacy for visitors. Upstairs, you will find three additional
                en-suite bedrooms, including the master suite, which connects to
                a separate TV/family room. This space offers a cozy area for
                relaxation or family bonding. Externally, the property has been
                fully extended and upgraded, showcasing a perfect blend of
                modern and classic design. The villa’s location is unparalleled,
                situated in one of the community’s most desirable clusters,
                providing easy accessibility to the main lake and the community
                clubhouse. This serene setting offers the ideal environment for
                families seeking tranquility, comfort, and convenience. Whether
                you are looking for your dream home or a lucrative investment
                opportunity, this property offers everything to meet your needs.
                For more details or to schedule a viewing, please contact our
                head office at +971 (4) 4232006. Alternatively, visit our
                website at www.dacha.ae to explore a wide selection of
                properties available for sale and rent. Experience the perfect
                balance of luxury and functionality with this beautifully
                designed family home. Don't miss out on this exceptional
                opportunity to own a property in one of the most prestigious
                locations in the area.`}
              </p>
            </div>
          </div>
          <div className="h-[431.14px] w-[327px] md:w-[350px] xl:w-[500px]  2xl:w-[659px]  ">
            <p className="font-[600] text-[18px] leading-[28px] flex flex-col justify-between sm:text-[24px] sm:leading-[32px] PlusJakarta ">
              Location
            </p>
            <div className="w-full md:w-[350px] xl:w-[500px] 2xl:w-[659px] h-[375.14px] rounded-[16.7px] border-[3px]  ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462563.03271722235!2d54.897828656500074!3d25.075658395396644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sng!4v1734487171783!5m2!1sen!2sng"
                // width="600"
                // height="450"
                // style="border:0;"
                // allowfullscreen=""
                style={{ width: "659px", height: "375.14px" }}
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="block sm:hidden ">
            <CustomerSupport />
          </div>
        </div>
        {/* modern */}
        <div className="flex order-1 sm:order-2 flex-col gap-[35px] items-center w-[327px] sm:w-[493px] h-[500px] sm:h-[797px]   ">
          <div className=" w-[293.84px]   h-[240px] bg-[#FAFAFA]  sm:w-[443px] flex flex-col justify-between  ">
            <p className="PlusJakarta text-[19.9px] leading-[25.2px] h-[100px] sm:truncate text-black sm:leading-[38px] sm:text-[30px] font-[500] ">
              {modern1}
            </p>
            <p className="PlusJakarta font-[700] text-[36px] leading-[44px] text-[#364436] ">
              {modern2}
            </p>
            <div className="flex  gap-[20px] ">
              <div className="bg-[#DADADA] flex items-center justify-center px-[15px] py-[5px] rounded-[8px] w-[95px] h-[34px] ">
                <p className="text-[#364436] text-[9.29px] leading-[13.27px] font-[700] sm:text-[14px] sm:leading-[20px] ">
                  For Sale
                </p>
              </div>
              <div className="bg-[#FFDAC8] flex items-center justify-center px-[15px] py-[5px] rounded-[8px] w-[107px] h-[34px] ">
                <p className="text-[#E85913] text-[9.29px] leading-[13.27px] font-[700] sm:text-[14px] sm:leading-[20px] ">
                  Apartment
                </p>
              </div>
              <div className="bg-[#D5E5FF] px-[15px] py-[5px] rounded-[8px] w-[96px] flex items-center justify-center h-[34px] ">
                <p className="text-[#0076E4] text-[9.29px] leading-[13.27px] font-[700] sm:text-[14px] sm:leading-[20px] ">
                  For Sale
                </p>
              </div>
            </div>
          </div>
          {/* 2nd part */}
          <div className=" rounded-[6.21px] w-[293.84px] px-[10px]  py-[10px]  bg-[#EEEEEE] PlusJakarta sm:px-[14.05px] flex flex-col flex-start items-center justify-around sm:py-[25px] sm:rounded-[9.37px] h-[226px] sm:w-[443px] ">
            {/* <div className="90% h-[100%] "> */}
            <Sidecomponent text1="State" text2="Dubai" />
            <Sidecomponent text1="District" text2="Downtown Dubai" />
            <Sidecomponent
              text1="location"
              text2="Burj Khalifa, Sheikh Zayed Road, Dubai"
            />
            <Sidecomponent text1="Landmark" text2="Near mosque" />
            {/* </div> */}
          </div>
          {/* customer support ---------------------- */}
          <div className="hidden sm:block">
            <CustomerSupport />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndivialDescriptionPages
