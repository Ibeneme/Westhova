import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import visionImg from "../../assets/images/vision.jpg";
import missionImg from "../../assets/images/mission.jpg";
import valuesImg from "../../assets/images/values.jpg";

interface VisionMissionValuesProps {
  maxWidth?: boolean; // Optional prop to constrain content
}

const VisionMissionValues: React.FC<VisionMissionValuesProps> = ({ maxWidth }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const sections = [
    {
      title: "Our Vision",
      description:
        "To become Africa’s Energy support services and independent Inspection Company through local and Global Operations and Partnership.",
      bg: "bg-black",
      text: "text-white",
      img: missionImg,
    },
    {
      title: "Our Mission",
      description:
        "To responsibly trade in the Global Energy, Maritime, Oil and Gas industry by providing sustainable and cost effective services and delivering values to our stakeholders.",
      bg: "bg-[var(--primary-color)]",
      text: "text-white",
      img: visionImg,
    },
    {
      title: "Our Values",
      description:
        "We uphold as our core values: integrity, reliability, competence, excellence, safety and professionalism in all our dealings with our partners, communities, customers and investors.",
      bg: "bg-white",
      text: "text-black",
      img: valuesImg,
    },
  ];

  return (
    <section className="w-full font-sans">
      {sections.map((item, index) => (
        <div
          key={index}
          data-aos="zoom-in"
          className={`flex justify-center items-center min-h-[60vh] py-12 ${item.bg} ${item.text}`}
        >
          {/* Inner content wrapper */}
          <div
            className={`flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-16 w-full ${
              maxWidth ? "max-w-7xl" : ""
            }`}
          >
            {/* Left: Title + Image */}
            <div
              className="flex-1 flex flex-col items-start gap-6 text-left w-full md:w-auto"
              data-aos="fade-right"
            >
              <div className="w-full">
                <h2 className={`text-4xl md:text-6xl font-bold mb-4 ${item.text}`}>
                  {item.title}
                </h2>
                {item.img && (
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-[240px] w-full md:w-[400px] object-cover mt-2 rounded-[8px]"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  />
                )}
              </div>
            </div>

            {/* Right: Content + CTA */}
            <div className="flex-1 flex flex-col gap-6" data-aos="fade-left">
              <p
                className={`text-lg md:text-xl leading-relaxed ${
                  item.bg === "bg-white" ? "text-gray-800" : "text-gray-100"
                }`}
              >
                {item.description}
              </p>

              <a
                href="mailto:admin@westhova.com"
                className={`px-6 py-3 rounded-lg font-medium w-fit transition-colors mt-[16px] ${
                  item.bg === "bg-white"
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default VisionMissionValues;