import React, { useState } from "react";
import {
  FaComments,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaArrowRight, // Imported for the trailing icon
  FaMailBulk, // Using a different icon for the list items for variety
  FaMobileAlt, // Using a different icon for phone list items
} from "react-icons/fa";

// Define custom colors for professional look
const accentColor = "bg-[#0F6DF9]"; // Primary accent blue (#0F6DF9) for button
const itemBg = "bg-gray-800"; // Black/very dark gray background for list items
const itemHoverBg = "hover:bg-gray-700"; // Lighter hover state for interactivity
const itemTextColor = "text-white"; // White text for visibility on dark background

const FloatingContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the modal open/closed
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Define contact data
  const contact = {
    emails: ["admin@westhova.com", "henry@westhova.com"],
    phones: ["+2349027661296", "+2348151554215"],
  };

  return (
    <>
      {/* 1. Floating Action Button (FAB) */}
      <button
        onClick={toggleModal}
        // Position: bottom 24, right 16
        className={`
          fixed bottom-6 right-4 sm:bottom-8 sm:right-6 md:bottom-24 md:right-16 
          ${accentColor} text-white 
          w-16 h-16 rounded-full shadow-2xl 
          flex items-center justify-center 
          transition-transform duration-300 ease-in-out 
          hover:scale-105 z-50
        `}
        aria-label={isOpen ? "Close Contact Options" : "Open Contact Options"}
      >
        {isOpen ? (
          <FaTimes className="w-6 h-6 animate-pulse" />
        ) : (
          <FaComments className="w-6 h-6" />
        )}
      </button>

      {/* 2. Contact Modal (Hidden by default) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleModal} // Close modal when clicking outside
        >
          <div
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
            // Modal position aligned with the FAB
            className={`
              fixed bottom-24 right-4 sm:bottom-28 sm:right-6 md:bottom-44 md:right-16
              bg-white p-6 rounded-lg shadow-2xl w-80 max-w-sm 
              transform transition-all duration-300 ease-in-out z-50
            `}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              How Can We Help?
            </h3>

            {/* A. Send a Mail Section */}
            <div className="mb-6">
              <div className="flex items-center text-lg font-semibold text-[#0F6DF9] mb-3">
                <FaEnvelope className="mr-3" /> Send a Mail
              </div>
              <ul className="space-y-3">
                {contact.emails.map((email, index) => (
                  <li key={index}>
                    <a
                      href={`mailto:${email}`}
                      className={`
                        ${itemBg} ${itemHoverBg} ${itemTextColor}
                        flex items-center justify-between p-3 rounded-md transition duration-200 shadow-md
                      `}
                    >
                      <span className="flex items-center text-sm">
                        <FaMailBulk className="mr-3 text-[#0F6DF9] flex-shrink-0 w-4 h-4" />
                        {email}
                      </span>
                      <FaArrowRight className="w-3 h-3 text-gray-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* B. Phone Call Section */}
            <div>
              <div className="flex items-center text-lg font-semibold text-green-600 mb-3">
                <FaPhone className="mr-3" /> Call Us Directly
              </div>
              <ul className="space-y-3">
                {contact.phones.map((phone, index) => (
                  <li key={index}>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className={`
                        ${itemBg} ${itemHoverBg} ${itemTextColor}
                        flex items-center justify-between p-3 rounded-md transition duration-200 shadow-md
                      `}
                    >
                      <span className="flex items-center text-sm">
                        <FaMobileAlt className="mr-3 text-green-500 flex-shrink-0 w-4 h-4" />
                        {phone}
                      </span>
                      <FaArrowRight className="w-3 h-3 text-gray-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              aria-label="Close"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingContactButton;