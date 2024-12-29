import PageWrapper from "@/appComponents/pagewrapper/pagewrapper";
import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { FaPenNib } from "react-icons/fa";
import { AiOutlineSolution } from "react-icons/ai";

export default function LowerSectionContent() {
  return (
    <React.Fragment>
      <PageWrapper className="lg:h-[18rem] relative">
        <div className="pattern-hero-7 bg-orange-600 text-white p-6 rounded-md">
          <div className="flex justify-evenly items-center lg:h-full flex-col md:flex-row">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className=" h-[70px] w-[70px] rounded-full flex justify-center items-center bg-white">
                <HiLightBulb className="text-5xl text-primary" />
              </div>
              <h3 className="font-bold text-lg">Define Requirements</h3>
              <p className="text-sm max-w-xs">Collaboratively initiate strategic ex formulate based internal.</p>
            </div>

            <div className="hidden lg:block w-1/6 border-t-2 border-dashed border-white"></div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className=" h-[70px] w-[70px] rounded-full flex justify-center items-center bg-white">
                <FaPenNib className="text-5xl text-primary" />
              </div>
              <h3 className="font-bold text-lg">Design & Prototyping</h3>
              <p className="text-sm max-w-xs">Collaboratively initiate strategic ex formulate based internal.</p>
            </div>

            <div className="hidden lg:block w-1/6 border-t-2 border-dashed border-white"></div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className=" h-[70px] w-[70px] rounded-full flex justify-center items-center bg-white">
                <AiOutlineSolution className="text-5xl text-primary" />
              </div>
              <h3 className="font-bold text-lg">Final Solution</h3>
              <p className="text-sm max-w-xs">Collaboratively initiate strategic ex formulate based internal.</p>
            </div>
          </div>
        </div>
      </PageWrapper>
    </React.Fragment>
  );
}
