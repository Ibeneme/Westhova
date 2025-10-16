import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
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
    answer: `We serve a wide range of industries, including:
- Oil & Gas Exploration and Production
- Refining and Petrochemicals
- Maritime and Offshore Operations
- Energy and Power Generation
- Environmental and Waste Management`,
  },
  {
    question: "What services does West Hova offer?",
    answer: `West Hova offers an extensive range of services tailored for the oil & gas industry, including:
- Risk assessments, audits, emergency response training
- Independent Hydrocarbon Inspection: Cargo & tank inspections, quantity verification
- Oilfield Logistics & Procurement: Equipment supply, marine logistics, rig moves
- Technical Training & Manpower Development: HSE training, oil & gas certification programs`,
  },
  {
    question: "What are the core values of West Hova?",
    answer: `At West Hova, our core values define our approach to business:
- Integrity – We operate with transparency and accountability
- Excellence – Delivering best-in-class solutions with precision
- Safety – Prioritizing health, safety, and environmental protection
- Innovation – Embracing cutting-edge technology in our operations
- Sustainability – Committed to eco-friendly and responsible energy solutions`,
  },
  {
    question: "Does West Hova comply with international industry standards?",
    answer: `Yes, West Hova adheres to globally recognized standards such as:
- ISO 9001 (Quality Management System)
- ISO 14001 (Environmental Management System)
- ISO 45001 (Occupational Health & Safety)
- NCDMB, NMDPRA and NUPRC Regulatory Compliance`,
  },
  {
    question: "How can I contact West Hova?",
    answer: `You can reach West Hova Integrated Solutions through the following:
- Address: 181-A Odili Road, Trans Amadi, Port Harcourt, Nigeria
- Phone: +234 (0) 902 766 1296, +234 (0) 815 155 4215
- Email: admin@westhova.com
- Website: www.westhova.com`,
  },
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen py-16 px-4 md:px-16 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 mb-12 text-lg md:text-xl">
          Get answers to some of the most common questions about our services.
          If you have further inquiries, feel free to reach out to us!
        </p>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-left font-semibold text-gray-900">
                  {item.question}
                </span>
                <span className="text-gray-500">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-96 p-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 whitespace-pre-line">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
