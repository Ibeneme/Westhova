import { IoArrowForwardCircle } from "react-icons/io5"; // Importing the icon
import "./Hero.css"; // Importing the CSS file
import heroImage from "../../assets/sections/hero/hero.jpg"; // Importing the background image
import { useState, useEffect } from "react"; // Importing useState and useEffect hooks

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  // Update scroll position on scroll event (Parallax effect)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="hero-section">
      {/* Background Image with Parallax Effect */}
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: `center ${scrollY * 0.3}px`, // Parallax effect
        }}
      >
        {/* Dark Overlay for Better Readability */}
        <div className="overlay"></div>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-heading">
            West Hova Integrated Solutions: Powering the Future of Oil & Gas
          </h1>
          <p className="hero-text">
            At West Hova Integrated Solutions, we specialize in cutting-edge
            oilfield services, ensuring safe, efficient, and sustainable energy
            solutions. From drilling support to HSE compliance, we deliver
            excellence at every stage of the oil & gas lifecycle.
          </p>
          {/* CTA Button */}
          <button className="cta-button">
            Get in Touch
            <IoArrowForwardCircle size={24} className="cta-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
