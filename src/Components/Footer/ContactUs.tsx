import React from "react";

interface ContactUsProps {
  margin?: boolean; // optional prop to control top padding
}

const ContactUs: React.FC<ContactUsProps> = ({ margin }) => {
  return (
    <section
      style={{ paddingTop: margin ? 200 : 64 }}
      className="bg-gray-900 text-white py-16 px-4 md:px-16 font-sans"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left: Contact Info */}
        <div className="flex-1 flex flex-col gap-6">
          <h3 className="text-3xl md:text-4xl font-[900]">Contact Us</h3>

          <p className="bg-white/10 p-4 rounded-lg">
            <strong className="text-white">Address:</strong> 181-A Odili Road,
            Trans Amadi, Port Harcourt, Rivers State.
          </p>

          <p className="bg-white/10 p-4 rounded-lg">
            <strong className="text-white">Contact Number:</strong> +234 902 766
            1296
          </p>

          <p className="bg-white/10 p-4 rounded-lg">
            <strong className="text-white">Email:</strong>{" "}
            <a
              href="mailto:admin@westhova.com"
              className="hover:text-gray-200 "
              style={{color:'#fff'}}
            >
              admin@westhova.com
            </a>
          </p>

          <p className="text-gray-200 leading-relaxed mt-4">
            Have questions, need assistance, or want to learn more about our
            services? We’d love to hear from you! Whether it's about our energy
            solutions, oilfield services, or any inquiries you may have, feel
            free to reach out to our team. We are committed to providing
            top-notch support and ensuring you get the best solutions tailored
            to your needs.
          </p>

          <a
            href="mailto:admin@westhova.com"
            className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Email Us
          </a>
        </div>

        {/* Right: Map */}
        <div className="flex-1">
          <iframe
            title="West Hova Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.773098560831!2d7.008676475313992!3d4.819636196187707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cbb6c85d0025%3A0xf206ea8b28ff0d8b!2s181-A%20Odili%20Road%2C%20Trans%20Amadi%2C%20Port%20Harcourt%2C%20Rivers%20State%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1697518123456!5m2!1sen!2sus"
            className="w-full h-72 md:h-full rounded-lg border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
