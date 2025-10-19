import React from "react";
import partnerA from "../../assets/partners/partnera.png";
import partnerB from "../../assets/partners/partnerb.png";
import partnerC from "../../assets/partners/partnerc.png";
import partnerD from "../../assets/partners/partnerd.png";
import partnerE from "../../assets/partners/partnere.png";
import partnerF from "../../assets/partners/partnerf.png";
import partnerK from "../../assets/partners/partnerk.png";
import partnerM from "../../assets/partners/partnerm.png";
import partnerN from "../../assets/partners/partnern.png";
import partnerO from "../../assets/partners/partnero.png";

const partners = [
  partnerA,
  partnerB,
  partnerC,
  partnerD,
  partnerE,
  partnerF,
  partnerK,
  partnerM,
  partnerN,
  partnerO,
];

const PartnersGrid: React.FC = () => {
  return (
    <section className="w-full py-12 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
        Our Partners
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6 md:px-12">
        {partners.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={logo}
              alt={`Partner ${index + 1}`}
              className="object-contain w-full h-24 transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersGrid;
