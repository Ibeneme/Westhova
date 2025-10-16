import React from 'react';

const OrganizationStructure: React.FC = () => {
  return (
    <div className="container mx-auto p-4 pb-24">
      <h2 className="text-2xl font-bold text-center mb-6">ORGANIZATION STRUCTURE</h2>
      <div className="flex flex-col items-center">
        {/* Board of Directors */}
        <div className="bg-[#000] text-white p-2 rounded mb-4">BOARD OF DIRECTORS</div>
        <div className="border-l-2 border-dashed border-[#000] h-8 mb-4"></div>

        {/* GMD/CEO */}
        <div className="bg-[#000] text-white p-2 rounded mb-4">GMD/CEO</div>
        <div className="border-l-2 border-dashed border-[#000] h-8 mb-4"></div>

        {/* GCOO and other direct reports */}
        <div className="flex flex-col items-center w-full mb-4 md:flex-row md:justify-center">
          <div className="flex flex-col items-center">
            <div className="bg-[#000] text-white p-2 rounded mb-2">GCOO</div>
            <div className="border-l-2 border-dashed border-[#000] h-8 mb-4"></div>
          </div>
          <div className="flex flex-col items-center mx-4">
            <div className="bg-[#000] text-white p-2 rounded mb-2">Technical Consultant</div>
            <div className="border-l-2 border-dashed border-[#000] h-8 mb-4"></div>
          </div>
          <div className="flex flex-col items-center mx-4">
            <div className="bg-[#000] text-white p-2 rounded mb-2">Corporate Service</div>
            <div className="border-l-2 border-dashed border-[#000] h-8 mb-4"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#000] text-white p-2 rounded mb-2">Admin Officer</div>
            <div className="border-l-2 border-dashed border-[#000] h-8 mb-4"></div>
          </div>
        </div>

        {/* Sub-levels */}
        <div className="flex flex-col items-center w-full space-y-4 md:flex-row md:justify-center md:space-y-0 md:space-x-4">
          {/* Technical Consultant Branch */}
          <div className="flex flex-col items-center">
            <div className="bg-[#000] text-white p-2 rounded mb-2">Business Development</div>
            <div className="bg-[#000] text-white p-2 rounded mb-2">QHSE</div>
            <div className="bg-[#000] text-white p-2 rounded">Engineering/Support Services</div>
            <div className="border-l-2 border-dashed border-[#000] h-8 mt-2 mb-2"></div>
            <div className="bg-[#000] text-white p-2 rounded">Engineers/Technicians</div>
          </div>

          {/* Corporate Service Branch */}
          <div className="flex flex-col items-center">
            <div className="bg-[#000] text-white p-2 rounded mb-2">Cargo surveyor/Inspection</div>
            <div className="border-l-2 border-dashed border-[#000] h-8 mt-2 mb-2"></div>
            <div className="bg-[#000] text-white p-2 rounded">Surveyors</div>
            <div className="border-l-2 border-dashed border-[#000] h-8 mt-2 mb-2"></div>
            <div className="bg-[#000] text-white p-2 rounded">Chemist</div>
          </div>

          {/* Admin Officer Branch */}
          <div className="flex flex-col items-center">
            <div className="bg-[#000] text-white p-2 rounded mb-2">Human Resource Development (HRD)</div>
            <div className="border-l-2 border-dashed border-[#000] h-8 mt-2 mb-2"></div>
            <div className="bg-[#000] text-white p-2 rounded">Training Facilitators</div>
          </div>
        </div>
      </div>

      
    </div>

  );
};

export default OrganizationStructure;