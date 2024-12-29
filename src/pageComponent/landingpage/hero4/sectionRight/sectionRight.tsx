import Image from "next/image";
import React from "react";

function SectionRight() {
  return (
    <div className="relative px-3">
      <Image
        src={"https://i.postimg.cc/qqbF1NVp/image.png"}
        loading="lazy"
        alt="Hero2About"
        width={600}
        height={600}
        className="relative z-[4]"
      />
      <div className="absolute bottom-20 -left-24 animate-y-tofro z-[5] hidden lg:block">
        <Image
          src={"https://i.postimg.cc/kgtHyMjd/image.png"}
          loading="lazy"
          alt="string"
          width={500}
          height={500}
        />
      </div>
      <div className="hidden lg:block">
        <Image
          src={"https://i.postimg.cc/SQvVtFYQ/image.png"}
          loading="lazy"
          alt="reddots"
          width={120}
          height={120}
          className="animate-y-tofro absolute bottom-2 -right-10 z-[1]"
        />
        <div className="h-[100px] w-[100px] bg-primary/90 rounded-md animate-x-tofro absolute -bottom-10 -right-10 z-[2]" />
      </div>
    </div>
  );
}

export default SectionRight;
