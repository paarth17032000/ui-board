import React from "react";
import { images } from "../assests";

export default function LeftSection() {
  return (
    <div className="grow">
      {/* job details */}
      <div className="pl-[85px] mt-[26px] pb-[28px] border-b-2 border-[#E7E7E7] ">
        <div className="flex gap-[12px] mb-[14px] items-center ">
          <div className="text-[35px] leading-[47.25px] font-medium">
            Senior Product Designer
          </div>
          <div className="text-[8px] text-[#D1D1D1]">&#9679;</div>
          <div className="text-[14px] text-[#888888] ">posted 2 days ago</div>
          <div className="flex items-center justify-evenly h-[22px] w-[57px] border-[1px] border-[#ABEFC6] bg-[#ECFDF3] rounded-full">
            <div className="text-[12px]  text-[#17B26A]">&#9679;</div>{" "}
            <div className="text-[#067647] text-[12px]  font-medium font-['inter']">
              Open
            </div>
          </div>
        </div>
        <div className="flex text-[#5D5D5D] gap-[16px]">
          <div className="flex gap-2 leading-[27px]">
            <div>
              <img src={images.location_icon} alt="location_icon" />
            </div>
            Delaware, USA
          </div>
          <div className=" text-[8px] text-[#D1D1D1] ">&#9679;</div>
          <div className="flex gap-3">
            <div>
              <img src={images.coin_icon} alt="coin_icon" />
            </div>
            $300k-$400k
          </div>
        </div>
      </div>

      {/* skill required */}
      <div className="pl-[85px] my-[28px] mb-[22px] flex gap-[44px] ">
        <div className="w-[170px]">
          <div className="text-[#6E6D6D] text-[14px] font-medium mb-[4px]">
            Skills Required
          </div>
          <div className="flex w-fit border-[1px] px-[6px] py-[2px] mb-[8px] border-[#D0D5DD] font-medium text-[12px] text-[#344054] rounded-md">
            <div>
              <img src={images.figma_icon} alt="figma_icon" />
            </div>
            Figma
          </div>
          <div className="flex w-fit border-[1px] px-[6px] py-[2px] mb-[8px] border-[#D0D5DD] font-medium text-[12px] text-[#344054] rounded-md">
            <div>
              <img src={images.ai_icon} alt="ai_icon" />
            </div>
            Adobe Illustrator
          </div>
          <div className="flex w-fit border-[1px] px-[6px] py-[2px]  border-[#D0D5DD] font-medium text-[12px] text-[#344054] rounded-md">
            <div>
              <img src={images.xd_icon} alt="xd_icon" />
            </div>
            Adobe XD
          </div>
        </div>
        <div className="w-[170px]">
          <div className="text-[#6E6D6D] text-[14px] font-medium mb-[4px]">
            Preferred Language
          </div>
          <div className="text-[#3D3D3D] font-semibold">English</div>
        </div>
        <div className="w-[170px]">
          <div className="text-[#6E6D6D] text-[14px] font-medium mb-[4px]">
            Type
          </div>
          <div className="text-[#3D3D3D] font-semibold">Full time</div>
        </div>
        <div className="">
          <div className="text-[#6E6D6D] text-[14px] font-medium mb-[4px]">
            Years of Experience
          </div>
          <div className="text-[#3D3D3D] font-semibold">
            3+ Years of Experience
          </div>
        </div>
      </div>
      <hr className="border-b-[1px] border-[#E7E7E7]" />

      {/* job requirements */}
      <div className="pl-[85px] my-[22px] text-[#3D3D3D] font-medium">
        <div className="text-[14px] text-[#6E6D6D] ">About the job</div>
        <ol className="list-decimal pl-[15px] mt-[6px]">
          <li> Handle the UI/UX research design</li>
          <li>
            Work on researching on latest web applications designs & trends
          </li>
          <li>Work on conceptualizing and visualizing</li>
          <li>
            Work on creating graphics content and other graphic related works
          </li>
        </ol>
        <div>Benefits:</div>
        <ul className="list-disc pl-[15px]">
          <li>Health insurance</li>
          <li>Provident Fund</li>
        </ul>
        <div>Schedule:</div>
        <ul className="list-disc pl-[15px]">
          <li>Day shift</li>
        </ul>
        <div>Supplemental pay types:</div>
        <ul className="list-disc pl-[15px]">
          <li>Performance bonus</li>
          <li>Yearly bonus</li>
        </ul>

        <div>Work Location: In person</div>
      </div>
      <hr className="border-b-[1px] border-[#E7E7E7]" />
      {/* company info */}
      <footer className="pl-[85px]  mt-[42px] mb-[36px]">
        <div className="flex items-center gap-[12px]">
          <div>
            <img src={images.logo} alt="logo" />
          </div>
          Atlassian
        </div>
        <div className="flex gap-[48px] text-[#3D3D3D] font-medium mt-[26px]">
          <div className=" ">
            <div className="mb-[24px] w-[344px]">
              <div className="text-[14px] font-medium text-[#6E6D6D]">
                Company size
              </div>
              <div>1k - 2k Employees</div>
            </div>
            <div className="mb-[24px] w-[344px]">
              <div className="text-[14px] font-medium text-[#6E6D6D]">
                Sector
              </div>
              <div>Information Technology, Infrastructure</div>
            </div>
            <div className="w-[344px]">
              <div className="text-[14px] font-medium text-[#6E6D6D]">
                Founded In
              </div>
              <div>2019</div>
            </div>
          </div>
          <div>
            <div className="mb-[24px] w-[344px]">
              <div className="text-[14px] font-medium text-[#6E6D6D]">Type</div>
              <div>Private</div>
            </div>
            <div className="mb-[24px] w-[344px]">
              <div className="text-[14px] font-medium text-[#6E6D6D]">
                Funding
              </div>
              <div>Bootstrapped</div>
            </div>
            <div className="w-[344px]">
              <div className="text-[14px] font-medium text-[#6E6D6D]">
                Founded By
              </div>
              <div>Scott Farquhar, Mike Cannon-Brookes</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
