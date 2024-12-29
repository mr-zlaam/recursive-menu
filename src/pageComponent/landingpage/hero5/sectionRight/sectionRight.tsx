import React from "react";
import Image from "next/image";
export default function SectionLeft() {
  return (
    <React.Fragment>
      <div className="w-fit animate-[spin_28s_linear_infinite] hidden lg:block">
        <Image
          src="https://i.postimg.cc/s2HgdbHV/image.png"
          alt="githubGlobe"
          width={620}
          height={620}
        />
      </div>
    </React.Fragment>
  );
}
