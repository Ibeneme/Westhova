import React, { useState } from "react";
import "./FAQPage.css";
import MinusIcon from "../../Components/Icons/MinusIcon";
import AddIcon from "../../Components/Icons/AddIcon";

const FAQPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggleAnswer = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqItems = [
    {
      question: "What is West Hova Integrated Solutions?",
      answer: `West Hova Integrated Solutions is a leading indigenous oil and gas service provider in Nigeria. Since 2016, we have specialized in Independent Hydrocarbon Inspection, Drilling Support Services, Pipeline Integrity Management, HSE Compliance, Oilfield Logistics, and Technical Training. Our mission is to provide innovative and sustainable solutions for the energy sector.`,
    },
    {
      question: "What is West Hova's vision?",
      answer: `To become Africa’s foremost provider of oilfield services and independent inspection solutions through strategic local and global partnerships. We are dedicated to driving excellence in energy support services across Africa and beyond.`,
    },
    {
      question: "What industries does West Hova serve?",
      answer: `We serve a wide range of industries, including:\n
    Oil & Gas Exploration and Production\n
    Refining and Petrochemicals\n
    Maritime and Offshore Operations\n
    Energy and Power Generation\n
    Environmental and Waste Management`,
    },
    {
      question: "What services does West Hova offer?",
      answer: `West Hova offers an extensive range of services tailored for the oil & gas industry, including:\n
      Risk assessments, audits, emergency response training\n
      Independent Hydrocarbon Inspection: Cargo & tank inspections, quantity verification\n
      Oilfield Logistics & Procurement: Equipment supply, marine logistics, rig moves\n
      Technical Training & Manpower Development: HSE training, oil & gas certification programs`,
    },
    {
      question: "What are the core values of West Hova?",
      answer: `At West Hova, our core values define our approach to business:\n
    Integrity – We operate with transparency and accountability\n
    Excellence – Delivering best-in-class solutions with precision\n
    Safety – Prioritizing health, safety, and environmental protection\n
    Innovation – Embracing cutting-edge technology in our operations\n
    Sustainability – Committed to eco-friendly and responsible energy solutions`,
    },
    {
      question: "Does West Hova comply with international industry standards?",
      answer: `Yes, West Hova adheres to globally recognized standards such as:\n
    ISO 9001 (Quality Management System)\n
    ISO 14001 (Environmental Management System)\n
    ISO 45001 (Occupational Health & Safety)\n
    NNPC, DPR, and NCDMB Regulatory Compliance`,
    },
    {
      question: "How can I contact West Hova?",
      answer: `You can reach West Hova Integrated Solutions through the following:\n
    Address: 181-A Odili Road, Trans Amadi, Port Harcourt, Nigeria\n
    Phone: +234 (0) 902 766 1296, +234 (0) 815 155 4215\n
    Email: admin@westhova.com\n
    Website: [www.westhova.com](https://www.westhova.com)`,
    },
  ];

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div className="faq-container">
        <h1 className="faq-header">Frequently Asked Questions</h1>
        <p className="faq-subtext">
          Get answers to some of the most common questions about our services.
          If you have further inquiries, feel free to reach out to us!
        </p>

        {faqItems.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => handleToggleAnswer(index)}
              aria-expanded={activeIndex === index}
            >
              <h3 className="faq-title">{faq.question}</h3>
              <span style={{ marginLeft: 12 }}>
                {activeIndex === index ? (
                  <MinusIcon width={24} height={24} color="#0F6DF9" />
                ) : (
                  <AddIcon width={24} height={24} color="#0F6DF9" />
                )}
              </span>
            </div>

            {activeIndex === index && (
              <p className="faq-answer">
                {faq.answer.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
