import React from "react";

const CommunityRelationsPolicy: React.FC = () => {
  return (
    <section className="w-full bg-white text-gray-900 font-sans py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <h1 className="text-3xl md:text-5xl font-bold text-left">
          COMMUNITY RELATIONS POLICY
        </h1>

        <p className="text-lg md:text-xl leading-relaxed">
          In developing our policy and plans for interaction with communities
          within our areas of operation where works are to be executed,{" "}
          <strong
            className="font-semibold"
            style={{ fontFamily: "var(--secondary-font)" }}
          >
            WEST HOVA INTEGRATED SOLUTIONS
          </strong>{" "}
          has identified the root causes of community disturbances, which
          primarily include:
        </p>

        <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
          <li>Economic hardship resulting from a depressed economy</li>
          <li>
            Incitement of marginalization of communities by their
            representatives
          </li>
          <li>Low literacy levels</li>
          <li>Communication gap</li>
          <li>Urban-rural migration</li>
        </ul>

        <p className="text-lg md:text-xl leading-relaxed mt-6">
          As an environmentally sensitive company, our policy is to prevent any
          disturbances and instead foster active cooperation with host
          communities. We aim to achieve this through our HSES department by:
        </p>

        <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
          <li>
            Engaging host community indigenes for all casual employment and site
            security staff.
          </li>
          <li>Allocating a budget for community development projects.</li>
        </ul>

        <p className="text-lg md:text-xl leading-relaxed mt-6">
          Our HSES department will work closely with our client’s Community
          Liaison Officers (CLOs) and visit anticipated host communities to
          establish agreements that outline areas of cooperation and assistance.
          These agreements will be in line with company procedures and will be
          finalized before mobilization to project sites.
        </p>

        <p className="text-lg md:text-xl leading-relaxed">
          Additionally, our goal is to avoid disturbances or minimize them
          entirely. To achieve this, we will ensure representation in all
          community affairs, seminars, and meetings organized by our clients.
        </p>

        <p className="text-lg md:text-xl leading-relaxed">
          We will respond to all formal community requests in an appropriate and
          timely manner. In the event of disturbances, we will strive to resolve
          conflicts peacefully using our previously established relationships
          with the communities involved.
        </p>

        <p className="text-lg md:text-xl leading-relaxed">
          If conflicts escalate beyond our control, we will seek the support of
          Local Government Authorities, clan heads, and elite members of the
          communities for resolution.
        </p>

        <p className="text-lg md:text-xl font-semibold mt-8">
          <span
            className="font-sans"
            style={{ fontFamily: "var(--secondary-font)" }}
          >
            Managing Director
          </span>
        </p>
      </div>
    </section>
  );
};

export default CommunityRelationsPolicy;
