import PageWrapper from "@/appComponents/pagewrapper/pagewrapper";
import React from "react";

function Hero3Content() {
  return (
    <React.Fragment>
      <PageWrapper>
        <span className="flex ">
          <span className="border-2 border-l-0 border-r-0 border-b-0 border-primary w-[40px] mx-4 mt-3" />
          <span className="text-2xl font-semibold text-primary">
            What We Do? <br />
            <span className="font-bold text-3xl text-background">
              We Run All Kinds Of Services
              <br />
              From
              <span className="text-primary">Technologies</span>
            </span>
          </span>
        </span>
      </PageWrapper>
    </React.Fragment>
  );
}

export default Hero3Content;
