"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import type { IMENUITEM } from "./secondaryMenus";
import SideBarCircleButton from "./navbar-components/sideBarButton";
import RequestQuoteButton from "./navbar-components/requestQuoteButton";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import MobileMenuItem from "./navbar-components/mobileVersion";
import DeskTopMenuItem from "./navbar-components/desktopVersion";
import AnimatedImagesComponent from "../../pageComponent/landingpage/hero1/animatedImage";

export interface MultiLevelMenuProps {
  items: IMENUITEM[];
}

const SecondaryNavbar: React.FC<MultiLevelMenuProps> = ({ items }) => {
  const [activeMenuPath, setActiveMenuPath] = useState<number[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = (id: number, depth: number) => {
    setActiveMenuPath((prev) => {
      const newPath = [...prev.slice(0, depth), id];
      return prev[depth] === id ? prev.slice(0, depth) : newPath;
    });
  };

  const handleMouseLeave = () => {
    setActiveMenuPath([]);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileMenuOpen]);
  return (
    <section className="relative">
      <header className="absolute w-full z-[900]">
        <div className="bg-primary lg:max-w-screen-xl mx-auto flex items-center justify-between w-full  h-[100px] shadow-md px-16 rounded-sm">
          <Link
            href={"/"}
            className="">
            <Image
              src={"https://i.postimg.cc/SN1S6nVn/logo.png"}
              alt="logo"
              width={100}
              height={100}
              loading="lazy"
            />
          </Link>
          <ul
            className="hidden lg:flex  rounded-md space-x-3 relative"
            onMouseLeave={handleMouseLeave}>
            {items.map((item) => (
              <DeskTopMenuItem
                key={item.id}
                item={item}
                depth={0}
                activeMenuPath={activeMenuPath}
                onToggle={handleMenuToggle}
              />
            ))}
          </ul>
          {!mobileMenuOpen && (
            <span className="lg:hidden text-4xl">
              <FaBars
                size={30}
                onClick={() => setMobileMenuOpen(true)}
                className="text-background"
              />
            </span>
          )}

          <div
            className={cn(
              "absolute top-0 left-0 w-full h-screen bg-white transform transition-all duration-300 ease-in-out lg:hidden",
              mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
            )}>
            <ul className="flex lg:hidden flex-col space-y-3 overflow-y-auto h-full">
              <button
                className="p-5 w-full flex justify-end"
                onClick={() => setMobileMenuOpen(false)}>
                <IoClose size={30} />
              </button>
              {items.map((item) => (
                <MobileMenuItem
                  key={item.id}
                  item={item}
                  depth={0}
                  mobileMenuOpen={mobileMenuOpen}
                  setMobileMenuOpen={setMobileMenuOpen}
                />
              ))}
            </ul>
          </div>
          <div className=" space-x-5 items-center hidden lg:flex">
            <SideBarCircleButton />

            <RequestQuoteButton />
          </div>
        </div>
        <AnimatedImagesComponent />
      </header>
    </section>
  );
};
export default SecondaryNavbar;
