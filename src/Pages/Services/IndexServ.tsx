import React from "react";
import "./Services.css";
import ServicesData from "./ServicesData";

const Services: React.FC = () => {
  return (
    <div className="services-container">
      <main className="services-main-container">
        {/* Intro Section with Image */}
        <section className="services-main">
          <section className="intro">
            <h1>Westhova</h1>
            <p>
              Westhova offers a diverse portfolio of industrial services
              tailored to meet the unique needs of Oil & Gas, Power, Healthcare,
              and Manufacturing sectors. From environmental services to
              maintenance, we've got you covered.
            </p>
          </section>
        </section>
        {/* Services List */}
        <section className="services-list">
          {ServicesData.map((service) => (
            <div key={service.id} className="service">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
              <h2 style={{ marginTop: 12, marginBottom: 4 }}>
                {service.title}
              </h2>
              <p style={{ color: "#666", lineHeight: 1.3, fontSize: 18 }}>
                {service.description}
              </p>
            </div>
          ))}
        </section>
        {/* Industries Served with Background Image */}
        {/* <section className="industries-served">
          <h2>Industries Served</h2>
          <p>
            Westhova provides solutions that empower industries, enhance returns
            from productivity, and expand their reach to new global markets. We
            have been efficient in servicing the following industries:
          </p>
          <ul>
            <li>Oil and Gas</li>
            <li>Power</li>
            <li>Healthcare</li>
            <li>Manufacturing</li>
            <li>Commodities</li>
            <li>Agriculture</li>
          </ul>
        </section> */}
      </main>
    </div>
  );
};

export default Services;
