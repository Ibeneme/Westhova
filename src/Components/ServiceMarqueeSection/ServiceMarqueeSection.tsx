import React from "react";
import "./ServiceMarqueeSection.css";

interface ServiceMarqueeSectionProps {
  bgColor?: string;
  textColor?: string;
  marqueeText?: string;
  repeatCount?: number;
}

const ServiceMarqueeSection: React.FC<ServiceMarqueeSectionProps> = ({
  bgColor = "#0F0F0F",
  textColor = "#fff",
  marqueeText = "Think Oil and Gas, Think West Hova Integrated Solutions.",
  repeatCount = 1,
}) => {
  return (
    <section
      className="py-4 md:py-8 overflow-hidden"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="flex flex-col gap-[100px]">
        <div className="marquee-wrapper" style={{ color: textColor }}>
          <div className="marquee-left">
            {Array.from({ length: 9 }).map((_, index) => (
              <span
                key={index}
                className="marquee-text"
                style={{ marginRight: 50 }}
              >
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

        {/* Second Line: Optional */}
        {/* Uncomment this block when needed */}
        {/*
        <div className="marquee-wrapper" style={{ color: textColor }}>
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
        </div>
        */}
      </div>
    </section>
  );
};

export default ServiceMarqueeSection;
