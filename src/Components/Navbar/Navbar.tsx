import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai"; // Importing the arrow and close icons
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <NavLink to="/" className="logo">
          <img
            src={logo}
            alt="Logo"
            className="clipped-image"
            style={{ height: 38 }}
          />
        </NavLink>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose size={24} /> : "☰"}{" "}
          {/* Toggle burger/cancel icon */}
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {/* Adding a left arrow next to links in mobile view */}
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about-us" },
            { name: "Relations Policy", path: "/relations-policy" },
            { name: "HSES Policy", path: "/hses-policy" },
            { name: "FAQs", path: "/faqs" },
            { name: "Our Services", path: "/services" },
            { name: "Contact Us", path: "/contact-us" },
          ].map(({ name, path }) => (
            <li key={name} className="">
              {/* Left arrow icon in mobile view */}

              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsOpen(false)}
                style={{ width: "100%" }}
              >
                <div className="nav-item">
                  <p className="nav-item-p"> {name}</p>

                  {isOpen && (
                    <FaArrowRightLong
                      size={14}
                      className="mode-arrow"
           
                    />
                  )}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
