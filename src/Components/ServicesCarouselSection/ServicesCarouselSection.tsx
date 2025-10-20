import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import serviceImg1 from "../../assets/services/hydro.png";
import serviceImg2 from "../../assets/services/asset.png";
import serviceImg3 from "../../assets/services/se.png";
import serviceImg4 from "../../assets/services/sc.png";

interface ServiceCard {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
}

const serviceCards: ServiceCard[] = [
  {
    id: 1,
    imageSrc: serviceImg1,
    title: "Alternative Hydrocarbon Transport Consultancy & Accounting",
    description:
      "Providing consultancy and accounting solutions for alternative hydrocarbon transport services with efficiency and compliance.",
  },
  {
    id: 2,
    imageSrc: serviceImg2,
    title: "Asset Integrity & Maintenance Management",
    description:
      "Ensuring optimal performance and longevity of your assets through structured integrity and maintenance management.",
  },
  {
    id: 3,
    imageSrc: serviceImg3,
    title: "Process Systems & Specialty Packages",
    description:
      "Designing and managing process systems and specialty packages tailored for the oil, gas, and energy sectors.",
  },
  {
    id: 4,
    imageSrc: serviceImg4,
    title: "Procurement & Supply Chain Management",
    description:
      "Streamlining procurement and supply chain operations to enhance efficiency and reduce operational risks.",
  },
];

const ServicesCarouselSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < serviceCards.length - 1 ? prev + 1 : prev
    );
  };

  return (
    <section className="bg-white py-16 lg:py-24 font-sans">
      <div className="container mx-auto px-4 max-w-7xl pb-32 pt-32">
        {/* Header & Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
            Our Services
          </h2>
          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 ${
                currentIndex === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === serviceCards.length - 1}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 text-white ${
                currentIndex === serviceCards.length - 1
                  ? "cursor-not-allowed"
                  : "hover:brightness-90"
              }`}
              style={{
                backgroundColor:
                  currentIndex === serviceCards.length - 1
                    ? "#0F6DF980"
                    : "#0F6DF9",
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center md:justify-start gap-8">
          {serviceCards.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              style={{ border: "0.6px solid #66666645" }}
              className="w-full sm:w-[calc(50%-4px)] lg:w-[calc(25%-24px)] p-4 bg-white rounded-2xl flex flex-col items-center text-center duration-300"
            >
              <div className="w-full h-48 rounded-[8px] overflow-hidden mb-4">
                <img
                  src={service.imageSrc}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate max-w-full">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {service.description}
              </p>

              <button
                onClick={() => navigate("/services")}
                className="flex items-center text-[#0F6DF9] font-medium transition-colors duration-200 mt-auto"
              >
                View Service
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarouselSection;
