import SEO from "@components/common/seo";
import Layout from "@components/layout";
import Footer from "@components/layout/footer";
import Header from "@components/layout/header";
import App from "@images/app-icon.svg";
import Astronaut from "@images/astronaut.svg";
import Backend from "@images/backend.webp";
import Collab2 from "@images/collab-icon.svg";
import Collab from "@images/collab.svg";
import Compre from "@images/compre-icon.svg";
import Consult from "@images/consult-icon.svg";
import Culture from "@images/culture-bg.svg";
import Cybersecurity from "@images/cybersecurity-icon.svg";
import Design from "@images/design-icon.svg";
import Execute from "@images/execute.svg";
import Frontend from "@images/frontend.webp";
import GameDev from "@images/game-dev.webp";
import GameDev2 from "@images/game-dev2.webp";
import GameFi from "@images/gamefi-icon.svg";
import Idea from "@images/idea-icon.svg";
import Maintain from "@images/maintain.svg";
import Marketing from "@images/marketing-icon.svg";
import Plan from "@images/plan.svg";
import ProductLead from "@images/product-lead.webp";
import Support from "@images/support-icon.svg";
import TechLead from "@images/tech-lead.webp";
import Web from "@images/web-icon.svg";
import React, { useState } from "react";
import { withNotionData } from "@helpers/hoc/withQueries";

type Props = {
  location?: {
    pathname: string;
  };
  notionData: {
    notionJob: any;
  };
};

const Home: React.FC<PromoCardProps> = ({ location, notionData }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Plan, Execute, Maintain]; // Replace with your actual image sources

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + images.length) % images.length
    );
  };
  console.log(notionData?.notionJob?.data?.results);

  return (
    <Layout location={location.pathname}>
      <SEO
        title="Idea to reality"
        description="Corplabs is a software company that specializes in bringing your ideas to life with our 'Idea to reality' approach. Our team of experts can turn your software concepts into tangible solutions that meet your business needs. Contact us today to learn more."
        schemaMarkup={{
          type: "Organization",
          name: "Corplabs",
          alternateName: "Cplabs",
          description:
            "Bringing Your Ideas to Life, One Line of Code at a Time",
          url: "https://corplabs.co",
          logo: "https://corplabs.co/assets/img/logos/im90s.svg",
          contactPoint: {
            type: "ContactPoint",
            telephone: "+6583937108",
            contactType: "",
            areaServed: ["MY", "SG"],
            availableLanguage: ["en", "Chinese"],
          },
          sameAs: [
            "https://twitter.com/coprlabs_co",
            "https://www.instagram.com/corplabs_co/",
            "https://www.linkedin.com/company/corplabsco",
            "https://corplabs.co",
            "https://www.facebook.com/corplabs.co/",
          ],
        }}
      />
      <Header />
      <div className="min-h-screen bg-black-950">
        <section className="text-gray-600 body-font">
          <div className=" mx-auto flex px-0 xs:pt-[10vh] sm:pt-[8vh] xs:pb-16 sm:pb-40 items-center justify-center flex-col">
            <img
              className="w-full h-auto lg:w-2/3 xl:w-3/5 xs:mt-[2vh] sm:mt-[8vh] mb-[2vh] object-cover object-center"
              alt="intro"
              src={Astronaut}
            />
            <div className="w-full text-center lg:w-4/5">
              <p className="mb-8 leading-relaxed tracking-wide text-gray-200 font-worksanslight sm:text-lg">
                Bringing Your Ideas to Life,
                <span className="block sm:inline">
                  {" "}
                  One Line of Code at a Time
                </span>
              </p>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font" id="services">
          <div className=" xs:px-[0vw] sm:px-[0vw] xl:px-[5vw] mx-auto">
            <div className="flex flex-col text-center w-full mb-4">
              <h1 className="text-2xl tracking-wider text-center font-interbold text-white-100 lg:text-4xl">
                Our Projects
              </h1>
              {/* <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                havent heard of them man bun deep jianbing selfies heirloom
                prism food truck ugh squid celiac humblebrag.
              </p> */}
            </div>
          </div>
        </section>

        {/* HiTerra Products Section */}
        <section
          className="text-gray-200 body-font bg-black-950 py-4 px-1"
          id="products"
        >
          <div className=" px-2">
            {/* Section Header */}
            <div className="flex flex-col text-center w-full mb-12">
              <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-widest text-[#00FF94] uppercase rounded-full bg-[#00FF94]/10 w-fit mx-auto">
                Our Flagship Project
              </span>
              <h2 className="text-3xl lg:text-5xl font-interbold text-white-100 mb-4">
                HiTerra™ AI Platform
              </h2>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200 font-worksanslight">
                A revolutionary AI-powered platform that helps farmers and
                agricultural companies become more profitable and sustainable.
                HiTerra combines smart farming recommendations, automated
                agricultural cycles, and a comprehensive marketplace to
                transform modern agriculture.
              </p>
            </div>

            {/* Website Embed - Full Width */}
            <div className="w-full mb-12">
              <div
                className="relative w-full px-1 border-box rounded-xl overflow-hidden shadow-2xl"
                style={{ height: "600px" }}
              >
                <iframe
                  src="https://www.hiterra.co"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
                  allowFullScreen
                  title="HiTerra Website Preview"
                ></iframe>
              </div>
            </div>

            {/* Features and Overview Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Left side - Features */}
              <div className="bg-gradient-to-br from-[#000B42] to-[#001F52] border border-[#00FF94]/20 rounded-lg p-8">
                <h3 className="text-2xl font-interbold text-white-100 mb-6">
                  Key Features
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-500 rounded-lg p-2 mr-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-intermedium text-white-100 mb-1">
                        AI Recommendations
                      </h4>
                      <p className="text-gray-200 font-worksanslight">
                        Get actionable insights powered by TerraMind AI to
                        optimize farm practices, improve yield, and reduce costs
                        with data-driven guidance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-500 rounded-lg p-2 mr-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-intermedium text-white-100 mb-1">
                        TerraLink System
                      </h4>
                      <p className="text-gray-200 font-worksanslight">
                        Connect every aspect of your operations through an
                        ecosystem that integrates product providers, farmers,
                        and service providers seamlessly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-500 rounded-lg p-2 mr-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-intermedium text-white-100 mb-1">
                        Proven Results
                      </h4>
                      <p className="text-gray-200 font-worksanslight">
                        Reduce more than 85% labour and achieve 70% time-saving
                        with our research-backed platform validated by lab tests
                        and field reports.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-500 rounded-lg p-2 mr-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-intermedium text-white-100 mb-1">
                        Carbon Compliance
                      </h4>
                      <p className="text-gray-200 font-worksanslight">
                        Align with global carbon credit and sustainability
                        standards, unlocking new opportunities and long-term
                        value for your farm.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Platform Overview */}
              <div className="bg-gradient-to-br from-[#000B42] to-[#001F52] border border-[#00FF94]/20 rounded-lg p-8">
                <h3 className="text-2xl font-interbold text-white-100 mb-6">
                  Platform Overview
                </h3>

                {/* Platform Components */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#000B42]/50 rounded-lg p-4 border border-[#00FF94]/20 hover:border-[#00FF94]/40 transition-colors">
                    <div className="text-[#00FF94] mb-2">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="font-intermedium text-white-100 mb-1">
                      Mobile App
                    </h4>
                    <p className="text-sm text-gray-200 font-worksanslight">
                      Farm management on the go
                    </p>
                  </div>

                  <div className="bg-[#000B42]/50 rounded-lg p-4 border border-[#00FF94]/20 hover:border-[#00FF94]/40 transition-colors">
                    <div className="text-[#00FF94] mb-2">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="font-intermedium text-white-100 mb-1">
                      Dashboard Web
                    </h4>
                    <p className="text-sm text-gray-200 font-worksanslight">
                      Comprehensive analytics & insights
                    </p>
                  </div>

                  <div className="bg-[#000B42]/50 rounded-lg p-4 border border-[#00FF94]/20 hover:border-[#00FF94]/40 transition-colors">
                    <div className="text-[#00FF94] mb-2">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="font-intermedium text-white-100 mb-1">
                      AI Data Platform
                    </h4>
                    <p className="text-sm text-gray-200 font-worksanslight">
                      Intelligent data processing
                    </p>
                  </div>

                  <div className="bg-[#000B42]/50 rounded-lg p-4 border border-[#00FF94]/20 hover:border-[#00FF94]/40 transition-colors">
                    <div className="text-[#00FF94] mb-2">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="font-intermedium text-white-100 mb-1">
                      Marketplace
                    </h4>
                    <p className="text-sm text-gray-200 font-worksanslight">
                      Products & services hub
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Who It's For Section */}
            <div className="bg-black-900 border border-green-500/20 rounded-2xl p-8 lg:p-12 mb-12">
              <h3 className="text-2xl lg:text-3xl font-interbold text-white-100 text-center mb-8">
                Designed For Everyone in Agriculture
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-black-950 border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-colors">
                  <div className="text-4xl mb-3">🌱</div>
                  <h4 className="text-lg font-intermedium text-white-100 mb-2">
                    For Beginners
                  </h4>
                  <p className="text-gray-200 text-sm font-worksanslight">
                    Step-by-step AI recommendations and practical tips to
                    optimize harvest from day one.
                  </p>
                </div>
                <div className="bg-black-950 border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-colors">
                  <div className="text-4xl mb-3">🌾</div>
                  <h4 className="text-lg font-intermedium text-white-100 mb-2">
                    For Farmers
                  </h4>
                  <p className="text-gray-200 text-sm font-worksanslight">
                    Practical tools to manage schedules, receive notifications,
                    and access marketplace.
                  </p>
                </div>
                <div className="bg-black-950 border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-colors">
                  <div className="text-4xl mb-3">🏢</div>
                  <h4 className="text-lg font-intermedium text-white-100 mb-2">
                    For Enterprises
                  </h4>
                  <p className="text-gray-200 text-sm font-worksanslight">
                    AI-driven analytics and resource optimization for
                    large-scale farmland management.
                  </p>
                </div>
                <div className="bg-black-950 border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-colors">
                  <div className="text-4xl mb-3">🛒</div>
                  <h4 className="text-lg font-intermedium text-white-100 mb-2">
                    For Product Providers
                  </h4>
                  <p className="text-gray-200 text-sm font-worksanslight">
                    Monitor product usage and gain valuable insights into
                    performance and customer needs.
                  </p>
                </div>
                <div className="bg-black-950 border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-colors">
                  <div className="text-4xl mb-3">🔧</div>
                  <h4 className="text-lg font-intermedium text-white-100 mb-2">
                    For Service Providers
                  </h4>
                  <p className="text-gray-200 text-sm font-worksanslight">
                    Manage operations with real-time task tracking to enhance
                    service delivery.
                  </p>
                </div>
                <div className="bg-black-950 border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-colors">
                  <div className="text-4xl mb-3">👥</div>
                  <h4 className="text-lg font-intermedium text-white-100 mb-2">
                    Community Forum
                  </h4>
                  <p className="text-gray-200 text-sm font-worksanslight">
                    Share knowledge, connect with peers, and learn from
                    experienced farmers.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-[#000B42] rounded-2xl p-12 border border-[#00FF94]/20">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://www.hiterra.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-lg font-intermedium text-[#000B42] bg-[#00FF94] rounded-lg hover:bg-[#00FF94]/90 transition-colors duration-300 shadow-lg hover:shadow-[#00FF94]/20"
                >
                  Visit HiTerra Website
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://www.hiterra.co/product"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-lg font-intermedium text-[#00FF94] border-2 border-[#00FF94] rounded-lg hover:bg-[#00FF94]/10 transition-colors duration-300"
                >
                  Explore Features
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="text-gray-600 body-font bg-black-950 py-20">
          <div className="container mx-auto px-5">
            <h1 className="text-2xl pb-8 tracking-wider text-center font-interbold text-white-100 lg:text-4xl">
              Our Services
            </h1>
            <div className="flex flex-wrap -m-4">
              <dl className="grid grid-cols-1 gap-0 sm:grid-cols-3 sm:divide-x sm:divide-white-100/40 w-full">
                <div className="px-16 py-6 xs:px-[0vw] sm:px-[4vw] md:px-[4vw] items-center md:text-left xs:text-center">
                  <img
                    className="md:mx-0 xs:mx-auto"
                    src={App}
                    alt="app-icon"
                  />

                  <h1 className="mt-4 text-lg font-semibold text-white-100">
                    App
                  </h1>

                  <p className="mt-2 text-base tracking-wide text-gray-200 font-worksanslight">
                    We specialize in designing and developing engaging,
                    user-centered apps.
                  </p>
                </div>

                <div className="px-16 py-6 xs:px-[0vw] sm:px-[4vw] md:px-[4vw] items-center md:text-left xs:text-center">
                  <img
                    className="md:mx-0 xs:mx-auto"
                    src={Web}
                    alt="web-icon"
                  />

                  <h1 className="mt-4 text-lg font-semibold text-white-100">
                    Web
                  </h1>

                  <p className="mt-2 text-base tracking-wide text-gray-200 font-worksanslight">
                    We provide website creation, SEO, e-commerce, and
                    maintenance.
                  </p>
                </div>

                <div className="px-16 py-6 xs:px-[0vw] sm:px-[4vw] md:px-[4vw] items-center md:text-left xs:text-center">
                  <img
                    className="md:mx-0 xs:mx-auto"
                    src={Cybersecurity}
                    alt="app-icon"
                  />
                  <h1 className="mt-4 text-lg font-semibold text-white-100">
                    Cybersecurity
                  </h1>
                  <p className="mt-2 text-base tracking-wide text-gray-200 font-worksanslight">
                    We offer comprehensive cybersecurity solutions to protect
                    your digital assets.
                  </p>
                </div>
              </dl>
            </div>

            <div className="flex flex-wrap sm:mt-[4vh] md:mt-[4vh] lg:mt-[8vh]">
              <dl className="grid grid-cols-1 gap-0 sm:grid-cols-3 sm:divide-x sm:divide-white-100/40">
                <div className="px-16 py-6 xs:px-[0vw] sm:px-[4vw] md:px-[4vw] items-center md:text-left xs:text-center">
                  <div>
                    <img
                      className="md:mx-0 xs:mx-auto"
                      src={Design}
                      alt="design-icon"
                    />

                    <h1 className="mt-4 text-lg font-semibold text-white-100">
                      Design
                    </h1>

                    <p className="mt-2 text-base tracking-wide text-gray-200 font-worksanslight">
                      We offer inclusive, accessible digital design services.
                    </p>
                  </div>
                </div>

                <div className="px-16 py-6 xs:px-[0vw] sm:px-[4vw] md:px-[4vw] items-center md:text-left xs:text-center">
                  <img
                    className="md:mx-0 xs:mx-auto"
                    src={Marketing}
                    alt="marketing-icon"
                  />
                  <h1 className="mt-4 text-lg font-semibold text-white-100">
                    Marketing
                  </h1>
                  <p className="mt-2 text-base tracking-wide text-gray-200 font-worksanslight">
                    We offer strategic marketing services to elevate your brand.
                  </p>
                </div>

                <div className="px-16 py-6 xs:px-[0vw] sm:px-[4vw] md:px-[4vw] items-center md:text-left xs:text-center">
                  <img
                    className="md:mx-0 xs:mx-auto"
                    src={GameFi}
                    alt="gamefi-icon"
                  />

                  <h1 className="mt-[3vh] text-lg font-semibold text-white-100">
                    GameFi
                  </h1>

                  <p className="mt-[0.8vh] font-worksanslight text-base text-gray-200 tracking-wide">
                    We built GameFi project, combining gaming with finance and
                    blockchain technology.
                  </p>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-black-950" id="about">
        <div className="container px-2 mx-auto xs:pb-20 sm:pb-40 ">
          <h1 className="text-2xl tracking-wider text-center font-interbold text-white-100 lg:text-4xl">
            Helping Your Business <br />{" "}
            <span className="text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text">
              <span>&lt;Grow&gt;</span>{" "}
              <span className="font-worksanslight">&</span>{" "}
              <span>&lt;Succeed&gt;</span>{" "}
            </span>
          </h1>
          <div className="flex items-center justify-center">
            <button
              title="left arrow"
              className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 bg-black-950 hover:bg-black-900 xs:mr-[-6vw] sm:mr-[7vw]"
              onClick={prevSlide}
              style={{ zIndex: 2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 lg:w-8 lg:h-8"
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
              className="object-cover object-center w-full h-auto lg:w-2/3 xl:w-3/5"
              alt="plan"
              src={images[currentIndex]}
              style={{ zIndex: 1 }}
            />

            <button
              title="right arrow"
              className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 bg-black-950 hover:bg-black-900 xs:ml-[-6vw] sm:ml-[7vw]"
              onClick={nextSlide}
              style={{ zIndex: 2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 lg:w-8 lg:h-8"
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
          <h1 className="leading-relaxed font-worksanslight text-base text-gray-200 tracking-wide text-center sm:pl-[20vw] sm:pr-[20vw]">
            Corplabs offers professional consultation services to help turn your
            ideas into reality. We work with you to develop a detailed plan that
            outlines the project scope, timeline, and budget.
          </h1>
        </div>
      </section>
      <section className="text-gray-200 bg-black-950">
        <div className="xs:px-[8vw] sm:px-[2vw] md:px-[4vw] lg:px-[4vw] xl:px-[12vw] xs:pb-20 sm:pb-40 mx-auto flex flex-wrap justify-center items-center">
          <div className="w-full mb-10 overflow-hidden rounded-lg lg:w-2/5 lg:mb-0">
            <img
              alt="collaboration"
              className="object-cover object-center w-[90%]"
              src={Collab}
            />
          </div>
          <div className="flex flex-col flex-wrap -mb-10 text-center lg:py-6 lg:w-3/5 lg:pl-12 lg:text-left">
            <div className="flex flex-col items-center mb-10 lg:items-start">
              <div className="flex-grow">
                <h2 className="text-white-100 text-2xl lg:text-4xl font-interbold mb-[2vh] text-left tracking-wide">
                  Collaborating with Corpians
                </h2>
                <p className="text-base leading-relaxed text-left text-gray-200 font-worksanslight">
                  Corplabs values collaboration for project success. They work
                  with clients and partners to deliver the best solutions,
                  staying current with technology trends. Contact Corplabs to
                  explore collaborations.
                </p>
                <div className="grid grid-cols-1 mt-[2vh] xl:gap-[2vh] md:grid-cols-2 ">
                  <div className="flex items-center mt-[2vh]">
                    <img
                      className="w-10 object-cover mr-[1.2vw] "
                      alt="consultation"
                      src={Consult}
                    />
                    <p className="text-base leading-relaxed text-left font-intermedium text-white-100">
                      Expert Consultation
                    </p>
                  </div>

                  <div className="flex items-center mt-[2vh]">
                    <img
                      className="w-10 object-cover mr-[1.2vw]"
                      alt="collaboration"
                      src={Compre}
                    />
                    <p className="text-base leading-relaxed text-left font-intermedium text-white-100">
                      Comprehensive Approach
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 xl:gap-[2vh] md:grid-cols-2">
                  <div className="flex items-center mt-[2vh]">
                    <img
                      className="w-10 object-cover mr-[1.2vw]"
                      alt="consultation"
                      src={Collab2}
                    />
                    <p className="text-base leading-relaxed text-left font-intermedium text-white-100">
                      Collaboration
                    </p>
                  </div>

                  <div className="flex items-center mt-[2vh]">
                    <img
                      className="w-10 object-cover mr-[1.2vw]"
                      alt="collaboration"
                      src={Idea}
                    />
                    <p className="text-base leading-relaxed text-left font-intermedium text-white-100">
                      Idea to Reality
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 xl:gap-[2vh] md:grid-cols-2">
                  <div className="flex items-center mt-[2vh]">
                    <img
                      className="w-10 object-cover mr-[1.2vw]"
                      alt="consultation"
                      src={Support}
                    />
                    <p className="text-base leading-relaxed text-left font-intermedium text-white-100">
                      Continued Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-black-950">
        <div className="lg:container px-[8vw] xs:pb-[1vh] sm:pb-24 mx-auto relative ">
          <div className="relative z-10 flex flex-col w-full text-center">
            <h1 className="text-2xl lg:text-4xl font-interbold text-white tracking-wide mb-[2vh]">
              We Look Small,{" "}
              <span className="block text-transparent lg:inline bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text">
                But Think Big
              </span>
            </h1>
            <p className="leading-relaxed text-center text-base xs:pb-4 sm:pb-0 font-worksanslight text-gray-200 text-left xs:px-[0vw] px-[8vw]">
              At Corplabs, we foster a collaborative and inclusive culture. We
              believe in empowering our employees, valuing diversity, and
              promoting work-life balance. Join a team that encourages growth,
              creativity, and personal development.
            </p>
          </div>
          <div className="flex justify-center items-center mb-[10vh]">
            <div className="relative image-container">
              <img
                className="hidden xs:hidden sm:hidden md:block 2md:block lg:block xl:block 2xl:block md:mt-[5.5vh] w-full h-auto absolute z-0"
                alt="culture"
                src={Culture}
              />

              <div className="relative z-20 flex flex-wrap ">
                <div className="xl:w-1/2 md:w-full md:w-1/2 md:px-[6vw] md:py-0 2md:px-[5vw] 2md:py-10 lg:px-[6vw] lg:py-14 xl:px-[4vw] xl:py-20 2xl:px-[4vw] 2xl:py-32">
                  <h1 className="mt-4 text-lg font-semibold tracking-wide text-white-100">
                    Work With Us
                  </h1>

                  <p className="mt-2 text-base tracking-wide text-gray-200 font-worksanslight">
                    Corplabs offers a supportive workplace with challenging
                    projects. Join us for growth opportunities and a vibrant
                    professional community.
                  </p>
                </div>

                <div className="xl:w-1/2 md:w-1/2 md:px-[6vw] md:py-0 2md:px-[5vw] 2md:py-10 lg:px-[6vw] lg:py-14 xl:px-[4vw] xl:py-20 2xl:px-[4vw] 2xl:py-32">
                  <h1 className="mt-4 text-lg font-semibold tracking-wide text-white-100">
                    Benefits & Perks
                  </h1>

                  <p className="mt-2 text-base tracking-wide text-gray-200 font-worksanslight">
                    We value our team, offering competitive pay, health
                    coverage, flexible hours, and events to foster professional
                    and personal well-being.
                  </p>
                </div>
              </div>

              <div className="relative z-20 flex flex-wrap">
                <div className="xl:w-1/2 md:w-1/2 md:px-[6vw] md:py-8 2md:px-[5vw] 2md:py-2 lg:px-[6vw] lg:py-10 xl:px-[4vw] xl:py-0 2xl:px-[4vw] 2xl:py-4">
                  <div>
                    <h1 className="mt-4 text-lg font-semibold text-white-100">
                      Career Growth
                    </h1>

                    <p className="mt-2 text-base tracking-wide text-gray-200 font-worksanslight">
                      At Corplabs, we foster your growth through learning
                      opportunities, mentorship, and challenges.
                    </p>
                  </div>
                </div>

                <div className="xl:w-1/2 md:w-1/2 md:w-1/2 md:px-[6vw] md:py-8 2md:px-[5vw] 2md:py-2 lg:px-[6vw] lg:py-10 xl:px-[4vw] xl:py-0 2xl:px-[4vw] 2xl:py-4">
                  <h1 className="mt-4 text-lg font-semibold text-white-100">
                    Equal Opportunity Employer Statement
                  </h1>

                  <p className="mt-2 text-base tracking-wide text-gray-200 font-worksanslight">
                    We are an equal opportunity employer who values diversity.
                    We accept applicants of all backgrounds without
                    discrimination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex items-center justify-center text-white bg-black-900"
        id="careers"
      >
        <div className="px-8 pt-16 pb-24 mx-auto max-w-screen-2xl sm:px-6 sm:py-24 lg:px-8 lg:py-24 ">
          <div className="flex flex-col text-center w-full relative z-10 mb-[6vh] ">
            <h1 className="text-2xl lg:text-4xl font-interbold text-white tracking-wide mb-[2vh]">
              Job Vacancies
            </h1>
            <p className="text-base leading-relaxed text-left text-center text-gray-200 font-worksanslight ">
              Exciting job opportunities await! Join our team today and be part
              of something amazing.
            </p>
          </div>
          <div className="mt-8 mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 sm:w-[80vw] md:w-[80vw] lg:grid-cols-3 lg:w-[85vw] xl:w-[70vw] 2xl:w-[60vw]">
            {notionData?.notionJob?.data?.results?.map(res => {
              const isProd = res?.properties?.Team?.select?.name === "Product";
              const isEngineer =
                res?.properties?.Team?.select?.name === "Engineering";
              // const isDesign = res?.properties?.Team?.select?.name === 'Design';

              return (
                <a
                  key={res?.id}
                  className="block p-8 transition shadow-xl rounded-xl bg-primary-950 border-1 border-primary-500 hover:border-primary-500 hover:shadow-primary-500/20"
                  href={res?.public_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="object-cover object-center w-full mb-6 rounded h-30 w-30"
                    src={isEngineer ? Backend : isProd ? ProductLead : Frontend}
                    alt={res?.properties?.Team?.select?.name}
                  />
                  <h3 className="mb-2 text-base tracking-wide text-primary-300 font-worksanslight">
                    {res?.properties?.Team?.select?.name}
                  </h3>
                  <h2 className="mb-4 text-lg text-gray-50 font-intermedium">
                    {res?.properties?.Name?.title?.[0]?.plain_text}
                  </h2>
                  <button className="block w-full px-6 py-2 text-gray-200 border-transparent rounded border-1 md:w-auto focus:outline-none hover:bg-primary-500 border-gradient">
                    LEARN MORE
                  </button>
                </a>
              );
            })}
            {/* <a
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

            <a
              href="https://corplabs.notion.site/NodeJS-Backend-Developer-2e46d7dcb2664f379f8acb37f7a4f67a"
              target="_blank"
              rel="noreferrer"
              className="block p-8 transition shadow-xl rounded-xl bg-primary-950 border-1 border-primary-500 hover:border-primary-500 hover:shadow-primary-500/20"
            >
              <img
                className="object-cover object-center w-full mb-6 rounded h-30 w-30"
                src={Frontend}
                alt="frontend-engineer"
              />
              <h3 className="mb-2 text-base tracking-wide text-primary-300 font-worksanslight">
                Engineering
              </h3>
              <h2 className="mb-4 text-lg truncate text-gray-50 font-intermedium">
                NodeJS Backend Developer
              </h2>

              <button className="block w-full px-6 py-2 text-gray-200 border-transparent rounded border-1 md:w-auto focus:outline-none hover:bg-primary-500 border-gradient">
                LEARN MORE
              </button>
            </a>

            <a
              className="block p-8 transition shadow-xl rounded-xl bg-primary-950 border-1 border-primary-500 hover:border-primary-500 hover:shadow-primary-500/20"
              href="https://corplabs.notion.site/IT-Assistant-86819bd1b2b046e4bd721417df6efd5b"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="object-cover object-center w-full mb-6 rounded h-30 w-30"
                src={TechLead}
                alt="tech-lead"
              />
              <h3 className="mb-2 text-base tracking-wide text-primary-300 font-worksanslight">
                Engineering
              </h3>
              <h2 className="mb-4 text-lg text-gray-50 font-intermedium">
                IT Assistant
              </h2>
              <button className="block w-full px-6 py-2 text-gray-200 border-transparent rounded border-1 md:w-auto focus:outline-none hover:bg-primary-500 border-gradient">
                LEARN MORE
              </button>
            </a>

            <a
              className="block p-8 transition shadow-xl rounded-xl bg-primary-950 border-1 border-primary-500 hover:border-primary-500 hover:shadow-primary-500/20"
              href="https://corplabs.notion.site/Vue-Frontend-Developer-0e30c07cf217405abda0db1f7f3f43f7"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="object-cover object-center w-full mb-6 rounded h-30 w-30"
                src={GameDev}
                alt="game-dev"
              />
              <h3 className="mb-2 text-base tracking-wide text-primary-300 font-worksanslight">
                Engineering
              </h3>
              <h2 className="mb-4 text-lg text-gray-50 font-intermedium">
                Vue Frontend Developer
              </h2>
              <button className="block w-full px-6 py-2 text-gray-200 border-transparent rounded border-1 md:w-auto focus:outline-none hover:bg-primary-500 border-gradient">
                LEARN MORE
              </button>
            </a>

            <a
              className="block p-8 transition shadow-xl rounded-xl bg-primary-950 border-1 border-primary-500 hover:border-primary-500 hover:shadow-primary-500/20"
              href="https://corplabs.notion.site/PHP-Backend-Developer-42b1e15ee8124da8b5250d153aec761e"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="object-cover object-center w-full mb-6 rounded h-30 w-30"
                src={GameDev2}
                alt="game-dev2"
              />
              <h3 className="mb-2 text-base tracking-wide text-primary-300 font-worksanslight">
                Engineering
              </h3>
              <h2 className="mb-4 text-lg text-gray-50 font-intermedium">
                PHP Backend Developer
              </h2>
              <button className="block w-full px-6 py-2 text-gray-200 border-transparent rounded border-1 md:w-auto focus:outline-none hover:bg-primary-500 border-gradient">
                LEARN MORE
              </button>
            </a>

            <a
              className="block p-8 transition shadow-xl rounded-xl bg-primary-950 border-1 border-primary-500 hover:border-primary-500 hover:shadow-primary-500/20"
              href="https://corplabs.notion.site/Java-backend-Part-time-a8ebfcba47c84fdc8437ffeebc278f45"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="object-cover object-center w-full mb-6 rounded h-30 w-30"
                src={ProductLead}
                alt="product-lead"
              />
              <h3 className="mb-2 text-base tracking-wide text-primary-300 font-worksanslight">
                Engineering
              </h3>
              <h2 className="mb-4 text-lg text-gray-50 font-intermedium">
                Flutter Frontend Developer
              </h2>
              <button
                onClick={() =>
                  (window.location.href =
                    "https://corplabs.notion.site/Flutter-Frontend-Developer-f83a171fd77c413fbe598afc8cc53573?pvs=74")
                }
                className="block w-full px-6 py-2 text-gray-200 border-transparent rounded border-1 md:w-auto focus:outline-none hover:bg-primary-500 border-gradient"
              >
                LEARN MORE
              </button>
            </a> */}
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default withNotionData(Home);
