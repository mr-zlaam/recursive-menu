import PageWrapper from "@/appComponents/pagewrapper/pagewrapper";
import React from "react";

export default function UpperSectionContent() {
  return (
    <React.Fragment>
      <PageWrapper className="pt-20 ">
        <span className="flex ">
          <span className="border-2 border-l-0 border-r-0 border-b-0 border-primary w-[40px] mx-4 mt-3" />{" "}
          <span className="text-lg font-semibold text-primary">
            Process
            <br />
            <span className="font-bold text-3xl text-background">
              Our Development
              <br />
              <span className="text-primary">Process</span>
              <br />
              <span className="text-base text-background/70 font-normal leading-tight">
                Monotonectally brand worldwide value before in seamless process Collaboratively initiate strategic expertise after functionalized and
                formulate based internal organic.
              </span>
            </span>
          </span>
        </span>
      </PageWrapper>
    </React.Fragment>
  );
}
