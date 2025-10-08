import SEO from "@components/common/seo";
import Explore from "@components/images/explore1.png";
import Innovative from "@components/images/innovative.png";
import Maintainability from "@components/images/maintain.png";
import Milestone from "@components/images/milestone.png";
import Mission from "@components/images/mission.png";
import Motivated from "@components/images/motivated.png";
import Productivity from "@components/images/productivity.png";
import Sustainability from "@components/images/sustainability.png";

import Vision from "@components/images/vision.png";
import Layout from "@components/layout";
import Footer from "@components/layout/footer";
import Header from "@components/layout/header";
import React from "react";

type Props = {
  location?: {
    pathname: string;
  };
};

const Contact: React.FC<PromoCardProps> = ({ location }: Props) => {
  return (
    <Layout location={location.pathname}>
      <SEO
        title="Contact"
        description="Corplabs is a dynamic technology company founded by a team of
                highly motivated and experienced technological enthusiasts. With
                a shared passion for delivering exceptional products, the team
                at Corplabs is dedicated to transforming the technology industry
                through innovation and cutting-edge solutions."
      />
      <Header /> {/* Use Header component here */}
      <div className="py-[15vh] bg-black-950">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScNRlXBEVeDMM_eqom0DSK5SupQXX141ARHX36icbODbdBLWA/viewform?embedded=true"
          className="w-[100vw] h-[115vh]"
        >
          Loading…
        </iframe>
      </div>
      <Footer />
    </Layout>
  );
};

export default Contact;
