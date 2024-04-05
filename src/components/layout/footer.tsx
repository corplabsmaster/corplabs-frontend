import React from "react";

import logo from "@images/corplabs-logo.svg";
import fb from "@images/fb-icon.svg";
import ig from "@images/ig-icon.svg";
import linkedin from "@images/linkedin-icon.svg";

import "../layout/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-950">
      <div className="container p-6 xs:px-2 sm:px-9">
        <div className="mt-6 lg:flex">
          <div className="w-full -mx-6 lg:w-2/6">
            <div className="px-6">
              <a href="#">
                <img src={logo} alt="corplabs-logo" className="w-10 h-10" />
              </a>

              <div className="flex mt-4 mb-16 ">
                <a href="https://www.facebook.com/corplabs.co">
                  <img src={fb} alt="fb-icon" className="mr-5" />
                </a>

                <a href="https://www.instagram.com/corplabs_co/">
                  <img src={ig} alt="ig-icon" className="mr-5" />
                </a>

                <a href="https://www.linkedin.com/company/corplabsco/">
                  <img src={linkedin} alt="linkedin-icon" className="mr-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-0 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-sm tracking-wide text-left text-white font-intersemibold">
                  About
                </h3>
                <a
                  href="#"
                  className="block mt-3 text-gray-200 font-worksanslight hover:text-primary-500"
                >
                  Company
                </a>
                {/* <a
                  href="#"
                  className="block mt-3 text-gray-200 font-worksanslight hover:text-primary-500"
                >
                  Lorem Ipsum
                </a> */}
                {/* <a
                  href="#"
                  className="block mt-3 text-gray-200 font-worksanslight hover:text-primary-500"
                >
                  Lorem Ipsum
                </a> */}
              </div>

              <div>
                <h3 className="text-sm tracking-wide text-left text-white font-intersemibold">
                  Solution
                </h3>
                <a className="block mt-3 text-gray-200 font-worksanslight hover:text-primary-500">
                  App Development
                </a>
                <a
                  // href="#"
                  className="block mt-3 text-gray-200 font-worksanslight hover:text-primary-500"
                >
                  Web Solution
                </a>
                <a
                  // href="#"
                  className="block mt-3 text-gray-200 font-worksanslight hover:text-primary-500"
                >
                  Cybersecurity
                </a>
                <a
                  // href="#"
                  className="block mt-3 text-gray-200 font-worksanslight hover:text-primary-500"
                >
                  Design
                </a>
                <a
                  // href="#"
                  className="block mt-3 text-gray-200 font-worksanslight hover:text-primary-500"
                >
                  Marketing
                </a>
              </div>

              <div>
                <h3 className="text-sm tracking-wide text-left text-white font-intersemibold">
                  Career
                </h3>
                <a
                  href="https://corplabs.notion.site/Senior-Java-Backend-e8dc9233206842ab9048106bbcc2d833"
                  className="block mt-3 text-gray-200 font-worksanslight hover:text-primary-500"
                >
                  Senior Java Backend
                </a>
                <a
                  href="https://corplabs.notion.site/Vue-Frontend-Developer-0e30c07cf217405abda0db1f7f3f43f7"
                  className="block mt-3 text-gray-200 font-worksanslight hover:text-primary-500"
                >
                  Vue Frontend Developer
                </a>
                <a
                  href="https://corplabs.notion.site/PHP-Backend-Developer-42b1e15ee8124da8b5250d153aec761e"
                  className="block mt-3 text-gray-200 font-worksanslight hover:text-primary-500"
                >
                  PHP Backend Developer
                </a>
              </div>

              <div>
                <h3 className="text-sm tracking-wide text-left text-white font-intersemibold">
                  Contact
                </h3>
                <span className="block mt-3 text-gray-200 font-worksanslight hover:text-primary-500">
                  016-672 7208
                </span>
                <span className="block mt-3 text-gray-200 font-worksanslight hover:text-primary-500">
                  contact@corplabs.co
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-[1.5px] my-[5vh] bg-primary-500 border-none" />

        <div className="md:flex md:-mx-0 md:items-center md:justify-between">
          <h1 className="">
            <span className="text-lg tracking-wide text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text font-intermedium">
              Need Some Ideas? Access Them Here!
            </span>
            <p className="mt-3 mr-2 text-sm text-gray-200 font-worksanslight md:mt-0">
              We offer a variety of resources to help you brainstorm and develop
              your software concept, including case studies, industry reports,
              and gray-200papers. Our team of experts is also available to
              provide guidance and feedback throughout the ideation process.
              Contact us today to learn more.
            </p>
          </h1>

          <div className="">
            <div className="mt-[3vh] md:mx-3 shrink-0 md:mt-0 md:w-auto">
              <input
                type="text"
                disabled
                id="footer-field-1"
                name="footer-field-1"
                className="w-full md:w-[25vw] bg-primary-1000 rounded border-2 border-primary-500 focus:ring-0.5 focus:bg-transparent focus:ring-primary-500 focus:border-primary-200 text-xs outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mt-[2vh] md:mx-3 shrink-0 md:mt-[1.5vh] md:w-auto ">
              <input
                type="text"
                disabled
                id="footer-field-2"
                name="footer-field-2"
                className="w-full md:w-[25vw] bg-primary-1000 rounded border-2 border-primary-500 focus:ring-0.5 focus:bg-transparent focus:ring-primary-500 focus:border-primary-200 text-xs outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mt-[2vh] md:mx-3 shrink-0 md:mt-[1.5vh] md:w-auto">
              <button
                disabled
                className="border-transparent border-1 w-full md:w-[25vw] block text-gray-200 py-2 px-6 focus:outline-none hover:bg-primary-500 rounded border-gradient"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <hr className="h-[1.5px] my-[5vh] bg-primary-500 border-none" />

        <div className="flex flex-col justify-between md:flex-row mb-[2vh]">
          <p className="text-xs text-gray-200 font-worksanslight">
            D-U-N-S® Certified : 44-791-6777 • © 2024 Corplabs - All rights
            reserved
          </p>

          <div className="flex justify-between">
            <a
              href="#"
              className="mr-4 text-xs tracking-wide text-gray-200 transition-colors duration-300 font-worksanslight hover:text-primary-500"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="ml-4 text-xs tracking-wide text-gray-200 transition-colors duration-300 font-worksanslight hover:text-primary-500"
            >
              Terms of Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
