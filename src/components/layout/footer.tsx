import React from "react";

import "../styles/footer.css";

import logo from "@images/corplabs-logo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-500">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img className="w-10 h-10" src={logo} alt="corplabs-logo" />
          </a>
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-intersemibold text-left text-white tracking-wide text-sm mb-3">
              About
            </h2>
            <nav className="list-none mb-[5vh] text-left tracking-wide">
              <li>
                <a className="text-white-200 font-worksanslight hover:text-purple-200 mb-[1vh]">
                  First Link
                </a>
              </li>
              <li>
                <a className="text-white-200 font-worksanslight hover:text-purple-200 mb-[1vh]">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-white-200 font-worksanslight hover:text-purple-200 mb-[1vh]">
                  Third Link
                </a>
              </li>
              <li>
                <a className="text-white-200 font-worksanslight hover:text-purple-200 mb-[1vh]">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-intersemibold text-left text-white tracking-wide text-sm mb-3">
              Solution
            </h2>
            <nav className="list-none mb-[5vh] text-left tracking-wide">
              <li>
                <a className="text-white-200 font-worksanslight hover:text-purple-200 mb-[1vh]">
                  App Development
                </a>
              </li>
              <li>
                <a className="text-white-200 font-worksanslight hover:text-purple-200 mb-[1vh]">
                  Web Solution
                </a>
              </li>
              <li>
                <a className="text-white-200 font-worksanslight hover:text-purple-200 mb-[1vh]">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a className="text-white-200 font-worksanslight hover:text-purple-200 mb-[1vh]">
                  Design
                </a>
              </li>
              <li>
                <a className="text-white-200 font-worksanslight hover:text-purple-200 mb-[1vh]">
                  Marketing
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-intersemibold text-left text-white tracking-wide text-sm mb-3">
              Career
            </h2>
            <nav className="list-none mb-[5vh] text-left tracking-wide">
              <li>
                <a className="text-white-200 font-worksanslight hover:text-purple-200 mb-[1vh]">
                  First Link
                </a>
              </li>
              <li>
                <a className="text-white-200 font-worksanslight hover:text-purple-200 mb-[1vh]">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-white-200 font-worksanslight hover:text-purple-200 mb-[1vh]">
                  Third Link
                </a>
              </li>
              <li>
                <a className="text-white-200 font-worksanslight hover:text-purple-200 mb-[1vh]">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-intersemibold text-left text-white tracking-wide text-sm mb-3">
              Contact
            </h2>
            <nav className="list-none mb-[5vh] text-left tracking-wide">
              <li>
                <a className="text-white-200 font-worksanslight hover:text-purple-200 mb-[1vh]">
                  First Link
                </a>
              </li>
              <li>
                <a className="text-white-200 font-worksanslight hover:text-purple-200 mb-[1vh]">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-white-200 font-worksanslight hover:text-purple-200 mb-[1vh]">
                  Third Link
                </a>
              </li>
              <li>
                <a className="text-white-200 font-worksanslight hover:text-purple-200 mb-[1vh]">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-purple-500">
        <div className="container px-5 py-8 mx-auto flex justify-center items-center">
          {/* Text Section */}
          <div className="w-full sm:w-2/3 md:w-3/4 lg:w-3/5 mb-4 sm:mb-0">
            <p className="inline-block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-intermedium tracking-wide text-lg md:mt-0 mt-2 text-left sm:text-left ">
              Need Some Ideas? Access Them Here!
            </p>
            <p className="text-white-200 font-worksanslight text-sm md:mt-0 mt-2 text-left sm:text-left">
              We offer a variety of resources to help you brainstorm and develop
              your software concept, including case studies, industry reports,
              and whitepapers. Our team of experts is also available to provide
              guidance and feedback throughout the ideation process. Contact us
              today to learn more.
            </p>
          </div>

          {/* Form Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/5">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2 ">
              <label
                htmlFor="footer-field"
                className="leading-7 text-sm text-gray-600"
              ></label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="block text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mt-2">
              Button
            </button>
          </div>
        </div>
      </div>
      <div className="bg-purple-500">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row ">
          <p className="text-white-200 text-xs text-center font-worksanslight sm:mt-0 mt-2 sm:text-left">
            © 2023 Corplabs
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center font-worksanslight text-xs tracking-wide">
            <a
              href="#"
              className="mr-[3vw] text-white-200 hover:text-purple-200"
            >
              Privacy Policy
            </a>
            <a href="#" className=" text-white-200 hover:text-purple-200">
              Terms of Conditions
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
