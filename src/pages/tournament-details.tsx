import React from "react";
import styled from "styled-components";
import SEO from "@components/common/seo";

import Layout from "@components/layout";

import withLocation from "@helpers/hoc/withLocation";
import bannerLeft from "@components/images/tour-left-banner.png";
import bannerRight from "@components/images/tour-right-banner.png";
import bannerRightIllu from "@components/images/tour-right-illu.png";
import prizeTrophy1 from "@components/images/prize-trophy-1.png";
import prizeTrophy2 from "@components/images/prize-trophy-2.png";
import prizeTrophy3 from "@components/images/prize-trophy-3.png";
import prizeIcon from "@components/images/prize-icon.png";
import tableImg1 from "@components/images/table-img-1.png";
import tableImg2 from "@components/images/table-img-2.png";
import tableImg3 from "@components/images/table-img-3.png";
import tableImg4 from "@components/images/table-img-4.png";
import tableImg5 from "@components/images/table-img-5.png";
import tableImg6 from "@components/images/table-img-6.png";
import tableImg7 from "@components/images/table-img-7.png";
import tableImg8 from "@components/images/table-img-8.png";
import tableImg9 from "@components/images/table-img-9.png";
import tableImg10 from "@components/images/table-img-10.png";
import featureIcon4 from "@components/images/feature-icon-4.png";
import featureIcon5 from "@components/images/feature-icon-5.png";
import featureIcon6 from "@components/images/feature-icon-6.png";
import { TournamentDetailsCarousel } from "@components/common/carousel";
import { tournamentDetailsCarousels } from "@helpers/const";

const TournamentDetails = () => {
  return (
    <Layout location={"/tournament-details"} showSideMenu={false}>
      <TournamentDetailsWrapper>
        <SEO
          title="Tournaments"
          description="Jwin7 is an established international cricket betting platform that also provides online casino games. It offers a wide range of services from its own Jwin7 casino to the latest 2022 Fifa world cup news."
        />
        <section
          id="banner-section"
          className="inner-banner games tournaments bg-unset"
        >
          <div className="banner-content d-flex align-items-center">
            <div className="container h-[480px]">
              <div className="">
                <img
                  src={bannerLeft}
                  className="absolute top-0 left-0 z-0 banner-left"
                  alt="image"
                />
                <img
                  src={bannerRight}
                  className="absolute top-0 right-0 z-0 banner-right"
                  alt="image"
                />
              </div>
              <div className="relative row d-flex justify-content-center z-1">
                <div className="col-lg-12">
                  <img
                    src={bannerRightIllu}
                    className="banner-right-illu absolute top-[200px] right-[5%] z-0"
                    alt="image"
                  />
                  <div className="text-area max-w-[1140px] m-auto pt-[8%]">
                    <h1 className="uppercase text-white text-[62px] leading-[91.2px] font-chakra">
                      Tournaments
                    </h1>
                    <div className="breadcrumb-area">
                      <nav aria-label="breadcrumb" className="bg-transparent">
                        <ol className="breadcrumb d-flex">
                          <li className="breadcrumb-item">
                            <a
                              href="index-2.html"
                              className="text-[24px] text-white"
                            >
                              Home
                            </a>
                          </li>
                          <li
                            className="breadcrumb-item active text-white text-[24px]"
                            aria-current="page"
                          >
                            Tournaments
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center wi-100 relative z-2 mx-[10%]">
                    <div className="text-center col-lg-10">
                      <div className="bottom-area bg-[#310E9E] rounded-[20px] pt-[40px] mb-[-250px] pb-[80px]">
                        <h5 className="font-chakra text-white text-[20px]">
                          TOURNAMENT
                        </h5>
                        <h3 className="uppercase text-white font-chakra mt-[20px] mb-[30px] text-[40px]">
                          Monthly Race
                        </h3>
                        <div className="prize-area pt-[15px] bg-[#370CBC] mb-[30px]">
                          <h6 className="font-[16px] leading-[18px] uppercase text-white font-chakra">
                            PRIZE POOL
                          </h6>
                          <div className="prize d-flex justify-content-center align-items-center">
                            <img
                              src={prizeIcon}
                              alt="image"
                              className="mt-[18px]"
                            />
                            <h5 className="text-[#ff8a14] uppercase font-chakra font-[700] ml-[5px] text-[25px]">
                              €6,000
                            </h5>
                          </div>
                        </div>
                        <div className="bet-details d-flex justify-content-between px-[15%]">
                          <div className="left">
                            <h6 className="font-[16px] leading-[18px] uppercase text-white font-chakra">
                              Minimum Bet
                            </h6>
                            <h5 className="text-[#ff8a14] uppercase font-chakra font-[700] ml-[5px] text-[25px]">
                              €0.20
                            </h5>
                          </div>
                          <div className="mid">
                            <h6 className="font-[16px] leading-[18px] uppercase text-white font-chakra">
                              Period from
                            </h6>
                            <h5 className="text-[#ff8a14] uppercase font-chakra font-[700] ml-[5px] text-[25px]">
                              28.06.2021{" "}
                              <span className="text-white uppercase font-chakra font-[700] text-[25px]">
                                to
                              </span>{" "}
                              05.07.2021
                            </h5>
                          </div>
                          <div className="left">
                            <h6 className="font-[16px] leading-[18px] uppercase text-white font-chakra">
                              Type
                            </h6>
                            <h5 className="text-[#ff8a14] uppercase font-chakra font-[700] ml-[5px] text-[25px]">
                              Bet
                            </h5>
                          </div>
                        </div>
                        <div className="draw-counter pt-[10px] pb-[20px] px-[60px] bg-[#370CBC] rounded-[20px] inline-block h-[60px] absolute left-0 right-0 mx-auto w-[360px] top-[390px]">
                          <div
                            className="date-area d-flex justify-content-center text-white font-chakra text-[20px]"
                            data-countdown="2022/06/20"
                          >
                            00 : 00 : 00 : 00
                          </div>
                          <div className="time-parameter">
                            <span className="font-bold uppercase font-chakra text-[13px] leading-[18px] text-[#ff8a14]">
                              DD
                            </span>
                            <span className="font-bold uppercase font-chakra text-[13px] leading-[18px] text-[#ff8a14]">
                              HH
                            </span>
                            <span className="font-bold uppercase font-chakra text-[13px] leading-[18px] text-[#ff8a14]">
                              MM
                            </span>
                            <span className="font-bold uppercase font-chakra text-[13px] leading-[18px] text-[#ff8a14]">
                              SS
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="tournament-section" className="pt-120 bg-jb-grey-1100">
          <div className="overlay pt-120 pb-120 py-[100px]">
            <div className="container max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-4 mx-auto w-full pt-[240px]">
              <div className="flex flex-wrap justify-between -mx-4 row justify-content-between mb-9">
                <div className="col-lg-8">
                  <div className="section-header -mt-[12px] mb-[20px]">
                    <h3 className="title jb-section-title mb-[10px] text-center sm:!text-left font-[500] text-[40px]">
                      TOP tournament games
                    </h3>
                  </div>
                </div>
              </div>
              <div className="tournament-carousel slick-initialized slick-slider">
                <div className="m-auto slick-list draggable">
                  <TournamentDetailsCarousel
                    tournamentDetailsCarousels={tournamentDetailsCarousels}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="tournaments-prize" className="bg-jb-grey-1400 h-[360px]">
          <div className="overlay pt-120 pb-120 max-w-[1140px] m-auto">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="section-header">
                    <h2 className="title uppercase font-chakra text-[50px] text-white text-center mt-[140px] mb-[30px]">
                      Tournaments{" "}
                      <span className="text-[#ff8a14] uppercase font-chakra">
                        Prize
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center wi-100 relative z-2 mx-[10%]">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="single-item text-center bg-[#310E9E] rounded-[20px] px-[40px] bg-[url('../images/prize-trophy-bg.png')] bg-[length:100%_100%] bg-no-repeat justify-center py-[24px]">
                    <img src={prizeTrophy1} alt="image" className="mx-auto" />
                    <h6 className="text-[#ff8a14] text-[18px]">1st place</h6>
                    <h4 className="text-white font-chakra text-[30px] font-[600] mt-[12px]">
                      € 100
                    </h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="single-item text-center bg-[#310E9E] rounded-[20px] px-[40px] bg-[url('../images/prize-trophy-bg.png')] bg-[length:100%_100%] bg-no-repeat justify-center py-[24px]">
                    <img src={prizeTrophy2} alt="image" className="mx-auto" />
                    <h6 className="text-[#ff8a14] text-[18px]">2nd place</h6>
                    <h4 className="text-white font-chakra text-[30px] font-[600] mt-[12px]">
                      € 90
                    </h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="single-item text-center bg-[#310E9E] rounded-[20px] px-[40px] bg-[url('../images/prize-trophy-bg.png')] bg-[length:100%_100%] bg-no-repeat justify-center py-[24px]">
                    <img src={prizeTrophy3} alt="image" className="mx-auto" />
                    <h6 className="text-[#ff8a14] text-[18px]">3rd place</h6>
                    <h4 className="text-white font-chakra text-[30px] font-[600] mt-[12px]">
                      € 80
                    </h4>
                  </div>
                </div>
                <div className="col-lg-12 d-flex justify-content-center">
                  <button
                    type="button"
                    className="cmn-btn cmn-btn-alt jb-btn-green rounded-[10px] mt-[60px]"
                    data-toggle="modal"
                    data-target="#seeAllPrizes"
                  >
                    See all prizes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="leaderboard-prize"
          className="bg-[url('../images/leaderboard-bg.png')] bg-[length:100%] bg-no-repeat bg-jb-grey-1100 h-[1200px]"
        >
          <div className="overlay pt-120 pb-120">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="text-center col-lg-8">
                  <div className="section-header mt-[360px]">
                    <h2 className="title title uppercase font-chakra text-[50px] text-white text-center mt-[140px] mb-[30px]">
                      Leaderboard
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row max-w-[1140px] m-auto">
                <div className="col-lg-12">
                  <div className="table-responsive">
                    <table className="table bg-[#310E9E] shadow-[0px_1px_0px_#261687] w-[99%]">
                      <thead>
                        <tr className="h-[50px]">
                          <th
                            className="text-[16px] leading-[18px] font-[700] text-center align-middle text-white"
                            scope="col"
                          >
                            No
                          </th>
                          <th
                            scope="col"
                            className="text-[16px] leading-[18px] font-[700] text-center align-middle text-white"
                          >
                            Player
                          </th>
                          <th
                            scope="col"
                            className="text-[16px] leading-[18px] font-[700] text-center align-middle text-white"
                          >
                            SCORE
                          </th>
                          <th
                            scope="col"
                            className="text-[16px] leading-[18px] font-[700] text-center align-middle text-white"
                          >
                            PRIZES
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th
                            scope="row"
                            className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white"
                          >
                            1
                          </th>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            <a className="font-[700] text-[13px] leading-[18px] row d-flex mx-0 justify-center h-[30px] pt-[8px]">
                              <img
                                src={tableImg1}
                                alt="image"
                                className="mr-[10px] w-[25px] h-[25px] p-0 mt-[-6px]"
                              />
                              Jim Moody
                            </a>
                          </td>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            24451934
                          </td>
                          <td className="jtext-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            € 100
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white"
                          >
                            2
                          </th>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            <a className="font-[700] text-[13px] leading-[18px] row d-flex mx-0 justify-center h-[30px] pt-[8px]">
                              <img
                                src={tableImg2}
                                alt="image"
                                className="mr-[10px] w-[25px] h-[25px] p-0 mt-[-6px]"
                              />
                              Jenny Wilson
                            </a>
                          </td>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            24451934
                          </td>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            € 90
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white"
                          >
                            3
                          </th>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            <a className="font-[700] text-[13px] leading-[18px] row d-flex mx-0 justify-center h-[30px] pt-[8px]">
                              <img
                                src={tableImg3}
                                alt="image"
                                className="mr-[10px] w-[25px] h-[25px] p-0 mt-[-6px]"
                              />
                              Jenny Wilson
                            </a>
                          </td>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            24451934
                          </td>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            € 80
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white"
                          >
                            4
                          </th>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            <a className="font-[700] text-[13px] leading-[18px] row d-flex mx-0 justify-center h-[30px] pt-[8px]">
                              <img
                                src={tableImg4}
                                alt="image"
                                className="mr-[10px] w-[25px] h-[25px] p-0 mt-[-6px]"
                              />
                              Jim Moody
                            </a>
                          </td>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            24451934
                          </td>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            € 70
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white"
                          >
                            5
                          </th>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            <a className="font-[700] text-[13px] leading-[18px] row d-flex mx-0 justify-center h-[30px] pt-[8px]">
                              <img
                                src={tableImg5}
                                alt="image"
                                className="mr-[10px] w-[25px] h-[25px] p-0 mt-[-6px]"
                              />
                              Jim Moody
                            </a>
                          </td>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            24451934
                          </td>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            € 60
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white"
                          >
                            6
                          </th>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            <a className="font-[700] text-[13px] leading-[18px] row d-flex mx-0 justify-center h-[30px] pt-[8px]">
                              <img
                                src={tableImg6}
                                alt="image"
                                className="mr-[10px] w-[25px] h-[25px] p-0 mt-[-6px]"
                              />
                              Jim Moody
                            </a>
                          </td>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            24451934
                          </td>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            € 50
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white"
                          >
                            7
                          </th>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            <a className="font-[700] text-[13px] leading-[18px] row d-flex mx-0 justify-center h-[30px] pt-[8px]">
                              <img
                                src={tableImg7}
                                alt="image"
                                className="mr-[10px] w-[25px] h-[25px] p-0 mt-[-6px]"
                              />
                              Jim Moody
                            </a>
                          </td>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            24451934
                          </td>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            € 40
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white"
                          >
                            8
                          </th>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            <a className="font-[700] text-[13px] leading-[18px] row d-flex mx-0 justify-center h-[30px] pt-[8px]">
                              <img
                                src={tableImg8}
                                alt="image"
                                className="mr-[10px] w-[25px] h-[25px] p-0 mt-[-6px]"
                              />
                              Jim Moody
                            </a>
                          </td>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            24451934
                          </td>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            € 30
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white"
                          >
                            9
                          </th>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            <a className="font-[700] text-[13px] leading-[18px] row d-flex mx-0 justify-center h-[30px] pt-[8px]">
                              <img
                                src={tableImg9}
                                alt="image"
                                className="mr-[10px] w-[25px] h-[25px] p-0 mt-[-6px]"
                              />
                              Jim Moody
                            </a>
                          </td>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            24451934
                          </td>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            € 20
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white"
                          >
                            10
                          </th>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            <a className="font-[700] text-[13px] leading-[18px] row d-flex mx-0 justify-center h-[30px] pt-[8px]">
                              <img
                                src={tableImg10}
                                alt="image"
                                className="mr-[10px] w-[25px] h-[25px] p-0 mt-[-6px]"
                              />
                              Jim Moody
                            </a>
                          </td>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            24451934
                          </td>
                          <td className="text-[13px] leading-[18px] font-[700] text-center align-middle text-white">
                            € 10
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-lg-12 d-flex justify-content-center ">
                  <a className="cmn-btn cmn-btn-alt jb-btn-green rounded-[10px] mt-[30px]">
                    Show all
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="feature-section"
          className="game-2 tourn-details bg-jb-grey-1100 pb-[100px]"
        >
          <div className="overlay pt-120 pb-120">
            <div className="container">
              <div className="row max-w-[1140px] m-auto">
                <div className="col-lg-4 col-md-6">
                  <div className="single-item d-flex p-[20px] bg-[#0D0D46] rounded-[10px]">
                    <div className="left-side">
                      <div className="img-area bg-[#141461] rounded-[50%] flex align-middle justify-center w-[80px] h-[80px] lg:mr-[10px] lg:w-[75px] lg:h-[75px]">
                        <img
                          src={featureIcon4}
                          alt="image"
                          className="h-[40px] w-[40px] mt-[22px]"
                        />
                      </div>
                    </div>
                    <div className="text-area ml-[12px]">
                      <h5 className="uppercase font-chakra text-[24px] text-white">
                        Legalness
                      </h5>
                      <p className="text-white mt-[12px] text-[16px]">
                        Only certified games from the best manufacturers are
                        waiting for you!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item d-flex p-[20px] bg-[#0D0D46] rounded-[10px]">
                    <div className="left-side">
                      <div className="img-area bg-[#141461] rounded-[50%] flex align-middle justify-center w-[80px] h-[80px] lg:mr-[10px] lg:w-[75px] lg:h-[75px]">
                        <img
                          src={featureIcon5}
                          alt="image"
                          className="h-[40px] w-[40px] mt-[22px]"
                        />
                      </div>
                    </div>
                    <div className="text-area ml-[12px]">
                      <h5 className="uppercase font-chakra text-[24px] text-white">
                        Safety
                      </h5>
                      <p className="text-white mt-[12px] text-[16px]">
                        Confirmed safety and absolutely fair game. You are
                        always protected!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item d-flex p-[20px] bg-[#0D0D46] rounded-[10px]">
                    <div className="left-side">
                      <div className="img-area bg-[#141461] rounded-[50%] flex align-middle justify-center w-[80px] h-[80px] lg:mr-[10px] lg:w-[75px] lg:h-[75px]">
                        <img
                          src={featureIcon6}
                          alt="image"
                          className="h-[40px] w-[40px] mt-[22px]"
                        />
                      </div>
                    </div>
                    <div className="text-area ml-[12px]">
                      <h5 className="uppercase font-chakra text-[24px] text-white">
                        Profitability
                      </h5>
                      <p className="text-white mt-[12px] text-[16px]">
                        Take advantage of our unique promotions! Take part in
                        the giveaways!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </TournamentDetailsWrapper>
    </Layout>
  );
};

export default withLocation(TournamentDetails);

const TournamentDetailsWrapper = styled.div`
  && {
    margin: 0 auto;
  }
`;
