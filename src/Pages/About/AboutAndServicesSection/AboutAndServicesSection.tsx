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
        <div className="bg-blue-900 text-white p-4 md:p-10 rounded-lg mb-12 lg:mb-16">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white mb-6 
          border-b-4 border-blue-300 pb-2"
          >
            Our Services
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-blue-100">
            <li>Asset Integrity Management</li>
            <li>Non-Destructive Testing (NDT)</li>
            <li>Rope Access Services</li>
            <li>Inspection Services</li>
            <li>Consultancy</li>
            <li>Training</li>
            <li>QA/QC Services</li>
          </ul>
        </div>

        {/* Testing, Inspection, Certification Section - Grid Layout */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 text-left mb-4">
            What we do?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testing Card */}
            <div className="bg-white p-6 rounded-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-blue-700 mb-4 border-b-2 border-blue-300 pb-2">
                Testing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Reduce risks, shorten time to market and test the quality,
                safety and performance of your products against relevant health,
                safety and regulatory standards with our team of professionals
                and network of testing facilities.
              </p>
            </div>

            {/* Inspection Card */}
            <div className="bg-white p-6 rounded-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-blue-700 mb-4 border-b-2 border-blue-300 pb-2">
                Inspection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Control quantity and quality, and meet all relevant regulatory
                requirements across different sectors and markets with our
                world-leading inspection and verification services.
              </p>
            </div>

            {/* Certification Card */}
            <div className="bg-white p-6 rounded-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-blue-700 mb-4 border-b-2 border-blue-300 pb-2">
                Certification
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mitigate risks, improve efficiency and compliance, and ensure
                best practices with audits and certification from West Hova.
              </p>
            </div>
          </div>
          {/* Bottom paragraph for the T, I, C section */}
          <p className="mt-10 text-[16px] text-gray-800 text-center bg-blue-100 p-4 rounded-lg">
            Our specialist audit service teams offer you global experience in
            every industry and sector to ensure that your projects, products,
            processes and operations meet and exceed the market regulations and
            standards required.
          </p>
        </div>

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
