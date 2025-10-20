import React from "react";

const AboutAndServicesSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Overview Section */}
        <div className="bg-white p-4 md:p-8 rounded-lg mb-4 lg:mb-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-3 pb-2">
            Company Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-blue-700">
              West Hova Offshore Inspections Services
            </strong>{" "}
            is a leading provider of inspection, testing, and certification
            services to the oil and gas industry. With a team of highly
            experienced professionals and state-of-the-art equipment, WHIS
            offers a range of services to ensure the safety, efficiency, and
            compliance of offshore operations.
          </p>
        </div>
      
        {/* Services List Section */}

        {/* Testing, Inspection, Certification Section - Grid Layout */}

        {/* Oil and Gas Section - with image (placeholder) */}
        {/* <div className="bg-white p-4 md:p-10 rounded-lg flex flex-col lg:flex-row items-center gap-8">

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={gasImage}
              alt="Oil and Gas Industry"
              className="rounded-lg w-full h-[320px] object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4 border-b-4 border-blue-500 pb-2">
              Oil and Gas Solutions
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Delivering proven knowledge-based solutions to ensure quality
              assurance and safety in every part of the oil and gas industry.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutAndServicesSection;
