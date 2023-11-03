import React from "react";
import { Link } from "gatsby";

import SEO from "@components/common/seo";
import withLocation from "@helpers/hoc/withLocation";
import Layout from "@components/layout";
import Blank from "@components/images/blank.png";


const Home = ({ location }: any) => {
  return (
    <Layout location={location.pathname}>
      <SEO
        title="lorem ipsum"
        description="lorem ipsum"
      />
      <section className="pt-[40px] md:pt-[60px] pb-[80px] px-3 relative bg-no-repeat">
        <div className="max-w-[1200px] m-auto">
          
        </div>
      </section>
    </Layout>
  );
};

export default Home;
