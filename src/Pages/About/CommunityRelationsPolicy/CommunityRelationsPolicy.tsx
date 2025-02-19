import React from "react";
import "./CommunityRelationsPolicy.css";

const CommunityRelationsPolicy: React.FC = () => {
  return (
    <div className="hses-container">
      <h1 className="hses-title">COMMUNITY RELATIONS POLICY</h1>

      <p className="hses-intro">
        In developing our policy and plans for interaction with communities
        within our areas of operation where works are to be executed,{" "}
        <strong style={{ fontFamily: `var(--secondary-font)` }}>
          WEST HOVA INTEGRATED SOLUTIONS
        </strong>{" "}
        has identified the root causes of community disturbances, which
        primarily include:
      </p>

      <ul className="hses-intro">
        <li className="hses-intro">
          Economic hardship resulting from a depressed economy
        </li>
        <li className="hses-intro">
          Incitement of marginalization of communities by their representatives
        </li>
        <li className="hses-intro">Low literacy levels</li>
        <li className="hses-intro">Communication gap</li>
        <li className="hses-intro">Urban-rural migration</li>
      </ul>
      <br />
      <br />
      <p className="hses-intro">
        As an environmentally sensitive company, our policy is to prevent any
        disturbances and instead foster active cooperation with host
        communities. We aim to achieve this through our HSES department by:
      </p>

      <ul className="hses-intro">
        <li className="hses-intro">
          Engaging host community indigenes for all casual employment and site
          security staff.
        </li>
        <li className="hses-intro">
          Allocating a budget for community development projects.
        </li>
      </ul>
      <br />
      <br />
      <p className="hses-intro">
        Our HSES department will work closely with our client’s Community
        Liaison Officers (CLOs) and visit anticipated host communities to
        establish agreements that outline areas of cooperation and assistance.
        These agreements will be in line with company procedures and will be
        finalized before mobilization to project sites.
      </p>

      <p className="hses-intro">
        Additionally, our goal is to avoid disturbances or minimize them
        entirely. To achieve this, we will ensure representation in all
        community affairs, seminars, and meetings organized by our clients.
      </p>

      <p className="hses-intro">
        We will respond to all formal community requests in an appropriate and
        timely manner. In the event of disturbances, we will strive to resolve
        conflicts peacefully using our previously established relationships with
        the communities involved.
      </p>

      <p className="hses-intro">
        If conflicts escalate beyond our control, we will seek the support of
        Local Government Authorities, clan heads, and elite members of the
        communities for resolution.
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

export default CommunityRelationsPolicy;
