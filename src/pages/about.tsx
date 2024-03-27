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

const about = () => {
  return (
    <Layout location={location.pathname}>
      <SEO title="lorem ipsum" description="lorem ipsum" />
      <Header /> {/* Use Header component here */}
      <div className="bg-black-950 min-h-screen">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 lg:py-24 sm:py-0 items-center justify-center flex-col">
            <img
              className="lg:w-3/6 md:w-4/6 w-5/6 mb-0 lg:-mt-10 md:mt-10 mt-16 object-cover object-center rounded"
              alt="hero"
              src={Explore}
            />
            <div className="text-center lg:w-4/5 w-full">
              <p className="mb-8 leading-relaxed font-worksanslight lg:text-base md:text-xs text-gray-200">
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
          <div className="container px-0 py-0 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -m-0 w-full">
              <div className="p-4 lg:w-1/2 md:w-full flex">
                <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 bg-black-900 bg-opacity-50 lg:p-12 p-10 sm:flex-row flex-col w-full">
                  <div className="flex-grow">
                    <div className="flex items-center">
                      <h2 className="text-white-100 tracking-wide text-xl font-intersemibold">
                        Mission
                      </h2>

                      <img
                        className="w-12 h-10 ml-4 object-cover object-center"
                        alt="hero"
                        src={Mission}
                      />
                    </div>
                    <p className="leading-relaxed font-worksanslight text-gray-200 lg:text-base md:text-xs mt-2">
                      Always driven by innovation, self-motivated, and ready to
                      surpass the competition in the global arena.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2 md:w-full flex">
                <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 bg-black-900 bg-opacity-50 lg:p-12 p-10 sm:flex-row flex-col w-full">
                  <div className="flex-grow">
                    <div className="flex items-center">
                      <h2 className="text-white-100 tracking-wide text-xl font-intersemibold">
                        Vision
                      </h2>
                      <img
                        className="w-12 h-7 ml-4 object-cover object-center"
                        alt="hero"
                        src={Vision}
                      />
                    </div>
                    <p className="leading-relaxed font-worksanslight text-gray-200 lg:text-base md:text-xs mt-2">
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

            <div className="flex flex-wrap w-full mb-20 mt-20 px-16">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="text-xl text-white-100 tracking-wide font-intersemibold">
                  Value
                </h1>
                <div className="h-1 w-28 bg-gradient-to-r from-gradient-1 to-gradient-2 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed font-worksanslight text-gray-200 lg:text-base md:text-xs">
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
              <div className="p-0 sm:w-full w-full">
                <div className="bg-purple-700 bg-opacity-50 rounded flex p-12 h-full  items-center justify-center">
                  <div>
                    <h1 className="font-worksanssemibold text-primary-100 text-lg2 sm:text-lg2 lg:text-xl2">
                      Maintainability
                    </h1>
                    <p className="leading-relaxed font-worksanslight text-gray-200 lg:text-base md:text-xs">
                      ensuring ease of future maintenance and support.
                    </p>
                  </div>
                  <img
                    className="lg:w-28 md:w-1/6 w-1/4 lg:ml-20 md:ml-10 object-cover object-center"
                    alt="maintain"
                    src={Maintainability}
                  />
                </div>
              </div>
              <div className="p-0 sm:w-2/2 w-full">
                <div className="bg-purple-800 bg-opacity-40 rounded flex p-12 h-full items-center justify-center">
                  <img
                    className="lg:w-28 h-26 md:w-1/6 w-1/4 lg:mr-20 mr-10 object-cover object-center"
                    alt="sustain"
                    src={Sustainability}
                  />
                  <div>
                    <h2 className="font-worksanssemibold text-primary-100 text-lg2 sm:text-lg2 lg:text-xl2">
                      Sustainability
                    </h2>
                    <p className="leading-relaxed font-worksanslight text-gray-200 lg:text-base md:text-xs">
                      driving competitive pace and efficiency.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-0 sm:w-2/2 w-full">
                <div className="bg-purple-700 bg-opacity-50 rounded flex p-12 h-full items-center justify-center">
                  <div>
                    <h3 className="font-worksanssemibold text-primary-100 text-lg2 sm:text-lg2 lg:text-xl2">
                      Productivity
                    </h3>
                    <p className="leading-relaxed font-worksanslight text-gray-200 lg:text-base md:text-xs">
                      embracing everlasting impact & longevity.
                    </p>
                  </div>
                  <img
                    className="lg:w-20 md:w-1/6 w-1/4 lg:ml-20 md:ml-10 object-cover object-center"
                    alt="hero"
                    src={Productivity}
                  />
                </div>
              </div>
              <div className="p-0 sm:w-2/2 w-full">
                <div className="bg-purple-800 bg-opacity-40 rounded flex p-12 h-full items-center justify-center">
                  <img
                    className="lg:w-24 md:w-1/6 w-1/4 lg:mr-20 mr-10 object-cover object-center"
                    alt="hero"
                    src={Motivated}
                  />
                  <div>
                    <h4 className="font-worksanssemibold text-primary-100 text-lg2 sm:text-lg2 lg:text-xl2 ">
                      Motivated
                    </h4>
                    <p className="leading-relaxed font-worksanslight text-gray-200 lg:text-base md:text-xs">
                      perpetually fueled by boundless energy and enthusiasm.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-0 sm:w-2/2 w-full">
                <div className="bg-purple-700 bg-opacity-50 rounded flex p-12 h-full items-center justify-center">
                  <div>
                    <h5 className="font-worksanssemibold text-primary-100 text-lg2 sm:text-lg2 lg:text-xl2">
                      Innovative
                    </h5>
                    <p className="leading-relaxed font-worksanslight text-gray-200 lg:text-base md:text-xs">
                      constantly pushing boundaries, avoiding stagnation.
                    </p>
                  </div>
                  <img
                    className="lg:w-28 md:w-1/6 w-1/3 lg:ml-20 md:ml-10 object-cover object-center"
                    alt="hero"
                    src={Innovative}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-0 py-24 items-center justify-center flex-col">
            <h1 className="lg:text-xl text-lg2 tracking-wide font-intersemibold text-white-100">
              Milestone
            </h1>

            <img
              className="lg:w-full md:w-full w-full mb-0 lg:-mt-20 -mt-10  object-cover object-center rounded"
              alt="milestone"
              src={Milestone}
            />
            <div className="text-center lg:w-4/5 w-full">
              <p className="mb-0 px-5 leading-relaxed font-worksanslight lg:text-base md:text-xs text-gray-200">
                Corplabs, founded in 2015 as a research group, became a private
                community in 2017 to pursue ambitious future plans, supported by
                a generous sponsor for open development initiatives.
              </p>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-0 mx-auto flex flex-wrap">
            <div className="container mx-auto flex px-0 lg:py-10 py-4 items-center justify-center flex-col">
              <h1 className="lg:text-xl text-lg2 tracking-wide font-intersemibold text-white-100">
                Corpian&apos;s Life
              </h1>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover rounded h-full object-center block"
                    src="https://dummyimage.com/500x300"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover rounded h-full object-center block"
                    src="https://dummyimage.com/501x301"
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover rounded object-center block"
                    src="https://dummyimage.com/600x360"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover rounded object-center block"
                    src="https://dummyimage.com/601x361"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover rounded h-full object-center block"
                    src="https://dummyimage.com/502x302"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
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

export default about;
