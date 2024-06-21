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
          <div className="container mx-auto flex px-0 xs:pt-[10vh] sm:pt-[8vh] xs:pb-16 sm:pb-40 items-center justify-center flex-col">
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
          <div className="container xs:px-[0vw] sm:px-[0vw] xl:px-[5vw] xs:pb-14 sm:pb-40 mx-auto">
            <div className="flex flex-col text-center w-full mb-20 xs:mb-[4vh] md:mb-[6vh]">
              <h1 className="text-2xl tracking-wider text-center font-interbold text-white-100 lg:text-4xl">
                Our Services
              </h1>
              {/* <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                havent heard of them man bun deep jianbing selfies heirloom
                prism food truck ugh squid celiac humblebrag.
              </p> */}
            </div>

            <div className="flex flex-col flex-wrap">
              <dl className="grid grid-cols-1 gap-0 sm:grid-cols-3 sm:divide-x sm:divide-white-100/40">
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
