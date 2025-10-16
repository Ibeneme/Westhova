import React from 'react';
// Import specific icons from the react-icons/ai set
import { AiOutlineCheckCircle, AiOutlineClockCircle } from 'react-icons/ai'; 

// Define the data structure
interface ServiceEntry {
  description: string;
  client: string;
  status: 'Completed' | 'Ongoing';
}

// Data extracted from the image
const serviceExperienceData: ServiceEntry[] = [
  {
    description: 'General Maintenance Engine, Cargo Tanks and Pump Room FPSO Trinity Spirit',
    client: 'Atlas Oranto Petroleum',
    status: 'Completed',
  },
  {
    description: 'Cargo Accounting and Procurement Support Services',
    client: 'Tulcan Energies',
    status: 'Completed',
  },
  {
    description: 'Metering System Upgrade',
    client: 'CCNL / ZIRCON MARINE',
    status: 'Completed',
  },
  {
    description: 'ACE Transhipments and Cargo Accounting OML 150',
    client: 'CCNL / CONOG',
    status: 'Ongoing',
  },
  {
    description: 'ACE Operations and Bunker Accounting (Brass - Ogboinbin Flow Station)',
    client: 'CCNL / OANDO',
    status: 'Ongoing',
  },
  {
    description: 'Trainings and Capacity Development for Staff Members',
    client: 'Donna Spectre',
    status: 'Ongoing',
  },
  {
    description: 'Crude Oil Evacuation Operation and Custody Transfer FPSO Trinity Spirit',
    client: 'Atlas Oranto Petroleum',
    status: 'Completed',
  },
  {
    description: 'ACE Transhipments and Assets management OML 109',
    client: 'Atlas Oranto Petroleum',
    status: 'Completed',
  },
];

// Helper component for the Status Badge using React Icons
const StatusBadge: React.FC<{ status: 'Completed' | 'Ongoing' }> = ({ status }) => {
  const isCompleted = status === 'Completed';
  return (
    <div
      className={`
        flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold
        ${isCompleted 
          ? 'bg-green-100 text-green-700' 
          : 'bg-yellow-100 text-yellow-700'}
      `}
    >
      {/* Dynamic icon based on status */}
      {isCompleted 
        ? <AiOutlineCheckCircle className="w-4 h-4" /> 
        : <AiOutlineClockCircle className="w-4 h-4" />}
      <span>{status}</span>
    </div>
  );
};

const ServiceExperienceGrid: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-left ">
          Our Service Experience
        </h2>

        {/* --- Header Row (for desktop clarity) --- */}
        <div className="hidden md:grid grid-cols-10 text-sm font-bold text-white bg-blue-900 p-3 rounded-t-lg">
          <div className="col-span-6">CONTRACT/PROJECT DESCRIPTION</div>
          <div className="col-span-3">CLIENT</div>
          <div className="col-span-1 text-center">STATUS</div>
        </div>

        {/* --- Data Rows (Grid List) --- */}
        <div className="border border-gray-200 rounded-lg md:rounded-t-none overflow-hidden ">
          {serviceExperienceData.map((entry, index) => (
            <div
              key={index}
              className={`
                grid grid-cols-1 md:grid-cols-10 gap-x-4 p-4 transition-colors duration-200
                ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}
                hover:bg-blue-100 border-b border-gray-100 last:border-b-0
              `}
            >
              {/* DESCRIPTION (Always full-width on mobile, 6 columns on desktop) */}
              <div className="col-span-full md:col-span-6 font-medium text-gray-800">
                {entry.description}
                
                {/* Mobile Client & Status Info */}
                <div className="md:hidden mt-2 space-y-1">
                    <p className="text-xs text-gray-500">
                        <strong className="text-blue-600">Client: </strong>{entry.client}
                    </p>
                    <div className="flex items-center">
                        <StatusBadge status={entry.status} />
                    </div>
                </div>
              </div>

              {/* CLIENT (Hidden on mobile, 3 columns on desktop) */}
              <div className="hidden md:block md:col-span-3 text-gray-700 my-auto">
                {entry.client}
              </div>

              {/* STATUS (Hidden on mobile, 1 column on desktop) */}
              <div className="hidden md:flex md:col-span-1 justify-center items-center">
                <StatusBadge status={entry.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceExperienceGrid;