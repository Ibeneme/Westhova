import React from "react";
import "./IngentiaEnergies.css";
import { FaOilWell } from "react-icons/fa6";
import { GiCellarBarrels } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const cardData = [
  {
    id: 1,
    icon: FaOilWell,
    title: "2016",
    description:
      "West Hova commenced operations in 2016. A milestone in our journey.",
  },
  {
    id: 2,
    icon: GiCellarBarrels,
    title: "100+",
    description:
      "We offer expert drilling support. With over 400 successful projects.",
  },
  {
    id: 3,
    icon: MdOutlineHealthAndSafety,
    title: "63",
    description:
      "63 safety training programs completed. Prioritizing safety in all operations.",
  },
];

const IngentiaEnergies: React.FC = () => {
  return (
    <div className="container">
      {cardData.map((card) => (
        <div className="card" key={card.id}>
          <div>
            <card.icon className="icon" />
          </div>
          <div>
            <h2 className="title">{card.title}</h2>
            <p className="description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IngentiaEnergies;
