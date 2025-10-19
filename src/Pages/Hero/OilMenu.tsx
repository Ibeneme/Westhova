import React, { useState } from "react";
import { GiCellarBarrels } from "react-icons/gi";
import { FaDroplet } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";

interface OilItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const oilItems: OilItem[] = [
  {
    id: 1,
    title: "2016",
    description:
      "West Hova commenced operations in 2016. A milestone in our journey.",
    icon: GiCellarBarrels,
  },
  {
    id: 2,
    title: "3000kb+",
    description:
      "We have safely evacuated and carried out over 3m barrels of crude oil shipments mostly via ACE.",
    icon: FaDroplet,
  },
  {
    id: 3,
    title: "72",
    description:
      "63 safety training programs completed. Prioritizing safety in all operations.",
    icon: MdOutlineHealthAndSafety,
  },
];

const OilMenu: React.FC = () => {
  const [highlightedId, setHighlightedId] = useState<number | null>(1);

  const baseClasses =
    "w-full md:w-1/2 lg:w-1/3 p-6 flex flex-col items-center text-center transition-all duration-300 ease-in-out relative rounded-2xl md:rounded-[32px]";

  return (
    <section className="relative overflow-hidden pt-12 pb-0 lg:pt-24 lg:pb-32 bg-white font-sans">
      <div className="container mx-auto px-2 max-w-[1000px]">
        <div className="flex flex-wrap justify-center w-full rounded-2xl md:rounded-[32px] bg-black">
          {oilItems.map((item) => {
            const isCurrentHighlighted = item.id === highlightedId;
            const Icon = item.icon;

            // Apply highlight transforms only on md+ screens
            const highlightTransformClasses = isCurrentHighlighted
              ? "md:transform md:-translate-y-4 md:-translate-x-4 md:scale-y-[1.0] md:shadow-xl md:shadow-[var(--primary-color)]/50 md:z-20"
              : "md:transform md:scale-y-[0.98]";

            return (
              <div
                key={item.id}
                className={`${baseClasses} ${highlightTransformClasses} ${
                  isCurrentHighlighted
                    ? "bg-[var(--primary-color)] text-white rounded-xl md:rounded-[48px] m-0 h-[320px]"
                    : "bg-black text-white h-[280px]"
                }`}
                onMouseEnter={() => setHighlightedId(item.id)}
                onMouseLeave={() => setHighlightedId(1)}
              >
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 border-4 transition-all duration-300
                    ${
                      isCurrentHighlighted
                        ? "border-white bg-black"
                        : "border-gray-700 bg-gray-900"
                    }
                  `}
                >
                  <Icon
                    className={`w-12 h-12 transition-colors duration-300 ${
                      isCurrentHighlighted ? "text-white" : "text-white"
                    }`}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>

                <p
                  className={`text-sm mb-4 leading-relaxed transition-colors duration-300 ${
                    isCurrentHighlighted ? "text-white" : "text-gray-400"
                  }`}
                >
                  {item.description}
                </p>

                {isCurrentHighlighted && (
                  <a
                    href="#"
                    className="flex items-center text-white font-semibold hover:text-gray-200 mt-2"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OilMenu;
