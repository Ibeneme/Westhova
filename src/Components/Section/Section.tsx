import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import "./Section.css";

interface Step {
  id: number;
  title: string;
  description: string[];
  cta: string;
  image: string;
}

interface SectionProps {
  stepsData: Step[];
}

const Section: React.FC<SectionProps> = ({ stepsData }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact-us");
  };

  return (
    <div className="steps-container">
      {stepsData.map((step, index) => (
        <div
          key={step.id}
          className={`step ${index % 2 === 1 ? "reverse" : ""}`}
        >
          <div className="step-info">
            <h2 className="step-title">{step.title}</h2>
            <ul className="step-text">
              {step.description.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
            <button onClick={handleClick} className="ctaButtonNew">
              {step.cta}{" "}
              <IoArrowForwardCircleSharp color="#fff" fontSize={32} />
            </button>
          </div>
          <div className="step-image">
            <img
              src={step.image}
              alt={`Step ${step.id}`}
              className="step-image-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section;