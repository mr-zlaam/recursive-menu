import PageWrapper from "@/appComponents/pagewrapper/pagewrapper";
import { TfiLayoutLineSolid } from "react-icons/tfi";

import React from "react";
import { FaPlus } from "react-icons/fa"; // Plus icon from react-icons
import { FaCode, FaServer, FaShieldAlt, FaTasks, FaUsers } from "react-icons/fa";
import { Handshake } from "lucide-react";

const services = [
  {
    title: "Cyber Security",
    description: "Dramatically cultivate quality user-centric growth strategies to enable emerging technologies.",
    icon: <FaShieldAlt className="text-2xl" />
  },
  {
    title: "IT Management",
    description: "Dramatically cultivate quality user-centric growth strategies to enable emerging technologies.",
    icon: <FaServer className="text-2xl" />
  },
  {
    title: "Web Development",
    description: "Dramatically cultivate quality user-centric growth strategies to enable emerging technologies.",
    icon: <FaCode className="text-2xl" />
  },
  {
    title: "Leadership Work",
    description: "Dramatically cultivate quality user-centric growth strategies to enable emerging technologies.",
    icon: <FaUsers className="text-2xl" />
  },
  {
    title: "Project Management",
    description: "Dramatically cultivate quality user-centric growth strategies to enable emerging technologies.",
    icon: <FaTasks className="text-2xl" />
  },
  {
    title: "Business Development",
    description: "Dramatically cultivate quality user-centric growth strategies to enable emerging technologies.",
    icon: <Handshake className="text-2xl" />
  }
];
const Hero3Cards = () => {
  return (
    <PageWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-16 pt-10 cursor-default">
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <div className="relative group rounded-xl  shadow-md p-6 text-center bg-background border border-gray-200 overflow-hidden transition-transform hover:scale-105 max-w-[450px] hover:text-background mx-auto">
              <div className="relative z-10 flex justify-center items-center mb-4 group-hover:text-background">{service.icon}</div>
              <h3 className="text-[#262626] text-xl font-bold leading-normal mb-2 transition-all duration-500 ease-out group-hover:text-white">
                {service.title}
              </h3>

              <div className="relative z-10 flex justify-center">
                <TfiLayoutLineSolid size={45} />
              </div>
              <p className="text-[#452c2c] text-base font-normal leading-[1.5em] transition-all duration-500 ease-out group-hover:text-[rgba(255,255,255,0.8)]">
                {service.description}
              </p>
              <div className="absolute flex items-center justify-center w-8 h-8 overflow-hidden top-0 right-0 bg-gradient-to-br from-primary to-[#384c6c] rounded-tr-lg rounded-bl-[32px]">
                <div className="mt-[-4px] mr-[-4px] text-white font-[courier,sans]">→</div>
              </div>
              <div className="absolute z-[-1] bottom-[-26px] right-[-26px] bg-gradient-to-br from-primary to-primary h-8 w-8 rounded-3xl scale-100 origin-center transition-transform duration-1000 ease-out group-hover:scale-[35]" />

              <div className="relative z-10 mt-4">
                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center mx-auto shadow-xl text-base bg-gray-200   isolation-auto before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-700 before:rounded-full before:bg-[#10102E] group-hover:filter group-hover:invert transition-all duration-700 before:-z-10 before:group-hover:w-full before:group-hover:h-full before:group-hover:scale-150 before:group-hover:duration-700 relative px-4 py-2 overflow-hidden  rounded-md group"
                  style={{
                    filter: "invert(0)"
                  }}>
                  Read more
                  <FaPlus />
                </button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <p className="text-center text-2xl font-bold mt-20 text-background">
        Consulting and Finance Services Built Specially and Business Find Solutions
      </p>
    </PageWrapper>
  );
};

export default Hero3Cards;
