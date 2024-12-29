import React from "react";
import PageWrapper from "@/appComponents/pagewrapper/pagewrapper";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import ConsultationButtonComponent from "./ladingPageButtons/consultationButton";
import HireUsButtoncComponents from "./ladingPageButtons/hireUsButton";

const words = [
  {
    text: "Online",
    className: "text-3xl sm:text-7xl font-[900] text-background"
  },
  {
    text: "Solution!",
    className: "text-3xl sm:text-7xl font-[900] text-primary"
  }
];
function Hero1Component() {
  return (
    <React.Fragment>
      <div className="landing-bg  ">
        <PageWrapper className="flex ">
          <div className="h-[60px] animate-heart w-[60px] relative top-20 left-[-7rem] rounded-full bg-primary" />
          <div className="flex flex-col">
            <h1 className="relative top-10 text-3xl  sm:text-7xl font-[900]">
              <span className="text-background">One</span> <span className="text-background">Step</span>
              <TypewriterEffectSmooth
                words={words}
                cursorClassName="hidden"
                className="relative top-[-20px]"
              />
            </h1>
            <div className="mt-5 flex space-x-10">
              <div className="h-20 bg-primary w-[5px]  " />
              <h2 className="max-w-[350px] font-[500] text-lg text-background">
                Consult wisely: Plans flourish with seamless designs, user-friendly systems, and unified resources.
              </h2>
            </div>
            <div className="flex flex-col space-y-4 mt-4 ">
              <ConsultationButtonComponent />
              <HireUsButtoncComponents />
            </div>
          </div>
        </PageWrapper>
      </div>
    </React.Fragment>
  );
}

export default Hero1Component;
