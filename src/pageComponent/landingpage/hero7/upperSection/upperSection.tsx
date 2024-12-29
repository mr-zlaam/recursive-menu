import React from "react";
import UpperSectionContent from "./upperSectionContent/upperSectionContent";

export default function UpperSection() {
  return (
    <React.Fragment>
      <section className="lg:max-h-[40vh] mb-20">
        <UpperSectionContent />
      </section>
    </React.Fragment>
  );
}
