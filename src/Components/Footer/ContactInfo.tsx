import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./ContactInfo.css";

const position: LatLngExpression = [4.8149, 7.0498];

const ContactInfo: React.FC = () => {
  return (
    <div className="contact-info">
      {/* <h2>Contact West Hova Integrated Solutions</h2>
      <p>
        <strong>Address:</strong> 181-A Odili Road, Trans Amadi, Port Harcourt.
      </p>
      <p>
        <strong>Phone:</strong> +234 (0) 902 766 1296, +234 (0) 815 155 4215
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:admin@westhova.com">admin@westhova.com</a>
      </p> */}

      <div className="map-container">
        <MapContainer
          center={position as LatLngExpression}
          zoom={15}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>West Hova Integrated Solutions</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default ContactInfo;
