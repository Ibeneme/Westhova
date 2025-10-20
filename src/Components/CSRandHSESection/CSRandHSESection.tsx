import React from "react";
// Importing icons from React Icons for a modern look
import {
  FaHandshake, // For community/CSR
  FaChild, // For community development focus
  FaLightbulb, // For innovation/development
  FaShieldAlt, // For HSE general
  FaHeartbeat, // For Health
  FaIndustry, // For Safety
  FaLeaf, // For Environment
  FaCheckCircle, // For commitments
} from "react-icons/fa";
import { GiOilDrum } from "react-icons/gi"; // For industry context
// Assuming serviceImg1 is correctly imported from your assets path
// import serviceImg1 from "../../assets/images/mission.jpg";
import f from "../../assets/services/ss.png";
import g from "../../assets/services/sss.png";

// Using a standard placeholder for demonstration since I can't access your local file
const serviceImg1 = f;
const serviceImg2 = g;

const CSRandHSESection: React.FC = () => {
  return (
    // 1. Change section background to white and remove gradient
    <section className="bg-white text-gray-800 py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* --- 1. Corporate Social Responsibility (CSR) --- */}
        <div className="bg-gray-50 text-gray-800 p-8 md:p-12 rounded-2xl  flex flex-col lg:flex-row gap-8 items-center border border-gray-100">
          {/* CSR Image Container - Added fixed height on large screens */}
          <div className="w-full lg:w-1/2 flex justify-center lg:h-96">
            <img
              src={serviceImg1} // Use your imported serviceImg1 here
              alt="Community Development"
              // Added h-full and object-cover to ensure image fills and crops nicely
              className="rounded-lg  w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* CSR Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-6 flex items-center">
              <FaHandshake className="text-yellow-500 mr-4 text-3xl" />
              Corporate Social Responsibility
            </h2>
            <p className="text-lg leading-relaxed mb-6 border-l-4 border-yellow-500 pl-4">
              West Hova is committed to applying the high ethical standards
              necessary to maintain our reputation as an employer and operator
              of choice. In our operational decisions, we take appropriate
              account of the social, health, safety and environmental impacts
              that may arise during our activities.
            </p>
            <p className="text-md leading-relaxed text-gray-700">
              <strong className="text-blue-700">CSR</strong> is a fundamental
              part of our corporate strategy and has both practical and ethical
              dimensions for us. It includes managing business concerns, such as
              risk; enhancing reputation in conjunction with investing in the
              community, and creating a place where people feel good about
              working.
            </p>
          </div>
        </div>

        {/* --- 2. Community Development Section (Adjusted for white background) --- */}
        <div className="bg-blue-800 p-8 md:p-12 rounded-2xl text-white">
          <h3 className="text-4xl font-extrabold mb-8 flex items-center">
            <FaChild className="text-yellow-300 mr-4 text-3xl" />
            Community Development Initiatives
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            West Hova lays particular emphasis on Community Involvement,
            participation and development. Our Community Development Unit has
            the following objectives:
          </p>
          <ul className="list-none space-y-4 text-lg font-medium">
            <li className="flex items-start">
              To undertake and finance host community projects to promote
              advancement and sustainable development.
            </li>
            <li className="flex items-start">
              To facilitate employment opportunities and advance education and
              capacity within host communities.
            </li>
          </ul>
        </div>

        {/* --- 3. Health, Safety and Environmental (HSE) --- */}
        <div className="bg-gray-50 text-gray-800 p-8 md:p-12 rounded-2xl  flex flex-col lg:flex-row-reverse gap-8 items-center border border-gray-100">
          {/* HSE Image Container - Added fixed height on large screens */}
          <div className="w-full lg:w-1/2 flex justify-center lg:h-96">
            <img
              src={serviceImg2} // Use your imported serviceImg1 here, or serviceImg2 for a different look
              alt="HSE Safety Protocols"
              // Added h-full and object-cover to ensure image fills and crops nicely
              className="rounded-lg  w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* HSE Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-6 flex items-center">
              <FaShieldAlt className="text-red-600 mr-4 text-3xl" />
              Health, Safety & Environmental Excellence
            </h2>
            <p className="text-lg leading-relaxed mb-6 border-l-4 border-red-600 pl-4">
              Health, Safety and Environmental issues have significant
              implications for all businesses, across all sectors and
              industries.
            </p>
            <p className="text-xl font-semibold text-gray-700 mb-4">
              At West Hova, our HSE department ensures we are committed to:
            </p>

            <ul className="list-none space-y-3 text-md text-gray-700">
              <li className="flex items-start">
                <FaHeartbeat className="text-green-600 flex-shrink-0 mt-1 mr-3 text-xl" />
                Protect, and strive for improvement of, the health, safety and
                security of our people at all times.
              </li>
              <li className="flex items-start">
                <FaIndustry className="text-blue-600 flex-shrink-0 mt-1 mr-3 text-xl" />
                Prevent accidents and occupational illness in our facilities.
              </li>
              <li className="flex items-start">
                <GiOilDrum className="text-gray-600 flex-shrink-0 mt-1 mr-3 text-xl" />
                Meet specific customer requirements and ensure continuous
                customer satisfaction.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-purple-600 flex-shrink-0 mt-1 mr-3 text-xl" />
                Our Quality & HSE performance is reviewed to ensure it meets
                targets and continually improve processes, services and product
                quality, through the use of an effective management system.
              </li>
              <li className="flex items-start">
                <FaShieldAlt className="text-red-600 flex-shrink-0 mt-1 mr-3 text-xl" />
                Plan for, respond to and recover from any emergency, crisis and
                business disruption.
              </li>
              <li className="flex items-start">
                <FaLeaf className="text-green-600 flex-shrink-0 mt-1 mr-3 text-xl" />
                Minimize our impact on the environment through pollution
                prevention, reduction of natural resource consumption and
                emissions, and the reduction and recycling of waste; Apply our
                technical skills to all HSE aspects in the design and
                engineering of our services and products.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-blue-600 flex-shrink-0 mt-1 mr-3 text-xl" />
                Communicate openly with stakeholders and ensure an understanding
                of our HSE policies, standards, programs and performance.
              </li>
              <li className="flex items-start">
                <FaLightbulb className="text-yellow-600 flex-shrink-0 mt-1 mr-3 text-xl" />
                Reward outstanding HSE performance.
              </li>
            </ul>

            <p className="mt-8 text-sm text-gray-600 leading-relaxed border-t border-gray-300 pt-4">
              This commitment is regularly reviewed to ensure ongoing
              suitability. The commitments listed are in addition to our basic
              obligation to comply with our standards and values, as well as all
              applicable laws and regulations where we operate. This is critical
              to our business success because it allows us to systematically
              minimize all losses and adds value for all our stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSRandHSESection;
