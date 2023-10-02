import React from "react";
import styled from "styled-components";
import SEO from "@components/common/seo";

import Layout from "@components/layout";

import withLocation from "@helpers/hoc/withLocation";
import bannerLeft from "@components/images/tour-left-banner.png";
import bannerRight from "@components/images/tour-right-banner.png";
import bannerRightIllu from "@components/images/tour-right-illu.png";
import searchIcon from "@components/images/search-icon.png";

import prizeIcon from "@components/images/prize-icon.png";
import tournamentsFames6 from "@components/images/tournaments-games-6.png";

const Tournaments = () => {
  const [list, setList] = React.useState(false);
  return (
    <Layout location={"/tournaments"} showSideMenu={false}>
      <TournamentWrapper>
        <SEO
          title="Tournaments"
          description="Jwin7 is an established international cricket betting platform that also provides online casino games. It offers a wide range of services from its own Jwin7 casino to the latest 2022 Fifa world cup news."
        />
        <section
          id="banner-section"
          className="inner-banner tournaments pb-[0px] pt-[120px] md:pb-[78px] bg-[#181818] relative"
        >
          <div className="banner-content">
            <div className="max-w-[1140px] m-auto">
              <img
                src={bannerLeft}
                className="absolute -left-[8%] top-[10%] md:left-0 md:top-0 z-0 mb-0 w-[50%] md:w-[auto]"
                alt="image"
              />
              <img
                src={bannerRight}
                className="absolute right-0 top-0 z-0 mb-0 w-[50%] md:w-[auto]"
                alt="image"
              />

              <div className="relative row">
                <div className="flex col-lg-12 justify-content-start">
                  <img
                    src={bannerRightIllu}
                    className="absolute -top-[17px] right-[0%] z-0 mb-0 hidden md:block"
                    alt="image"
                  />
                  <div className="text-area !px-[15px] md:px-0">
                    <h1 className="uppercase text-white font-chakra text-[40px] md:text-[76px]">
                      Tournaments
                    </h1>
                    <div className="breadcrumb-area">
                      <nav aria-label="breadcrumb">
                        <ol className="flex py-3 breadcrumb mb-11">
                          <li className="text-base font-normal leading-6 text-white md:text-2xl">
                            <a href="index-2.html">Home</a>
                          </li>
                          <span className="mx-2 text-base font-normal leading-6 text-white md:text-2xl">
                            &#x3e;
                          </span>
                          <li
                            className="text-base font-normal leading-6 text-white md:text-2xl active"
                            aria-current="page"
                          >
                            Tournaments
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tournaments-games">
          <div className="overlay px-[15px] pt-[50px] pb-[120px] md:pt-[120px] bg-[#4e4e4e]">
            <div className="max-w-[1140px] m-auto wow fadeInUp">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-9 col-sm-8">
                  <div className="text-center section-header">
                    <h2 className="jb-section-title mb-[20px] text-center text-[30px] md:text-[57px]">
                      Tournaments <span className="text-orange-400">games</span>
                    </h2>
                    <p className="text-lg font-normal text-center text-white">
                      Play in multi-player tournaments or head to head for cash
                      prizes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="menu-bar rounded-[58px] md:rounded-full bg-[#0E0E67] !p-4 my-14">
                <div className="row">
                  <div className="col-lg-5 col-md-12">
                    <form action="#">
                      <div className="jb-rounded-input">
                        <img className="mb-0" src={searchIcon} alt="search" />
                        <input
                          type="text"
                          placeholder="What’s your game?"
                          className="w-full text-lg bg-transparent focus:outline-0 focus-visible:outline-0 py-[10px] px-[14px] rounded-[28px] border-none jb-elipsis text-white"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-7 col-md-12">
                    <ul
                      className="justify-end border-0 nav nav-tabs"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          href="#featured"
                          role="tab"
                          aria-controls="featured"
                          aria-selected="true"
                          className="flex items-center mx-1 mt-2 mb-2 text-sm text-white jb-btn-green md:text-base md:mx-0 md:mt-0 md:mb-0 md:mr-2"
                          id="featured-tab"
                          data-toggle="tab"
                        >
                          All{" "}
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
                          className="flex items-center mx-1 mt-2 mb-2 text-sm text-white jb-btn-green md:text-base md:mx-0 md:mt-0 md:mb-0 md:mr-2"
                        >
                          Today{" "}
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
                          className="flex items-center mx-1 mt-2 mb-2 text-sm text-white jb-btn-green md:text-base md:mx-0 md:mt-0 md:mb-0 md:mr-2"
                        >
                          This week{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="all"
                  role="tabpanel"
                  aria-labelledby="all-tab"
                >
                  <div className="flex items-center my-10 row">
                    <div className="col-lg-3 col-md-3 col-sm-4 mb-3 md:!mb-0">
                      <select className="bg-[#141448] border-[#4450B8] border-[1px] rounded-[28px] h-14 px-3 w-[100%] text-lg text-white font-normal bg-top-[center] bg-[right_1rem_center] appearance-none bg-[url('../images/down-arrow.png')] bg-no-repeat focus-visible:outline-0">
                        <option>Upcoming</option>
                        <option>Upcoming 2</option>
                        <option>Upcoming 3</option>
                        <option>Upcoming 4</option>
                      </select>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 mb-3 md:!mb-0">
                      <select className="bg-[#141448] border-[#4450B8] border-[1px] rounded-[28px] h-14 px-3 w-[100%] text-lg text-white font-normal bg-top-[center] bg-[right_1rem_center] appearance-none bg-[url('../images/down-arrow.png')] bg-no-repeat focus-visible:outline-0">
                        <option>Select Team Size</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 mb-3 md:!mb-0">
                      <select className="bg-[#141448] border-[#4450B8] border-[1px] rounded-[28px] h-14 px-3 w-[100%] text-lg text-white font-normal bg-top-[center] bg-[right_1rem_center] appearance-none bg-[url('../images/down-arrow.png')] bg-no-repeat focus-visible:outline-0">
                        <option>Select Entry Fee</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                    <div className="hidden col-lg-3 col-md-2 align-items-center justify-content-end md:flex">
                      <div onClick={() => setList(false)}>
                        <i className="fas fa-th grid-btn active bg-[#7400D3] shadow-[#57049a] shadow-lg rounded-[10px] !py-4 !px-5 cursor-pointer font-black text-lg text-white"></i>
                      </div>
                      <div onClick={() => setList(true)}>
                        <i className="fas fa-list list-btn bg-[#ffd800] shadow-[#ffb400] shadow-lg rounded-[10px] !py-4 !px-5 cursor-pointer font-black text-lg text-white ml-[10px]"></i>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="flex flex-wrap justify-between all-items">
                        <div
                          className={`${
                            list
                              ? "jb-tournaments-single-item-list after:absolute after:h-[80%] after:w-[1px] after:border-[#293574] after:border-[1px] after:right-[37%] after:top-[10%]"
                              : "jb-tournaments-single-item-sm md:jb-tournaments-single-item"
                          } border-[#262975] border-[1px] rounded-[20px] mb-5 py-[30px] !px-5`}
                        >
                          <div className="grid justify-center content-area md:flex">
                            <img
                              src={tournamentsFames6}
                              className="mb-0"
                              alt="image"
                            />
                            <div
                              className={`${
                                list ? "mx-[30px]" : "mx-auto"
                              } grid-style grid items-center text-center`}
                            >
                              <h5 className="my-3 text-sm font-semibold text-center text-white uppercase head-area md:my-0 md:text-2xl font-chakra">
                                Farewell June
                              </h5>
                              <div className="prize d-flex justify-content-center bg-[#191951] py-[15px] px-5 rounded-[10px]">
                                <img
                                  className="mb-0"
                                  src={prizeIcon}
                                  alt="image"
                                />
                                <h5 className="text-[#ff8a14] text-2xl font-chakra ml-[5px]">
                                  €6,000
                                </h5>
                              </div>
                              <p className="my-3 text-base text-white uppercase bet font-chakra md:my-0">
                                Min.bet{" "}
                                <span className="text-[#ff8a14]">€0.20</span>
                              </p>
                              {!list && (
                                <>
                                  <a
                                    href="tournaments-details.html"
                                    className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8] mb-3 md:mb-0"
                                  >
                                    View Tournament
                                  </a>
                                  <p className="text-base text-white uppercase end-on font-chakra">
                                    Will end on:{" "}
                                    <span className="text-[#ff8a14]">
                                      08-07-2021
                                    </span>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                          {list && (
                            <div className="list-right grid items-center justify-center text-center bg-[#090944] rounded-[20px] !p-5">
                              <p className="text-sm text-white uppercase end-on font-chakra">
                                Will end on:{" "}
                                <span className="text-[#ff8a14]">
                                  08-07-2021
                                </span>
                              </p>
                              <div className="draw-counter">
                                <div
                                  className="date-area d-flex justify-content-center"
                                  data-countdown="2022/06/20"
                                >
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;{" "}
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00{" "}
                                  </h6>
                                </div>
                                <div className="time-parameter">
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    DD
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    HH
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    MM
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    SS
                                  </span>
                                </div>
                              </div>
                              <a
                                href="tournaments-details.html"
                                className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8]"
                              >
                                View Tournament
                              </a>
                            </div>
                          )}
                        </div>
                        <div
                          className={`${
                            list
                              ? "jb-tournaments-single-item-list after:absolute after:h-[80%] after:w-[1px] after:border-[#293574] after:border-[1px] after:right-[37%] after:top-[10%]"
                              : "jb-tournaments-single-item-sm md:jb-tournaments-single-item"
                          } border-[#262975] border-[1px] rounded-[20px] mb-5 py-[30px] !px-5`}
                        >
                          <div className="grid justify-center content-area md:flex">
                            <img
                              src={tournamentsFames6}
                              className="mb-0"
                              alt="image"
                            />
                            <div
                              className={`${
                                list ? "mx-[30px]" : "mx-auto"
                              } grid-style grid items-center text-center`}
                            >
                              <h5 className="my-3 text-sm font-semibold text-center text-white uppercase head-area md:my-0 md:text-2xl font-chakra">
                                Drops & Wins
                              </h5>
                              <div className="prize d-flex justify-content-center bg-[#191951] py-[15px] px-5 rounded-[10px]">
                                <img
                                  className="mb-0"
                                  src={prizeIcon}
                                  alt="image"
                                />
                                <h5 className="text-[#ff8a14] text-2xl font-chakra ml-[5px]">
                                  €6,000
                                </h5>
                              </div>
                              <p className="my-3 text-base text-white uppercase bet font-chakra md:my-0">
                                Min.bet{" "}
                                <span className="text-[#ff8a14]">€0.20</span>
                              </p>
                              {!list && (
                                <>
                                  <a
                                    href="tournaments-details.html"
                                    className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8] mb-3 md:mb-0"
                                  >
                                    View Tournament
                                  </a>
                                  <p className="text-base text-white uppercase end-on font-chakra">
                                    Will end on:{" "}
                                    <span className="text-[#ff8a14]">
                                      08-07-2021
                                    </span>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                          {list && (
                            <div className="list-right grid items-center justify-center text-center bg-[#090944] rounded-[20px] !p-5">
                              <p className="text-sm text-white uppercase end-on font-chakra">
                                Will end on:{" "}
                                <span className="text-[#ff8a14]">
                                  08-07-2021
                                </span>
                              </p>
                              <div className="draw-counter">
                                <div
                                  className="date-area d-flex justify-content-center"
                                  data-countdown="2022/06/20"
                                >
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;{" "}
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00{" "}
                                  </h6>
                                </div>
                                <div className="time-parameter">
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    DD
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    HH
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    MM
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    SS
                                  </span>
                                </div>
                              </div>
                              <a
                                href="tournaments-details.html"
                                className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8]"
                              >
                                View Tournament
                              </a>
                            </div>
                          )}
                        </div>
                        <div
                          className={`${
                            list
                              ? "jb-tournaments-single-item-list after:absolute after:h-[80%] after:w-[1px] after:border-[#293574] after:border-[1px] after:right-[37%] after:top-[10%]"
                              : "jb-tournaments-single-item-sm md:jb-tournaments-single-item"
                          } border-[#262975] border-[1px] rounded-[20px] mb-5 py-[30px] !px-5`}
                        >
                          <div className="grid justify-center content-area md:flex">
                            <img
                              src={tournamentsFames6}
                              className="mb-0"
                              alt="image"
                            />
                            <div
                              className={`${
                                list ? "mx-[30px]" : "mx-auto"
                              } grid-style grid items-center text-center`}
                            >
                              <h5 className="my-3 text-sm font-semibold text-center text-white uppercase head-area md:my-0 md:text-2xl font-chakra">
                                Live Casino
                              </h5>
                              <div className="prize d-flex justify-content-center bg-[#191951] py-[15px] px-5 rounded-[10px]">
                                <img
                                  className="mb-0"
                                  src={prizeIcon}
                                  alt="image"
                                />
                                <h5 className="text-[#ff8a14] text-2xl font-chakra ml-[5px]">
                                  €6,000
                                </h5>
                              </div>
                              <p className="my-3 text-base text-white uppercase bet font-chakra md:my-0">
                                Min.bet{" "}
                                <span className="text-[#ff8a14]">€0.20</span>
                              </p>
                              {!list && (
                                <>
                                  <a
                                    href="tournaments-details.html"
                                    className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8] mb-3 md:mb-0"
                                  >
                                    View Tournament
                                  </a>
                                  <p className="text-base text-white uppercase end-on font-chakra">
                                    Will end on:{" "}
                                    <span className="text-[#ff8a14]">
                                      08-07-2021
                                    </span>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                          {list && (
                            <div className="list-right grid items-center justify-center text-center bg-[#090944] rounded-[20px] !p-5">
                              <p className="text-sm text-white uppercase end-on font-chakra">
                                Will end on:{" "}
                                <span className="text-[#ff8a14]">
                                  08-07-2021
                                </span>
                              </p>
                              <div className="draw-counter">
                                <div
                                  className="date-area d-flex justify-content-center"
                                  data-countdown="2022/06/20"
                                >
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;{" "}
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00{" "}
                                  </h6>
                                </div>
                                <div className="time-parameter">
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    DD
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    HH
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    MM
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    SS
                                  </span>
                                </div>
                              </div>
                              <a
                                href="tournaments-details.html"
                                className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8]"
                              >
                                View Tournament
                              </a>
                            </div>
                          )}
                        </div>
                        <div
                          className={`${
                            list
                              ? "jb-tournaments-single-item-list after:absolute after:h-[80%] after:w-[1px] after:border-[#293574] after:border-[1px] after:right-[37%] after:top-[10%]"
                              : "jb-tournaments-single-item-sm md:jb-tournaments-single-item"
                          } border-[#262975] border-[1px] rounded-[20px] mb-5 py-[30px] !px-5`}
                        >
                          <div className="grid justify-center content-area md:flex">
                            <img
                              src={tournamentsFames6}
                              className="mb-0"
                              alt="image"
                            />
                            <div
                              className={`${
                                list ? "mx-[30px]" : "mx-auto"
                              } grid-style grid items-center text-center`}
                            >
                              <h5 className="my-3 text-sm font-semibold text-center text-white uppercase head-area md:my-0 md:text-2xl font-chakra">
                                Monthly Race
                              </h5>
                              <div className="prize d-flex justify-content-center bg-[#191951] py-[15px] px-5 rounded-[10px]">
                                <img
                                  className="mb-0"
                                  src={prizeIcon}
                                  alt="image"
                                />
                                <h5 className="text-[#ff8a14] text-2xl font-chakra ml-[5px]">
                                  €6,000
                                </h5>
                              </div>
                              <p className="my-3 text-base text-white uppercase bet font-chakra md:my-0">
                                Min.bet{" "}
                                <span className="text-[#ff8a14]">€0.20</span>
                              </p>
                              {!list && (
                                <>
                                  <a
                                    href="tournaments-details.html"
                                    className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8] mb-3 md:mb-0"
                                  >
                                    View Tournament
                                  </a>
                                  <p className="text-base text-white uppercase end-on font-chakra">
                                    Will end on:{" "}
                                    <span className="text-[#ff8a14]">
                                      08-07-2021
                                    </span>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                          {list && (
                            <div className="list-right grid items-center justify-center text-center bg-[#090944] rounded-[20px] !p-5">
                              <p className="text-sm text-white uppercase end-on font-chakra">
                                Will end on:{" "}
                                <span className="text-[#ff8a14]">
                                  08-07-2021
                                </span>
                              </p>
                              <div className="draw-counter">
                                <div
                                  className="date-area d-flex justify-content-center"
                                  data-countdown="2022/06/20"
                                >
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;{" "}
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00{" "}
                                  </h6>
                                </div>
                                <div className="time-parameter">
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    DD
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    HH
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    MM
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    SS
                                  </span>
                                </div>
                              </div>
                              <a
                                href="tournaments-details.html"
                                className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8]"
                              >
                                View Tournament
                              </a>
                            </div>
                          )}
                        </div>
                        <div
                          className={`${
                            list
                              ? "jb-tournaments-single-item-list after:absolute after:h-[80%] after:w-[1px] after:border-[#293574] after:border-[1px] after:right-[37%] after:top-[10%]"
                              : "jb-tournaments-single-item-sm md:jb-tournaments-single-item"
                          } border-[#262975] border-[1px] rounded-[20px] mb-5 py-[30px] !px-5`}
                        >
                          <div className="grid justify-center content-area md:flex">
                            <img
                              className="mb-0"
                              src={tournamentsFames6}
                              alt="image"
                            />
                            <div
                              className={`${
                                list ? "mx-[30px]" : "mx-auto"
                              } grid-style grid items-center text-center`}
                            >
                              <h5 className="my-3 text-sm font-semibold text-center text-white uppercase head-area md:my-0 md:text-2xl font-chakra">
                                Top Provider
                              </h5>
                              <div className="prize d-flex justify-content-center bg-[#191951] py-[15px] px-5 rounded-[10px]">
                                <img
                                  className="mb-0"
                                  src={prizeIcon}
                                  alt="image"
                                />
                                <h5 className="text-[#ff8a14] text-2xl font-chakra ml-[5px]">
                                  €5,000
                                </h5>
                              </div>
                              <p className="my-3 text-base text-white uppercase bet font-chakra md:my-0">
                                Min.bet{" "}
                                <span className="text-[#ff8a14]">€0.20</span>
                              </p>
                              {!list && (
                                <>
                                  <a
                                    href="tournaments-details.html"
                                    className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8] mb-3 md:mb-0"
                                  >
                                    View Tournament
                                  </a>
                                  <p className="text-base text-white uppercase end-on font-chakra">
                                    Will end on:{" "}
                                    <span className="text-[#ff8a14]">
                                      08-07-2021
                                    </span>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                          {list && (
                            <div className="list-right grid items-center justify-center text-center bg-[#090944] rounded-[20px] !p-5">
                              <p className="text-sm text-white uppercase end-on font-chakra">
                                Will end on:{" "}
                                <span className="text-[#ff8a14]">
                                  08-07-2021
                                </span>
                              </p>
                              <div className="draw-counter">
                                <div
                                  className="date-area d-flex justify-content-center"
                                  data-countdown="2022/06/20"
                                >
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;{" "}
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00{" "}
                                  </h6>
                                </div>
                                <div className="time-parameter">
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    DD
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    HH
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    MM
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    SS
                                  </span>
                                </div>
                              </div>
                              <a
                                href="tournaments-details.html"
                                className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8]"
                              >
                                View Tournament
                              </a>
                            </div>
                          )}
                        </div>
                        <div
                          className={`${
                            list
                              ? "jb-tournaments-single-item-list after:absolute after:h-[80%] after:w-[1px] after:border-[#293574] after:border-[1px] after:right-[37%] after:top-[10%]"
                              : "jb-tournaments-single-item-sm md:jb-tournaments-single-item"
                          } border-[#262975] border-[1px] rounded-[20px] mb-5 py-[30px] !px-5`}
                        >
                          <div className="grid justify-center content-area md:flex">
                            <img
                              src={tournamentsFames6}
                              className="mb-0"
                              alt="image"
                            />
                            <div
                              className={`${
                                list ? "mx-[30px]" : "mx-auto"
                              } grid-style grid items-center text-center`}
                            >
                              <h5 className="my-3 text-sm font-semibold text-center text-white uppercase head-area md:my-0 md:text-2xl font-chakra">
                                Slot of the Week
                              </h5>
                              <div className="prize d-flex justify-content-center bg-[#191951] py-[15px] px-5 rounded-[10px]">
                                <img
                                  className="mb-0"
                                  src={prizeIcon}
                                  alt="image"
                                />
                                <h5 className="text-[#ff8a14] text-2xl font-chakra ml-[5px]">
                                  €6,000
                                </h5>
                              </div>
                              <p className="my-3 text-base text-white uppercase bet font-chakra md:my-0">
                                Min.bet{" "}
                                <span className="text-[#ff8a14]">€0.20</span>
                              </p>
                              {!list && (
                                <>
                                  <a
                                    href="tournaments-details.html"
                                    className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8] mb-3 md:mb-0"
                                  >
                                    View Tournament
                                  </a>
                                  <p className="text-base text-white uppercase end-on font-chakra">
                                    Will end on:{" "}
                                    <span className="text-[#ff8a14]">
                                      08-07-2021
                                    </span>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                          {list && (
                            <div className="list-right grid items-center justify-center text-center bg-[#090944] rounded-[20px] !p-5">
                              <p className="text-sm text-white uppercase end-on font-chakra">
                                Will end on:{" "}
                                <span className="text-[#ff8a14]">
                                  08-07-2021
                                </span>
                              </p>
                              <div className="draw-counter">
                                <div
                                  className="date-area d-flex justify-content-center"
                                  data-countdown="2022/06/20"
                                >
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;{" "}
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00{" "}
                                  </h6>
                                </div>
                                <div className="time-parameter">
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    DD
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    HH
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    MM
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    SS
                                  </span>
                                </div>
                              </div>
                              <a
                                href="tournaments-details.html"
                                className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8]"
                              >
                                View Tournament
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                          <a className="jb-game-view-more-btn hover:bg-[#7400D3] hover:text-[#fff] hover:border-[#7400D3]">
                            View more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="today"
                  role="tabpanel"
                  aria-labelledby="today-tab"
                >
                  <div className="my-10 row">
                    <div className="col-lg-3">
                      <select>
                        <option>Upcoming</option>
                        <option>Upcoming 2</option>
                        <option>Upcoming 3</option>
                        <option>Upcoming 4</option>
                      </select>
                    </div>
                    <div className="col-lg-3">
                      <select>
                        <option>Select Team Size</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                    <div className="col-lg-3">
                      <select>
                        <option>Select Entry Fee</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                    <div className="col-lg-3 d-flex align-items-center justify-content-end">
                      <i className="fas fa-th grid-btn active"></i>
                      <i className="fas fa-list list-btn"></i>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="all-items">
                        <div
                          className={`${
                            list
                              ? "jb-tournaments-single-item-list after:absolute after:h-[80%] after:w-[1px] after:border-[#293574] after:border-[1px] after:right-[37%] after:top-[10%]"
                              : "jb-tournaments-single-item-sm md:jb-tournaments-single-item"
                          } border-[#262975] border-[1px] rounded-[20px] mb-5 py-[30px] !px-5`}
                        >
                          <div className="grid justify-center content-area md:flex">
                            <img
                              src={tournamentsFames6}
                              className="mb-0"
                              alt="image"
                            />
                            <div
                              className={`${
                                list ? "mx-[30px]" : "mx-auto"
                              } grid-style grid items-center text-center`}
                            >
                              <h5 className="my-3 text-sm font-semibold text-center text-white uppercase head-area md:my-0 md:text-2xl font-chakra">
                                Farewell June
                              </h5>
                              <div className="prize d-flex justify-content-center bg-[#191951] py-[15px] px-5 rounded-[10px]">
                                <img
                                  className="mb-0"
                                  src={prizeIcon}
                                  alt="image"
                                />
                                <h5 className="text-[#ff8a14] text-2xl font-chakra ml-[5px]">
                                  €6,000
                                </h5>
                              </div>
                              <p className="my-3 text-base text-white uppercase bet font-chakra md:my-0">
                                Min.bet{" "}
                                <span className="text-[#ff8a14]">€0.20</span>
                              </p>
                              {!list && (
                                <>
                                  <a
                                    href="tournaments-details.html"
                                    className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8] mb-3 md:mb-0"
                                  >
                                    View Tournament
                                  </a>
                                  <p className="text-base text-white uppercase end-on font-chakra">
                                    Will end on:{" "}
                                    <span className="text-[#ff8a14]">
                                      08-07-2021
                                    </span>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                          {list && (
                            <div className="list-right grid items-center justify-center text-center bg-[#090944] rounded-[20px] !p-5">
                              <p className="text-sm text-white uppercase end-on font-chakra">
                                Will end on:{" "}
                                <span className="text-[#ff8a14]">
                                  08-07-2021
                                </span>
                              </p>
                              <div className="draw-counter">
                                <div
                                  className="date-area d-flex justify-content-center"
                                  data-countdown="2022/06/20"
                                >
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;{" "}
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00{" "}
                                  </h6>
                                </div>
                                <div className="time-parameter">
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    DD
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    HH
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    MM
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    SS
                                  </span>
                                </div>
                              </div>
                              <a
                                href="tournaments-details.html"
                                className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8]"
                              >
                                View Tournament
                              </a>
                            </div>
                          )}
                        </div>
                        <div
                          className={`${
                            list
                              ? "jb-tournaments-single-item-list after:absolute after:h-[80%] after:w-[1px] after:border-[#293574] after:border-[1px] after:right-[37%] after:top-[10%]"
                              : "jb-tournaments-single-item-sm md:jb-tournaments-single-item"
                          } border-[#262975] border-[1px] rounded-[20px] mb-5 py-[30px] !px-5`}
                        >
                          <div className="grid justify-center content-area md:flex">
                            <img
                              src={tournamentsFames6}
                              className="mb-0"
                              alt="image"
                            />
                            <div
                              className={`${
                                list ? "mx-[30px]" : "mx-auto"
                              } grid-style grid items-center text-center`}
                            >
                              <h5 className="my-3 text-sm font-semibold text-center text-white uppercase head-area md:my-0 md:text-2xl font-chakra">
                                Drops & Wins
                              </h5>
                              <div className="prize d-flex justify-content-center bg-[#191951] py-[15px] px-5 rounded-[10px]">
                                <img
                                  className="mb-0"
                                  src={prizeIcon}
                                  alt="image"
                                />
                                <h5 className="text-[#ff8a14] text-2xl font-chakra ml-[5px]">
                                  €6,000
                                </h5>
                              </div>
                              <p className="my-3 text-base text-white uppercase bet font-chakra md:my-0">
                                Min.bet{" "}
                                <span className="text-[#ff8a14]">€0.20</span>
                              </p>
                              {!list && (
                                <>
                                  <a
                                    href="tournaments-details.html"
                                    className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8] mb-3 md:mb-0"
                                  >
                                    View Tournament
                                  </a>
                                  <p className="text-base text-white uppercase end-on font-chakra">
                                    Will end on:{" "}
                                    <span className="text-[#ff8a14]">
                                      08-07-2021
                                    </span>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                          {list && (
                            <div className="list-right grid items-center justify-center text-center bg-[#090944] rounded-[20px] !p-5">
                              <p className="text-sm text-white uppercase end-on font-chakra">
                                Will end on:{" "}
                                <span className="text-[#ff8a14]">
                                  08-07-2021
                                </span>
                              </p>
                              <div className="draw-counter">
                                <div
                                  className="date-area d-flex justify-content-center"
                                  data-countdown="2022/06/20"
                                >
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;{" "}
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00{" "}
                                  </h6>
                                </div>
                                <div className="time-parameter">
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    DD
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    HH
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    MM
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    SS
                                  </span>
                                </div>
                              </div>
                              <a
                                href="tournaments-details.html"
                                className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8]"
                              >
                                View Tournament
                              </a>
                            </div>
                          )}
                        </div>
                        <div
                          className={`${
                            list
                              ? "jb-tournaments-single-item-list after:absolute after:h-[80%] after:w-[1px] after:border-[#293574] after:border-[1px] after:right-[37%] after:top-[10%]"
                              : "jb-tournaments-single-item-sm md:jb-tournaments-single-item"
                          } border-[#262975] border-[1px] rounded-[20px] mb-5 py-[30px] !px-5`}
                        >
                          <div className="grid justify-center content-area md:flex">
                            <img
                              src={tournamentsFames6}
                              className="mb-0"
                              alt="image"
                            />
                            <div
                              className={`${
                                list ? "mx-[30px]" : "mx-auto"
                              } grid-style grid items-center text-center`}
                            >
                              <h5 className="my-3 text-sm font-semibold text-center text-white uppercase head-area md:my-0 md:text-2xl font-chakra">
                                Live Casino
                              </h5>
                              <div className="prize d-flex justify-content-center bg-[#191951] py-[15px] px-5 rounded-[10px]">
                                <img
                                  className="mb-0"
                                  src={prizeIcon}
                                  alt="image"
                                />
                                <h5 className="text-[#ff8a14] text-2xl font-chakra ml-[5px]">
                                  €6,000
                                </h5>
                              </div>
                              <p className="my-3 text-base text-white uppercase bet font-chakra md:my-0">
                                Min.bet{" "}
                                <span className="text-[#ff8a14]">€0.20</span>
                              </p>
                              {!list && (
                                <>
                                  <a
                                    href="tournaments-details.html"
                                    className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8] mb-3 md:mb-0"
                                  >
                                    View Tournament
                                  </a>
                                  <p className="text-base text-white uppercase end-on font-chakra">
                                    Will end on:{" "}
                                    <span className="text-[#ff8a14]">
                                      08-07-2021
                                    </span>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                          {list && (
                            <div className="list-right grid items-center justify-center text-center bg-[#090944] rounded-[20px] !p-5">
                              <p className="text-sm text-white uppercase end-on font-chakra">
                                Will end on:{" "}
                                <span className="text-[#ff8a14]">
                                  08-07-2021
                                </span>
                              </p>
                              <div className="draw-counter">
                                <div
                                  className="date-area d-flex justify-content-center"
                                  data-countdown="2022/06/20"
                                >
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;{" "}
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00{" "}
                                  </h6>
                                </div>
                                <div className="time-parameter">
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    DD
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    HH
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    MM
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    SS
                                  </span>
                                </div>
                              </div>
                              <a
                                href="tournaments-details.html"
                                className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8]"
                              >
                                View Tournament
                              </a>
                            </div>
                          )}
                        </div>
                        <div
                          className={`${
                            list
                              ? "jb-tournaments-single-item-list after:absolute after:h-[80%] after:w-[1px] after:border-[#293574] after:border-[1px] after:right-[37%] after:top-[10%]"
                              : "jb-tournaments-single-item-sm md:jb-tournaments-single-item"
                          } border-[#262975] border-[1px] rounded-[20px] mb-5 py-[30px] !px-5`}
                        >
                          <div className="grid justify-center content-area md:flex">
                            <img
                              src={tournamentsFames6}
                              className="mb-0"
                              alt="image"
                            />
                            <div
                              className={`${
                                list ? "mx-[30px]" : "mx-auto"
                              } grid-style grid items-center text-center`}
                            >
                              <h5 className="my-3 text-sm font-semibold text-center text-white uppercase head-area md:my-0 md:text-2xl font-chakra">
                                Monthly Race
                              </h5>
                              <div className="prize d-flex justify-content-center bg-[#191951] py-[15px] px-5 rounded-[10px]">
                                <img
                                  className="mb-0"
                                  src={prizeIcon}
                                  alt="image"
                                />
                                <h5 className="text-[#ff8a14] text-2xl font-chakra ml-[5px]">
                                  €6,000
                                </h5>
                              </div>
                              <p className="my-3 text-base text-white uppercase bet font-chakra md:my-0">
                                Min.bet{" "}
                                <span className="text-[#ff8a14]">€0.20</span>
                              </p>
                              {!list && (
                                <>
                                  <a
                                    href="tournaments-details.html"
                                    className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8] mb-3 md:mb-0"
                                  >
                                    View Tournament
                                  </a>
                                  <p className="text-base text-white uppercase end-on font-chakra">
                                    Will end on:{" "}
                                    <span className="text-[#ff8a14]">
                                      08-07-2021
                                    </span>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                          {list && (
                            <div className="list-right grid items-center justify-center text-center bg-[#090944] rounded-[20px] !p-5">
                              <p className="text-sm text-white uppercase end-on font-chakra">
                                Will end on:{" "}
                                <span className="text-[#ff8a14]">
                                  08-07-2021
                                </span>
                              </p>
                              <div className="draw-counter">
                                <div
                                  className="date-area d-flex justify-content-center"
                                  data-countdown="2022/06/20"
                                >
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;{" "}
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00{" "}
                                  </h6>
                                </div>
                                <div className="time-parameter">
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    DD
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    HH
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    MM
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    SS
                                  </span>
                                </div>
                              </div>
                              <a
                                href="tournaments-details.html"
                                className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8]"
                              >
                                View Tournament
                              </a>
                            </div>
                          )}
                        </div>
                        <div
                          className={`${
                            list
                              ? "jb-tournaments-single-item-list after:absolute after:h-[80%] after:w-[1px] after:border-[#293574] after:border-[1px] after:right-[37%] after:top-[10%]"
                              : "jb-tournaments-single-item-sm md:jb-tournaments-single-item"
                          } border-[#262975] border-[1px] rounded-[20px] mb-5 py-[30px] !px-5`}
                        >
                          <div className="grid justify-center content-area md:flex">
                            <img
                              className="mb-0"
                              src={tournamentsFames6}
                              alt="image"
                            />
                            <div
                              className={`${
                                list ? "mx-[30px]" : "mx-auto"
                              } grid-style grid items-center text-center`}
                            >
                              <h5 className="my-3 text-sm font-semibold text-center text-white uppercase head-area md:my-0 md:text-2xl font-chakra">
                                Top Provider
                              </h5>
                              <div className="prize d-flex justify-content-center bg-[#191951] py-[15px] px-5 rounded-[10px]">
                                <img
                                  className="mb-0"
                                  src={prizeIcon}
                                  alt="image"
                                />
                                <h5 className="text-[#ff8a14] text-2xl font-chakra ml-[5px]">
                                  €5,000
                                </h5>
                              </div>
                              <p className="my-3 text-base text-white uppercase bet font-chakra md:my-0">
                                Min.bet{" "}
                                <span className="text-[#ff8a14]">€0.20</span>
                              </p>
                              {!list && (
                                <>
                                  <a
                                    href="tournaments-details.html"
                                    className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8] mb-3 md:mb-0"
                                  >
                                    View Tournament
                                  </a>
                                  <p className="text-base text-white uppercase end-on font-chakra">
                                    Will end on:{" "}
                                    <span className="text-[#ff8a14]">
                                      08-07-2021
                                    </span>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                          {list && (
                            <div className="list-right grid items-center justify-center text-center bg-[#090944] rounded-[20px] !p-5">
                              <p className="text-sm text-white uppercase end-on font-chakra">
                                Will end on:{" "}
                                <span className="text-[#ff8a14]">
                                  08-07-2021
                                </span>
                              </p>
                              <div className="draw-counter">
                                <div
                                  className="date-area d-flex justify-content-center"
                                  data-countdown="2022/06/20"
                                >
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;{" "}
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00{" "}
                                  </h6>
                                </div>
                                <div className="time-parameter">
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    DD
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    HH
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    MM
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    SS
                                  </span>
                                </div>
                              </div>
                              <a
                                href="tournaments-details.html"
                                className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8]"
                              >
                                View Tournament
                              </a>
                            </div>
                          )}
                        </div>
                        <div
                          className={`${
                            list
                              ? "jb-tournaments-single-item-list after:absolute after:h-[80%] after:w-[1px] after:border-[#293574] after:border-[1px] after:right-[37%] after:top-[10%]"
                              : "jb-tournaments-single-item-sm md:jb-tournaments-single-item"
                          } border-[#262975] border-[1px] rounded-[20px] mb-5 py-[30px] !px-5`}
                        >
                          <div className="grid justify-center content-area md:flex">
                            <img
                              src={tournamentsFames6}
                              className="mb-0"
                              alt="image"
                            />
                            <div
                              className={`${
                                list ? "mx-[30px]" : "mx-auto"
                              } grid-style grid items-center text-center`}
                            >
                              <h5 className="my-3 text-sm font-semibold text-center text-white uppercase head-area md:my-0 md:text-2xl font-chakra">
                                Slot of the Week
                              </h5>
                              <div className="prize d-flex justify-content-center bg-[#191951] py-[15px] px-5 rounded-[10px]">
                                <img
                                  className="mb-0"
                                  src={prizeIcon}
                                  alt="image"
                                />
                                <h5 className="text-[#ff8a14] text-2xl font-chakra ml-[5px]">
                                  €6,000
                                </h5>
                              </div>
                              <p className="my-3 text-base text-white uppercase bet font-chakra md:my-0">
                                Min.bet{" "}
                                <span className="text-[#ff8a14]">€0.20</span>
                              </p>
                              {!list && (
                                <>
                                  <a
                                    href="tournaments-details.html"
                                    className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8] mb-3 md:mb-0"
                                  >
                                    View Tournament
                                  </a>
                                  <p className="text-base text-white uppercase end-on font-chakra">
                                    Will end on:{" "}
                                    <span className="text-[#ff8a14]">
                                      08-07-2021
                                    </span>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                          {list && (
                            <div className="list-right grid items-center justify-center text-center bg-[#090944] rounded-[20px] !p-5">
                              <p className="text-sm text-white uppercase end-on font-chakra">
                                Will end on:{" "}
                                <span className="text-[#ff8a14]">
                                  08-07-2021
                                </span>
                              </p>
                              <div className="draw-counter">
                                <div
                                  className="date-area d-flex justify-content-center"
                                  data-countdown="2022/06/20"
                                >
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;{" "}
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00{" "}
                                  </h6>
                                </div>
                                <div className="time-parameter">
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    DD
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    HH
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    MM
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    SS
                                  </span>
                                </div>
                              </div>
                              <a
                                href="tournaments-details.html"
                                className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8]"
                              >
                                View Tournament
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                          <a className="jb-game-view-more-btn hover:bg-[#7400D3] hover:text-[#fff] hover:border-[#7400D3]">
                            View more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="thisweek"
                  role="tabpanel"
                  aria-labelledby="thisweek-tab"
                >
                  <div className="my-10 row">
                    <div className="col-lg-3">
                      <select>
                        <option>Upcoming</option>
                        <option>Upcoming 2</option>
                        <option>Upcoming 3</option>
                        <option>Upcoming 4</option>
                      </select>
                    </div>
                    <div className="col-lg-3">
                      <select>
                        <option>Select Team Size</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                    <div className="col-lg-3">
                      <select>
                        <option>Select Entry Fee</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                    <div className="col-lg-3 d-flex align-items-center justify-content-end">
                      <i className="fas fa-th grid-btn active"></i>
                      <i className="fas fa-list list-btn"></i>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="all-items">
                        <div
                          className={`${
                            list
                              ? "jb-tournaments-single-item-list after:absolute after:h-[80%] after:w-[1px] after:border-[#293574] after:border-[1px] after:right-[37%] after:top-[10%]"
                              : "jb-tournaments-single-item-sm md:jb-tournaments-single-item"
                          } border-[#262975] border-[1px] rounded-[20px] mb-5 py-[30px] !px-5`}
                        >
                          <div className="grid justify-center content-area md:flex">
                            <img
                              src={tournamentsFames6}
                              className="mb-0"
                              alt="image"
                            />
                            <div
                              className={`${
                                list ? "mx-[30px]" : "mx-auto"
                              } grid-style grid items-center text-center`}
                            >
                              <h5 className="my-3 text-sm font-semibold text-center text-white uppercase head-area md:my-0 md:text-2xl font-chakra">
                                Farewell June
                              </h5>
                              <div className="prize d-flex justify-content-center bg-[#191951] py-[15px] px-5 rounded-[10px]">
                                <img
                                  className="mb-0"
                                  src={prizeIcon}
                                  alt="image"
                                />
                                <h5 className="text-[#ff8a14] text-2xl font-chakra ml-[5px]">
                                  €6,000
                                </h5>
                              </div>
                              <p className="my-3 text-base text-white uppercase bet font-chakra md:my-0">
                                Min.bet{" "}
                                <span className="text-[#ff8a14]">€0.20</span>
                              </p>
                              {!list && (
                                <>
                                  <a
                                    href="tournaments-details.html"
                                    className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8] mb-3 md:mb-0"
                                  >
                                    View Tournament
                                  </a>
                                  <p className="text-base text-white uppercase end-on font-chakra">
                                    Will end on:{" "}
                                    <span className="text-[#ff8a14]">
                                      08-07-2021
                                    </span>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                          {list && (
                            <div className="list-right grid items-center justify-center text-center bg-[#090944] rounded-[20px] !p-5">
                              <p className="text-sm text-white uppercase end-on font-chakra">
                                Will end on:{" "}
                                <span className="text-[#ff8a14]">
                                  08-07-2021
                                </span>
                              </p>
                              <div className="draw-counter">
                                <div
                                  className="date-area d-flex justify-content-center"
                                  data-countdown="2022/06/20"
                                >
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;{" "}
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00{" "}
                                  </h6>
                                </div>
                                <div className="time-parameter">
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    DD
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    HH
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    MM
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    SS
                                  </span>
                                </div>
                              </div>
                              <a
                                href="tournaments-details.html"
                                className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8]"
                              >
                                View Tournament
                              </a>
                            </div>
                          )}
                        </div>
                        <div
                          className={`${
                            list
                              ? "jb-tournaments-single-item-list after:absolute after:h-[80%] after:w-[1px] after:border-[#293574] after:border-[1px] after:right-[37%] after:top-[10%]"
                              : "jb-tournaments-single-item-sm md:jb-tournaments-single-item"
                          } border-[#262975] border-[1px] rounded-[20px] mb-5 py-[30px] !px-5`}
                        >
                          <div className="grid justify-center content-area md:flex">
                            <img
                              src={tournamentsFames6}
                              className="mb-0"
                              alt="image"
                            />
                            <div
                              className={`${
                                list ? "mx-[30px]" : "mx-auto"
                              } grid-style grid items-center text-center`}
                            >
                              <h5 className="my-3 text-sm font-semibold text-center text-white uppercase head-area md:my-0 md:text-2xl font-chakra">
                                Drops & Wins
                              </h5>
                              <div className="prize d-flex justify-content-center bg-[#191951] py-[15px] px-5 rounded-[10px]">
                                <img
                                  className="mb-0"
                                  src={prizeIcon}
                                  alt="image"
                                />
                                <h5 className="text-[#ff8a14] text-2xl font-chakra ml-[5px]">
                                  €6,000
                                </h5>
                              </div>
                              <p className="my-3 text-base text-white uppercase bet font-chakra md:my-0">
                                Min.bet{" "}
                                <span className="text-[#ff8a14]">€0.20</span>
                              </p>
                              {!list && (
                                <>
                                  <a
                                    href="tournaments-details.html"
                                    className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8] mb-3 md:mb-0"
                                  >
                                    View Tournament
                                  </a>
                                  <p className="text-base text-white uppercase end-on font-chakra">
                                    Will end on:{" "}
                                    <span className="text-[#ff8a14]">
                                      08-07-2021
                                    </span>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                          {list && (
                            <div className="list-right grid items-center justify-center text-center bg-[#090944] rounded-[20px] !p-5">
                              <p className="text-sm text-white uppercase end-on font-chakra">
                                Will end on:{" "}
                                <span className="text-[#ff8a14]">
                                  08-07-2021
                                </span>
                              </p>
                              <div className="draw-counter">
                                <div
                                  className="date-area d-flex justify-content-center"
                                  data-countdown="2022/06/20"
                                >
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;{" "}
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00{" "}
                                  </h6>
                                </div>
                                <div className="time-parameter">
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    DD
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    HH
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    MM
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    SS
                                  </span>
                                </div>
                              </div>
                              <a
                                href="tournaments-details.html"
                                className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8]"
                              >
                                View Tournament
                              </a>
                            </div>
                          )}
                        </div>
                        <div
                          className={`${
                            list
                              ? "jb-tournaments-single-item-list after:absolute after:h-[80%] after:w-[1px] after:border-[#293574] after:border-[1px] after:right-[37%] after:top-[10%]"
                              : "jb-tournaments-single-item-sm md:jb-tournaments-single-item"
                          } border-[#262975] border-[1px] rounded-[20px] mb-5 py-[30px] !px-5`}
                        >
                          <div className="grid justify-center content-area md:flex">
                            <img
                              src={tournamentsFames6}
                              className="mb-0"
                              alt="image"
                            />
                            <div
                              className={`${
                                list ? "mx-[30px]" : "mx-auto"
                              } grid-style grid items-center text-center`}
                            >
                              <h5 className="my-3 text-sm font-semibold text-center text-white uppercase head-area md:my-0 md:text-2xl font-chakra">
                                Live Casino
                              </h5>
                              <div className="prize d-flex justify-content-center bg-[#191951] py-[15px] px-5 rounded-[10px]">
                                <img
                                  className="mb-0"
                                  src={prizeIcon}
                                  alt="image"
                                />
                                <h5 className="text-[#ff8a14] text-2xl font-chakra ml-[5px]">
                                  €6,000
                                </h5>
                              </div>
                              <p className="my-3 text-base text-white uppercase bet font-chakra md:my-0">
                                Min.bet{" "}
                                <span className="text-[#ff8a14]">€0.20</span>
                              </p>
                              {!list && (
                                <>
                                  <a
                                    href="tournaments-details.html"
                                    className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8] mb-3 md:mb-0"
                                  >
                                    View Tournament
                                  </a>
                                  <p className="text-base text-white uppercase end-on font-chakra">
                                    Will end on:{" "}
                                    <span className="text-[#ff8a14]">
                                      08-07-2021
                                    </span>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                          {list && (
                            <div className="list-right grid items-center justify-center text-center bg-[#090944] rounded-[20px] !p-5">
                              <p className="text-sm text-white uppercase end-on font-chakra">
                                Will end on:{" "}
                                <span className="text-[#ff8a14]">
                                  08-07-2021
                                </span>
                              </p>
                              <div className="draw-counter">
                                <div
                                  className="date-area d-flex justify-content-center"
                                  data-countdown="2022/06/20"
                                >
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;{" "}
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00{" "}
                                  </h6>
                                </div>
                                <div className="time-parameter">
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    DD
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    HH
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    MM
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    SS
                                  </span>
                                </div>
                              </div>
                              <a
                                href="tournaments-details.html"
                                className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8]"
                              >
                                View Tournament
                              </a>
                            </div>
                          )}
                        </div>
                        <div
                          className={`${
                            list
                              ? "jb-tournaments-single-item-list after:absolute after:h-[80%] after:w-[1px] after:border-[#293574] after:border-[1px] after:right-[37%] after:top-[10%]"
                              : "jb-tournaments-single-item-sm md:jb-tournaments-single-item"
                          } border-[#262975] border-[1px] rounded-[20px] mb-5 py-[30px] !px-5`}
                        >
                          <div className="grid justify-center content-area md:flex">
                            <img
                              src={tournamentsFames6}
                              className="mb-0"
                              alt="image"
                            />
                            <div
                              className={`${
                                list ? "mx-[30px]" : "mx-auto"
                              } grid-style grid items-center text-center`}
                            >
                              <h5 className="my-3 text-sm font-semibold text-center text-white uppercase head-area md:my-0 md:text-2xl font-chakra">
                                Monthly Race
                              </h5>
                              <div className="prize d-flex justify-content-center bg-[#191951] py-[15px] px-5 rounded-[10px]">
                                <img
                                  className="mb-0"
                                  src={prizeIcon}
                                  alt="image"
                                />
                                <h5 className="text-[#ff8a14] text-2xl font-chakra ml-[5px]">
                                  €6,000
                                </h5>
                              </div>
                              <p className="my-3 text-base text-white uppercase bet font-chakra md:my-0">
                                Min.bet{" "}
                                <span className="text-[#ff8a14]">€0.20</span>
                              </p>
                              {!list && (
                                <>
                                  <a
                                    href="tournaments-details.html"
                                    className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8] mb-3 md:mb-0"
                                  >
                                    View Tournament
                                  </a>
                                  <p className="text-base text-white uppercase end-on font-chakra">
                                    Will end on:{" "}
                                    <span className="text-[#ff8a14]">
                                      08-07-2021
                                    </span>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                          {list && (
                            <div className="list-right grid items-center justify-center text-center bg-[#090944] rounded-[20px] !p-5">
                              <p className="text-sm text-white uppercase end-on font-chakra">
                                Will end on:{" "}
                                <span className="text-[#ff8a14]">
                                  08-07-2021
                                </span>
                              </p>
                              <div className="draw-counter">
                                <div
                                  className="date-area d-flex justify-content-center"
                                  data-countdown="2022/06/20"
                                >
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;{" "}
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00{" "}
                                  </h6>
                                </div>
                                <div className="time-parameter">
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    DD
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    HH
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    MM
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    SS
                                  </span>
                                </div>
                              </div>
                              <a
                                href="tournaments-details.html"
                                className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8]"
                              >
                                View Tournament
                              </a>
                            </div>
                          )}
                        </div>
                        <div
                          className={`${
                            list
                              ? "jb-tournaments-single-item-list after:absolute after:h-[80%] after:w-[1px] after:border-[#293574] after:border-[1px] after:right-[37%] after:top-[10%]"
                              : "jb-tournaments-single-item-sm md:jb-tournaments-single-item"
                          } border-[#262975] border-[1px] rounded-[20px] mb-5 py-[30px] !px-5`}
                        >
                          <div className="grid justify-center content-area md:flex">
                            <img
                              className="mb-0"
                              src={tournamentsFames6}
                              alt="image"
                            />
                            <div
                              className={`${
                                list ? "mx-[30px]" : "mx-auto"
                              } grid-style grid items-center text-center`}
                            >
                              <h5 className="my-3 text-sm font-semibold text-center text-white uppercase head-area md:my-0 md:text-2xl font-chakra">
                                Top Provider
                              </h5>
                              <div className="prize d-flex justify-content-center bg-[#191951] py-[15px] px-5 rounded-[10px]">
                                <img
                                  className="mb-0"
                                  src={prizeIcon}
                                  alt="image"
                                />
                                <h5 className="text-[#ff8a14] text-2xl font-chakra ml-[5px]">
                                  €5,000
                                </h5>
                              </div>
                              <p className="my-3 text-base text-white uppercase bet font-chakra md:my-0">
                                Min.bet{" "}
                                <span className="text-[#ff8a14]">€0.20</span>
                              </p>
                              {!list && (
                                <>
                                  <a
                                    href="tournaments-details.html"
                                    className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8] mb-3 md:mb-0"
                                  >
                                    View Tournament
                                  </a>
                                  <p className="text-base text-white uppercase end-on font-chakra">
                                    Will end on:{" "}
                                    <span className="text-[#ff8a14]">
                                      08-07-2021
                                    </span>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                          {list && (
                            <div className="list-right grid items-center justify-center text-center bg-[#090944] rounded-[20px] !p-5">
                              <p className="text-sm text-white uppercase end-on font-chakra">
                                Will end on:{" "}
                                <span className="text-[#ff8a14]">
                                  08-07-2021
                                </span>
                              </p>
                              <div className="draw-counter">
                                <div
                                  className="date-area d-flex justify-content-center"
                                  data-countdown="2022/06/20"
                                >
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;{" "}
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00{" "}
                                  </h6>
                                </div>
                                <div className="time-parameter">
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    DD
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    HH
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    MM
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    SS
                                  </span>
                                </div>
                              </div>
                              <a
                                href="tournaments-details.html"
                                className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8]"
                              >
                                View Tournament
                              </a>
                            </div>
                          )}
                        </div>
                        <div
                          className={`${
                            list
                              ? "jb-tournaments-single-item-list after:absolute after:h-[80%] after:w-[1px] after:border-[#293574] after:border-[1px] after:right-[37%] after:top-[10%]"
                              : "jb-tournaments-single-item-sm md:jb-tournaments-single-item"
                          } border-[#262975] border-[1px] rounded-[20px] mb-5 py-[30px] !px-5`}
                        >
                          <div className="grid justify-center content-area md:flex">
                            <img
                              src={tournamentsFames6}
                              className="mb-0"
                              alt="image"
                            />
                            <div
                              className={`${
                                list ? "mx-[30px]" : "mx-auto"
                              } grid-style grid items-center text-center`}
                            >
                              <h5 className="my-3 text-sm font-semibold text-center text-white uppercase head-area md:my-0 md:text-2xl font-chakra">
                                Slot of the Week
                              </h5>
                              <div className="prize d-flex justify-content-center bg-[#191951] py-[15px] px-5 rounded-[10px]">
                                <img
                                  className="mb-0"
                                  src={prizeIcon}
                                  alt="image"
                                />
                                <h5 className="text-[#ff8a14] text-2xl font-chakra ml-[5px]">
                                  €6,000
                                </h5>
                              </div>
                              <p className="my-3 text-base text-white uppercase bet font-chakra md:my-0">
                                Min.bet{" "}
                                <span className="text-[#ff8a14]">€0.20</span>
                              </p>
                              {!list && (
                                <>
                                  <a
                                    href="tournaments-details.html"
                                    className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8] mb-3 md:mb-0"
                                  >
                                    View Tournament
                                  </a>
                                  <p className="text-base text-white uppercase end-on font-chakra">
                                    Will end on:{" "}
                                    <span className="text-[#ff8a14]">
                                      08-07-2021
                                    </span>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                          {list && (
                            <div className="list-right grid items-center justify-center text-center bg-[#090944] rounded-[20px] !p-5">
                              <p className="text-sm text-white uppercase end-on font-chakra">
                                Will end on:{" "}
                                <span className="text-[#ff8a14]">
                                  08-07-2021
                                </span>
                              </p>
                              <div className="draw-counter">
                                <div
                                  className="date-area d-flex justify-content-center"
                                  data-countdown="2022/06/20"
                                >
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;{" "}
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00 :&nbsp;
                                  </h6>
                                  <h6 className="text-lg font-semibold text-white font-chakra">
                                    {" "}
                                    00{" "}
                                  </h6>
                                </div>
                                <div className="time-parameter">
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    DD
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    HH
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    MM
                                  </span>
                                  <span className="text-[13px] text-[#ff9900] font-semibold mx-[4px]">
                                    SS
                                  </span>
                                </div>
                              </div>
                              <a
                                href="tournaments-details.html"
                                className="cmn-btn-second border-[1px] border-[#4450B8] text-white uppercase rounded-[25px] text-[13px] py-[8px] px-[15px] font-bold hover:bg-[#4450B8]"
                              >
                                View Tournament
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                          <a className="jb-game-view-more-btn hover:bg-[#7400D3] hover:text-[#fff] hover:border-[#7400D3]">
                            View more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </TournamentWrapper>
    </Layout>
  );
};

export default withLocation(Tournaments);

const TournamentWrapper = styled.div`
  && {
    margin: 0 auto;
  }
`;
