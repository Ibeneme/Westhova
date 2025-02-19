import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { TbBrandThreads } from "react-icons/tb";
import logo from "../../assets/logo.jpg";
import "./Footer.css";
import ContactUs from "./ContactUs";
import ContactInfo from "./ContactInfo";
import { Link } from "react-router-dom";

interface FooterProps {
  hideContactUs?: boolean;
  showContactUs?: boolean;
}

const Footer: React.FC<FooterProps> = ({ hideContactUs, showContactUs }) => {
  return (
    <footer className="footer">
      {!hideContactUs && <ContactUs />}
      {!showContactUs && <ContactInfo />}
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo-section">
            <img
              src={logo}
              alt="Chat WaZoBia AI Logo"
              className="footer-logo"
            />
          </div>
          <p className="footer-description">
            Committed to maintaining the highest standards of Health, Safety,
            Environment, and Security (HSES), we ensure our operations protect
            lives, minimize environmental impact, and promote a safe working
            environment for employees, clients, and host communities.
          </p>
          <div className="footer-icons">
            <span className="social-icon">
              <FaFacebookF />
            </span>
            <span className="social-icon">
              <TbBrandThreads />
            </span>
            <span className="social-icon">
              <FaTwitter />
            </span>
            <span className="social-icon">
              <FaYoutube />
            </span>
            <span className="social-icon">
              <FaInstagram />
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <Link to="/about-us" className="footer-link">
            About Us
          </Link>
          <Link to="/relations-policy" className="footer-link">
            Relations Policy
          </Link>
          <Link to="/hses-policy" className="footer-link">
            HSES Policy
          </Link>
          <Link to="/faqs" className="footer-link">
            FAQs
          </Link>
          <Link to="/services" className="footer-link">
            Our Services
          </Link>
          <Link to="/contact-us" className="footer-link">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 West Hova Integrated Solutions. All rights reserved.</p>
        <p>
          {/* <a href="/privacy-policy" className="footer-bottom-link">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="footer-bottom-link">
            Terms and Conditions
          </a> */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
