import React, { useState } from "react";
import "./FAQPage.css";
import MinusIcon from "../../Components/Icons/AddIcon";
import AddIcon from "../../Components/Icons/AddIcon";

const FAQPage: React.FC = () => {
  const handleToggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is West Hova Integrated Solutions?",
      answer: `West Hova Integrated Solutions has established itself as a significant and rapidly-growing indigenous company in Nigeria, specializing in Independent Hydrocarbon inspection, Upstream Oil and Gas Technical services, Personnel Training, Logistics, and Maritime operations since its establishment in 2016.`,
    },
    {
      question: "What is West Hova's vision?",
      answer: `To become Africa’s leading Energy support services and Independent Inspection Company through local and global operations and partnerships. The company aims to enhance the quality of services in the energy industry across Africa and beyond.`,
    },
    {
      question: "What services does West Hova offer?",
      answer: `West Hova offers a wide range of services including Independent Hydrocarbon inspection, Upstream Oil and Gas Technical services, Personnel Training, Logistics, and Maritime operations. The company is committed to delivering sustainable and cost-effective solutions to meet its stakeholders' needs.`,
    },
    {
      question: "What are the core values of West Hova?",
      answer: `West Hova upholds core values of integrity, reliability, competence, excellence, safety, and professionalism. These values guide all operations, ensuring that the company maintains high ethical standards and fosters trust among its partners, communities, and customers.`,
    },
    {
      question: "How can I contact West Hova?",
      answer: `You can contact West Hova Integrated Solutions at the following: 
                Address: 181-A Odili Road, Trans Amada, Port Harcourt. 
                Phone: +234 (0) 902 766 1296, +234 (0) 8151554215 
                Email: admin@westhova.com`,
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div className="faq-container">
        <h1 className="faq-header">Frequently Asked Questions</h1>
        <p className="faq-subtext">
          Get answers to some of the most common questions about our custom
          design services, from submitting your ideas to receiving your product.
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
            >
              <h3 className="faq-title">{faq.question}</h3>
              <span style={{ marginLeft: 12 }}>
                {activeIndex === index ? (
                  <MinusIcon width={24} height={24} color={`#0F6DF9`} />
                ) : (
                  <AddIcon width={24} height={24} color={`#0F6DF9`} />
                )}
              </span>
            </div>
            <span>
              {activeIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
