import "./ContactUs.css";

const ContactUs = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:chatwazobia@gmail.com";
  };

  return (
    <section className="contact-us">
      <h1 className="contact-us-title">Contact Us</h1>
      <p className="contact-us-description">
        Have questions, need assistance, or want to learn more about our
        services? We’d love to hear from you! Whether it's about our energy
        solutions, oilfield services, or any inquiries you may have, feel free
        to reach out to our team. We are committed to providing top-notch
        support and ensuring you get the best solutions tailored to your needs.
      </p>
      <button className="contact-us-button" onClick={handleContactClick}>
        Email Us
      </button>
    </section>
  );
};

export default ContactUs;
