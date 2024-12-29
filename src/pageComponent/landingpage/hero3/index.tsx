import {} from "react";
import Hero3Content from "./hero3Content/hero3Content";
import Hero3Cards from "./hero3Cards/hero3Cards";
import Image from "next/image";

function Hero3Component() {
  return (
    <>
      <section className="hero3-bg my-5 relative">
        <div className="w-full h-full bg-[#121323]/90 pt-[5rem] pb-[15rem]">
          <Hero3Content />
          <Hero3Cards />
        </div>
        <div className="absolute bottom-[-4rem] left-[2rem] animate-y-tofro">
          <Image
            src={"https://i.postimg.cc/RCp3Ry1L/image.png"}
            height={120}
            width={120}
            alt="Arrow"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}

export default Hero3Component;
