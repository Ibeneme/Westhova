import { IoArrowForwardCircle } from "react-icons/io5"; // Importing the icon
import "./Hero.css"; // Importing the CSS file
import heroImage from "../../assets/sections/hero/hero.jpg"; // Importing the image
import { useState, useEffect } from "react"; // Importing useState and useEffect hooks

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  // Update scroll position on scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Get the scroll position
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener
    };
  }, []);

  return (
    <section className="hero-section">
      {/* Background Image Wrapper */}
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${heroImage})`, // Inline style for the background image
          backgroundPosition: `center ${scrollY * 0.3}px`, // Parallax effect by adjusting background position
        }}
      >
        {/* Dark Overlay */}
        <div className="overlay"></div>

        {/* Centered Content */}
        <div className="hero-content">
          <h1 className="hero-heading">West Hova Integrated Solutions</h1>
          <p className="hero-text">
            Committed to maintaining the highest standards of Health, Safety, Environment, and Security (HSES), we ensure our operations protect lives, minimize environmental impact, and promote a safe working environment for employees, clients, and host communities.
          </p>
          {/* CTA Button */}
          <button className="cta-button">
            Contact Us
            <IoArrowForwardCircle size={24} className="cta-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;