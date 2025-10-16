import React, { useEffect } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Crude Oil Evacuation/ Equipment Maintenance",
    description: "OML 109 Ejulebe field (Trinity Spirit)- March 2021",
    client: "Alas Oranto Petroleum",
    value: "$150,000.00",
  },
  {
    title: "Crude Oil Evacuation Operation and Custody Transfer",
    description: "FPSO Trinity Spirit- June, 2021",
    client: "Alas Oranto Petroleum, & Tulcan Energies Nig Ltd",
    value: "$38,000.00",
  },
  {
    title: "ACE Transhipments and Cargo Accounting",
    description: "CONOG OML 150- November, 2024",
    client: "Commercial Consult Nigeria Limited",
    value: "$184,934.00",
  },
];

const SelectedProjectExperience: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="w-full bg-[#F4F4F4] py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl md:text-7xl font-bold text-gray-800 mb-8 flex items-center gap-2">
        Selected Project Experience
      </h2>

      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white rounded-xl p-6 md:p-8 flex flex-col gap-4"
          >
            {/* Icon */}
            <div
              style={{
                backgroundColor: "#0F6DF924",
                padding: 16,
                borderRadius: 48,
                alignSelf: "flex-start",
              }}
            >
              <FaRegFileAlt className="text-blue-600" size={32} />
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
              {project.title}
            </h3>

            {/* Description */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-2">
              <span className="text-gray-600 font-semibold block md:hidden">
                Description
              </span>
              <p className="text-gray-600 flex items-center gap-2 md:gap-0">
                {project.description}
              </p>
            </div>

            {/* Client */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-2">
              <span className="text-gray-600 font-semibold block md:hidden">
                Client
              </span>
              <p className="text-gray-800 flex items-center gap-2 md:gap-0">
                {project.client}
              </p>
            </div>

            {/* Value */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-2">
              <span className="text-gray-600 font-semibold block md:hidden">
                Value
              </span>
              <p className="text-gray-800 flex items-center gap-2 md:gap-0 font-semibold">
                {project.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedProjectExperience;