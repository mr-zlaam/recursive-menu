import React from "react";
import CardComponent from "./cardComponent/cardComponent";
import type { IBLOG } from "@/types";
import PageWrapper from "@/appComponents/pagewrapper/pagewrapper";
import AnimationsWithImages from "./animations/animationWithImage";

export default function Hero10Component() {
  return (
    <React.Fragment>
      <PageWrapper className="py-10 relative">
        <AnimationsWithImages />
        <h1 className="text-3xl font-bold text-center mb-4">
          Read our latest <span className="text-primary">Articles</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((item: IBLOG, index: number) => (
            <React.Fragment key={item.title}>
              <div>
                <CardComponent
                  key={index}
                  item={item}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </PageWrapper>
    </React.Fragment>
  );
}

export const portfolio: IBLOG[] = [
  {
    title: "What are the fastest growing technologies in 2025 ?",
    blogSlug: "what-are-the-fastest-growing-technologies-in-2025",
    description: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business",
    createdAt: "2023-01-01",
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },

  {
    title: "Overview on React 19.0",
    blogSlug: "overview-on-react-19-0",
    description: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business",
    createdAt: "2025-01-10",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },

  {
    title: "What are the best design practices for apps",
    blogSlug: "what-are-the-best-design-practices-for-apps",
    description: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business",
    createdAt: "2023-01-11",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];
