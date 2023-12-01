import React from "react";

import logo from "@images/corplabs-logo.svg";
import fb from "@images/fb-icon.svg";
import ig from "@images/ig-icon.svg";
import linkedin from "@images/linkedin-icon.svg";

import "../layout/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-500">
      <div className="container p-6 mx-auto">
        <div className="lg:flex mt-6">
          <div className="w-full -mx-6 lg:w-2/6">
            <div className="px-6">
              <a href="#">
                <img src={logo} alt="corplabs-logo" className="w-10 h-10" />
              </a>

              <div className="flex mt-4 mb-16 ">
                <a href="#">
                  <img src={fb} alt="fb-icon" className="mr-5" />
                </a>

                <a href="#">
                  <img src={ig} alt="ig-icon" className="mr-5" />
                </a>

                <a href="#">
                  <img src={linkedin} alt="linkedin-icon" className="mr-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt- lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="font-intersemibold text-left text-white tracking-wide text-sm">
                  About
                </h3>
                <a
                  href="#"
                  className="block mt-3 text-white-200 font-worksanslight hover:text-purple-200"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="block mt-3 text-white-200 font-worksanslight hover:text-purple-200"
                >
                  Lorem Ipsum
                </a>
                <a
                  href="#"
                  className="block mt-3 text-white-200 font-worksanslight hover:text-purple-200"
                >
                  Lorem Ipsum
                </a>
              </div>

              <div>
                <h3 className="font-intersemibold text-left text-white tracking-wide text-sm">
                  Solution
                </h3>
                <a
                  href="#"
                  className="block mt-3 text-white-200 font-worksanslight hover:text-purple-200"
                >
                  App Development
                </a>
                <a
                  href="#"
                  className="block mt-3 text-white-200 font-worksanslight hover:text-purple-200"
                >
                  Web Solution
                </a>
                <a
                  href="#"
                  className="block mt-3 text-white-200 font-worksanslight hover:text-purple-200"
                >
                  Cybersecurity
                </a>
                <a
                  href="#"
                  className="block mt-3 text-white-200 font-worksanslight hover:text-purple-200"
                >
                  Design
                </a>
                <a
                  href="#"
                  className="block mt-3 text-white-200 font-worksanslight hover:text-purple-200"
                >
                  Marketing
                </a>
              </div>

              <div>
                <h3 className="font-intersemibold text-left text-white tracking-wide text-sm">
                  Career
                </h3>
                <a
                  href="#"
                  className="block mt-3 text-white-200 font-worksanslight hover:text-purple-200"
                >
                  Lorem Ipsum
                </a>
                <a
                  href="#"
                  className="block mt-3 text-white-200 font-worksanslight hover:text-purple-200"
                >
                  Lorem Ipsum
                </a>
                <a
                  href="#"
                  className="block mt-3 text-white-200 font-worksanslight hover:text-purple-200"
                >
                  Lorem Ipsum
                </a>
              </div>

              <div>
                <h3 className="font-intersemibold text-left text-white tracking-wide text-sm">
                  Contact
                </h3>
                <span className="block mt-3 text-white-200 font-worksanslight hover:text-purple-200">
                  +12 3456 7890
                </span>
                <span className="block mt-3 text-white-200 font-worksanslight hover:text-purple-200">
                  example@email.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-[5vh] bg-purple-200 border-none" />

        <div className="md:flex md:-mx-3 md:items-center md:justify-between ">
          <h1 className="inline-block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-intermedium tracking-wide text-lg md:mx-3">
            Need Some Ideas? Access Them Here!
            <p className="text-white-200 font-worksanslight text-sm md:mt-0 mt-3 mr-2">
              We offer a variety of resources to help you brainstorm and develop
              your software concept, including case studies, industry reports,
              and whitepapers. Our team of experts is also available to provide
              guidance and feedback throughout the ideation process. Contact us
              today to learn more.
            </p>
          </h1>

          <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
            <div className="mt-[3vh] md:mx-3 shrink-0 md:mt-0 md:w-auto">
              <input
                type="text"
                id="footer-field-1"
                name="footer-field-1"
                className="w-full md:w-[25vw] bg-purple-700 rounded border-2 border-purple-300 focus:ring-1 focus:bg-transparent focus:ring-purple-200 focus:border-purple-300 text-xs outline-none text-white-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mt-[2vh] md:mx-3 shrink-0 md:mt-[1.5vh] md:w-auto ">
              <input
                type="text"
                id="footer-field-2"
                name="footer-field-2"
                className="w-full md:w-[25vw] bg-purple-700 rounded border-2 border-purple-300 focus:ring-1 focus:bg-transparent focus:ring-purple-200 focus:border-purple-300 text-xs outline-none text-white-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mt-[2vh] md:mx-3 shrink-0 md:mt-[1.5vh] md:w-auto">
              <button className="border-transparent border-1 w-full md:w-[25vw] block text-white py-2 px-6 focus:outline-none hover:bg-purple-400 rounded border-gradient">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <hr className="h-px my-[5vh] bg-purple-200 border-none" />

        <div className="flex flex-col items-center justify-between md:flex-row mb-[2vh]">
          <p className="text-white-200 text-xs font-worksanslight">
            © 2023 Corplabs - All rights reserved
          </p>

          <div className="-mx-4">
            <a
              href="#"
              className="px-4 text-white-200 font-worksanslight text-xs tracking-wide transition-colors duration-300 hover:text-purple-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="px-4 text-white-200 font-worksanslight text-xs tracking-wide transition-colors duration-300 hover:text-purple-200"
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
