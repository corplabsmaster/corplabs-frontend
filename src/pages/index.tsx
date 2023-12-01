import SEO from "@components/common/seo";
import Layout from "@components/layout";
import Footer from "@components/layout/footer";
import Header from "@components/layout/header";
import App from "@images/app-icon.svg";
import Astronaut from "@images/astronaut.svg";
import Cybersecurity from "@images/cybersecurity-icon.svg";
import Design from "@images/design-icon.svg";
import Marketing from "@images/marketing-icon.svg";
import Plan from "@images/plan.svg";
import Web from "@images/web-icon.svg";
import React, { useState } from "react";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Plan, Cybersecurity, Design]; // Replace with your actual image sources

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <Layout location={location.pathname}>
      <SEO title="lorem ipsum" description="lorem ipsum" />
      <Header /> {/* Use Header component here */}
      <div className="bg-purple-100 min-h-screen">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              className="w-full h-auto lg:w-2/3 xl:w-3/5 mt-[10vh] mb-[2vh] object-cover object-center"
              alt="intro"
              src={Astronaut}
            />
            <div className="text-center lg:w-4/5 w-full">
              <p className="mb-8 leading-relaxed font-worksanslight text-lg text-white-200 tracking-wide">
                Bringing Your Ideas to Life, One Line of Code at a Time
              </p>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-[8vh] py-[10vh] mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="font-interbold text-white text-xl">
                Our Services
              </h1>
              {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                havent heard of them man bun deep jianbing selfies heirloom
                prism food truck ugh squid celiac humblebrag.
              </p> */}
            </div>

            <div className="flex flex-wrap">
              <div className=" xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <img className="" src={App} alt="app-icon" />

                <h1 className="mt-4 text-lg font-semibold text-white-100">
                  App
                </h1>

                <p className="mt-2 font-worksanslight text-base text-white-200 tracking-wide">
                  We specialize in designing and developing engaging,
                  user-centered apps.
                </p>
              </div>

              <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <img className="" src={Web} alt="web-icon" />

                <h1 className="mt-4 text-lg font-semibold text-white-100">
                  Web
                </h1>

                <p className="mt-2 font-worksanslight text-base text-white-200 tracking-wide">
                  We provide website creation, SEO, e-commerce, and maintenance.
                </p>
              </div>

              <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <img className="" src={Cybersecurity} alt="app-icon" />

                <h1 className="mt-4 text-lg font-semibold text-white-100">
                  Cybersecurity
                </h1>

                <p className="mt-2 font-worksanslight text-base text-white-200 tracking-wide">
                  We offer comprehensive cybersecurity solutions to protect your
                  digital assets.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <div>
                  <img className="" src={Design} alt="design-icon" />

                  <h1 className="mt-4 text-lg font-semibold text-white-100">
                    Design
                  </h1>

                  <p className="mt-2 font-worksanslight text-base text-white-200 tracking-wide">
                    We offer inclusive, accessible digital design services.
                  </p>
                </div>
              </div>

              <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <img className="" src={Marketing} alt="marketing-icon" />

                <h1 className="mt-4 text-lg font-semibold text-white-100">
                  Marketing
                </h1>

                <p className="mt-2 font-worksanslight text-base text-white-200 tracking-wide">
                  We offer strategic marketing services to elevate your brand.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-purple-100">
        <div className="container px-6 py-10 mx-auto overflow-x-hidden ">
          <h1 className="text-2xl font-interbold text-center text-white-100 lg:text-4xl">
            Helping Your Business <br /> Grow & Succeed
          </h1>
          <div className="flex justify-center items-center">
            <button
              title="left arrow"
              className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 mr-[5vw]"
              onClick={prevSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {/* Left arrow icon */}
            </button>

            <img
              className="w-full h-auto lg:w-2/3 xl:w-3/5 object-cover object-center"
              alt="plan"
              src={images[currentIndex]}
            />

            <button
              title="right arrow"
              className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 ml-[5vw]"
              onClick={nextSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              {/* Right arrow icon */}
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default Home;
