import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import type { IBLOG } from "@/types";

export default function CardComponent({ item }: { item: IBLOG }) {
  return (
    <CardContainer className=" lg:max-w-sm mx-2 max-w-full relative">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[470px] rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          {item.title}
        </CardItem>

        <CardItem
          translateZ="100"
          className="w-full mt-4">
          <Image
            src={item.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {item.description}
        </CardItem>
        <div className="flex justify-end items-center mt-4  absolute bottom-2 right-2">
          <CardItem
            translateZ={20}
            as={Link}
            href={item.blogSlug}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex items-center justify-center ">
            Read →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
