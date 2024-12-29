import PageWrapper from "@/appComponents/pagewrapper/pagewrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="h-auto w-full text-background">
        <div className="footer-bg">
          <PageWrapper className="py-20">
            <div className="grid grid-cols-3 gap-8">
              <div className="flex flex-col space-y-4">
                <h1 className="text-2xl font-semibold">About Us</h1>
                <div className="border-[1px] border-primary w-[80px]" />
                <p>
                  Business Consulting optimizes standing manufactured products and installation synergy. Professionally dominate why professional
                  business.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <h1 className="text-2xl font-semibold">Company</h1>
                <div className="border-[1px] border-primary w-[80px]" />
                <div className="flex flex-col space-y-2 text-sm">
                  <Link href="/">Home</Link>
                  <Link href="/about">About Us</Link>
                  <Link href="/contact">Contact Us</Link>
                  <Link href="/services">Services</Link>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <h1 className="text-2xl font-semibold">Services</h1>
                <div className="border-[1px] border-primary w-[80px]" />
                <div className="text-sm flex flex-col space-y-2">
                  <Link href="/">Strategy & Planning</Link>
                  <Link href="/">Consumer Market</Link>
                  <Link href="/">Data Analysis</Link>
                  <Link href="/">Corporate Finance</Link>
                  <Link href="/">Market Research</Link>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <h1 className="text-2xl font-semibold">Join Us</h1>
                <div className="border-[1px] border-primary w-[80px]" />
                <p>Join us as freelancer</p>
              </div>
            </div>
          </PageWrapper>
          <hr className="my-3 border-t border-gray-200" />
          {/* Footer Bottom */}
          <div className="flex flex-row items-center justify-around px-8 py-4">
            <Image
              src={"https://i.postimg.cc/SN1S6nVn/logo.png"}
              alt="logo"
              width={64}
              height={64}
            />
            <p>© 2023 Prime Logic Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
