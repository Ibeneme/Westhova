import React from "react";
import partnerA from "../../assets/partners/partnera.png";
import partnerB from "../../assets/partners/partnerb.png";
import partnerC from "../../assets/partners/partnerc.png";
import partnerD from "../../assets/partners/partnerd.png";
import partnerE from "../../assets/partners/partnere.png";
import partnerF from "../../assets/partners/partnerf.png";
import partnerK from "../../assets/partners/partnerk.png";
import "./PartnersCarousel.css";

const partners = [
  partnerA,
  partnerB,
  partnerC,
  partnerD,
  partnerE,
  partnerF,
  partnerK,
];

const PartnersCarousel: React.FC = () => {
  return (
    <section className="w-full overflow-hidden py-12 bg-white pb-12 md:pb-48">

      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
        Our Partners
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll-x gap-16">
          {[...partners, ...partners].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-52 h-32 flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="object-contain w-full h-full transition-transform scale-140  duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
