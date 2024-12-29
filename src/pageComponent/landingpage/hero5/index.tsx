import React from "react";
import SectionLeft from "../hero5/sectionLeft/sectionLeft";
import SectionRight from "../hero5/sectionRight/sectionRight";
import Hero5Content from "./hero5Contnet/hero5Content";
import Image from "next/image";

export default function Hero5Component() {
  return (
    <React.Fragment>
      <section className="relative bg-[#141323] overflow-x-hidden">
        <Image
          src="https://i.postimg.cc/x1PFp7h4/shape2.png"
          width={300}
          height={300}
          alt="shape2"
          className="absolute -right-[20px] top-0 opacity-30 transform scale-x-[-1] animate-pulse "
        />
        <Hero5Content />
        <div className="flex justify-around px-3  items-center flex-col lg:flex-row overflow-hidden w-full h-full">
          <SectionLeft />
          <SectionRight />
        </div>
      </section>
    </React.Fragment>
  );
}
