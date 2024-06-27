import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const MainBody = () => {
  return (
    <main>

      <header className="border-b-[1px] border-[#E7E7E7] pl-[85px] py-[9px]">
        <div className="flex w-[590px] gap-[60px] text-[#888888] font-[500] text-[20px]">
          <div className="text-[#DC4A2D] text-[20px] relative">
            <div className="font-semibold">Job preview</div>{" "}
            <hr className="absolute left-[50%] translate-x-[-50%] h-[3px] w-[75px] bg-[#DC4A2D]  bottom-[-9px] " />
          </div>
          <div className="hover:text-[#DC4A2D] cursor-pointer">
            Applicants
          </div>
          <div className="hover:text-[#DC4A2D] cursor-pointer">Match</div>
          <div className="hover:text-[#DC4A2D] cursor-pointer">Messages</div>
        </div>
      </header>

      <div className="flex ">
        {/* left section */}
        <LeftSection />
        {/* right side section or job edit section */}
        <RightSection />
      </div>
    </main>
  );
};

export default MainBody;
