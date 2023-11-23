import SEO from "@components/common/seo";
import Layout from "@components/layout";
import Header from "@components/layout/header";
import React from "react";

const Home = () => {
  return (
    <Layout location={location.pathname}>
      <SEO title="lorem ipsum" description="lorem ipsum" />
      <Header /> {/* Use Header component here */}
      <div className="bg-purple-100 min-h-screen">
        <div className="text-4xl font-bold text-white mb-4 font-interlight">
          Your Titlevv
        </div>
      </div>
    </Layout>
  );
};

export default Home;
