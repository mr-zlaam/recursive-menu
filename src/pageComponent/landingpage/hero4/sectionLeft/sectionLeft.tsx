import { Abutton } from "@/components/ui/a-button";
import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

function SectionLeft() {
  return (
    <section className="max-w-[565px] flex-1">
      <div className="flex flex-col justify-center">
        <div>
          <h1 className="relative">
            <span className="absolute left-[-4rem] border-2 border-l-0 border-r-0 border-b-0 border-primary w-[40px] mx-4 mt-3" />
            <span className="text-primary font-bold text-xl">What We Offer ?</span>
          </h1>
          <h2 className="text-4xl font-bold">
            We Strive To Offer <br />
            Intelligent
            <span className="text-primary"> Business Solutions</span>
          </h2>
          <p className="text-muted-foreground">
            Appropriately enhance principle-centered innovation rather than high standards in platforms. Credibly orchestrate functional.
          </p>
          {ourOfferings.map((item, index) => {
            return (
              <div
                key={index}
                className="flex   items-center my-5 space-x-5">
                <FiArrowRightCircle
                  size={20}
                  className="text-gray-500"
                />
                <p className="text-muted-foreground">{item}</p>
              </div>
            );
          })}
          <div className="w-fit  my-12">
            <Abutton
              className="rounded h-12 font-semibold  border-2"
              variant={"animate"}>
              &#9881; More About
            </Abutton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionLeft;

const ourOfferings = [
  "Technology Consultancy",
  "E-Commerce Development",
  "Cloud Software Solutions",
  "Brand Development",
  "Enterprise App Development",
  "Mobile Application Development"
];
