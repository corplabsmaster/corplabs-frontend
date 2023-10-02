import React from "react";
import styled from "styled-components";
import SEO from "@components/common/seo";
import Layout from "@components/layout";
import withLocation from "@helpers/hoc/withLocation";
import bannerRight from "@components/images/games-banner-right.png";
import searchIcon from "@components/images/search-icon.png";

import tropy2 from "@components/images/tropy-2.png";
import user4 from "@components/images/user-4.png";
import ribbon from "@components/images/ribbon.png";

import user1 from "@components/images/user-1.png";
import user2 from "@components/images/user-2.png";
import user3 from "@components/images/user-3.png";

import win1 from "@components/images/win-1.png";
import win2 from "@components/images/win-2.png";
import win3 from "@components/images/win-3.png";

import doubleAltRight from "@components/images/double-right-alt.png";

import winner1 from "@components/images/winner-1.png";
import winner2 from "@components/images/winner-2.png";
import winner3 from "@components/images/winner-3.png";
import winner4 from "@components/images/winner-4.png";
import winner5 from "@components/images/winner-5.png";
import winner6 from "@components/images/winner-6.png";
import winner7 from "@components/images/winner-7.png";
import winner8 from "@components/images/winner-8.png";

const About = ({ location }: any) => {
  return (
    <Layout location={location.pathname}>
      <AboutWrapper>
        <SEO
          title="About"
          description="Jwin7 is an established international cricket betting platform that also provides online casino games. It offers a wide range of services from its own Jwin7 casino to the latest 2022 Fifa world cup news."
        />
        <section className="bg-[url('../images/games-inner-bg.png')] bg-[length:100%_100%] pt-[100px] pb-[0px] md:pt-[202px] md:pb-[78px] relative bg-no-repeat">
          <div className="banner-content">
            <div className="max-w-[1140px] m-auto">
              <div className="row flex justify-content-start">
                <div className="col-lg-12">
                  <div className="top-area px-[12px] md:px-[0px]">
                    <h1 className="uppercase text-white font-chakra text-[40px] md:text-[76px]">
                      WINNERS
                    </h1>
                    <div className="breadcrumb-area">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb flex mb-11 py-3">
                          <li className="text-white leading-6 font-normal text-base md:text-2xl">
                            <a href="index-2.html">Home</a>
                          </li>
                          <span className="text-white leading-6 font-normal text-base md:text-2xl mx-2">
                            &#x3e;
                          </span>
                          <li
                            className="text-white leading-6 font-normal text-base md:text-2xl active"
                            aria-current="page"
                          >
                            Winners
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="cir-1 mb-0 absolute bottom-[6%] right-[2%] w-[50%] md:bottom-0 md:right-[0%] md:w-[auto]"
              src={bannerRight}
              alt="games banner right"
            />
          </div>
        </section>

        <section className="available-game-section bg-jb-black-400">
          <div className="overlay pt-[50px] pb-[50px] md:py-[100px]">
            <div className="container wow fadeInUp max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-4 mx-auto w-full">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-9 col-sm-8">
                  <div className="section-header text-center">
                    <h2 className="jb-section-title mb-[20px] text-center text-[30px] md:text-[57px]">
                      All <span className="text-orange-400">WINNERS</span>
                    </h2>
                    <p className="font-normal text-white text-lg text-center">
                      To meet our top winners
                    </p>
                  </div>
                </div>
              </div>
              <div className="menu-bar rounded-[58px] md:rounded-full bg-[#0E0E67] p-4 my-8 md:my-14">
                <div className="row">
                  <div className="col-lg-5 col-md-12">
                    <form action="#">
                      <div className="jb-rounded-input">
                        <img
                          className="mb-0 rounded-full"
                          src={searchIcon}
                          alt="search"
                        />
                        <input
                          type="text"
                          placeholder="What’s your game?"
                          className="w-full text-lg bg-transparent focus:outline-0 focus-visible:outline-0 py-[10px] px-[14px] rounded-[28px] border-none jb-elipsis text-white"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-7 col-md-12 flex justify-center md:justify-end">
                    <ul
                      className="nav nav-tabs border-0 grid md:flex md:justify-end"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          href="#featured"
                          role="tab"
                          aria-controls="featured"
                          aria-selected="true"
                          className="jb-btn-green text-white flex items-center mt-2 md:mt-0 mb-2 md:mb-0 md:mr-2"
                          id="featured-tab"
                          data-toggle="tab"
                        >
                          Todays{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          id="instant-tab"
                          data-toggle="tab"
                          href="#instant"
                          role="tab"
                          aria-controls="instant"
                          aria-selected="false"
                          className="jb-btn-green text-white flex items-center mt-2 md:mt-0 mb-2 md:mb-0 md:mr-2"
                        >
                          Weekend{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          id="tournaments-tab"
                          data-toggle="tab"
                          href="#tournaments"
                          role="tab"
                          aria-controls="tournaments"
                          aria-selected="false"
                          className="jb-btn-green text-white flex items-center mt-2 md:mt-0 mb-2 md:mb-0 md:mr-2"
                        >
                          Monthly{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="tab-content" id="myTabContentt">
                <div
                  className="tab-pane fade show active"
                  id="featured"
                  role="tabpanel"
                  aria-labelledby="featured-tab"
                >
                  <div className="row contained-area">
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img
                          className="mb-0 rounded-full"
                          src={winner1}
                          alt="img"
                        />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $500
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img
                          className="mb-0 rounded-full"
                          src={winner2}
                          alt="img"
                        />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $500
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img
                          className="mb-0 rounded-full"
                          src={winner3}
                          alt="img"
                        />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $400
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img
                          className="mb-0 rounded-full"
                          src={winner4}
                          alt="img"
                        />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $400
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img
                          className="mb-0 rounded-full"
                          src={winner5}
                          alt="img"
                        />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $300
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img
                          className="mb-0 rounded-full"
                          src={winner6}
                          alt="img"
                        />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $300
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img
                          className="mb-0 rounded-full"
                          src={winner7}
                          alt="img"
                        />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $200
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img
                          className="mb-0 rounded-full"
                          src={winner8}
                          alt="img"
                        />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $200
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="instant"
                  role="tabpanel"
                  aria-labelledby="instant-tab"
                >
                  <div className="row contained-area mb-30-none">
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img src="images/winner-3.png" alt="image" />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $500
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img src="images/winner-5.png" alt="image" />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $500
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img src="images/winner-7.png" alt="image" />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $400
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img src="images/winner-8.png" alt="image" />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $400
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img src="images/winner-1.png" alt="image" />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $300
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img src="images/winner-4.png" alt="image" />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $300
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img src="images/winner-6.png" alt="image" />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $200
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img src="images/winner-2.png" alt="image" />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $200
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tournaments"
                  role="tabpanel"
                  aria-labelledby="tournaments-tab"
                >
                  <div className="row contained-area mb-30-none">
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img src="images/winner-4.png" alt="image" />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $500
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img src="images/winner-3.png" alt="image" />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $500
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img src="images/winner-5.png" alt="image" />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $400
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img src="images/winner-1.png" alt="image" />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $400
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img src="images/winner-2.png" alt="image" />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $300
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img src="images/winner-8.png" alt="image" />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $300
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img src="images/winner-6.png" alt="image" />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $200
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 mb-7 flex justify-center">
                      <a
                        href="#"
                        className="rounded-full inline-flex justify-center items-end border-[5px] border-[#ffd800]"
                      >
                        <img src="images/winner-7.png" alt="image" />
                        <span className="bg-[#ffd800] absolute font-bold py-[10px] px-6 rounded-[15px] text-white text-lg">
                          $200
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Todays winner In start */}
        <section id="todays-winner-section" className="games bg-black">
          <div className="overlay pt-[50px] pb-[150px] md:py-[120px]">
            <div className="container wow fadeInUp">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                  <div className="mb-[56px] text-center">
                    <h2 className="jb-section-title mb-[20px] text-center text-[30px] md:text-[57px]">
                      Recent Big{" "}
                      <span className="text-orange-400">Winners</span>
                    </h2>
                    <p className="font-normal text-white text-lg text-center">
                      We update our site regularly; more and more winners are
                      added every day! To locate the most recent winner&apos;s
                      information
                    </p>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-5 col-md-4">
                  <div className="jb-jackpot-winner-card text-center mb-[30px] md:mb-[0]">
                    <h5 className="uppercase text-2xl font-chakra text-white mb-3">
                      Jackpot Winner
                    </h5>
                    <div className="mid-area">
                      <img src={tropy2} alt="image" className="mx-auto mb-0" />
                    </div>
                    <div className="relative inline-block mt-3">
                      <img
                        src={user4}
                        alt="image"
                        className="mx-auto rounded-[50%] mb-0"
                      />
                      <h5 className="jb-jackpot-winner-btn font-chakra text-white">
                        € 496
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-8">
                  <div className="right-side bg-[#480B96] rounded-[30px] pt-[50px] px-[0px] pb-[22px] md:pt-[30px] md:px-[39px]">
                    <div className="title-area relative flex justify-center mb-5">
                      <img
                        src={ribbon}
                        alt="image"
                        className="mx-auto rounded-[50%] mb-0"
                      />
                      <h5 className="uppercase text-lg md:text-2xl font-chakra text-white mt-[3px] md:mt-[10px] absolute">
                        Recent Wins
                      </h5>
                    </div>
                    <div className="winner-chart">
                      <div className="bg-[#7818DD] px-[8px] py-[25px] rounded-[10px] mx-[15px] my-[10px] grid md:flex justify-center md:justify-between items-center">
                        <div className="left-area grid md:flex items-center">
                          <img
                            src={win1}
                            alt="image"
                            className="mx-auto rounded-[50%] mb-0"
                          />
                          <a className="name-area d-flex align-items-center">
                            <img
                              src={user1}
                              alt="image"
                              className="my-0 mx-[12px] bg-[#ff9900] w-10 h-10  rounded-[50%]"
                            />
                            <h6 className="uppercase text-sm font-chakra text-white">
                              Bessie Cooper
                            </h6>
                          </a>
                        </div>
                        <div className="jb-jackpot-winner-amount flex items-center">
                          <span className="uppercase text-sm font-chakra font-bold text-[#00FF6D]">
                            + 56.65994
                          </span>
                          <span className="uppercase text-sm font-chakra font-bold text-white mx-[5px]">
                            ETH
                          </span>
                          <span>
                            <img
                              src={doubleAltRight}
                              alt="image"
                              className="mx-auto rounded-[50%] mb-0"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="bg-[#7818DD] px-[8px] py-[25px] rounded-[10px] mx-[15px] my-[10px] grid md:flex justify-center md:justify-between items-center">
                        <div className="left-area grid md:flex items-center">
                          <img
                            src={win2}
                            alt="image"
                            className="mx-auto rounded-[50%] mb-0"
                          />
                          <a className="name-area d-flex align-items-center">
                            <img
                              src={user2}
                              alt="image"
                              className="my-0 mx-[12px] bg-[#ff9900] w-10 h-10  rounded-[50%]"
                            />
                            <h6 className="uppercase text-sm font-chakra text-white">
                              Jerome Bell
                            </h6>
                          </a>
                        </div>
                        <div className="jb-jackpot-winner-amount flex items-center">
                          <span className="uppercase text-sm font-chakra font-bold text-[#00FF6D]">
                            + 56.65994
                          </span>
                          <span className="uppercase text-sm font-chakra font-bold text-white mx-[5px]">
                            ETH
                          </span>
                          <span>
                            <img
                              src={doubleAltRight}
                              alt="image"
                              className="mx-auto rounded-[50%] mb-0"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="bg-[#7818DD] px-[8px] py-[25px] rounded-[10px] mx-[15px] my-[10px] grid md:flex justify-center md:justify-between items-center">
                        <div className="left-area grid md:flex items-center">
                          <img
                            src={win3}
                            alt="image"
                            className="mx-auto rounded-[50%] mb-0"
                          />
                          <a className="name-area d-flex align-items-center">
                            <img
                              src={user3}
                              alt="image"
                              className="my-0 mx-[12px] bg-[#ff9900] w-10 h-10  rounded-[50%]"
                            />
                            <h6 className="uppercase text-sm font-chakra text-white">
                              Darrell Steward
                            </h6>
                          </a>
                        </div>
                        <div className="jb-jackpot-winner-amount flex items-center">
                          <span className="uppercase text-sm font-chakra font-bold text-[#00FF6D]">
                            + 56.65994
                          </span>
                          <span className="uppercase text-sm font-chakra font-bold text-white mx-[5px]">
                            ETH
                          </span>
                          <span>
                            <img
                              src={doubleAltRight}
                              alt="image"
                              className="mx-auto rounded-[50%] mb-0"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AboutWrapper>
    </Layout>
  );
};

export default withLocation(About);

const AboutWrapper = styled.div`
  && {
    margin: 0 auto;
  }
`;
