import React from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
export default function AccordianComponent() {
  return (
    <Accordion
      type="single"
      className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-background sm:text-3xl">Is it accessible?</AccordionTrigger>
        <AccordionContent className=" sm:text-2xl text-background/70">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="text-background">
        <AccordionTrigger className="sm:text-3xl">Is it styled?</AccordionTrigger>
        <AccordionContent className="sm:text-2xl text-background/70">
          Yes. It comes with default styles that matches the other components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="text-background">
        <AccordionTrigger className="sm:text-3xl">Is it animated?</AccordionTrigger>
        <AccordionContent className="sm:text-2xl text-background/70">
          Yes. It&apos;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
