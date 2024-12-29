import React from "react";
import AccordianComponent from "./accordianComponent/accordianComponent";
import PageWrapper from "@/appComponents/pagewrapper/pagewrapper";
import Hero9Content from "./hero9Content/hero9Content";

export default function Hero9Component() {
  return (
    <React.Fragment>
      <section className="bg-[#06122A] pb-28 my-4  pattern-hero-9">
        <PageWrapper>
          <Hero9Content />
          <AccordianComponent />
        </PageWrapper>
      </section>
    </React.Fragment>
  );
}
