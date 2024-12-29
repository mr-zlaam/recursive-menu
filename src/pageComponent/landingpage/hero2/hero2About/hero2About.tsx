import { FiArrowRightCircle } from "react-icons/fi";
import Image from "next/image";
import React from "react";
import StaticLoaders from "./circles";
import { Abutton } from "@/components/ui/a-button";

function Hero2About() {
  return (
    <>
      <div className="relative flex top-[100px]  lg:justify-evenly flex-col lg:flex-row items-center">
        <div className="h-[100px] w-[100px] bg-primary/90 rounded-md absolute top-0 animate-y-tofro left-[45%]" />
        <div className="h-[2px] w-[50px] bg-primary/90 rounded-md absolute top-0  left-[50%]" />
        <div className="image">
          <Image
            src={"https://i.postimg.cc/1trS2rS0/image.png"}
            loading="lazy"
            alt="Hero2About"
            width={500}
            height={500}
          />
        </div>
        <div className="data flex flex-col items-center max-w-[500px]">
          <h1 className="text-primary font-bold text-lg ">About Prime Logic Solutions</h1>
          <h1 className="sm:text-4xl text-2xl   font-bold text-center">
            We are Award Winning AI powered Software Company Over 2000+
            <span className="text-primary">Clients</span>
          </h1>
          <p className="text-muted-foreground font-[500] mt-5 text-center">
            We excels at delivering and managing AI powered client curated and cloud solutions that cater our client&apos;s all business needs.
          </p>
          <p className="py-3 space-y-4 flex flex-col items-start">
            <span className="flex space-x-5 items-center">
              <FiArrowRightCircle
                size={30}
                className="text-primary"
              />
              <span>Communicate orthogonal process</span>
            </span>

            <span className="flex space-x-5 items-center">
              <FiArrowRightCircle
                size={30}
                className="text-primary"
              />
              <span>Professionally grow cutting-edge paradigms</span>
            </span>
          </p>
          <StaticLoaders />
          <div className="w-fit mx-auto mb-12">
            <Abutton
              className="rounded h-12 font-semibold  border-2"
              variant={"animate"}>
              &#9881; More About
            </Abutton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero2About;
