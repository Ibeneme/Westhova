import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { TbBrandThreads } from "react-icons/tb";
import logo from "../../assets/logo.png";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";

interface FooterProps {
  hideContactUs?: boolean;
}

const Footer: React.FC<FooterProps> = ({ hideContactUs }) => {
  return (
    <footer className="bg-white text-gray-900 w-full">
      {!hideContactUs && <ContactUs />}

      <div className="mx-auto flex flex-col md:flex-row justify-between px-4 md:px-16 py-12 gap-8">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-6">
          <img src={logo} alt="West Hova Logo" className="w-64 h-auto" />
          <p className="text-gray-700 leading-relaxed">
            Committed to maintaining the highest standards of Health, Safety,
            Environment, and Security (HSES), we ensure our operations protect
            lives, minimize environmental impact, and promote a safe working
            environment for employees, clients, and host communities.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <TbBrandThreads size={20} />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-3 mt-6 md:mt-0 md:items-end">
          <Link
            to="/about-us"
            className="hover:text-blue-500 transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/relations-policy"
            className="hover:text-blue-500 transition-colors"
          >
            Relations Policy
          </Link>
          <Link
            to="/hses-policy"
            className="hover:text-blue-500 transition-colors"
          >
            HSES Policy
          </Link>
          <Link to="/faqs" className="hover:text-blue-500 transition-colors">
            FAQs
          </Link>
          <Link
            to="/services"
            className="hover:text-blue-500 transition-colors"
          >
            Our Services
          </Link>
          <Link
            to="/contact-us"
            className="hover:text-blue-500 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-8 py-4 text-center text-gray-500 text-sm">
        © 2025 West Hova Integrated Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
