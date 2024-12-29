import PageWrapper from "@/appComponents/pagewrapper/pagewrapper";
import Image from "next/image";
import React from "react";

export default function Hero8Content() {
  return (
    <React.Fragment>
      <PageWrapper className="pb-20">
        <div className="lg:h-[10rem] " />
        <div className="">
          <div className="container mx-auto">
            <div className="row">
              <div className="col-lg-12">
                <div className="pb-60 ">
                  <p className="text-primary font-semibold flex justify-between items-center py-4">
                    <span className="block bg-primary h-[2px] w-10" />
                    <span>Team Memebers</span>
                    <span className="block bg-primary h-[2px] w-10" />
                  </p>
                  <h1 className="text-center w-full text-2xl lg:text-5xl font-bold">
                    <span>Let’s Meet with Our</span>
                    <span className="text-primary"> Experts</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
              <div className="relative rounded-3xl overflow-hidden">
                <div className="h-[400px] w-full relative">
                  <Image
                    src="https://i.postimg.cc/PqqXwWrx/image.png"
                    fill={true}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary absolute py-2 bottom-0 w-full">
                  <h4 className=" text-white text-center w-full">Ryan White</h4>
                  <p className="text-white text-center">CEO</p>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden">
                <div className="h-[400px] w-full relative">
                  <Image
                    src="https://i.postimg.cc/HxqdRF0c/image.png"
                    fill={true}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 w-full">
                  <div className="bg-primary absolute py-2 bottom-0 w-full">
                    <h4 className=" text-white text-center w-full">Silva Garden</h4>
                    <p className="text-white text-center">PMO</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden">
                <div className="h-[400px] w-full relative">
                  <Image
                    src="https://i.postimg.cc/SN7k1TnR/image.png"
                    fill={true}
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 w-full">
                  <div className="bg-primary absolute py-2 bottom-0 w-full">
                    <h4 className=" text-white text-center w-full">Stacey White</h4>
                    <p className="text-white text-center">CFO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </React.Fragment>
  );
}
