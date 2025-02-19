import React from "react";
import "./HsesPolicy.css";

const HsesPolicy: React.FC = () => {
  return (
    <div className="hses-container">
      <h1 className="hses-title">
        HEALTH, SAFETY, ENVIRONMENT AND SECURITY (HSES) POLICY
      </h1>

      <p className="hses-intro">
        In compliance thereof to the Mineral Oils Act of Nigeria (1963) and
        related regulations, and in keeping to our clients' operations
        philosophy,{" "}
        <strong style={{ fontFamily: `var(--secondary-font)` }}>
          WEST HOVA INTEGRATED SOLUTIONS
        </strong>{" "}
        adopts the following Safety, Health, Environment, and Security (HSES)
        Policy.
      </p>

      <p className="hses-intro">
        The sole aim of this Policy is to maintain and improve on the level of
        HSES awareness amongst our employees and third parties in carrying out
        business activities in such a manner that no fatality, serious injuries,
        or damage to the company or client’s property arise therefrom.
      </p>

      <p className="hses-intro">
        The company shall take all available steps to protect life and
        properties of staff and clients, including third parties and host
        communities who are engaged in the project activities for us.
      </p>

      <br />
      <h2 className="hses-subtitle">Policy Statement</h2>
      <ul className="hses-list">
        <li>
          Preserves Health, Safety, and Security of employees, the employees of
          our clients, and all members of the public who may be affected by our
          operations.
        </li>
        <li>
          Ensures the continuous identification and control of
          accident-causes (HAZARDS) associated with our operations.
        </li>
        <li>Ensures the minimization of accident losses.</li>
        <li>Minimizes the impact of its operations on the environment.</li>
        <li>
          Is sensitive to the needs and concerns of West Hova’s host
          communities.
        </li>
      </ul>
      <br />

      <p className="hses-intro">
        It is therefore the policy of{" "}
        <strong style={{ fontFamily: `var(--secondary-font)` }}>
          WEST HOVA INTEGRATED SOLUTIONS
        </strong>{" "}
        to ensure that our employees are sponsored in all relevant HSES
        training and that they are fit and healthy. Since work does affect any
        or every system of the human body, it is essential that early
        recognition of health hazards is established, monitored, and controlled.
      </p>

      <p className="hses-intro">
        The company maintains a functional medical retainer-ship for regular
        and emergency treatments for staff, which has been and will continue to
        offer services. The promotion of the total health concept and the
        protection of workers through the provision and enforcement of PPEs
        cannot be overemphasized.
      </p>

      <br />
      <h2 className="hses-subtitle">Commitment to a Safe Environment</h2>
      <p className="hses-intro">
        Active promotion of a safe environment is not only essential but also
        good business. Hence,{" "}
        <strong style={{ fontFamily: `var(--secondary-font)` }}>
          WEST HOVA INTEGRATED SOLUTIONS
        </strong>{" "}
        is committed to ensuring, always, especially in the course of our work,
        a clean and healthy environment. It is in this respect that we implement
        our Waste Management Policy to the letter.
      </p>

      <p className="hses-intro">
        The above HSES policy will be constantly monitored and updated as
        required.
      </p>

      <p className="hses-warning">
        <br />
        <strong style={{ fontFamily: `var(--secondary-font)` }}>
          IF A JOB CANNOT BE DONE SAFELY, IT SHALL NOT BE STARTED OR CONTINUED.
        </strong>
      </p>
      < br />< br />
      <p className="community-signature">
        <strong style={{ fontFamily: `var(--secondary-font)` }}>
          Managing Director
        </strong>
      </p>
    </div>
  );
};

export default HsesPolicy;