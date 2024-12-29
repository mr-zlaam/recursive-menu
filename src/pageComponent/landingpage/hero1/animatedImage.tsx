"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
function AnimatedImagesComponent() {
  const path = usePathname();
  if (path !== "/") return null;
  return (
    <React.Fragment>
      <div className="w-fit mx-auto relative z-[-1] top-2 animate-y-tofro hidden lg:block">
        <Image
          src={"https://i.postimg.cc/Cx0QNYP8/white-dot.png"}
          width={130}
          height={130}
          alt="whitedotpng"
          loading="lazy"
        />
      </div>
      <div className="absolute z-[-1] top-0 left-[-20px] animate-x-tofro hidden lg:block">
        <Image
          src={"https://i.postimg.cc/x1PFp7h4/shape2.png"}
          width={400}
          height={400}
          alt="whitedotpng"
          className="opacity-40 select-none"
          loading="lazy"
        />
      </div>
    </React.Fragment>
  );
}

export default AnimatedImagesComponent;
