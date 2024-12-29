import React from "react";

import PageWrapper from "@/appComponents/pagewrapper/pagewrapper";
export default function Hero5Content() {
  return (
    <React.Fragment>
      <PageWrapper className="pt-20 ">
        <span className="flex ">
          <span className="border-2 border-l-0 border-r-0 border-b-0 border-primary w-[40px] mx-4 mt-3" />{" "}
          <span className="text-lg font-semibold text-primary">
            Testimonials <br />
            <span className="font-bold text-3xl text-background">
              Prime Logic Solutions Trusted Customers
              <br />
              Awesome <span className="text-primary">Reviews</span>
            </span>
          </span>
        </span>
      </PageWrapper>
    </React.Fragment>
  );
}
