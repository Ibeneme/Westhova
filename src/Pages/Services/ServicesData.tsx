import serviceImage from "../../assets/sections/hero/hero.jpg"; // Single image for all services
import waste from "../../assets/sections/waste.jpg"; // Single image for all services
import worker from "../../assets/sections/worker.jpg"; // Single image for all services
import dirtyhands from "../../assets/sections/dirtyhands.jpg"; // Single image for all services
import oilrig from "../../assets/sections/oilrig.jpg"; // Single image for all services
import oilrigday from "../../assets/sections/oilrigday.jpg";  // Single image for all services
import oilwell from "../../assets/sections/oilwell.jpg";  // Single image for all services


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
    title: "Drilling & Well Support Services",
    image: oilwell,
    description:
      "We provide comprehensive drilling and well support services, ensuring optimal performance, reduced downtime, and enhanced operational efficiency.",
    services: ["Drilling Fluids & Mud Engineering", "Wellbore Cleaning", "Casing & Tubing Running"],
  },
  {
    id: 2,
    title: "Equipment Maintenance & Procurement",
    image: serviceImage,
    description:
      "Our team ensures the reliability of critical oilfield equipment through preventive maintenance, calibration, and procurement of high-quality parts.",
    services: ["Equipment Inspection", "Calibration & Testing", "Spare Parts Procurement"],
  },
  {
    id: 3,
    title: "Oil & Gas Logistics Support",
    image: oilrigday,
    description:
      "We handle logistics for offshore and onshore operations, providing seamless transportation, warehousing, and supply chain management.",
    services: ["Offshore & Onshore Logistics", "Marine Support", "Rig Moves & Heavy Lifting"],
  },
  {
    id: 4,
    title: "Waste Management & Environmental Solutions",
    image: waste,
    description:
      "Our waste management services ensure compliance with environmental regulations while reducing operational risks for oilfield projects.",
    services: ["Drill Cuttings Disposal", "Oil Spill Response", "Produced Water Treatment"],
  },
  {
    id: 5,
    title: "Asset Integrity & Pipeline Inspection",
    image: dirtyhands,
    description:
      "We conduct asset integrity assessments and pipeline inspections to mitigate risks and extend the lifespan of oil & gas infrastructure.",
    services: ["Non-Destructive Testing (NDT)", "Corrosion Monitoring", "Pipeline Pigging & Inspection"],
  },
  {
    id: 6,
    title: "Technical & HSE Training",
    image: oilrig,
    description:
      "We offer world-class technical training and HSE programs to upskill oil & gas personnel and ensure industry compliance.",
    services: ["HSE Training", "Technical Certification", "Emergency Response Drills"],
  },
  {
    id: 7,
    title: "Health, Safety, and Environmental Compliance",
    image: worker,
    description:
      "We help companies meet HSE regulatory requirements through risk assessments, audits, and implementation of safety best practices.",
    services: ["HSE Audits & Risk Assessments", "Regulatory Compliance", "Safety Equipment Supply"],
  },
];

export default ServicesData;