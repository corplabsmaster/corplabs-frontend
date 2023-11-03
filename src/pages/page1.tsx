import { Link } from "gatsby";
import React from "react";
import SEO from "@components/common/seo";
import withLocation from "@helpers/hoc/withLocation";
import Layout from "@components/layout";
import Blank from "@components/images/blank.png";

const Page1 = ({ location }: any) => {
  return (
    <Layout location={location.pathname}>
      <SEO
        title="lorem ipsum"
        description="lorem ipsum"
        keywords={["lorem", "lorem"]}
      />
      <section className="pt-[40px] md:pt-[60px] pb-[80px] px-3 relative bg-no-repeat">
        <div className="max-w-[1140px] m-auto">
          <div className="row pb-[40px]">
            <div className="col-12">
              <div className="relative md:flex w-[100%] md:mb-[40px]">
                <h1 className="uppercase text-jb-orange-100 text-[30px] md:text-[80px] font-chakra">
                  lorem <br className="hidden md:block" />
                  Ipsum
                </h1>
                <img
                  src={Blank}
                  className="md:absolute right-[10%] -top-[5%] w-[250px] mx-auto md:w-[350px] z-[0] my-0"
                  alt="image"
                />
              </div>
              <div className="relative">
                <p className="mb-4 text-base font-normal leading-6 text-white md:text-xl font-chakra">
                  <Link
                    className="text-jb-orange-100"
                    to={"www.google.com"}
                  >
                    lorem
                  </Link>
                  lorem ipsum 1 2 3 4
                  <br className="hidden md:block" />
                  lorem ipsum 1 2 3 4 5
                </p>
                
              </div>
            </div>
          </div>

     
        </div>
      </section>
    </Layout>
  );
};

export default Page1;
