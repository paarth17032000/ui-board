import React from "react";
import { images } from "../assests";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 h-[109px]  border-b-[2px] border-[#D9D9D91A] shadow-sm">
      <div className="bg-[#E7E7E7] flex items-center h-[50px] ml-4 text-[rgb(220,74,45)] text-[20px] py-[17px] px-[22px] font-['Satoshi Variable']">
        Logo
      </div>

      <div className="flex gap-10 border border-[#E7E7E7] rounded-full py-[8px] px-[15px] ">
        <div className="flex items-center gap-2 bg-[#DC4A2D] py-[8px] px-[15px] text-white rounded-full border-2 border-[#FCB4A5]  cursor-pointer">
          <div>
            <img src={images.briefcase_icon} alt="job_preview" />
          </div>
          Jobs
        </div>
        <div className="flex items-center gap-2 text-[#B0B0B0] cursor-pointer hover:bg-[#DC4A2D] py-[8px] hover:rounded-full px-[15px] hover:text-white">
          <div className="flex ">
            <img src={images.message_icon} alt="message_box" />
            <sup className="text-[12px] mt-[10px] ml-[-7px] text-[#DC4A2D]">
              &#9679;
            </sup>
          </div>
          Messages
        </div>
        <div className="flex items-center gap-2 text-[#B0B0B0] cursor-pointer hover:bg-[#DC4A2D] py-[8px] hover:rounded-full px-[15px] hover:text-white">
          <div>
            <img src={images.coins_hand_icon} alt="payment_icon" />
          </div>
          Payments
        </div>
      </div>

      <div className="flex items-center justify-evenly w-[134px]">
        <div className="flex">
          <img src={images.bell_icon} alt="bell_icon" />
          <sup className="text-[12px] mt-[8px] ml-[-10px] text-[#DC4A2D]">
            &#9679;
          </sup>
        </div>
        <div>
          <img src={images.userPorfile} alt="profile_icon" />
        </div>
        <div>
          <img src={images.downarrow} alt="down_arrow" />
        </div>
      </div>

    </header>
  );
};

export default Header;
