"use client";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal";

import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function RequestQuoteButton() {
  const handleQuoteSubmit = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };
  return (
    <div className="flex items-center justify-center ">
      <Modal>
        <ModalTrigger className="bg-background h-[60px] border font-semibold text-primary rounded-full shadow-md  duration-200 transition-background hover:border-dashed hover:border-blue-200 hover:bg-primary hover:text-background">
          Request Quote
        </ModalTrigger>
        <ModalBody>
          <ModalContent className="flex flex-col md:flex-row w-full  p-4 md:p-8  rounded-lg  overflow-y-auto">
            <div className="w-full md:w-1/2  lg:flex items-center justify-center  hidden relative top-5">
              <Image
                src="https://i.postimg.cc/J0LhySrM/request-quote-modal.jpg"
                alt="Placeholder Image"
                width={600}
                loading="lazy"
                height={750}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-8">
              <h4 className="text-lg md:text-2xl text-neutral-600 font-bold mb-4">Request a Quote</h4>
              <form className="space-y-2  w-full">
                <div className="grid w-full  items-center gap-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full"
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Email your email"
                    className="w-full"
                  />
                </div>

                <div className="grid w-full  items-center gap-1.5">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    type="number"
                    id="phone"
                    placeholder="Enter your phone"
                    className="w-full"
                  />
                </div>

                <div className="grid w-full  items-center gap-1.5">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    type="text"
                    id="company"
                    placeholder="Enter your company name (Optional)"
                    className="w-full"
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input
                    type="datetime-local"
                    id="deadline"
                    placeholder="Enter deadline (Optional)"
                    className="w-full"
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    type="text"
                    id="address"
                    placeholder="Enter your address"
                    className="w-full"
                  />

                  <div className="relative">
                    <Label htmlFor="Details">Services</Label>
                    <select className="w-full bg-transparent text-sm border rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-primary shadow-sm focus:shadow-md appearance-none cursor-pointer">
                      <option value="web-development">Web Development</option>
                      <option value="app-development">App Development</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="graphic-design">Graphic Design</option>
                    </select>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.2"
                      stroke="currentColor"
                      className="h-5 w-5 ml-1 absolute top-8 right-2.5 text-slate-700">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>
                  </div>
                </div>
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="details">Details</Label>
                  <Textarea
                    placeholder="Enter details here."
                    className=" resize-none"
                    id="details"
                  />
                </div>
              </form>
            </div>
          </ModalContent>
          <ModalFooter className="flex justify-end gap-4 mt-4">
            <Button
              variant={"rounded"}
              onClick={handleQuoteSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
