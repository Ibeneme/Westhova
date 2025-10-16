import React from "react";

const HsesPolicy: React.FC = () => {
  return (
    <section className="w-full bg-white text-gray-900 font-sans py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <h1 className="text-3xl md:text-5xl font-bold text-left">
          HEALTH, SAFETY, ENVIRONMENT AND SECURITY (HSES) POLICY
        </h1>

        <p className="text-lg md:text-xl leading-relaxed">
          In compliance thereof to the Mineral Oils Act of Nigeria (1963) and
          related regulations, and in keeping to our clients' operations
          philosophy,{" "}
          <strong className="font-semibold" style={{ fontFamily: "var(--secondary-font)" }}>
            WEST HOVA INTEGRATED SOLUTIONS
          </strong>{" "}
          adopts the following Safety, Health, Environment, and Security (HSES)
          Policy.
        </p>

        <p className="text-lg md:text-xl leading-relaxed">
          The sole aim of this Policy is to maintain and improve on the level of
          HSES awareness amongst our employees and third parties in carrying out
          business activities in such a manner that no fatality, serious injuries,
          or damage to the company or client’s property arise therefrom.
        </p>

        <p className="text-lg md:text-xl leading-relaxed">
          The company shall take all available steps to protect life and
          properties of staff and clients, including third parties and host
          communities who are engaged in the project activities for us.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-8">
          Policy Statement
        </h2>

        <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
          <li>Preserves Health, Safety, and Security of employees, the employees of our clients, and all members of the public who may be affected by our operations.</li>
          <li>Ensures the continuous identification and control of accident-causes (HAZARDS) associated with our operations.</li>
          <li>Ensures the minimization of accident losses.</li>
          <li>Minimizes the impact of its operations on the environment.</li>
          <li>Is sensitive to the needs and concerns of West Hova’s host communities.</li>
        </ul>

        <p className="text-lg md:text-xl leading-relaxed mt-6">
          It is therefore the policy of{" "}
          <strong className="font-semibold" style={{ fontFamily: "var(--secondary-font)" }}>
            WEST HOVA INTEGRATED SOLUTIONS
          </strong>{" "}
          to ensure that our employees are sponsored in all relevant HSES
          training and that they are fit and healthy. Since work does affect any
          or every system of the human body, it is essential that early
          recognition of health hazards is established, monitored, and controlled.
        </p>

        <p className="text-lg md:text-xl leading-relaxed">
          The company maintains a functional medical retainer-ship for regular
          and emergency treatments for staff, which has been and will continue to
          offer services. The promotion of the total health concept and the
          protection of workers through the provision and enforcement of PPEs
          cannot be overemphasized.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-8">
          Commitment to a Safe Environment
        </h2>

        <p className="text-lg md:text-xl leading-relaxed">
          Active promotion of a safe environment is not only essential but also
          good business. Hence,{" "}
          <strong className="font-semibold" style={{ fontFamily: "var(--secondary-font)" }}>
            WEST HOVA INTEGRATED SOLUTIONS
          </strong>{" "}
          is committed to ensuring, always, especially in the course of our work,
          a clean and healthy environment. It is in this respect that we implement
          our Waste Management Policy to the letter.
        </p>

        <p className="text-lg md:text-xl leading-relaxed">
          The above HSES policy will be constantly monitored and updated as
          required.
        </p>

        <p className="text-lg md:text-xl font-semibold mt-6 text-red-700">
          IF A JOB CANNOT BE DONE SAFELY, IT SHALL NOT BE STARTED OR CONTINUED.
        </p>

        <p className="text-lg md:text-xl font-semibold mt-8">
          <span className="font-sans" style={{ fontFamily: "var(--secondary-font)" }}>
            Managing Director
          </span>
        </p>
      </div>
    </section>
  );
};

export default HsesPolicy;