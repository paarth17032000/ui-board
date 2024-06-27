import React from 'react'
import { images } from "../assests";

export default function RightSection() {
  return (
    <div className="w-[356px] border-l-2 ">
          <div className="flex gap-[16px] mx-[25px] mt-[26px]">
            <div className="flex cursor-pointer gap-[10px] w-[176px] h-[46px] text-[#DC4A2D] items-center justify-center border-[1px] border-[#DC4A2D] bg-[#FEF4F2] rounded-lg">
              <div>
                <img src={images.delete_icon} alt="delete_icon" />
              </div>
              Delete Job
            </div>
            <div className="flex cursor-pointer gap-[10px] w-[176px] h-[46px] text-white items-center justify-center border-2  bg-[#DC4A2D] rounded-lg">
              <div>
                <img src={images.pen_icon} alt="pen_icon" />
              </div>
              Edit Job
            </div>
          </div>
          <div className="mx-[25px] mt-[34px] px-[12px] ">
            <div className="flex justify-between my-[22px]">
              <div className="flex items-center gap-[8px]">
                <div>
                  <img src={images.user_icon} alt="user_icon" />
                </div>
                Applicants
              </div>
              <div className="font-bold">400</div>
            </div>
            <hr className="border-b-[1px] border-[#E7E7E7]" />
            <div className="flex justify-between my-[22px] mb-[24px]">
              <div className="flex items-center gap-[8px]">
                <div>
                  <img src={images.user_check_icon} alt="icon" />
                </div>
                Matches
              </div>
              <div className="font-bold">100</div>
            </div>
            <hr className="border-b-[1px] border-[#E7E7E7]" />
            <div className="flex justify-between my-[22px] mb-[24px]">
              <div className="flex items-center gap-[8px]">
                <div>
                  <img src={images.message_dark_icon} alt="message_icon" />
                </div>
                Messages
              </div>
              <div className="font-bold">147</div>
            </div>
            <hr className="border-b-[1px] border-[#E7E7E7]" />
            <div className="flex justify-between my-[22px]">
              <div className="flex items-center gap-[8px]">
                <div>
                  <img src={images.eye_icon} alt="eye_icon" />
                </div>
                Views
              </div>
              <div className="font-bold">800</div>
            </div>
          </div>
        </div>
  )
}
