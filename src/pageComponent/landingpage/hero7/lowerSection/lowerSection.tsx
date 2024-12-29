import React from "react";
import LowerSectionContent from "./lowerSectionContent/lowerSectionContent";
import Image from "next/image";

export default function LowerSection() {
  return (
    <React.Fragment>
      <section className="relative">
        <Image
          src={"https://i.postimg.cc/RCp3Ry1L/image.png"}
          width={140}
          height={140}
          alt="Arrow"
          className="absolute top-0 left-4 animate-y-tofro hidden lg:block"
        />
        <LowerSectionContent />
      </section>
    </React.Fragment>
  );
}
