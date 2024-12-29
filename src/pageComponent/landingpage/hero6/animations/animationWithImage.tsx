import Image from "next/image";
import React from "react";

export default function AnimationsWithImages() {
  return (
    <React.Fragment>
      <div className="absolute top-0 right-[-4rem] animate-y-tofro hidden lg:block">
        <Image
          src={"https://i.postimg.cc/RCp3Ry1L/image.png"}
          alt="Arrow-Head"
          width={100}
          height={100}
        />
      </div>

      <div className="absolute top-8 -left-4 animate-[spin_2s_ease-in-out_infinite] hidden lg:block">
        <Image
          src={"https://i.postimg.cc/SQvVtFYQ/image.png"}
          alt="reddot"
          width={100}
          height={100}
        />
      </div>
    </React.Fragment>
  );
}
