import { IoArrowForwardCircle } from "react-icons/io5"; // Importing the icon
import "./Hero.css"; // Importing the CSS file
import heroImage from "../../assets/sections/hero/heroa.jpg"; // Importing the background image
import { useState, useEffect } from "react"; // Importing useState and useEffect hooks
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navigate = useNavigate();
  const handleReadMore = () => {
    navigate("/contact-us"); // Navigate to '/contact-us' if property exists
  };

  return (
    <section className="hero-section">
      <div
        className="hero-bg"
        style={{
          objectFit: "contain",
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: `center calc(70% + ${scrollY * 0.3}px)`, // Center-bottom focus + parallax
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Dark Overlay for Better Readability */}
        <div className="overlay"></div>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-heading">Thinking <span style={{color: `#fff`}}>Globally,</span> Acting Locally</h1>
          <p className="hero-text">
            West Hova Integrated Solutions is a service company leading provider
            of inspection, testing, and certification services to all the oil
            and gas industry. With a team of highly experienced professionals
            and state-of-the-art equipment, we offer a range of services to
            ensure the safety, efficiency, and compliance of offshore
            operations.
          </p>
          {/* CTA Button */}
          <button className="cta-button" onClick={handleReadMore}>
            Get in Touch
            <IoArrowForwardCircle size={24} className="cta-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
