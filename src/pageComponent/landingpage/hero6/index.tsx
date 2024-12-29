import React from "react";
import CardComponent from "./cardComponent/cardComponent";
import type { IPORTFOLIO } from "@/types";
import PageWrapper from "@/appComponents/pagewrapper/pagewrapper";
import AnimationsWithImages from "./animations/animationWithImage";

export default function Hero6Component() {
  return (
    <React.Fragment>
      <PageWrapper className="py-10 relative">
        <AnimationsWithImages />
        <h1 className="text-3xl font-bold text-center mb-4">
          We Serve the Best Works
          <br />
          View <span className="text-primary">Case Studies</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((item: IPORTFOLIO, index: number) => (
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

export const portfolio = [
  {
    title: "Project 1",
    description: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    singleProjectHref: "",
    singleProjectLivePreview: ""
  },
  {
    title: "Project 2",
    description: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    singleProjectHref: "",
    singleProjectLivePreview: ""
  },
  {
    title: "Project 3",
    description: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    singleProjectHref: "",
    singleProjectLivePreview: ""
  },
  {
    title: "Project 4",
    description: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    singleProjectHref: "",
    singleProjectLivePreview: ""
  },

  {
    title: "Project 5",
    description: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    singleProjectHref: "",
    singleProjectLivePreview: ""
  },
  {
    title: "Project 6",
    description: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    singleProjectHref: "",
    singleProjectLivePreview: ""
  }
] as IPORTFOLIO[];
