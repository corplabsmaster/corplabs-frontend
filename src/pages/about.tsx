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

const About: React.FC<PromoCardProps> = () => {
  return (
    <Layout location={location.pathname}>
      <SEO title="lorem ipsum" description="lorem ipsum" />
      <Header /> {/* Use Header component here */}
      <div className="min-h-screen bg-black-950">
        <section className="text-gray-600 body-font">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto lg:py-24 sm:py-0">
            <img
              className="object-cover object-center w-5/6 mt-16 mb-0 rounded lg:w-3/6 md:w-4/6 lg:-mt-10 md:mt-10"
              alt="hero"
              src={Explore}
            />
            <div className="w-full text-center lg:w-4/5">
              <p className="mb-8 leading-relaxed text-gray-200 font-worksanslight lg:text-base md:text-xs">
                Corplabs is a dynamic technology company founded by a team of
                highly motivated and experienced technological enthusiasts. With
                a shared passion for delivering exceptional products, the team
                at Corplabs is dedicated to transforming the technology industry
                through innovation and cutting-edge solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container flex flex-wrap px-0 py-0 mx-auto">
            <div className="flex flex-wrap w-full -m-0">
              <div className="flex p-4 lg:w-1/2 md:w-full">
                <div className="flex flex-col w-full p-10 bg-opacity-50 border-2 border-gray-200 border-opacity-50 rounded-lg bg-black-900 lg:p-12 sm:flex-row">
                  <div className="flex-grow">
                    <div className="flex items-center">
                      <h2 className="text-xl tracking-wide text-white-100 font-intersemibold">
                        Mission
                      </h2>

                      <img
                        className="object-cover object-center w-12 h-10 ml-4"
                        alt="hero"
                        src={Mission}
                      />
                    </div>
                    <p className="mt-2 leading-relaxed text-gray-200 font-worksanslight lg:text-base md:text-xs">
                      Always driven by innovation, self-motivated, and ready to
                      surpass the competition in the global arena.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex p-4 lg:w-1/2 md:w-full">
                <div className="flex flex-col w-full p-10 bg-opacity-50 border-2 border-gray-200 border-opacity-50 rounded-lg bg-black-900 lg:p-12 sm:flex-row">
                  <div className="flex-grow">
                    <div className="flex items-center">
                      <h2 className="text-xl tracking-wide text-white-100 font-intersemibold">
                        Vision
                      </h2>
                      <img
                        className="object-cover object-center w-12 ml-4 h-7"
                        alt="hero"
                        src={Vision}
                      />
                    </div>
                    <p className="mt-2 leading-relaxed text-gray-200 font-worksanslight lg:text-base md:text-xs">
                      Corplabs aspires to be a globally recognized leader,
                      driven by innovation, self-motivation, and a commitment to
                      outperform competitors. They aim to deliver captivating
                      and inspiring experiences, setting new standards in the
                      constantly evolving global landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap w-full px-16 mt-20 mb-20">
              <div className="w-full mb-6 lg:w-1/2 lg:mb-0">
                <h1 className="text-xl tracking-wide text-white-100 font-intersemibold">
                  Value
                </h1>
                <div className="h-1 rounded w-28 bg-gradient-to-r from-gradient-1 to-gradient-2"></div>
              </div>
              <p className="w-full leading-relaxed text-gray-200 lg:w-1/2 font-worksanslight lg:text-base md:text-xs">
                Through these values, we strive to provide exceptional products
                and services that make a meaningful difference in the world,
                leaving a lasting legacy for years to come.
              </p>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container px-0 py-0 mx-auto">
            <div className="flex flex-wrap lg:w-full sm:mx-auto sm:mb-2">
              <div className="w-full p-0 sm:w-full">
                <div className="flex items-center justify-center h-full p-12 bg-purple-700 bg-opacity-50 rounded">
                  <div>
                    <h1 className="font-worksanssemibold text-primary-100 text-lg2 sm:text-lg2 lg:text-xl2">
                      Maintainability
                    </h1>
                    <p className="leading-relaxed text-gray-200 font-worksanslight lg:text-base md:text-xs">
                      ensuring ease of future maintenance and support.
                    </p>
                  </div>
                  <img
                    className="object-cover object-center w-1/4 lg:w-28 md:w-1/6 lg:ml-20 md:ml-10"
                    alt="maintain"
                    src={Maintainability}
                  />
                </div>
              </div>
              <div className="w-full p-0 sm:w-2/2">
                <div className="flex items-center justify-center h-full p-12 bg-purple-800 rounded bg-opacity-40">
                  <img
                    className="object-cover object-center w-1/4 mr-10 lg:w-28 h-26 md:w-1/6 lg:mr-20"
                    alt="sustain"
                    src={Sustainability}
                  />
                  <div>
                    <h2 className="font-worksanssemibold text-primary-100 text-lg2 sm:text-lg2 lg:text-xl2">
                      Sustainability
                    </h2>
                    <p className="leading-relaxed text-gray-200 font-worksanslight lg:text-base md:text-xs">
                      driving competitive pace and efficiency.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full p-0 sm:w-2/2">
                <div className="flex items-center justify-center h-full p-12 bg-purple-700 bg-opacity-50 rounded">
                  <div>
                    <h3 className="font-worksanssemibold text-primary-100 text-lg2 sm:text-lg2 lg:text-xl2">
                      Productivity
                    </h3>
                    <p className="leading-relaxed text-gray-200 font-worksanslight lg:text-base md:text-xs">
                      embracing everlasting impact & longevity.
                    </p>
                  </div>
                  <img
                    className="object-cover object-center w-1/4 lg:w-20 md:w-1/6 lg:ml-20 md:ml-10"
                    alt="hero"
                    src={Productivity}
                  />
                </div>
              </div>
              <div className="w-full p-0 sm:w-2/2">
                <div className="flex items-center justify-center h-full p-12 bg-purple-800 rounded bg-opacity-40">
                  <img
                    className="object-cover object-center w-1/4 mr-10 lg:w-24 md:w-1/6 lg:mr-20"
                    alt="hero"
                    src={Motivated}
                  />
                  <div>
                    <h4 className="font-worksanssemibold text-primary-100 text-lg2 sm:text-lg2 lg:text-xl2 ">
                      Motivated
                    </h4>
                    <p className="leading-relaxed text-gray-200 font-worksanslight lg:text-base md:text-xs">
                      perpetually fueled by boundless energy and enthusiasm.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full p-0 sm:w-2/2">
                <div className="flex items-center justify-center h-full p-12 bg-purple-700 bg-opacity-50 rounded">
                  <div>
                    <h5 className="font-worksanssemibold text-primary-100 text-lg2 sm:text-lg2 lg:text-xl2">
                      Innovative
                    </h5>
                    <p className="leading-relaxed text-gray-200 font-worksanslight lg:text-base md:text-xs">
                      constantly pushing boundaries, avoiding stagnation.
                    </p>
                  </div>
                  <img
                    className="object-cover object-center w-1/3 lg:w-28 md:w-1/6 lg:ml-20 md:ml-10"
                    alt="hero"
                    src={Innovative}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container flex flex-col items-center justify-center px-0 py-24 mx-auto">
            <h1 className="tracking-wide lg:text-xl text-lg2 font-intersemibold text-white-100">
              Milestone
            </h1>

            <img
              className="object-cover object-center w-full mb-0 -mt-10 rounded lg:w-full md:w-full lg:-mt-20"
              alt="milestone"
              src={Milestone}
            />
            <div className="w-full text-center lg:w-4/5">
              <p className="px-5 mb-0 leading-relaxed text-gray-200 font-worksanslight lg:text-base md:text-xs">
                Corplabs, founded in 2015 as a research group, became a private
                community in 2017 to pursue ambitious future plans, supported by
                a generous sponsor for open development initiatives.
              </p>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container flex flex-wrap px-5 py-0 mx-auto">
            <div className="container flex flex-col items-center justify-center px-0 py-4 mx-auto lg:py-10">
              <h1 className="tracking-wide lg:text-xl text-lg2 font-intersemibold text-white-100">
                Corpian&apos;s Life
              </h1>
            </div>
            <div className="flex flex-wrap -m-1 md:-m-2">
              <div className="flex flex-wrap w-1/2">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded"
                    src="https://dummyimage.com/500x300"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded"
                    src="https://dummyimage.com/501x301"
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded"
                    src="https://dummyimage.com/600x360"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded"
                    src="https://dummyimage.com/601x361"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded"
                    src="https://dummyimage.com/502x302"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full"
                    src="https://dummyimage.com/503x303"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Layout>
  );
};

export default About;
