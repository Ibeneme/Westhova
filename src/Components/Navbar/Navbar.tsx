import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";

import "./Navbar.css";
import logo from "../../assets/logo.png";
// import { useTheme } from "../../context/ThemeProvider";
// import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo">
          <img
            src={logo}
            alt="Logo"
            className="clipped-image"
            style={{ height: 48, backgroundColor: "#ffffff", padding: 8 }}
          />
        </NavLink>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose size={24} /> : "☰"}{" "}
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about-us" },
            { name: "Relations Policy", path: "/relations-policy" },
            { name: "HSES Policy", path: "/hses-policy" },
            { name: "FAQs", path: "/faqs" },
            { name: "CSR and HSE", path: "/csr" },
            { name: "Our Services", path: "/services" },
            { name: "Contact Us", path: "/contact-us" },
          ].map(({ name, path }) => (
            <li key={name} className="">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsOpen(false)}
                style={{ width: "100%" }}
              >
                <div className="nav-item">
                  <p className="nav-item-p"> {name}</p>

                  {isOpen && (
                    <FaArrowRightLong size={14} className="mode-arrow" />
                  )}
                </div>
              </NavLink>
            </li>
          ))}

          {/* <li className="theme-toggle-li">
          <button 
              onClick={toggleTheme}
              className="theme-toggle-button"
            >
              {isDark ? (
  
                <>
                <span>  <MdLightMode size={24} /></span> 
                </>
              ) : (
   
                <>
                <span>  <MdDarkMode size={24} /> </span>
                </>
              )}
            </button>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
