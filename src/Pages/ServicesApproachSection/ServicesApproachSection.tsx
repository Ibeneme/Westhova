import React from "react";
import {
  FaFlask,
  FaCogs,
  FaShippingFast,
  FaChartLine,
  FaCheckDouble,
  FaHardHat,
  //   FaHandshake,
  //   FaGlobe,
  //   FaMoneyBillWave,
  //   FaBalanceScale,
  FaProjectDiagram,
} from "react-icons/fa";

// Alphabetical image imports
import a from "../../assets/services/a.jpg";
// import b from "../../assets/services/b.jpg";
// import c from "../../assets/services/c.jpg";
// import d from "../../assets/services/d.jpg";
// import e from "../../assets/services/e.jpg";
// import f from "../../assets/services/f.jpg";
// import g from "../../assets/services/g.jpg";
// import h from "../../assets/services/h.jpg";
// import i from "../../assets/services/i.jpg";
import j from "../../assets/services/station.jpg";
// import k from "../../assets/services/k.jpg";
import l from "../../assets/services/asset.png";
// import m from "../../assets/services/m.jpg";
import n from "../../assets/services/n.jpg";

// Assign constants
const introImg = a;
// const ahctcImg = b;
// const ahctcImg2 = c;
// const aimImg1 = d;
// const aimImg2 = e;
// const aimImg3 = f;
// const aimImg4 = g;
// const seiupImg1 = h;
// const seiupImg2 = i;
const seiupImg3 = j;
// const pscsmImg1 = k;
const pscsmImg2 = l;
// const pscsmImg3 = m;
const pscsmImg4 = n;

// Define custom colors for professional look
const primaryDark = "text-gray-900"; // Used for titles
const accentColor = "text-[#0F6DF9]"; // Primary accent blue (#0F6DF9)

const ServicesApproachSection: React.FC = () => {
  // Common classes for images to ensure consistent fitting (width full, object-cover)
  const imageClasses = "w-full h-full object-cover";

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-serif text-gray-700">
      <div className="max-w-8xl mx-auto space-y-24">
        {/* --- 1. Introduction: Integrated Service Delivery --- */}
        <div className="text-center pt-8">
          <h2
            className={`text-5xl font-extrabold ${primaryDark} mb-16 relative inline-block pb-3`}
          >
            Our Core Expertise
            <span
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1.5 ${accentColor} rounded-full`}
            ></span>
          </h2>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title:
                  "Alternative Hydrocarbon Transport Consultancy & Accounting",
                icon: FaShippingFast,
                color: accentColor,
              },
              {
                title: "Asset Integrity & Maintenance Management",
                icon: FaCogs,
                color: "text-green-700",
              },
              {
                title: "Process Measurement Specialty Units & Packages",
                icon: FaFlask,
                color: "text-indigo-700",
              },
              {
                title: "Procurement & Supply Chain Management",
                icon: FaChartLine,
                color: accentColor,
              },
              {
                title: "Trainings and Capacity Building Consultancy",
                icon: FaCheckDouble,
                color: "text-yellow-500",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`
                bg-gray-50 p-6 
                           text-center flex flex-col items-center justify-start rounded-md transition-all duration-200 hover:bg-gray-100`}
              >
                <div className={`${service.color} mb-4 p-3 rounded-full`}>
                  {React.createElement(service.icon, {
                    className: "w-10 h-10 mx-auto",
                  })}
                </div>
                <h3 className={`text-xl font-bold ${primaryDark} pt-4`}>
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <br /> <br />
        <h2 className="text-[64px] sm:text-[64px] mt-[120px] font-extrabold text-blue-900 text-left mb-0">
          What we do?
        </h2>
        <div className=" rounded-none flex flex-col lg:flex-row gap-10 items-center  ">
          <div className="lg:w-1/2">
            <h1
              className={`text-5xl font-extrabold ${primaryDark} mb-6 leading-tight`}
            >
              <span className={accentColor}>Integrated</span> Service Delivery
            </h1>
            <p className="text-xl leading-relaxed mb-6 font-semibold">
              <strong className={primaryDark}>WEST HOVA</strong> is an
              indigenous integrated service delivery company with strategic
              focus in the Oil and Gas industry, Manufacturing & Power
              Generation.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Our aim is to deliver **quality, cost-effective, innovative and
              sustainable solutions** to our current increasing global
              clientele. Our commitment to professional development and also
              coverage our strategic partnerships and OEM relationships when the
              need arises.
            </p>
          </div>
          {/* FIX: Use aspect ratio for consistent image container height */}
          <div className="lg:w-1/2 flex justify-center ">
            <img
              src={introImg}
              alt="Integrated Delivery Pipes"
              className={`${imageClasses} rounded-none h-[500px]`}
            />
          </div>
        </div>
        {/* --- 2. Our Services Overview - Linear/Minimalist Pattern (No images) --- */}
        {/* --- 3. Services: Alternative Hydrocarbon Transport Consultancy & Accounting --- */}
        <div className="bg-gray-900 text-white p-5 md:p-12 rounded-none">
          <h2
            className={`text-4xl font-extrabold mb-8 flex items-center pb-2 `}
          >
            Alternative Hydrocarbon Transport Consultancy & Accounting
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Column: Preliminary Studies & Images */}
            <div>
              <h3 className={`text-2xl font-bold mb-4`}>Preliminary Studies</h3>
              <ul className="list-none space-y-2 mb-8 text-gray-300">
                <li className="flex items-center">
                  <FaCheckDouble className="text-green-400 mr-3 flex-shrink-0" />
                  Due Diligence Study
                </li>
                <li className="flex items-center">
                  <FaCheckDouble className="text-green-400 mr-3 flex-shrink-0" />
                  Surveys & Concept Framework Design
                </li>
                <li className="flex items-center">
                  <FaCheckDouble className="text-green-400 mr-3 flex-shrink-0" />
                  Technical & Commercial Study
                </li>
                <li className="flex items-center">
                  <FaCheckDouble className="text-green-400 mr-3 flex-shrink-0" />
                  Operational Plan Development
                </li>
              </ul>
            </div>

            {/* Right Column: Deployment & Coordination (No images) */}
            <div>
              <h3 className={`text-2xl font-bold  mb-4`}>
                Deployment & Coordination
              </h3>
              <ul className="list-none space-y-2 text-lg text-gray-300">
                <li className="flex items-center">
                  <FaCheckDouble className="text-green-400 mr-3 flex-shrink-0" />
                  Cargo & Delivery Schedule Strategy & Logistics
                </li>
                <li className="flex items-center">
                  <FaCheckDouble className="text-green-400 mr-3 flex-shrink-0" />
                  Cargo Survey & Inspection
                </li>
                <li className="flex items-center">
                  <FaCheckDouble className="text-green-400 mr-3 flex-shrink-0" />
                  Develop & Review manuals & S.O.P. documentation & approvals
                </li>
                <li className="flex items-center">
                  <FaCheckDouble className="text-green-400 mr-3 flex-shrink-0" />
                  Reporting & Review of Measurement & Audits
                </li>
                <li className="flex items-center">
                  <FaCheckDouble className="text-green-400 mr-3 flex-shrink-0" />
                  Asset/Equipment deployment & S.O.P. development
                </li>
                <li className="flex items-center">
                  <FaCheckDouble className="text-green-400 mr-3 flex-shrink-0" />
                  Marine Tank & Shore Tank Calibration Coordination
                </li>
                <li className="flex items-center">
                  <FaCheckDouble className="text-green-400 mr-3 flex-shrink-0" />
                  Security & Surveillance
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* --- 4. Services: Asset Integrity & Maintenance Management --- */}
        <div className="bg-gray-50 p-5 md:p-12 rounded-none border border-gray-200">
          <h2
            className={`text-4xl font-extrabold ${primaryDark} mb-8 flex items-center  pb-2 border-gray-300`}
          >
            Asset Integrity & Maintenance Management
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-gray-600">
            WEST HOVA, in collaboration with OEMs (Chang-On, Samsatic &
            Rover/Wago) adopts risk-based operational excellence approach for
            **asset integrity management** across industries.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Column: Services List (No images) */}
            <div>
              <ul className="list-none space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <FaHardHat className="text-gray-500 flex-shrink-0 mt-1 mr-3" />
                  Installation, Modification and Optimization of CP Systems –
                  Both impressed current and sacrificial anode type.
                </li>
                <li className="flex items-start">
                  <FaHardHat className="text-gray-500 flex-shrink-0 mt-1 mr-3" />
                  Advanced Non-destructive Testing – PAUT, LRUT, GWUT, IRIS.
                </li>
                <li className="flex items-start">
                  <FaHardHat className="text-gray-500 flex-shrink-0 mt-1 mr-3" />
                  Corrosion Protection/Mitigation services – Painting, Coating
                  (FBE), Corrosion, Erosion, FFC, AIV (Charge/CSO).
                </li>
                <li className="flex items-start">
                  <FaHardHat className="text-gray-500 flex-shrink-0 mt-1 mr-3" />
                  Metering Calibration (Prover & Nano-shell) – Flow Meters,
                  Transmission & Gauges, F&G detectors, other field instruments.
                </li>
              </ul>
            </div>
            {/* Right Column: Images Grid */}
            {/* FIX: Added h-64 to the grid container to enforce a consistent height for the 4 images */}
            <div className="grid grid-cols-1 gap-4 ">
              <div className="h-full w-full">
                <img
                  src={pscsmImg2}
                  alt="Asset Integrity"
                  className="h-[430px] w-full object-cover rounded-none"
                />
              </div>
            </div>
          </div>
        </div>
        {/* --- 5. Services: Specialty Engineering Units & Packages --- */}
        <div className="bg-gray-100 p-5 md:p-12 rounded-none border border-gray-300">
          <FaFlask className="text-indigo-700 mr-4 text-3xl" />
          <br />
          <h2
            className={`text-4xl font-extrabold ${primaryDark} mb-8 flex items-center  pb-2 border-gray-400`}
          >
            Specialty Engineering Units & Packages
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-gray-600">
            WEST HOVA has developed In-house capability in collaboration with
            OEM (Its Elite Flow Control USA & Wago Germany) for delivering
            **Turnkey (Engineering, Procurement, Construction & Commissioning)**
            for Process Systems, Control Systems, Metering & Instrumentation
            Units, skid mounted and container packages, ESD, F&G System,
            Integrated Metering & Control Systems and Early Production
            Facilities.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Column: List of Offerings (No images) */}
            <div className="border border-gray-400 p-6">
              <ul className="list-none space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <FaProjectDiagram className="text-indigo-600 flex-shrink-0 mt-1 mr-3" />
                  Process System (Liquid & Gas)
                </li>
                <li className="flex items-start">
                  <FaProjectDiagram className="text-indigo-600 flex-shrink-0 mt-1 mr-3" />
                  Metering & Instrumentation (Liquid & Gas)
                </li>
                <li className="flex items-start">
                  <FaProjectDiagram className="text-indigo-600 flex-shrink-0 mt-1 mr-3" />
                  ESD & F&G System
                </li>
                <li className="flex items-start">
                  <FaProjectDiagram className="text-indigo-600 flex-shrink-0 mt-1 mr-3" />
                  Control Systems – PLC, SCADA, DCS
                </li>
                <li className="flex items-start">
                  <FaProjectDiagram className="text-indigo-600 flex-shrink-0 mt-1 mr-3" />
                  Corrosion Monitoring
                </li>
                <li className="flex items-start">
                  <FaProjectDiagram className="text-indigo-600 flex-shrink-0 mt-1 mr-3" />
                  Pigging
                </li>
                <li className="flex items-start">
                  <FaProjectDiagram className="text-indigo-600 flex-shrink-0 mt-1 mr-3" />
                  Chemical Injection Skid
                </li>
                <li className="flex items-start">
                  <FaProjectDiagram className="text-indigo-600 flex-shrink-0 mt-1 mr-3" />
                  Water Bath Heaters
                </li>
                <li className="flex items-start">
                  <FaProjectDiagram className="text-indigo-600 flex-shrink-0 mt-1 mr-3" />
                  Well Testing & Early Production Facilities
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-4 p-2 ">
              <img
                src={seiupImg3}
                alt="Engineering Unit"
                className={`h-[500px] w-full rounded-none`}
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-900 text-white p-5 md:p-12 rounded-none border-t-8 border-gray-700">
          <FaChartLine className={`mr-4 text-3xl`} />
          <br />{" "}
          <h2
            className={`text-4xl font-extrabold mb-8 flex items-center  pb-2 `}
          >
            Procurement & Supply Chain Management
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="grid grid-cols-1 gap-6 border-4 border-gray-700 p-4">
              <img
                src={pscsmImg4}
                alt="Procurement"
                className={`${imageClasses} rounded-none`}
              />
            </div>

            <div className="p-0 rounded-none h-full pb-4">
              <h3 className={`text-3xl font-bold mb-6`}>Key Focus Areas</h3>
              <ul className="list-none space-y-4 text-xl font-medium">
                <li className="flex items-center  border-gray-700 pb-2">
                  Financial leverage ~$1m
                </li>
                <li className="flex items-center  border-gray-700 pb-2">
                  OEM contract/relationships
                </li>
                <li className="flex items-center  border-gray-700 pb-2">
                  Local/regional (global) access
                </li>
                <li className="flex items-center">+ Years of experience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesApproachSection;
