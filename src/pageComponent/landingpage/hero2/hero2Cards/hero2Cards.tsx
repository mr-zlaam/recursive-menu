import PageWrapper from "@/appComponents/pagewrapper/pagewrapper";
import {} from "react";
import { SiBlockchaindotcom } from "react-icons/si";
import { MdDataExploration } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { HoverEffect } from "@/components/ui/card-hover-effect";
function Hero2Cards() {
  return (
    <PageWrapper className="py-10 ">
      <div className="relative">
        <HoverEffect items={cardData} />
      </div>
    </PageWrapper>
  );
}

export default Hero2Cards;

const cardData = [
  {
    title: "Block Chain",
    description: "We excels in developing blockchain technologies.",
    icon: <SiBlockchaindotcom size={50} />
  },
  {
    title: "AI Innovation",
    description: "We specializes in AI development and analysis.",
    icon: <GiArtificialIntelligence size={50} />
  },
  {
    title: "Data Experts",
    description: "We curate and analyze big data and analysis.",
    icon: <MdDataExploration size={50} />
  }
];
