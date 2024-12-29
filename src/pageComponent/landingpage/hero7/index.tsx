import React from "react";
import UpperSection from "./upperSection/upperSection";
import LowerSection from "./lowerSection/lowerSection";
import Image from "next/image";

export default function Hero7Compnent() {
  return (
    <React.Fragment>
      <section className="bg-[#06122A] lg:max-h-[60vh] overflow-visible relative">
        <div className="overflow-hidden absolute top-0 right-0">
          <Image
            src={"https://i.postimg.cc/GtGhmX78/image.png"}
            alt="borderimage"
            width={200}
            height={200}
            className=" hidden lg:block opacity-25 animate-x-tofro"
          />
        </div>
        <UpperSection />
        <LowerSection />
      </section>
    </React.Fragment>
  );
}
