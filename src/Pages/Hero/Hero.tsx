import { IoArrowForwardCircle } from "react-icons/io5"; // Importing the icon
import "./Hero.css"; // Importing the CSS file
import heroImage from "../../assets/sections/oilrig.jpg"; // Importing the background image
import { useState, useEffect } from "react"; // Importing useState and useEffect hooks
import IngentiaEnergies from "../../Components/IngentiaEnergies/IngentiaEnergies";

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
          <h1 className="hero-heading">Powering the Future of Oil & Gas</h1>
          <p className="hero-text">
            West Hova Integrated Solutions delivers advanced oilfield services
            with a focus on safety, efficiency, and sustainability. We
            specialize in drilling support and HSE compliance.
          </p>
          {/* CTA Button */}
          <button className="cta-button">
            Get in Touch
            <IoArrowForwardCircle size={24} className="cta-icon" />
          </button>
        </div>

        <div style={{ marginTop: 120, zIndex: 1 }}>
          <IngentiaEnergies />
        </div>
      </div>
    </section>
  );
};

export default Hero;
