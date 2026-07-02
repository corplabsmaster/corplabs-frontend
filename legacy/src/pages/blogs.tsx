import SEO from "@components/common/seo";
import Explore from "@components/images/explore1.png";
import Innovative from "@components/images/innovative.png";
import Maintainability from "@components/images/maintain.png";
import Milestone from "@components/images/milestone.png";
import Mission from "@components/images/mission.png";
import Motivated from "@components/images/motivated.png";
import Productivity from "@components/images/productivity.png";
import Sustainability from "@components/images/sustainability.png";
import Backend from "@images/backend.webp";

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

const Blogs: React.FC<PromoCardProps> = ({ location }: Props) => {
  return (
    <Layout location={location.pathname}>
      <SEO
        title="Blogs"
        description="Corplabs is a dynamic technology company founded by a team of
                highly motivated and experienced technological enthusiasts. With
                a shared passion for delivering exceptional products, the team
                at Corplabs is dedicated to transforming the technology industry
                through innovation and cutting-edge solutions."
      />
      <Header /> {/* Use Header component here */}
      <div className="py-5 bg-black-950">
        <section
          className="flex items-center justify-center text-white "
          id="careers"
        >
          <div className="px-8 pt-16 pb-24 mx-auto max-w-screen-2xl sm:px-6 sm:py-24 lg:px-8 lg:py-24 ">
            <div className="flex flex-col text-center w-full relative z-10 mb-[6vh] ">
              <h1 className="text-2xl lg:text-4xl font-interbold text-white tracking-wide mb-[2vh]">
                Blogs
              </h1>
              <p className="text-base leading-relaxed text-center text-gray-200 font-worksanslight ">
                Exciting blogs...
              </p>
            </div>
            <div className="mt-8 mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 sm:w-[80vw] md:w-[80vw] lg:grid-cols-3 lg:w-[85vw] xl:w-[70vw] 2xl:w-[60vw]">
              <a
                className="block p-8 transition shadow-xl rounded-xl bg-primary-950 border-1 border-primary-500 hover:border-primary-500 hover:shadow-primary-500/20"
                href="https://corplabs.notion.site/Senior-Java-Backend-e8dc9233206842ab9048106bbcc2d833"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="object-cover object-center w-full mb-6 rounded h-30 w-30"
                  src={Backend}
                  alt="backend-engineer"
                />
                <h3 className="mb-2 text-base tracking-wide text-primary-300 font-worksanslight">
                  Engineering
                </h3>
                <h2 className="mb-4 text-lg text-gray-50 font-intermedium">
                  Senior Java Backend
                </h2>
                <button className="block w-full px-6 py-2 text-gray-200 border-transparent rounded border-1 md:w-auto focus:outline-none hover:bg-primary-500 border-gradient">
                  LEARN MORE
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Layout>
  );
};

export default Blogs;
