import labImage from "../../assets/sections/hero/hero.jpg";
import productionImage from "../../assets/sections/hero/hero.jpg";
import outsourcingImage from "../../assets/sections/hero/hero.jpg";
import environmentalImage from "../../assets/sections/hero/hero.jpg";
import managementImage from "../../assets/sections/hero/hero.jpg";
import inspectionImage from "../../assets/sections/hero/hero.jpg";
import sustainabilityImage from "../../assets/sections/hero/hero.jpg";

interface Service {
  id: number;
  title: string;
  image: string;
  description: string;
  services: string[];
}

const ServicesData: Service[] = [
  {
    id: 1,
    title: "Laboratory Services",
    image: labImage,
    description:
      "We provide advanced laboratory testing for environmental and oil & gas industries, ensuring compliance and accurate analysis.",
    services: ["Environmental Laboratory Service", "Oil and Gas Testing"],
  },
  {
    id: 2,
    title: "Production Chemistry",
    image: productionImage,
    description:
      "Our production chemistry solutions focus on optimizing oil & gas operations through flow assurance, corrosion management, and chemical sourcing.",
    services: ["Flow Assurance", "Chemical Sourcing", "Corrosion Management"],
  },
  {
    id: 3,
    title: "Laboratory Outsourcing",
    image: outsourcingImage,
    description:
      "We offer full-service laboratory outsourcing solutions, providing skilled personnel, equipment, and management to support your operations.",
    services: ["Outsourcing Solutions"],
  },
  {
    id: 4,
    title: "Environmental Services",
    image: environmentalImage,
    description:
      "From environmental impact studies to leak detection and repair (LDAR), our solutions help businesses meet sustainability regulations and reduce risks.",
    services: [
      "Environmental Studies",
      "Environmental Engineering",
      "Leak Detection and Repair (LDAR)",
    ],
  },
  {
    id: 5,
    title: "Laboratory Management",
    image: managementImage,
    description:
      "We design, construct, and manage high-quality laboratories, including instrument calibration to ensure precision and efficiency.",
    services: ["Design", "Construction", "Instrument Calibration"],
  },
  {
    id: 6,
    title: "Inspection Services",
    image: inspectionImage,
    description:
      "Our cargo inspection services provide thorough quality and compliance checks to ensure safe and efficient transportation.",
    services: ["Cargo Inspection"],
  },
  {
    id: 7,
    title: "Corporate Sustainability",
    image: sustainabilityImage,
    description:
      "We help businesses integrate sustainable practices through Environmental, Social, and Governance (ESG) strategies and greenhouse gas (GHG) management.",
    services: ["Environmental Social Governance", "GHG Management"],
  },
];

export default ServicesData;