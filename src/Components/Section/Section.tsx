import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import "./Section.css";

interface Step {
  id: number;
  title: string;
  cta?: string;
  description: string[];
  new?: boolean;
  image: string;
  bgColor: string; // Background color for the step
  top?: string; // Optional subtitle or additional text
  navigateToContact?: boolean; // New property to check if navigation should go to '/contact-us'
}

interface SectionProps {
  stepsData: Step[];
}

const Section: React.FC<SectionProps> = ({ stepsData }) => {
  const navigate = useNavigate();

  // Function to handle navigation based on the new 'navigateToContact' property
  const handleReadMore = (navigateToContact?: boolean) => {
    if (navigateToContact) {
      navigate("/contact-us"); // Navigate to '/contact-us' if property exists
    } else {
      navigate("/about-us"); // Otherwise, navigate to '/about'
    }
  };

  return (
    <div className="steps-container">
      {stepsData.map((step, index) => (
        <div
          key={step.id}
          className={`step ${index % 2 === 1 ? "reverse" : ""}`}
          style={{
            backgroundColor: step.bgColor,
            // justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div className="step-info">
            {/* Optional subtitle */}
            {step.top && <h3 style={{ color: "#666" }}>{step.top}</h3>}

            {/* Conditionally styled title */}
            <h2
              className={step?.id === 1 ? "step-title-index-1" : "step-title"}
              style={{ color: step?.id !== 1 ? "#666" : "#0F6DF9" }}
            >
              {step.title}
            </h2>

            <ul className="step-text">
              {/* Display only the first two paragraphs */}
              {(step.new
                ? step.description.slice(0, 3)
                : step.description.slice(0, 2)
              ).map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>

            {/* Read More Button */}
            <button
              onClick={() => handleReadMore(step.new)} // Pass the 'navigateToContact' value
              className="ctaButtonNew"
            >
              {step.new ? step?.cta : `Read More`}
              <IoArrowForwardCircleSharp color="#fff" fontSize={32} />
            </button>
          </div>

          <div className="step-image" >
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
