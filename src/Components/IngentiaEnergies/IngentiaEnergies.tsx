import React from "react";
import "./IngentiaEnergies.css";
import { GiCellarBarrels } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaDroplet } from "react-icons/fa6";
import { GiBarrel } from "react-icons/gi";

const cardData = [
  {
    id: 1,
    icon: FaDroplet,
    title: "2016",
    description:
      "West Hova commenced operations in 2016. A milestone in our journey.",
  },
  {
    id: 2,
    icon: GiCellarBarrels,
    title: "2000kb+",
    description:
      "We have safely evacuated and carried out over 2m bbls crude oil shipments mostly via ACE.",
  },
  {
    id: 4,
    icon: GiBarrel,
    title: "2,000,000+",
    description:
      "We have safely evacuated and carried out over 2m barrels of crude oil shipments mostly via ACE",
  },
  {
    id: 3,
    icon: MdOutlineHealthAndSafety,
    title: "63",
    description:
      "63 safety training programs completed. Prioritizing safety in all operations.",
  },
];

//We have safely evacuated and carried out over 2m barrels of crude oil shipments mostly via ACE.
const IngentiaEnergies: React.FC = () => {
  return (
    <div className="container" style={{ paddingBottom: 64 }}>
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
