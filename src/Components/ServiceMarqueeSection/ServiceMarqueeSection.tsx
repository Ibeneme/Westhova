import React from "react";
import "./ServiceMarqueeSection.css";

interface ServiceMarqueeSectionProps {
  bgColor?: string;    // Background color
  textColor?: string;  // Text color
  marqueeText?: string; // Optional custom text
  repeatCount?: number; // Number of repeats
}

const ServiceMarqueeSection: React.FC<ServiceMarqueeSectionProps> = ({
  bgColor = "#0F0F0F",
  textColor = "#fff",
  marqueeText = "Think Oil and gas, Think West Hova Integrated Solutions.",
  repeatCount = 5,
}) => {
  return (
    <section
      className="py-8 overflow-hidden"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="flex flex-col space-y-2">
        {/* First Line: Left Scroll */}
        <div className="marquee-wrapper" style={{ color: textColor }}>
          <div className="marquee-left">
            {Array.from({ length: repeatCount }).map((_, index) => (
              <span key={index} className="marquee-text">
                {marqueeText}
              </span>
            ))}
          </div>
          <div className="marquee-left">
            {Array.from({ length: repeatCount }).map((_, index) => (
              <span key={`dup-${index}`} className="marquee-text">
                {marqueeText}
              </span>
            ))}
          </div>
        </div>

        {/* Optional Second Line */}
        {/* Uncomment below if needed */}
        {/* <div className="marquee-wrapper" style={{ color: textColor }}>
          <div className="marquee-right">
            {Array.from({ length: repeatCount }).map((_, index) => (
              <span key={index} className="marquee-text">
                {marqueeText}
              </span>
            ))}
          </div>
          <div className="marquee-right">
            {Array.from({ length: repeatCount }).map((_, index) => (
              <span key={`dup-right-${index}`} className="marquee-text">
                {marqueeText}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ServiceMarqueeSection;