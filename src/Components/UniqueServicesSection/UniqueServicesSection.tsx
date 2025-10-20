import React from "react";
import gasImage from "../../assets/services/chem.png";
import f from "../../assets/services/compa.png";
import g from "../../assets/services/engg.png";
// import h from "../../assets/services/h.jpg";
// import i from "../../assets/services/i.jpg";

const UniqueServicesSection: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans mt-[32px">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* 3. Oil, Gas & Chemical Commodities and Solutions - Featured Block */}
        <div className="relative overflow-hidden rounded-xl  bg-blue-900 text-white p-4 md:p-8 lg:p-8">
          <h2 className="text-4xl font-extrabold mb-2 pb-2">
            Oil, Gas & Chemical Commodities
          </h2>
          <p className="text-xl font-light mb-6">
            Delivering proven knowledge-based solutions to ensure quality
            assurance and safety in every part of the oil and gas industry.
          </p>
          <div className="space-y-4 text-lg">
            <p>
              Reduce risk, safeguard quality and quantity, and meet regulatory
              and contractual requirements with West Hova oil, gas and chemical
              commodities solutions. Oil, gas and chemicals are valuable
              resources. Operating in these industries, you need to be sure
              every precaution is taken to reduce your exposure to risk.
            </p>
            <p>
              Our network of experts support all your testing, inspection, risk
              management, marine and consultancy requirements for crude oil and
              condensates, petroleum products, chemicals, gases, and renewable
              and alternative fuels.
            </p>
            <p className="font-semibold text-blue-300">
              Operating effectively in a complex, global market requires the
              ability to make efficient decisions in real time. We provide the
              data and market intelligence you need to make effective
              data-driven decisions that drive your business forward.
            </p>
          </div>
        </div>

        {/* 4. Calibration Services - Accentuated Box */}
        <div className="p-8 border-1 border-yellow-500 rounded-xl bg-yellow-50">
          <h2 className="text-4xl font-extrabold text-yellow-800 mb-4">
            Precision Calibration Services
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Inaccurate measurement leaves oil and gas companies exposed to the
            risk of large financial losses whether at the exploration,
            production or distribution stage.
          </p>
          <p className="mt-4 text-xl font-medium text-yellow-700">
            With our calibration of measurement instrumentation services, you
            can be sure of the **highest degree of measurement accuracy**,
            reducing measurement uncertainties. Meter calibration enables you to
            avoid errors and mis-measurements.
          </p>
          <p className="mt-4 text-gray-700">
            From production facilities, both on and offshore, through to
            distribution pipeline systems, storage facilities, tankers and oil
            refineries, and from terminals through to inland distribution
            systems, dynamic measurement systems instrumentation is crucial to
            achieving the highest practicable dynamic measurement accuracy. We
            assist you with **certifying meter accuracy** and the calibration of
            all primary, secondary and tertiary instrumentation.
          </p>
        </div>

        {/* 5. Laboratory & Engineering Services - Visual Grid with Descriptions */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 mt-24">
            Specialized Technical Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Laboratory Testing Petroleum & Chemicals */}
            <div className="group bg-gray-50 rounded-xl overflow-hidden transition-all duration-300">
              <img
                src={gasImage}
                alt="Laboratory Testing Petroleum & Chemicals"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Laboratory Testing Petroleum & Chemicals
                </h3>
                <p className="text-sm text-gray-600">
                  Midstream and downstream testing and analytical solutions for
                  petroleum, natural gas and petro-chemical industry and value
                  chain. We offer a comprehensive range of testing solutions
                  utilizing a global network of experts and state-of-the-art
                  laboratories.
                </p>
              </div>
            </div>

            {/* Compositional Analysis */}
            <div className="group bg-gray-50 rounded-xl overflow-hidden transition-all duration-300">
              <img
                src={g}
                alt="Compositional Analysis"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Compositional Analysis
                </h3>
                <p className="text-sm text-gray-600">
                  Accurate and reliable laboratory data is at the heart of all
                  natural resource industries. We help operators reduce risk and
                  optimize performance in their value chain with detailed
                  compositional analysis.
                </p>
              </div>
            </div>

            {/* Engineering, Procurement and Commissioning */}
            <div className="group bg-gray-50 rounded-xl overflow-hidden transition-all duration-300">
              <img
                src={f}
                alt="Laboratory Engineering, Procurement and Commissioning"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Laboratory Engineering, Procurement and Commissioning
                </h3>
                <p className="text-sm text-gray-600">
                  (This service covers the full lifecycle of laboratory setup
                  and operation, including engineering design, equipment
                  procurement, and final system commissioning for gas and other
                  facilities.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueServicesSection;
