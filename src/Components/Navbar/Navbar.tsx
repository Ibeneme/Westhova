import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbarr ${scrolled ? "scrolled" : ""}`}>
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
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsOpen(false)}
              >
                <div className="nav-item">
                  <p className="nav-item-p">{name}</p>
                  {isOpen && <FaArrowRightLong size={14} className="mode-arrow" />}
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