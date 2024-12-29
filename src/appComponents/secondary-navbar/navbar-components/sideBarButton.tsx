"use client";
import { cn } from "@/lib/utils";
import { MdOutlineAccessTime } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";
import React, { useState } from "react";
import { SlCallIn } from "react-icons/sl";

function SideBarCircleButton() {
  const [sideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsSideBarOpen((prev) => !prev)}
        className="relative w-[30px] h-[30px] bg-white rounded-full hover-fill-center flex items-center justify-center overflow-hidden border border-primary"
      />

      <div
        onClick={() => setIsSideBarOpen(false)}
        className={cn(
          "fixed top-0 right-0 w-full h-screen bg-primary/80 z-[900] transition-transform duration-1000",
          sideBarOpen ? "translate-x-0" : "translate-x-full"
        )}
      />

      <div
        className={cn(
          "fixed top-0 right-0 max-w-[400px] px-5 h-screen bg-[#28282b]  z-[901] transition-transform delay-500 duration-500 flex justify-center",
          sideBarOpen ? "translate-x-0" : "translate-x-full"
        )}>
        <div className="p-4 text-white">
          <div className=" flex items-center justify-center">
            <Image
              src="https://i.postimg.cc/SN1S6nVn/logo.png"
              width={200}
              height={200}
              alt="Logo"
              loading="lazy"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p>
            The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach
            a review point you&rsquo;ll end up reviewing the content itself and not the design.
          </p>
          <h1 className="text-2xl font-bold mt-5">Contact Info</h1>
          <div className="my-3 flex w-full items-center  space-x-5">
            <SlCallIn
              className="text-primary"
              size={23}
            />
            <span className="">+234 903 123 4567</span>
          </div>
          <div className="my-3 flex w-full items-center  space-x-5">
            <HiOutlineMail
              className="text-primary"
              size={25}
            />
            <span className="">contact@primelogicsol.com</span>
          </div>
          <div className="my-3 space-x-5">
            <MdOutlineAccessTime
              className="text-primary inline"
              size={25}
            />
            <span className="leading-[1.8]">Week Days: 10.00 AM to 4.00 PM, Sunday: Closed</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBarCircleButton;
