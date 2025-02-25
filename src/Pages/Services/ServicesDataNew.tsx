import waste from "../../assets/sections/waste.png"; // Single image for all services// Single image for all services/ Single image for all services
import oilwell from "../../assets/sections/Flip.png"; // Single image for all services
import worker from "../../assets/sections/core.png"; // Single image for all services
import hse from "../../assets/sections/hse.png"; // Single image for all services
import gas from "../../assets/sections/gas.png"; // Single image for all services
import ass from "../../assets/sections/ass.png"; // Single image for all services
import red from "../../assets/sections/red.png"; // Single image for all services


interface Service {
  id: number;
  title: string;
  description: string[];
  services: string[];
  cta: string;
  image: string;
  bgColor: string;
  new?: boolean;
}

const ServicesDataNew: Service[] = [
  {
    id: 3,
    title: "Hydrocarbon Accounting (Quantity and Quality Measurement)",
    description: [
      "Over the years, our distinguished clientele has reaped the benefits of our exceptional independent cargo surveys.",
      "We transcend mere presence to meticulously ensure that every litre of your cargo is thoroughly accounted for, with explicit explanation provided for any instances of loss or gain.",
    ],
    services: [
      "Equipment Inspection",
      "Calibration & Testing",
      "Spare Parts Procurement",
    ],
    cta: "Contact Us", //cta: "Get Started",
    image: red,
    bgColor: "#E9F9FF",
    new: true,
  },

  {
    id: 2,
    title: "Equipment Maintenance & Procurement",
    description: [
      "Our team ensures the reliability of critical oilfield equipment through preventive maintenance, calibration, and procurement of high-quality parts.",
      "We offer Equipment Inspection, Calibration & Testing, and Spare Parts Procurement.",
    ],
    services: [
      "Equipment Inspection",
      "Calibration & Testing",
      "Spare Parts Procurement",
    ],
    cta: "Contact Us", //cta: "Get Started",
    image: oilwell,
    bgColor: "#fff",
    new: true,
  },
  {
    id: 3,
    title: "Oil & Gas Logistics Support",
    description: [
      "We handle logistics for offshore and onshore operations, providing seamless transportation, warehousing, and supply chain management.",
      "Our services include Offshore & Onshore Logistics, Marine Support, and Rig Moves & Heavy Lifting.",
    ],
    services: [
      "Offshore & Onshore Logistics",
      "Marine Support",
      "Rig Moves & Heavy Lifting",
    ],
    cta: "Contact Us", //cta: "Explore Services",
    image: gas,
    bgColor: "#E9F9FF",
    new: true,
  },
  {
    id: 4,
    title: "Waste Management & Environmental Solutions",
    description: [
      "Our waste management services ensure compliance with environmental regulations while reducing operational risks for oilfield projects.",
      "We specialize in Drill Cuttings Disposal, Oil Spill Response, and Produced Water Treatment.",
    ],
    services: [
      "Drill Cuttings Disposal",
      "Oil Spill Response",
      "Produced Water Treatment",
    ],
    cta: "Contact Us", //cta: "Get Certified",
    image: waste,
    bgColor: "#fff",
    new: true,
  },
  {
    id: 5,
    title: "Asset Integrity & Pipeline Inspection",
    description: [
      "We conduct asset integrity assessments and pipeline inspections to mitigate risks and extend the lifespan of oil & gas infrastructure.",
      "Our services include Non-Destructive Testing (NDT), Corrosion Monitoring, and Pipeline Pigging & Inspection.",
    ],
    services: [
      "Non-Destructive Testing (NDT)",
      "Corrosion Monitoring",
      "Pipeline Pigging & Inspection",
    ],
    cta: "Contact Us", //cta: "Learn More",
    image: ass,
    bgColor: "#E9F9FF",
    new: true,
  },
  {
    id: 6,
    title: "Technical & HSE Training",
    description: [
      "We offer world-class technical training and HSE programs to upskill oil & gas personnel and ensure industry compliance.",
      "Our services include HSE Training, Technical Certification, and Emergency Response Drills.",
    ],
    services: [
      "HSE Training",
      "Technical Certification",
      "Emergency Response Drills",
    ],
    cta: "Contact Us", //cta: "Join Us",
    image: hse,
    bgColor: "#fff",
    new: true,
  },
  {
    id: 7,
    title: "Health, Safety, and Environmental Compliance",
    description: [
      "We help companies meet HSE regulatory requirements through risk assessments, audits, and implementation of safety best practices.",
      "Our services include HSE Audits & Risk Assessments, Regulatory Compliance, and Safety Equipment Supply.",
    ],
    services: [
      "HSE Audits & Risk Assessments",
      "Regulatory Compliance",
      "Safety Equipment Supply",
    ],
    cta: "Contact Us", //cta: "Get Certified",
    image: worker,
    bgColor: "#E9F9FF",
    new: true,
  },
];

export default ServicesDataNew;
