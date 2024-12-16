import React from 'react'
import Sidedetais from '../slidedetailListin/Sidedetais';
import Sidecomponent from '../sidecomponent/Sidecomponent';
import IconButton from '../iconbutton/IconButton';
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

function IndivialDescriptionPages({modern1,modern2}) {
  return (
    <div className="w-full flex mt-10 items-center justify-center ">
      <div className="w-[1184px] flex h-[1138.14px]  ">
        {/* description */}
        <div className="w-[659px] ">
          <div className="h-[672px]  w-[659px]  flex flex-col justify-between ">
            <p className="font-[600] flex flex-col justify-between text-[24px] leading-[32px] PlusJakarta ">
              Description
            </p>
            <div className="w-[659px] h-[616px]  ">
              <p className="PlusJakarta font-[400] text-[16px] leading-[24px] text-justify text-[#000000]  ">
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
          <div className="h-[431.14px]  w-[659px]  ">
            <p className="font-[600] flex flex-col justify-between text-[24px] leading-[32px] PlusJakarta ">
              Location
            </p>
            <div className="w-[659px] h-[375.14px] rounded-[16.7px] border-[3px]  ">
              map
            </div>
          </div>
        </div>
        {/* modern */}
        <div className="flex flex-col gap-[35px] w-[493px] h-[797px] py-[35px] px-[25px] ">
          <div className="h-[240px] bg-[#FAFAFA] w-[443px] flex flex-col justify-between  ">
            <p className="PlusJakarta h-[100px] truncate text-black leading-[38px] text-[30px] font-[500] ">
              {modern1}
            </p>
            <p className="PlusJakarta font-[700] text-[36px] leading-[44px] text-[#364436] ">
              {modern2}
            </p>
            <div className="flex  gap-[20px] ">
              <div className="bg-[#DADADA] flex items-center justify-center px-[15px] py-[5px] rounded-[8px] w-[95px] h-[34px] ">
                <p className="text-[#364436] font-[700] text-[14px] leading-[20px] ">
                  For Sale
                </p>
              </div>
              <div className="bg-[#FFDAC8] flex items-center justify-center px-[15px] py-[5px] rounded-[8px] w-[107px] h-[34px] ">
                <p className="text-[#E85913] font-[700] text-[14px] leading-[20px] ">
                  Apartment
                </p>
              </div>
              <div className="bg-[#D5E5FF] px-[15px] py-[5px] rounded-[8px] w-[96px] flex items-center justify-center h-[34px] ">
                <p className="text-[#0076E4] font-[700] text-[14px] leading-[20px] ">
                  For Sale
                </p>
              </div>
            </div>
          </div>
          {/* 2nd part */}
          <div className="bg-[#EEEEEE] PlusJakarta px-[14.05px] flex flex-col flex-start items-center justify-around py-[25px] rounded-[9.37px] h-[226px] w-[443px] ">
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
          <div className="w-[443px] flex items-center justify-center h-[191px] py-[25px] px-[14.05px] rounded-[9.37px] bg-[#EEEEEE] ">
            <div className="w-[415px] h-[141px] flex gap-[18px] items-center ">
              <div className="h-[141px] w-[141px] bg-black rounded-full "></div>
              <div className="w-[256px] h-[141px] flex flex-col justify-between ">
                <div className="w-[188px] h-[91px] ">
                  <div className="font-[600] PlusJakarta text-[20px] text-black leading-[32px] ">
                    Patricia Leonard{" "}
                  </div>
                  <div className="text-[#616161] font-[500] text-[16px] leading-[24px] PlusJakarta">
                    Property Consultant{" "}
                  </div>
                  <div className="text-[#616161] font-[500] text-[16px] leading-[24px] PlusJakarta">
                    <IconButton
                      icone={<IoMdCall />}
                      text1="+62 8123 667 7890"
                    />
                  </div>
                </div>
                <div className="w-[154px]   h-[30px] flex items-center justify-center ">
                  <div>
                    <IconButton
                      icone={
                        <div className="h-[30px] w-[30px] text-white bg-[#364436] flex rounded-full ml-12 items-center justify-center">
                          <MdOutlineMailOutline />
                        </div>
                      }
                      text1="Email"
                    />{" "}
                  </div>
                  <div>
                    {" "}
                    <IconButton
                      icone={
                        <div className="h-[30px] w-[30px] text-white bg-[#364436] flex rounded-full items-center justify-center">
                          {" "}
                          <FaWhatsapp />{" "}
                        </div>
                      }
                      text1="Whatsapp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndivialDescriptionPages
